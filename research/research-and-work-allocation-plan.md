# **Climaze Research and Work Allocation Plan**

**Preliminary research pack, recommended concept and accountable team plan**

Prepared for the Climaze team | Team lead: Madhumitha Challa | 21 September 2026

# **Decision and immediate direction**

Until the official challenge statement is supplied, the strongest provisional direction is a focused climate resilience product rather than a broad climate dashboard: an AI assisted local heat risk and action navigator for vulnerable people in Melbourne and Victoria. It can combine weather, place and user context to explain near term risk and recommend practical actions and nearby support. This direction is measurable, prototypeable and aligned with the team’s AI, IT and policy mix. It must be rechecked against the official track and judging criteria before the team locks scope.

# **Research synthesis**

The evidence supports solutions that combine adaptation and mitigation instead of treating them as separate goals. The IPCC describes climate resilient development as integrating both. Australian climate evidence reports increasing extreme heat, longer fire seasons, more intense heavy rainfall and rising coastal risk. Victoria has legislated emissions reductions of 45 to 50 per cent by 2030 and 75 to 80 per cent by 2035 below 2005 levels, with net zero by 2045\. A competitive concept should therefore solve a specific user problem, demonstrate a credible pathway to impact and avoid claiming that an app alone delivers emissions reduction.

| Topic | What the team should establish | Output |
| ----- | ----- | ----- |
| User problem | Who is exposed, what decision is difficult, and what happens without intervention | One evidence-backed problem statement and 2 personas |
| Climate evidence | Local hazard, exposure and vulnerability indicators | Short evidence table with source, geography and update frequency |
| Existing solutions | Direct and indirect alternatives; gaps in access, trust or actionability | Competitor matrix and defensible differentiation |
| Data feasibility | Open datasets, licences, missingness, spatial resolution and refresh rate | Data inventory and minimum viable schema |
| AI justification | Why AI is needed and what a simpler rule-based baseline can do | Baseline, model choice and evaluation plan |
| Equity and safety | Accessibility, language, privacy, false reassurance and digital exclusion | Risk register and safeguards |
| Impact | Behaviour or service outcome linked to a climate metric | Three measurable pilot indicators |
| Delivery | Prototype path, architecture, costs and dependencies | Clickable demo or working vertical slice |

# **Recommended minimum viable concept**

| Component | Minimum viable version | Evidence of success |
| ----- | ----- | ----- |
| User input | Suburb or postcode plus optional vulnerability and mobility preferences | User completes setup in under one minute |
| Risk signal | Transparent heat risk level from official weather and location inputs | Risk explanation shows inputs and timestamp |
| Action plan | Prioritised actions for now, today and this week | At least one safe, feasible action accepted by test users |
| Local support | Cooling locations, health advice and community services where verified | Every listing links to an authoritative source |
| AI layer | Plain-language personalisation and ranking, constrained to verified actions | No unsupported medical claims; responses pass scenario tests |
| Impact view | Track alerts viewed, actions selected and follow-through intent | Pilot dashboard reports defined metrics without personal profiling |

# **Madhumitha leadership work completed in this starter pack**

* Established the project workspace and competition control register.  
* Documented the missing official inputs so the team does not plan against invented rules.  
* Defined the provisional problem framing, product direction, MVP boundary and success evidence.  
* Built the cross-disciplinary allocation, dependencies, review gates and source standard.  
* Prepared the research baseline and a source list for the team to extend.

# **Work allocation**

| Owner | Accountable work | Required output | Handoff |
| ----- | ----- | ----- | ----- |
| Madhumitha | Lead scope, product requirements, architecture integration, schedule, source audit, final deck and pitch | Problem statement; MVP requirements; system diagram; consolidated deck; submission checklist | Receives all streams; accepts or returns work at each gate |
| Abhishek | Explore relevant datasets and build modelling baseline | Data profile; baseline notebook; features; metrics; limitations | Hands reproducible results to Vijay and Shyam |
| Vijay | Build data pipeline and prototype intelligence layer | Clean pipeline; API or service; demo flow; setup notes | Integrates baseline with Madhumitha’s product flow |
| Shyam | Review AI approach, evaluation, robustness and feasibility | Architecture review; test plan; model card; risk findings | Signs off claims before they enter pitch |
| Nithilan | Research policy, stakeholders, equity, comparable programs and adoption | Stakeholder map; policy fit; competitor scan; equity and governance notes | Supplies impact narrative and safeguards to Madhumitha |

# **Relative delivery plan**

Use relative gates until the official deadline is known. Day 0 is the day the brief is uploaded.

| Gate | Timing | Owner | Acceptance check |
| ----- | ----- | ----- | ----- |
| Brief lock | Day 0 plus 2 hours | Madhumitha and all | Rules, track, deliverables, scoring and deadlines verified |
| Problem lock | Day 0 end | Madhumitha and Nithilan | One user, one decision, one geography and one measurable outcome |
| Data feasibility | Day 1 midpoint | Abhishek and Vijay | Required fields accessible, licensed and usable in prototype |
| Technical review | Day 1 end | Shyam | Baseline, evaluation and failure modes documented |
| Vertical slice | Day 2 midpoint | Vijay with Abhishek | One complete user journey runs with representative data |
| Pitch evidence lock | Day 2 end | Madhumitha | Every factual claim has evidence or is labelled an estimate |
| Final rehearsal | Submission minus 4 hours | All | Timed pitch, demo fallback and Q and A ownership ready |
| Submission | Submission minus 1 hour | Madhumitha | Portal receipt and final files verified |

