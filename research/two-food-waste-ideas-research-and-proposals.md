# Madhumitha

# CliMaze food waste proposal drafts

Madhumitha 

Retail hospitality and food production  
Climate Hack tion Build for 2035  
Research and proposal development • Oct 3, 2026

## **Purpose and recommendation**

This document presents two distinct proposals for the Zero Waste and Methane Reduction priority. Both connect retailers, hospitality venues and food producers, as agreed in the team discussion. Draft One develops the original CanteenCast concept into Surpliora, a provisional product name for coordinated demand and stock planning. Draft Two develops SurplusBridge, a provisional name for capacity-aware redistribution of surplus that already exists.

Our recommended first choice is Surpliora. It preserves the team’s preparation-planning work and makes prevention the central intervention. SurplusBridge is a credible alternative if usable demand history is unavailable or the team prefers a deterministic matching demonstration. These are alternative submissions to select between; the weekend scope should not combine every feature from both.

## **How the document is organised**

| Part | Content |
| :---- | :---- |
| Competition and evidence | Official agenda, judging weights and research basis |
| Draft One Surpliora | Problem, solution, prototype, evaluation, impact, pilot and pitch |
| Draft Two SurplusBridge | Problem, solution, prototype, evaluation, impact, pilot and pitch |
| Delivery and selection | Comparison, responsibilities and submission plan |
| References | Numbered citations with clickable source links |

## **Status of the proposals**

All workflows, pilot designs, targets and examples below are proposals. No prototype performance, business interview, partnership or measured environmental benefit is claimed. Research findings are distinguished from design assumptions. The names have undergone preliminary public web searches only; neither has trademark, company-name, domain or social-handle clearance. FoodFlow has been removed because existing food-sector products use it. \[16\]

The research combines the supplied Participant Guide, government and intergovernmental sources, one directly relevant peer-reviewed forecasting study, measurement guidance and a focused competitor review. Numbered citations identify the evidence. Publication dates and geographic limits matter: national or overseas figures are not local prototype results.

# **Competition agenda and research basis**

## **Build for 2035**

The guide asks teams to turn at least one stated COP31 priority into a practical solution that people, communities or institutions can test. A working proof of concept is preferred; a testable mockup is accepted. Our primary priority is Zero Waste and Methane Reduction. The guide frames its 2035 ambition in terms of slowing waste growth. That framing is not a requirement to promise that this prototype halves waste. \[1, sections 1 and 5\]

| Criterion | Weight | Evidence the drafts should provide |
| :---- | :---- | :---- |
| COP31 alignment | 30% | Explain the food waste pathway and local operating conditions |
| Build quality | 30% | Demonstrate and test one complete decision workflow |
| Creativity | 20% | Show a useful approach beyond a generic dashboard or listing |
| Presentation clarity | 20% | Name the user, decision, evidence and limits in plain language |

These are the official weights. Higher COP31 alignment breaks a tie. Each draft below maps its proposed evidence to the criteria; no invented jury score is used. \[1, section 10\]

## **Why connect the sectors**

UNEP estimates that 1.05 billion tonnes of food waste, including inedible parts, arose in 2022 across households, food service and retail. Food service accounted for 28% and retail 12% of this total. These figures support attention to both sectors, but do not include all upstream manufacturing losses. \[2\] Australia’s government cites approximately 7.6 million tonnes annually from a 2021 feasibility study and a target to halve food waste by 2030\. This is not a new 2026 measurement. \[3\]

The Food Loss and Waste Standard offers a common framework for inventory scope, material types and destinations across supply-chain actors. We should use those concepts to keep sector records comparable, without claiming formal conformity before assessment. \[4\]

## **Research conclusion**

Prevention and appropriate recovery are both relevant. EPA’s environmental hierarchy favours preventing waste and keeping edible food in human use; landfill disposal can generate methane. \[5\] The research does not establish that our proposed network is commercially novel or that either intervention will achieve a particular reduction. The strongest competition case is a bounded, testable workflow with a clear path to a locally evaluated pilot.

