// Real-browser journey check. Needs Playwright (not a project dependency):
//   npm start   (in one terminal)
//   node e2e/journey.mjs [http://localhost:8080]
import assert from 'node:assert/strict';
let chromium;try{({chromium}=await import('playwright'));}catch{({chromium}=await import('/opt/node-tools/node_modules/playwright/index.mjs'));}
const url=process.argv[2]||'http://localhost:8080/';
const browser=await chromium.launch(process.env.CHROMIUM?{executablePath:process.env.CHROMIUM}:{});
const page=await browser.newPage({viewport:{width:1280,height:900}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
const step=async(name,fn)=>{await fn();console.log('ok -',name);};
await page.goto(url);await page.evaluate(()=>localStorage.clear());await page.reload();
await step('climate lens shows modelled saving',async()=>{assert.match(await page.textContent('.lens'),/50\.4 kg CO₂-e/);});
await step('guided demo navigates the story',async()=>{await page.click('#tour-start');await page.waitForSelector('#tour:not([hidden])');await page.click('[data-tour=next]');await page.waitForFunction(()=>location.hash==='#twin');assert.match(await page.textContent('#tour'),/2\/6/);await page.keyboard.press('Escape');assert.equal(await page.isHidden('#tour'),true);});
await step('Expiry Twin opens on the most at-risk batch and the what-if slider updates',async()=>{assert.match(await page.textContent('main h2'),/FS-A/);await page.fill('#whatif','12');await page.dispatchEvent('#whatif','input');assert.match(await page.textContent('#twin-live'),/stored at 12 °C/);assert.match(await page.textContent('#twin-live'),/−|-\d/);});
await step('rescue ladder prefills a proposal',async()=>{await page.goto(url+'#overview');await page.click('.rescue:has-text("ST-B") [data-do=prefill]');await page.waitForFunction(()=>location.hash==='#actions');assert.equal(await page.inputValue('#decision-form [name=batchId]'),'ST-B');assert.equal(await page.inputValue('#decision-form [name=kg]'),'4');await page.click('#decision-form button');await page.waitForSelector('.approval-form');});
await step('approve and record an outcome',async()=>{await page.fill('.approval-form [name=reviewer]','Shift lead');await page.check('.approval-form [name=checked]');await page.click('.approval-form button.primary');await page.goto(url+'#outcomes');await page.fill('#outcome-form [name=kg]','4');await page.fill('#outcome-form [name=evidence]','Till receipt 001');await page.click('#outcome-form button');await page.waitForSelector('text=Till receipt 001');});
await step('impact report renders and downloads',async()=>{await page.goto(url+'#report');assert.match(await page.textContent('.report'),/Waste risk by category/);const [dl]=await Promise.all([page.waitForEvent('download'),page.click('[data-do=download-report]')]);assert.equal(dl.suggestedFilename(),'ShelfShift_Impact_Report.html');});
await step('text size control scales the interface',async()=>{await page.click('#text-size [data-size="1.25"]');assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue('--text-scale').trim()),'1.25');await page.click('#text-size [data-size="1.12"]');});
await step('no horizontal overflow on a phone',async()=>{await page.setViewportSize({width:390,height:844});for(const h of ['overview','about','inventory','twin','actions','report']){await page.goto(url+'#'+h);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,h);}});
assert.deepEqual(errors,[]);await browser.close();console.log('journey passed');