# **Team operating rules**

* One accountable owner per output; collaborators may help but ownership does not become shared or unclear.  
* Every research note must include a usable link, publisher, date and the specific claim it supports.  
* Use primary and government sources first. Mark assumptions, estimates and synthetic demo data plainly.  
* No model claim enters the pitch without a baseline, metric, test set description and limitation.  
* Keep the prototype narrow enough to demonstrate one end-to-end outcome.  
* Escalate blockers to Madhumitha as soon as they threaten a gate; do not wait for the next meeting.

# **Research priorities for the next cycle**

| Priority | Question | Lead |
| ----- | ----- | ----- |
| P0 | What exact problem statement, judging criteria and required deliverables does the official brief specify? | Madhumitha |
| P0 | Which official datasets can support the chosen geography at prototype speed? | Abhishek and Vijay |
| P0 | What harm could an incorrect risk recommendation cause, and what must remain rule-based? | Shyam |
| P1 | Which community groups and service providers must shape the product? | Nithilan |
| P1 | What is the smallest defensible impact metric the demo can show? | Madhumitha and Nithilan |
| P1 | What existing tools already solve parts of this problem? | Nithilan with all |

# **Source register**

| Publisher | Resource | Use | URL |
| ----- | ----- | ----- | ----- |
| IPCC | AR6 Synthesis Report and headline statements | Climate resilient development; integration of adaptation and mitigation | https\://www\.ipcc.ch/report/ar6/syr/ |
| CSIRO and Bureau of Meteorology | State of the Climate 2024 | Australian heat, rainfall, fire weather, marine and sea-level trends | https\://www\.csiro.au/en/research/environmental-impacts/climate-change/State-of-the-Climate |
| Victorian Government | Reducing Victoria’s emissions | Legislated interim emissions targets and net-zero pathway | https\://www\.climatechange.vic.gov.au/reducing-victorias-emissions |
| Australian Government DCCEEW | National Greenhouse Gas Inventory quarterly updates | Current national emissions context and sector tracking | https\://www\.dcceew.gov.au/climate-change/publications/national-greenhouse-gas-inventory-quarterly-updates |
| Australian Government DCCEEW | National Greenhouse Accounts Factors 2025 | Official default factors for estimating emissions | https\://www\.dcceew.gov.au/climate-change/publications/national-greenhouse-accounts-factors-2025 |

Source standard: list every source used in the final submission and connect each material claim to an in-text citation, footnote or slide note. Check publication dates and use the latest official version available at submission time.

# **Regional scope correction and immediate sprint**

The solution must be credible across Australia, New Zealand and Pacific Island contexts, while recognising that needs, infrastructure, data availability, food systems, languages and connectivity differ substantially. The EU is also within participant eligibility, but the advertised problem framing centres Australia, New Zealand and the Pacific Islands. CliMaze should not claim that one campus dataset represents the region.

Recommended concept direction: retain Zero Waste and Methane Reduction, but evolve CanteenCast into a configurable food-service decision system. The demo can show three operating profiles: a data-rich Australian or New Zealand campus café; a smaller hospitality or institutional kitchen with limited history; and a low-connectivity Pacific setting using offline-first entry, simpler baselines and locally configurable food categories. Pacific use cases must be co-designed rather than inferred from Australian assumptions.

Immediate work allocation:

\- Madhumitha: lead scope lock, regional product requirements, official-rule compliance, integrated documentation and pitch narrative.

\- Abhishek: define the minimum dataset, data-quality checks, chronological baseline and candidate forecasting models.

\- Vijay: design the prototype workflow, ingestion pipeline and manager-facing forecast/waste dashboard.

\- Shyam: review architecture, evaluation validity, uncertainty, leakage, drift, safety and claims that must not appear in the pitch.

\- Nithilan: research Australia–New Zealand–Pacific stakeholder differences, adoption pathways, equity, governance, food-rescue context and risks of imposing an Australia-first solution.

\- Everyone: enter first choice, second choice, deliverable, main risk and approval/objection in the decision workbook before scope lock.

Next evidence needed: official judging rubric and participant guide; a lawful sample food-service dataset; New Zealand and Pacific food-waste sources; low-connectivity design evidence; and potential pilot partners. Synthetic data may demonstrate the pipeline but must be labelled and cannot support claims of real waste or methane reduction.

Current event sources: [Junction Climate Hack-tion page](https://hackjunction.app/hackathons/climate-hack-tion) | [EU Delegation announcement](https://www.eeas.europa.eu/delegations/fiji/climate-hacktion-unites-students-build-climate-solutions-ahead-cop31_en)

