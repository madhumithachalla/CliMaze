# **Climaze COP31 Priority Decision Workbook**

**Evidence review, team input tabs and final selection method**

Prepared for the Climaze team | Team lead: Madhumitha Challa | Updated 22 September 2026

# **Purpose and recommended position**

This workbook converts the five COP31 priority areas into a transparent team decision. Vijay’s submitted analysis is preserved in his section. Current official and scholarly evidence is then used to test feasibility, climate relevance, data requirements and demonstration strength. The provisional recommendation is Zero Waste and Methane Reduction through an explainable university-café preparation planner with measured waste feedback. The team must still confirm the hackathon’s own rules, judging weights and required deliverables before locking the concept.

# **Decision required from every member**

* Read the evidence and Vijay’s submitted view.  
* Complete your named input section: first choice, second choice, reason, risk and contribution.  
* Score all five areas from 1 to 5 using the common criteria.  
* Add sources for any new factual claim. Use hyperlinks and a full reference entry.  
* Approve the final choice or record a reasoned objection before scope lock.

# **Fast recommendation**

| Rank | Priority | Provisional score | Reason |
| ----- | ----- | ----- | ----- |
| 1 | Zero Waste and Methane Reduction | 4.45 / 5 | Strong problem evidence, clear AI role, measurable operational outcome and feasible campus-scale demo. |
| 2 | Resilient Cities and Buildings | 3.75 / 5 | Visually strong and locally relevant, but building-level data and intervention validation are harder. |
| 3 | Electrification | 3.55 / 5 | Clear decision support, but trustworthy cost and tariff modelling requires many local assumptions. |
| 4 | Green Industrialization | 3.20 / 5 | High potential impact, but marketplace value depends on business participation and materials verification. |
| 5 | Awareness Across All Areas | 2.95 / 5 | Easy to prototype, but difficult to prove behaviour change or differentiate from existing education tools. |

# **Competition and COP31 context**

The five areas supplied by Vijay correspond to the incoming COP31 Presidency’s action priorities. COP31 will be held in Antalya, Türkiye, from 9 to 20 November 2026\. Australia will serve as President of Negotiations. Fiji and Tuvalu will host Pre-COP and leaders’ events from 5 to 8 October. Official Australian material describes COP31 as delivery-focused: turning Paris Agreement commitments into practical outcomes, accelerating clean energy, mobilising finance, growing the green economy and elevating Pacific priorities. \[1\]\[2\]

## **Five priority areas**

| Area | What it means for this competition | Evidence a strong entry should show |
| ----- | ----- | ----- |
| Electrification | Replace direct fossil-fuel use with electricity where it can be supplied increasingly from low-carbon sources. | Decision usefulness, cost and energy assumptions, emissions boundary, equity and grid context. |
| Zero Waste and Methane Reduction | Prevent waste first, recover unavoidable organics, and reduce methane from decomposition. | Measured baseline, prevention pathway, kilograms avoided, methane logic and operational adoption. |
| Resilient Cities and Buildings | Reduce exposure and vulnerability to heat and other hazards while improving building performance. | Hazard, exposure and vulnerability data; clear user; intervention evidence; uncertainty. |
| Green Industrialization | Decarbonise production and material flows while creating competitive low-emissions industries. | Verified material specifications, lifecycle boundary, buyer-seller incentives and logistics. |
| Awareness Across All Areas | Build public understanding, participation and capability through climate education and engagement. | Target behaviour, action pathway, accessibility, measured uptake and durable change. |

## **Current developments to understand**

* UNFCCC registration for COP31 is open for eligible delegations; the official conference page carries provisional agendas and participation rules. \[1\]  
* Australia’s negotiation priorities include clean energy, finance, green-economy growth and Pacific leadership, with First Nations voices and knowledge identified as part of the approach. \[2\]  
* Australia’s national food-waste target is to halve food waste by 2030\. Official figures estimate about 7.6 million tonnes annually, more than \$36.6 billion in cost, and roughly 3% of national greenhouse-gas emissions. \[3\]  
* The COP31 Presidency is framing 2026 around implementation. Team claims should therefore connect the prototype to a real decision, delivery partner and measurable outcome—not just awareness or visualisation.

# **Evidence review of all five options**

## **Electrification**

Vijay’s household appliance comparison idea has a direct user decision and fits the COP31 electrification priority. A trustworthy calculator, however, needs appliance efficiency, energy use, household behaviour, electricity and gas tariffs, installation costs, climate zone and the emissions intensity of electricity. The prototype should present ranges rather than a single savings number and disclose assumptions. A stronger differentiator would be a staged “replace now, at failure, or later” plan based on cost, emissions and renter constraints.