# **Draft One Surpliora**

Proposed product name: Surpliora by CliMaze  
Primary priority: Zero Waste and Methane Reduction  
One sentence summary: Surpliora helps food producers, retailers and hospitality venues coordinate demand, usable stock and approved orders to prevent avoidable food waste.

## **Problem and target users**

A café chooses preparation quantities, a retailer replenishes stock and a producer plans batches, often at different times and with different information. Our problem hypothesis is that changes in downstream demand can fail to reach upstream decisions before commitments are made. The resulting mismatch can create excess stock, while cutting orders too aggressively can cause shortages. This coordination hypothesis needs business interviews; it is not established by a national waste statistic.

The initial users are a café or restaurant manager, an independent food retailer and a small bakery or meal producer serving a shared neighbourhood. The prototype treats food production as identifiable batches with known units. It excludes agriculture, industrial process control and complex manufacturing optimisation. The manager at each business approves their own decisions.

## **Research supporting the approach**

Hübner and colleagues studied the Foodforecast service in German bakeries and reported an average 30% reduction in bakery returns in 2022 based on sales reports. Their life-cycle analysis also notes data uncertainty and implementation impacts. The study supports testing demand-led planning, but its reported outcome cannot be transferred to our three-sector network or represented as our result. \[6\]

## **Proposed solution**

Surpliora creates a shared planning cycle around a small set of products. Each business imports recent sales or demand, current usable stock and commitments. A transparent forecast informs the next order or production suggestion. When a manager approves a change, the revised commitment becomes visible to the relevant supplier. The system records what was actually sold, transferred, carried forward or discarded, so the next planning cycle uses observed outcomes.

The product should distinguish expected demand from confirmed orders. A forecast can inform a supplier without becoming a binding commitment. This distinction avoids presenting an uncertain model output as guaranteed sales and gives managers a clear reason to retain control.

## **Proposed value**

For retail, the value is ordering against actual stock and expected sales. For hospitality, it is choosing feasible preparation quantities. For producers, it is seeing customer changes before the next batch decision. The environmental pathway is reduced unnecessary production or ordering, followed by less food discarded. These are intended benefits to evaluate in a pilot, not promised outcomes.

# **Surpliora prototype and implementation**

## **One complete journey**

A manager uploads a CSV containing dates, products, sales, stock and commitments. The system flags missing dates, incompatible units and stockout periods. It generates next-service demand from a simple baseline and shows the assumptions. Managers review a stock-adjusted recommendation, approve or override it, and pass confirmed changes to the producer. At service close, they record outcomes and review surplus and shortages.

| Sector | Core decision | Prototype output |
| :---- | :---- | :---- |
| Retail | How many units should we reorder? | Demand less usable unreserved stock and incoming supply |
| Hospitality | How much should we prepare? | Preparation suggestion with an explicit buffer and human approval |
| Food producer | Which confirmed quantities should enter the next batch? | Consolidated orders with batch and capacity constraints |

## **Illustrative scenario**

A fictional café expects 40 bread units tomorrow rather than its usual 60\. A connected retailer has 15 eligible, unreserved units that the café can accept. After confirming that transfer, the café requests 25 new units. The producer sees the revised confirmed requirement. If the transfer fails, the system reopens the gap rather than silently assuming delivery. All quantities are invented demonstration inputs; the 20-unit order difference is not automatically 20 units of prevented waste.

## **Data and decision logic**

Minimum fields are business ID, sector, product ID, date, quantity unit, unit mass where known, sales, usable stock, incoming supply, reserved quantities, batch dates, discarded quantity and destination. Record transferred batches once at network level. Recipes require explicit ingredient-to-portion conversions; do not add kilograms of ingredients directly to counts of prepared meals.

Start with same-weekday historical demand or a moving average. A proposed order is the positive gap between expected demand plus the chosen buffer and usable available supply. Only stock expected to remain eligible at the time of use contributes. Minimum batches and production capacity may change the recommendation, and the interface should explain why.

## **Technical boundary**

Use a web interface, a small database or local dataset, deterministic stock calculations and one baseline forecast. Add a learned model only after a chronological test demonstrates useful performance. If the interval is only a scenario range, label it as such; do not call it a calibrated confidence interval. Live POS integrations, photo-based weighing, dynamic prices and automatic procurement are outside the minimum build.

# **Surpliora evaluation and impact**

## **Validation plan**

Use a lawful business dataset if available with permission to publish the necessary demonstration material. Otherwise use clearly labelled synthetic records and evaluate workflow behaviour. A synthetic test cannot establish real demand accuracy or realised waste reduction. No partner dataset has yet been verified for this proposal.

| Test | Measure or check | Interpretation |
| :---- | :---- | :---- |
| Forecast baseline | Mean absolute error on later dates | Whether the model predicts recorded demand better than the baseline |
| Operational simulation | Surplus and unmet demand under identical assumptions | Trade-off between excess and service levels |
| Workflow integrity | Approval, override, failed transfer and stock update tests | Whether the core decision is implemented consistently |
| Data quality | Stockouts, missing dates, negative values and unit conflicts | Whether unreliable inputs are visible or rejected |

Stockout-limited sales are not unrestricted demand. Mark such observations and explain their treatment. Test on later periods rather than random rows, and use only information available when the recommendation would have been made. Include a demand shock and a low-history business. Report observed results honestly even if the simple baseline wins.

## **Methane and food waste pathway**

The immediate output is a changed ordering or preparation decision. Reduced disposal must then be demonstrated against an appropriate baseline. Methane benefits depend on whether the food would otherwise have reached a methane-generating disposal pathway and on local treatment conditions. \[5\] Keep upstream production benefits separate from landfill methane and do not multiply kilograms by an unexplained universal factor.

For a pilot, track discarded kilograms per 100 units sold or per 100 meals, alongside absolute totals, shortages and sales. Compare equivalent trading periods and note menu or demand changes. Separate weighed quantities, manually estimated quantities, modelled effects and unknown destinations. A reduction caused solely by lower sales is not evidence of a better planning system.

## **Adoption and pilot proposal**

Recruit three consenting businesses for a proposed six-week pilot: two weeks documenting existing practice and four weeks using recommendations. This is a practical learning design, not a causal trial. Where feasible, add a comparable untreated product or site. Ask managers about order cut-off times, override reasons, data-entry effort and willingness to continue before proposing scale.

A trader association, campus or local council could coordinate onboarding, but no partnership is assumed. Test a subscription or sponsor-supported model only after estimating labour, hosting and integration costs. Staff should share only necessary product and order data; customer identities and confidential pricing do not belong in a public demo.

# **Surpliora competition case and pitch**

## **Evidence for the judging criteria**

| Criterion | How this draft responds |
| :---- | :---- |
| COP31 alignment 30% | Connect prevention to less disposal; identify local treatment limits and show a 2035 adoption pathway |
| Build quality 30% | Run import, forecast, approval, supplier update and outcome recording; show tests and a baseline |
| Creativity 20% | Demonstrate an approved demand change propagating across three business roles |
| Presentation clarity 20% | Follow one bread order through the network and distinguish demo evidence from future impact |

## **Existing alternatives and differentiation**

Winnow advertises kitchen waste measurement and forecasting, including its September 2026 Foresight announcement. \[7\] Too Good To Go offers retailer expiry management, discounting, consumer sales and donations. \[8\] Forecasting and surplus handling are therefore not original by themselves. Surpliora’s proposed distinction is simple coordination between small businesses, with explicit commitments and batch accounting. Whether that is a meaningful market gap remains to be tested.

## **Path towards 2035**

The weekend output is one working network scenario. During 2026–2027, a local pilot would test staff effort and disposal outcomes. During 2028–2030, expansion would depend on demonstrated value, data permissions and repeatable onboarding. Through 2035, the ambition is locally governed deployments with interoperable records, not a single model imposed on every region. These are proposed stages, not forecasts of growth or commitments.