## **Zero Waste and Methane Reduction**

The café demand-forecasting idea has the best research-to-prototype pathway. Official Australian evidence establishes national scale and a 2030 target. Peer-reviewed work shows that machine-learning demand forecasting can reduce overproduction in real food-service settings, but benefits depend on usable operational data and adoption. A 2024 life-cycle case study reported an average 30% reduction in bakery returns while warning that data uncertainty and implementation support matter. Campus research also supports combining operational data with waste measurement. \[3\]\[6\]\[7\]

## **Resilient Cities and Buildings**

A heat-prioritisation dashboard can be visually impressive and socially valuable. The main weakness is causal overclaiming: indoor temperature or weather data alone cannot prove which retrofit will work or quantify energy savings. A defensible MVP should identify risk and inspection priority, not prescribe engineering upgrades without building fabric, occupancy and HVAC evidence.

## **Green Industrialization**

A materials exchange platform fits circular-economy principles, but matching is not a simple recommender problem. Material grade, contamination, quantity, timing, liability, transport distance and buyer specifications determine whether a match is usable. A narrow vertical—such as construction offcuts or event materials—would be more credible than a general marketplace.

## **Awareness Across All Areas**

An action-learning tool is easy to demonstrate but risks becoming a generic chatbot, quiz or points app. It would need a specific audience and behaviour, verified actions, follow-through measurement and evidence that the chosen mechanism changes practice. Awareness should be treated as an enabling layer inside another solution rather than the main product unless the competition strongly rewards education.

# **Madhumitha Challa input tab**

## **My independent recommendation**

My first choice is Zero Waste and Methane Reduction. I agree with Vijay on the priority area, but I would not submit a simple “predict tomorrow’s meals” tool. My proposed concept is CanteenCast: an explainable preparation decision system for university cafés that predicts item-level demand, recommends a safe preparation range, records actual sales and unsold food, and learns from the gap. It would show the manager why a recommendation changed—for example weekday, semester week, weather, events and recent sales—so the output can be checked rather than blindly followed.

## **Problem statement**

University cafés must decide how much food to prepare before demand is known. Overproduction creates avoidable food waste, cost and landfill-related methane; underproduction causes lost sales and poor service. Existing judgement can be improved by combining historical sales with contextual factors and a structured waste-measurement loop.

## **Proposed minimum viable product**

| Module | Prototype function | Evidence shown in demo |
| ----- | ----- | ----- |
| Forecast | Predict demand by item for the next service period using a transparent baseline plus one ML model. | MAE or WAPE on a chronological holdout; comparison with “same weekday last week”. |
| Decision range | Convert forecast uncertainty into low, expected and high preparation quantities. | Manager can choose risk tolerance and see expected surplus or shortage. |
| Waste log | Record prepared, sold, donated, repurposed and discarded quantities. | Daily kilograms and reason codes create a verifiable baseline. |
| Explanation | Display factors that influenced each recommendation. | Readable feature contributions and data freshness. |
| Impact view | Estimate avoided food waste and report operational metrics. | Clearly labels measured values, projections and assumptions separately. |

## **Why this is stronger than a generic food-waste app**

* It supports a real pre-production decision instead of only recording waste after it occurs.  
* It combines forecasting with human override and explanation, which improves operational trust.  
* It measures the full decision loop: prepared, sold, surplus pathway and discarded amount.  
* It can begin with a simple baseline and demonstrate whether AI genuinely adds value.  
* The same architecture can later transfer to hospitals, workplace canteens and event catering.

## **Critical limitations I will state openly**

* Without historical café data, the team can demonstrate the pipeline but cannot claim real waste reduction.  
* A short hackathon cannot validate long-term behaviour, emissions savings or staff adoption.  
* Synthetic data must be labelled and must never be presented as Monash operational data.  
* Food safety, donation and inventory rules remain operational constraints; the system does not override them.

# **Vijayaraja Vaikunth input tab**

Submitted 22 September 2026\. The following preserves Vijay’s analysis in structured form.

| Priority | Possible idea | Why choose it | Advantages | Limitations |
| ----- | ----- | ----- | ----- | ----- |
| Electrification | Help households compare switching from gas appliances to electric alternatives. | Clear replacement decision, costs and potential energy savings. | Clear climate link; cost comparisons; practical demo. | Needs accurate appliance, tariff and installation data; results vary by household. |
| Zero Waste and Methane Reduction | Predict food demand for university cafés and recommend preparation quantities. | Specific user group and clear link between prediction, decision and waste. | Manageable prototype; meaningful AI; measurable kilograms wasted. | Needs historical data; crowded solution space; actual reduction needs a longer trial. |
| Resilient Cities and Buildings | Help campus managers identify heatwave-risk buildings and prioritise cooling improvements. | Local adaptation problem with a strong visual demo. | Clear users; maps and analytics; comfort and energy benefits. | Building data may be unavailable; temperature alone cannot prove retrofit effects. |
| Green Industrialization | Match business leftover materials with businesses able to reuse them. | Practical material-reuse workflow. | Potential cost and waste savings; matching-system demo. | Needs material quality, quantity, transport and suitability data plus participation. |
| Awareness Across All Areas | Give students practical climate challenges and track completion. | Accessible to a mixed-skill team and straightforward to prototype. | Easy to demo and test; supports personalisation and engagement. | Can become a generic quiz or chatbot; awareness does not ensure action. |

Vijay’s preference: Zero Waste and Methane Reduction. Second choice: Resilient Cities and Buildings if suitable data can be accessed.

## **Vijay follow-up fields**

Preferred role in chosen concept:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Dataset or technical approach I can own:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Biggest risk I want the team to test:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Final approval or objection:  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

# **Shyam Rangasamy Sundaraj input tab**

Primary perspective requested: AI architecture, evaluation and risk review. Complete this section before the decision meeting.

| Prompt | Your response |
| ----- | ----- |
| First choice and one-sentence reason |  |
| Second choice and one-sentence reason |  |
| Score each priority from 1 to 5 | Electrification:     Zero Waste:     Resilient Cities:     Green Industry:     Awareness: |
| Evidence or source that changed your view |  |
| Main feasibility risk |  |
| What I can personally deliver |  |
| Condition for approving the final choice |  |

## **Questions to answer from your discipline**

☐ What baseline must the model beat?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ How will we prevent leakage and use a chronological test?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ What happens when confidence is low or data drift occurs?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ Which claims should be removed from the pitch?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

# **Abhishek Prabhu input tab**

Primary perspective requested: data exploration, baseline modelling and feature analysis. Complete this section before the decision meeting.

| Prompt | Your response |
| ----- | ----- |
| First choice and one-sentence reason |  |
| Second choice and one-sentence reason |  |
| Score each priority from 1 to 5 | Electrification:     Zero Waste:     Resilient Cities:     Green Industry:     Awareness: |
| Evidence or source that changed your view |  |
| Main feasibility risk |  |
| What I can personally deliver |  |
| Condition for approving the final choice |  |

## **Questions to answer from your discipline**

☐ Which fields are essential and which are optional?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ What data quality problems are most likely?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ Which simple and advanced models will be compared?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ How will results be reproduced by another team member?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

# **Nithilan input tab**

Primary perspective requested: policy, stakeholders, equity and adoption. Complete this section before the decision meeting.

| Prompt | Your response |
| ----- | ----- |
| First choice and one-sentence reason |  |
| Second choice and one-sentence reason |  |
| Score each priority from 1 to 5 | Electrification:     Zero Waste:     Resilient Cities:     Green Industry:     Awareness: |
| Evidence or source that changed your view |  |
| Main feasibility risk |  |
| What I can personally deliver |  |
| Condition for approving the final choice |  |

## **Questions to answer from your discipline**

☐ Who adopts, pays for and governs the solution?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ Which groups could be excluded or burdened?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ How does the concept align with COP31 implementation and Australian policy?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

☐ What partnership would make a pilot credible?  \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

# **Common decision scorecard**

Each person should score independently. Use 1 for weak, 3 for acceptable and 5 for strong. Do not change weights after seeing the result unless the whole team records the reason.

| Criterion | Weight | Test |
| ----- | ----- | ----- |
| Problem importance | 15% | Material climate or resilience outcome for a clearly defined user. |
| Competition alignment | 15% | Direct link to a priority and implementation-oriented COP31 context. |
| Data feasibility | 15% | Accessible, lawful, sufficiently granular and usable within event time. |
| Meaningful AI or technology | 15% | Technology improves the decision and beats a simpler baseline. |
| Prototype feasibility | 15% | One end-to-end journey can be demonstrated reliably. |
| Measurable impact | 15% | Baseline, operational outcome and climate linkage can be separated and measured. |
| Differentiation and adoption | 10% | Distinct value, credible user and plausible implementation partner. |