## **Draft written pitch**

Surpliora helps food businesses plan together before excess becomes waste. A retailer, hospitality venue and producer each control their own decisions, but approved changes in demand and available stock become visible across their shared supply relationship. Our proposed demonstration follows one product from a demand forecast through an adjusted order to recorded sales and leftovers. The focus is on whether the decision works and can be checked. We will compare forecasting with a simple baseline and report surplus and shortages under stated assumptions. A later pilot would test actual disposal reductions and local climate benefits. Surpliora supports the Zero Waste and Methane Reduction priority by making prevention a practical daily business task.

## **Two minute demonstration plan**

0–20 seconds: show the manager’s problem and the three roles. 20–75 seconds: import the scenario, approve the revised order and show the producer update. 75–105 seconds: show outcomes, a baseline comparison and a failed-transfer test. 105–120 seconds: state what is validated, what remains assumed and the next pilot step. Show only functionality actually built.

# **Draft Two SurplusBridge**

Proposed product name: SurplusBridge by CliMaze  
Primary priority: Zero Waste and Methane Reduction  
One sentence summary: SurplusBridge helps local food networks allocate existing surplus to recipients with suitable capacity and collection windows, then record confirmed handovers.

## **Problem and target users**

A business may know it has surplus without knowing who can accept it, how much they can use or whether a collection is feasible. Our hypothesis is that a structured view of recipient constraints can reduce failed allocations and wasted coordination effort. A listing or reservation alone does not prove that food was collected, used or prevented from disposal.

The primary user is a redistribution coordinator working with retailers, hospitality venues and small producers. Donors supply batch information; recipient businesses or community organisations confirm capacity and acceptance. The initial demonstration covers one local area. It excludes a public consumer marketplace, automated payments and industrial by-product reuse.

## **Research supporting the approach**

Existing organisations demonstrate that redistribution is an established activity. OzHarvest rescues surplus food and delivers it to charities. \[9\] New Zealand’s Ministry for the Environment describes a food network that distributes bulk surplus from producers and wholesalers to food hubs, alongside local rescue organisations. \[10\] These examples establish relevant operating models, but not a missing software feature or a partnership with CliMaze.

The proposed question is narrower: can the team make capacity, eligibility, allocation and receipt visible in one testable workflow? The answer must come from prototype tests and interviews. EPA identifies donation and keeping edible food in human use as preferred pathways, supporting the intervention’s climate relevance without establishing its net local benefit. \[5\]

## **Proposed solution**

A donor records a batch and its collection window. Recipients state accepted categories, handling capabilities, quantities and time availability. Rules remove incompatible options before ranking feasible matches. A coordinator approves allocations, recipients accept them and capacity is reserved. Collection and receipt are recorded separately, including any rejected or unallocated quantity.

## **Proposed value**

Retailers can see whether near-expiry surplus has a feasible destination. Hospitality venues can coordinate suitable unserved surplus under approved handling procedures. Producers can split larger eligible batches among recipients with smaller capacities. The shared ledger supports accountability across these roles. Preventing the surplus remains preferable; this draft addresses surplus that has already arisen.

# **SurplusBridge prototype and implementation**

## **One complete journey**

The demonstration begins with a fictional retailer’s 20 kg tomato batch. A café can accept 8 kg and a community kitchen 12 kg within the specified window. A third recipient is excluded because its declared capacity or timing is unsuitable. The coordinator approves a split; both recipients accept; the ledger records actual received quantities. If one declines, that allocation is released for review. None of these sample organisations is a confirmed partner.

| Stage | Required information | System action |
| :---- | :---- | :---- |
| Batch entry | Product, quantity, date label, storage, allergens, window | Flag missing critical fields and require review |
| Recipient profile | Accepted food, capacity, times, handling capabilities | Filter incompatible options |
| Allocation | Eligible quantities and feasible windows | Reserve capacity and avoid duplicate commitments |
| Handover | Collected and received weight, time and status | Record receipt, discrepancy or rejection |

## **Matching logic**

Use deterministic eligibility checks followed by ranking. As a design choice, prioritise feasible receipt before the deadline and usable quantity, then compare travel burden. These are transparent preferences, not universal optimal weights. A recipient’s declining capacity must update outstanding allocations. If there is no valid match, display that result rather than force an unsafe recommendation.

A simple greedy allocation is a defensible baseline. A constrained optimiser can be compared on the same scenarios if time permits. A language model may assist with wording but must not determine whether food is safe or extend a labelled shelf life. Generative AI is not necessary for the core value of this proposal.

## **Minimum prototype**

Build donor and recipient forms, a small configurable directory, a ranked match view, accept or decline controls and a batch outcome ledger. Use a reproducible dataset with normal and failure scenarios. Real-time vehicle routing, consumer payments, photographic spoilage detection and automatic transfer approvals are excluded. Do not claim that a link to a rescue organisation constitutes a live integration.

## **Data and provenance**

Each batch needs one stable ID, quantity and unit, source, date label type, storage history or an explicit unknown state, pickup deadline, location and disposition. Every allocation references the batch and recipient, with reserved and received quantities. Synthetic records must be labelled throughout the interface and README. Real donor data requires permission, minimum necessary disclosure and removal of personal details from public files.

# **SurplusBridge evaluation and impact**

## **Validation plan**

| Scenario | Expected behaviour | Evidence |
| :---- | :---- | :---- |
| One batch and two eligible recipients | Split within both capacities | Allocation total never exceeds available batch |
| Recipient declines or fails to collect | Release or flag reservation for review | Visible state changes and unresolved balance |
| Missing safety information | Block automatic recommendation | Reason displayed and human review required |
| Simultaneous acceptance | Prevent duplicate commitment | No double allocation |
| No feasible recipient | Return no match | No invented destination or impact claim |

Compare capacity-aware allocation with a first-come-first-served baseline on the same synthetic scenarios. Report feasible kilograms allocated, confirmed receipt, deadline misses and incompatibilities blocked. These tests validate rules and system behaviour. They do not demonstrate food actually rescued or adoption by a real network.

## **Food safety boundary**

FSANZ distinguishes safety-related use-by labels from quality-related best-before labels; food must not be sold after its use-by date. \[11\] Donated food still needs safe handling and transport. \[12\] Preserve date labels and storage information. The prototype should flag uncertain eligibility and require authorised review, rather than infer safety from a photograph. Relevant local operators must approve real operating procedures.

## **Climate accounting**

Record listed, reserved, collected and received quantities separately. Count a network transfer once using its batch ID; do not sum both donor dispatch and recipient receipt as two rescues. Ask what would otherwise have happened to the food. If it was already destined for donation, a new software record does not create an additional climate benefit.

A pilot should follow recipient outcomes where feasible, including onward waste. A successful handover is not proof of consumption. Estimate net effects only when baseline destination, alternative treatment and added logistics can be supported. Avoid calling all transferred kilograms methane reduction. The underlying disposal mechanism is supported by EPA guidance, while the actual local benefit remains an empirical question. \[5\]

## **Adoption and pilot proposal**

Propose a small coordinator-led trial with consenting donors and recipients, beginning with their accepted product categories. Observe existing coordination before introducing the tool, then compare failed collections, received quantities and staff effort. Interview recipients about storage, staffing, culturally suitable foods and whether offered quantities are useful. Never treat their capacity as unlimited.

A network sponsor or coordinator could fund the service if it saves enough operational effort, but pricing and sustainability are unvalidated. This draft should support existing rescue services. It must not imply that OzHarvest, New Zealand Food Network or another named organisation has endorsed the project.

# **SurplusBridge competition case and pitch**

## **Evidence for the judging criteria**