| Member | Electrification | Zero Waste | Resilient Cities | Green Industry | Awareness | Final choice |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
| Madhumitha |  |  |  |  |  | Zero Waste |
| Vijayaraja |  |  |  |  |  | Zero Waste |
| Shyam |  |  |  |  |  |  |
| Abhishek |  |  |  |  |  |  |
| Nithilan |  |  |  |  |  |  |

## **Scope lock checklist**

☐ Official competition rules and judging weights checked

☐ One user and one decision selected

☐ Data source and permission confirmed

☐ Baseline and evaluation metric defined

☐ Prototype journey fits available time

☐ Claims separated into measured, modelled and future

☐ Every factual claim has an in-text citation and full reference

☐ All members approve or objections are recorded

# **Terms the team must use correctly**

| Term | Working definition |
| ----- | ----- |
| COP | Conference of the Parties to the UN Framework Convention on Climate Change. |
| UNFCCC | United Nations Framework Convention on Climate Change and its secretariat/process. |
| NDC | A country’s nationally determined contribution under the Paris Agreement. |
| Mitigation | Action that reduces greenhouse-gas sources or increases removals. |
| Adaptation | Adjustment that reduces harm or uses opportunities arising from actual or expected climate impacts. |
| Climate resilience | Capacity to anticipate, absorb, recover and adapt while maintaining essential functions. |
| Electrification | Replacing direct fossil-fuel use with electricity in transport, buildings or industry; climate value depends on the electricity source and efficiency. |
| Food waste | Food intended for human consumption that is discarded across the supply chain. |
| Organic waste | Biodegradable material including food, garden organics, timber and biosolids; it is broader than food waste. |
| Methane | A potent greenhouse gas produced, among other sources, when organic material decomposes anaerobically. |
| CO2-e | Carbon dioxide equivalent; a common unit that converts greenhouse gases using their warming effect over a specified time horizon. |
| Waste hierarchy | Preference order that prioritises avoidance and reuse before recycling, recovery and disposal. |
| Circular economy | Designing out waste, circulating products and materials, and regenerating natural systems. |
| Demand forecast | Estimate of future demand for a defined item, location and time period. |
| Baseline model | Simple reference method a proposed model must outperform, such as last week’s same-day demand. |
| MAE | Mean absolute error: average absolute difference between prediction and actual value, in the original unit. |
| RMSE | Root mean squared error: penalises larger errors more strongly than MAE. |
| WAPE | Weighted absolute percentage error: total absolute error divided by total actual demand; unsuitable when the total actual value is zero. |
| Time-series split | Training on earlier periods and testing on later periods to avoid using future information. |
| Data leakage | Information unavailable at prediction time improperly enters training and inflates performance. |
| Explainability | Information that helps a user understand influential inputs, limits and uncertainty; not proof of causality. |
| Model drift | Performance change as demand patterns, menus, prices or behaviour change. |
| MVP | Minimum viable product: the smallest end-to-end product that tests the central value proposition. |
| Pilot | A limited real-world implementation designed to test feasibility, adoption and outcomes. |
| Additionality | Whether the claimed outcome would not have occurred without the intervention. |
| Greenwashing | Presenting environmental benefits more strongly or broadly than the evidence supports. |
| Scope 1, 2 and 3 | Direct emissions; purchased-energy emissions; and other value-chain emissions respectively. |
| Measured vs modelled impact | Measured impact uses observed data; modelled impact estimates an outcome using assumptions. They must be labelled separately. |

# **Sources and scholarly references**