| Criterion | How this draft responds |
| :---- | :---- |
| COP31 alignment 30% | Explain diversion from the actual baseline destination and local recipient constraints |
| Build quality 30% | Demonstrate a batch through matching, acceptance and receipt, including a failure case |
| Creativity 20% | Show recipient constraints, split allocations and traceable outcomes rather than listings alone |
| Presentation clarity 20% | Follow one surplus batch and explain why each recipient can or cannot accept it |

## **Existing alternatives and differentiation**

Too Good To Go already advertises surplus management and donation traceability, while established rescue networks coordinate food transfers. \[8–10\] SurplusBridge therefore cannot claim to invent redistribution. Its proposed distinction is a transparent local coordination workflow that makes recipient capacity and failed handovers visible. The team needs interviews to determine whether existing tools already meet that need.

## **Path towards 2035**

The first step is validating one local batch workflow. A subsequent pilot would test recipient benefit and staff effort. Expansion through 2030 should depend on repeatable operational value and local governance; progress towards 2035 should be reported through confirmed quantities and credible treatment baselines rather than arbitrary user-growth targets. The software cannot substitute for vehicles, refrigeration, staff or recovery facilities.

## **Draft written pitch**

SurplusBridge helps local food networks turn surplus listings into feasible, traceable handovers. Retailers, hospitality venues and producers enter batch information, while recipients state what they can safely accept and when. The proposed prototype filters unsuitable matches, divides a batch within capacity and records acceptance and receipt. It also shows when no feasible destination exists. Our demonstration will compare allocation behaviour against a simple baseline and test cancellations, missing information and duplicate claims. The intended contribution to Zero Waste and Methane Reduction is less avoidable disposal, subject to local handling requirements and verified outcomes. A later pilot would establish whether this workflow improves coordination and creates additional environmental benefit.

## **Two minute demonstration plan**

0–20 seconds: introduce a donor with surplus and a recipient with limited capacity. 20–75 seconds: create the batch, show excluded and eligible matches, then accept a split allocation. 75–105 seconds: show receipt, cancellation handling and ledger totals. 105–120 seconds: explain the baseline destination, limits of the simulation and the proposed pilot. Keep the story centred on an actual decision rather than a feature tour.

## **Decision condition**

Prefer this draft if the team can implement reliable constraints and state changes more convincingly than it can validate demand forecasting. The absence of historical sales makes it easier to prototype; it does not remove the need for real operational partners after the event.

# **Regional relevance and policy implementation**

## **A regional pathway with a local first demonstration**

The competition includes Australia, New Zealand and Pacific Island contexts, but the guide does not require every prototype to operate across all of them immediately. \[1\] Demonstrate one local scenario and explain which assumptions would change elsewhere. This is more defensible than labelling three identical dashboards as regional validation.

| Context | Research connection | Proposed adaptation |
| :---- | :---- | :---- |
| Australia | National food waste target and implementation context. \[3\] | Start with one local business network and consistent records |
| New Zealand | Government describes national food waste definitions and existing rescue structures. \[10\] | Check local definitions, rules and partner workflows before reuse |
| Pacific Island countries | SPREP supplies region-specific organics resources. \[13\] | Co-design country-specific foods, units, connectivity and available treatment pathways |

## **A practical policy contribution**

CliMaze can propose a voluntary pilot coordinated by a campus, trader association or public-sector partner. Participating businesses would agree on a limited dataset and a review process. Operators would retain control of commercial decisions and food handling. Aggregate findings could identify barriers such as order cut-off times, lack of recipient capacity or inconsistent waste measurement.

The policy output should be a short implementation brief: who participates, who pays for onboarding, what data is shared, what decisions change and how outcomes are assessed. It should distinguish an existing policy target from CliMaze’s suggested delivery mechanism. Neither draft should be described as a government-approved scheme or a compliance certification.

## **Measurement and privacy**

Use explicit material types, time periods and destinations, drawing on the FLW Standard’s accounting structure. \[4\] Record edible and associated inedible material separately where feasible, and exclude packaging from food mass. Do not add local-site results to national estimates or count the same transfer at multiple supply-chain stages.

Public repository files should contain only data that the team is authorised to publish. Synthetic demonstrations should not contain real customer information. In a later deployment, business-level access controls and a retention policy would be needed; in the hackathon, demonstrate the intended access boundary without claiming production security validation.

## **What remains unknown**

Neither concept has a confirmed pilot partner, validated local waste baseline, demonstrated market gap or verified emissions factor. These gaps should guide mentor questions and the first user interviews. They are not reasons to invent a reduction percentage. The strongest next evidence is a working decision, a transparent test and a credible person or organisation willing to evaluate the workflow.

# **Selection and weekend delivery**

## **Recommended selection**

Choose Surpliora if a usable baseline and stock-aware order cycle can be demonstrated today. It offers the clearest continuation of the team’s original idea and prevention focus. Choose SurplusBridge if demand history is unavailable and the team can better validate allocation and handover logic. These judgments concern this team’s delivery constraints, not official rankings.

| Comparison | Surpliora | SurplusBridge |
| :---- | :---- | :---- |
| Primary action | Prevent excess orders or production | Allocate existing surplus |
| Key evidence need | Demand and usable-stock records | Current capacity and eligibility records |
| Best proof | Approved change updates linked decisions | Accepted split reaches confirmed receipt |
| Main risk | Weak history and hidden stockouts | Unavailable recipients and failed collection |

## **Proposed owners for team agreement**

Madhumitha: scope, policy implementation, claim checking and submission integration. Nithilan: stakeholders, regional assumptions, research review and pilot governance. Abhishek: data validation and forecasting or matching baseline. Vijay: interface, application workflow and integration. Shyam: technical review, failure scenarios and demo reliability. These remain proposed allocations, not confirmed commitments. All members should review the final claims and share pitch preparation.

## **Submission requirements checked against the guide**

The guide requires project identity, selected priority, team nationality and roles, problem and users, solution and intended impact, a written pitch, a demo no longer than two minutes, public repository access and disclosure of external tools and material AI use. The repository must remain available through judging until winners are announced. \[1, section 9\]

Research and ideation before the event are allowed, but the submitted build must be created during the event; prebuilt project code, designs and assets are not allowed. Keep a truthful record of what was built and which tools, libraries, datasets and APIs were used. This research and drafting assistance should be included in the team’s AI disclosure, with actual implementation tools added later. \[1, section 8\]

## **Remaining schedule**

Saturday: select one draft, lock its data and complete the core journey; start the submission when it opens at 9 pm AEST. Sunday morning: run meaningful tests and fix failures. Sunday afternoon: finalise the written pitch and captioned demo, check public links and save the submission progressively. Aim for a 7 pm AEDT internal deadline, ahead of the official 9 pm AEDT deadline on Oct 4, 2026\. \[1, sections 4 and 9\]

The guide gives conflicting closing-ceremony times in sections 4 and 11\. Confirm that ceremony separately through official announcements; it does not change the consistently stated submission deadline.

# **References one**

Research accessed Oct 3, 2026\. Citations identify facts and external claims; proposed product choices and test plans are the team’s design recommendations. Links open the original sources.