**\[1\] UNFCCC COP31 conference page.** [https\://unfccc.int/cop31](https://unfccc.int/cop31) \- official dates, registration and agendas; accessed 22 September 2026

**\[2\] Australian Government COP31 Australia-Pacific.** [https\://www\.dcceew.gov.au/climate-change/international-climate-action/unfccc-cop/cop31](https://www.dcceew.gov.au/climate-change/international-climate-action/unfccc-cop/cop31) \- roles, delivery focus, Pacific partnership and current updates; accessed 22 September 2026

**\[3\] DCCEEW Reducing Australia’s food waste.** [https\://www\.dcceew.gov.au/environment/protection/waste/food-waste](https://www.dcceew.gov.au/environment/protection/waste/food-waste) \- Australian baseline, economic cost, emissions contribution and 2030 target; updated 19 December 2025

**\[4\] DCCEEW Recovering organic waste.** [https\://www\.dcceew.gov.au/environment/protection/waste/food-waste/recovering-organic-waste](https://www.dcceew.gov.au/environment/protection/waste/food-waste/recovering-organic-waste) \- organic-waste volumes and recovery pathways

**\[5\] UNEP Food Waste Index Report 2024\.** [https\://www\.unep.org/resources/publication/food-waste-index-report-2024](https://www.unep.org/resources/publication/food-waste-index-report-2024) \- global measurement and SDG 12.3 context

**\[6\] Hübner et al. Machine-learning-based demand forecasting against food waste.** [https\://doi.org/10.1111/jiec.13528](https://doi.org/10.1111/jiec.13528) \- peer-reviewed life-cycle case study; Journal of Industrial Ecology 28, 1117-1131, 2024

**\[7\] Turker et al. Reducing Food Waste in Campus Dining.** [https\://doi.org/10.3390/su17020379](https://doi.org/10.3390/su17020379) \- campus dining data and machine-learning analysis; Sustainability 17, 379, 2025

**\[8\] Rodrigues et al. Machine learning models for short-term demand forecasting in food catering services.** [https\://doi.org/10.1016/j.jclepro.2023.140183](https://doi.org/10.1016/j.jclepro.2023.140183) \- forecasting models for catering demand; Journal of Cleaner Production 435, 2024

**\[9\] Malefors et al. Testing interventions to reduce food waste in school catering.** [https\://doi.org/10.1016/j.resconrec.2021.106001](https://doi.org/10.1016/j.resconrec.2021.106001) \- field evidence on forecasting and waste-tracking interventions; Resources Conservation and Recycling, 2022

**\[10\] Australian Government household electrification guide.** [https\://www\.energy.gov.au/households/electrification](https://www.energy.gov.au/households/electrification) \- household electrification context supplied by Vijay

**\[11\] NSW Government urban heat guidance.** [https\://www\.climatechange.environment.nsw.gov.au/impacts-climate-change/built-environment/urban-heat](https://www.climatechange.environment.nsw.gov.au/impacts-climate-change/built-environment/urban-heat) \- urban heat context supplied by Vijay

**\[12\] Australian Government Your Home passive cooling.** [https\://www\.yourhome.gov.au/passive-design/passive-cooling](https://www.yourhome.gov.au/passive-design/passive-cooling) \- passive cooling principles supplied by Vijay

**\[13\] CSIRO circular economy research.** [https\://www\.csiro.au/en/research/natural-environment/circular-economy](https://www.csiro.au/en/research/natural-environment/circular-economy) \- circular-economy and industrial material-flow context supplied by Vijay

**\[14\] Climate Change in Australia learning support.** [https\://www\.climatechangeinaustralia.gov.au/en/learning-support/](https://www.climatechangeinaustralia.gov.au/en/learning-support/) \- official learning resources supplied by Vijay

Citation rule for the final submission: every number, legal or policy statement, technical performance claim and claimed environmental outcome must have a linked in-text citation or slide note. Do not cite this workbook as the original source; cite the underlying publication.

# **Madhumitha regional concept refinement**

My recommendation remains Zero Waste and Methane Reduction, but the final concept must be regional rather than framed only around an Australian university café. I propose a configurable, offline-capable food-service planning and waste-measurement tool that supports different operating environments across Australia, New Zealand and Pacific Island countries.

The common decision is consistent: how much of each food item should be prepared when demand is uncertain, and what should happen to verified surplus. The implementation should vary by context. Data-rich sites can use item-level time-series forecasts and contextual variables. Sites with sparse history should begin with transparent moving averages, manual reason codes and uncertainty ranges. Low-connectivity settings should support local storage, delayed synchronisation and locally defined foods, units and surplus pathways.

The climate claim must remain disciplined. The prototype can measure prepared, sold, redistributed and discarded quantities; compare forecasting methods; and model potential avoided waste under stated assumptions. It cannot claim verified methane reduction without a real pilot, a credible counterfactual and information about the local waste-treatment pathway.

Regional design principles:

\- Do not treat “the Pacific” as one market or one food system.

\- Engage local organisations and users before choosing categories, incentives or redistribution workflows.

\- Minimise data collection and avoid requiring continuous internet access.

\- Separate measured food quantities from modelled emissions estimates.

\- Make the non-AI baseline usable so the product still creates value where data is limited.

Competition alignment source: [official Climate Hack-tion event page](https://hackjunction.app/hackathons/climate-hack-tion)