[\[1\] Climate Hack tion organisers • Participant Guide • 2026](https://drive.google.com/file/d/1ZvuLS3__Pp0QXcs7g4_CpEBLjtQBoAxQ/view)

Supplied PDF checked directly. Sections 1 and 5 cover the agenda; 8 build and AI rules; 9 submission; 10 weights. The shared Drive copy is linked for team access.

[\[2\] United Nations Environment Programme • World squanders over 1 billion meals a day UN report • 27 March 2024](https://www.unep.org/news-and-stories/press-release/world-squanders-over-1-billion-meals-day-un-report)

2022 global estimate and sector shares; includes inedible parts. Use with the Food Waste Index scope, not as a manufacturing estimate.

[\[3\] DCCEEW • Reducing Australia food waste • Current page](https://www.dcceew.gov.au/environment/protection/waste/food-waste)

Australian national context, 2021 feasibility-study estimate and 2030 target. Not a local or 2026 measured baseline.

[\[4\] Food Loss and Waste Protocol • Food Loss and Waste Accounting and Reporting Standard • Version 1 2016](https://flwprotocol.org/flw-standard/)

Inventory scope, material types, destinations and supply-chain accounting. This proposal does not claim certified conformity.

[\[5\] United States Environmental Protection Agency • Wasted Food Scale • Updated 16 September 2026](https://www.epa.gov/sustainable-management-food/wasted-food-scale)

Prevention and management pathways, including landfill methane. Its US context is not an Australian emissions factor.

[\[6\] Hübner N Caspers J Coroamă V C and Finkbeiner M • Machine learning based demand forecasting against food waste • 2024](https://doi.org/10.1111/jiec.13528)

Full title: Life cycle environmental impacts and benefits of a bakery case study. Journal of Industrial Ecology 28, 1117–1131. Reported bakery returns and methodological limits.

[\[7\] Winnow • Official product website and Foresight announcement listing • September 2026](https://www.winnowsolutions.com/)

Advertised measurement and forecasting capabilities. Vendor descriptions establish feature overlap, not independent performance evidence.

[\[8\] Too Good To Go • Platform for food retailers • Current page](https://www.toogoodtogo.com/en-au/platform)

Advertised expiry, markdown, marketplace and donation functions. This targeted scan is not exhaustive.

# **References two**

[\[9\] OzHarvest • Official organisation website • Current page](https://www.ozharvest.org/)

Existing food rescue and charity delivery model. No partnership or endorsement is implied.

[\[10\] New Zealand Ministry for the Environment • Reducing food waste • Updated 24 November 2025](https://environment.govt.nz/what-government-is-doing/areas-of-work/waste/reducing-food-waste/)

Local measurement context and established rescue structures. Current operational details need confirmation with the relevant partner.

[\[11\] Food Standards Australia New Zealand • Use by and best before dates • Updated 25 February 2025](https://www.foodstandards.gov.au/consumer/labelling/dates)

Safety and quality date distinctions. Dates alone cannot establish suitability for a transfer.

[\[12\] Food Standards Australia New Zealand • Food delivery • Updated 30 September 2025](https://www.foodstandards.gov.au/business/food-safety/food-delivery)

Handling, temperature, transport and donation guidance. Real operations need applicable local procedures.

[\[13\] Secretariat of the Pacific Regional Environment Programme • Regional Organics Project • Current page](https://www.sprep.org/pacwaste-plus/regional-organics-project)

Pacific-specific capacity building and organics resources. Does not establish universal infrastructure or identical needs across countries.

[\[14\] CliMaze • COP31 Priority Decision Workbook • Team planning document](https://docs.google.com/document/d/1bxOeom9psFYu-eCJaD86Tmx2smy9snMWLRCfymEbo-g/edit) [CliMaze COP31 Priority Decision Workbook](https://docs.google.com/document/d/1bxOeom9psFYu-eCJaD86Tmx2smy9snMWLRCfymEbo-g/edit)

Internal context: café forecasting preference and expanded preparation workflow. Earlier review informs continuity, not independent external evidence.

[\[15\] CliMaze • Hackathon Idea Matrix • Team planning document](https://docs.google.com/document/d/1OvLPsaIh0rK6pxdzULwfsKxHezTEgvoP/edit)

Internal alternatives and initial prototype ideas. The user’s latest instruction broadens the intended scope to three operating sectors.

[\[16\] FoodFlow • Restaurant operations platform • Current page](https://foodflow.in/)

Confirms existing food-sector use of the discarded working name. Preliminary replacement-name searches do not establish trademark availability.

## **Evidence limits and attribution**

Internal materials \[14–15\] informed the starting direction. This document develops the two proposals with research and AI-assisted drafting; it does not attribute every new feature to an individual teammate. No team vote or acceptance is assumed. Before submitting, check that pitch wording matches what was actually built and that every numerical result is reproducible.