# Epics and feature split

All E01–E08 stories below are implemented in the local MVP. Ownership is a proposed work split for the team, not an accepted assignment. The code is organised into a shared domain module (`core.js`) and feature-specific rendering/form handlers in `app.js`.

| Epic | Proposed owners | User stories and acceptance | Implementation |
|---|---|---|---|
| E01 Batch inventory | Madhumitha + Vijayaraja | E01.1 Receive product batches with quantity, location and dates; reject duplicate IDs or reversed dates. E01.2 Search by batch/product/location. E01.3 Show original quantity less recorded outcomes. E01.4 Place/release a manual hold with an audit entry. | inventory, batchTable, batch-form, remaining |
| E02 Expiry Twin | Abhishek + Shyam | E02.1 Add chronological temperature observations without duplicate timestamps. E02.2 Integrate effective age and cap by date limit. E02.3 Block incomplete, stale or gapped history. E02.4 Show same-date batches with different estimates and disclose model assumptions. | twin, sensor-form, quality |
| E03 Demand forecasting | Madhumitha + Shyam | E03.1 Record one daily total per product and setting. E03.2 Average distinct observed days within seven completed days; absent data stays unknown. E03.3 Apply baseline to planning. E03.4 Convert output units or covers through ingredient quantity and yield. | forecast, sales-form, baseline, ingredientNeed |
| E04 Integrated stock plan | Shyam + Vijayaraja | E04.1 Select sector/product/horizon. E04.2 Allocate earliest eligible quality-expiry stock. E04.3 Exclude unsuitable carryover. E04.4 Add/remove confirmed inbound. E04.5 Calculate shortage, action-needed stock and replenishment with a buffer. | planner, plan, plan-form, inbound-form |
| E05 Intervention comparison | Abhishek + Madhumitha | E05.1 Compare ordinary receipt order with quality order. E05.2 Apply explicit markdown and uplift assumptions. E05.3 Bound transfer by capacity and collection horizon. E05.4 Show unsold/unallocated, transferred, held and revenue amounts separately. | actions, simulate, scenario-form |
| E06 Review and decisions | Madhumitha + Vijayaraja | E06.1 Propose sell/use/transfer/donate/inspect/discard against a batch. E06.2 Require destination for transfer/donation. E06.3 Require reviewer name and check attestation. E06.4 Reject stale approvals; allow cancelling proposals. | propose, approve, approval-form, revision |
| E07 Outcome ledger | Vijayaraja + Shyam | E07.1 Record one observed outcome against a current approved movement. E07.2 Require evidence text and bound quantity by approval and stock. E07.3 Close partial approvals and invalidate other approvals after a stock change. E07.4 Preserve decision and outcome history. | outcomes, recordOutcome, remaining |
| E08 Evidence and handover | Nithilan + Madhumitha | E08.1 Separate recorded activity from modelled scenarios. E08.2 Export formula-safe outcomes CSV. E08.3 Export/validate/restore full JSON. E08.4 Preserve audit history, idea credits and handover docs. E08.5 Guard reset with an explicit checkbox. | handover, validateState, csv, localStorage |

## Suggested execution split for the team

- Madhumitha: own the retail/hospitality/production journeys, confirm acceptance checks and present the combined product story.
- Abhishek: replace illustrative shelf-life parameters only after selecting and evaluating relevant evidence/data.
- Shyam: evaluate demand forecasts and allocation logic; retain simple baselines for comparison.
- Vijayaraja: own UI/integration improvements and future shared persistence; review his Rot Clock separately if the team later changes scope.
- Nithilan: check sources and claims, pilot measures, policy relevance and submission packaging.

## Production backlog — deliberately not claimed complete

| Gate | What is needed before live operational use |
|---|---|
| P01 Shared persistence | Authenticated server API, database migrations, transactional stock ledger, backups, concurrency/version checks, tenant isolation. |
| P02 Identity and permissions | Real staff sign-in and server-enforced viewer/operator/approver roles; typed names are not identity. |
| P03 Model validation | Product-specific labelled data, supplier limits, calibration, uncertainty intervals, out-of-sample evaluation and expert review. |
| P04 Live data | POS, bookings, production and sensor ingestion with timestamps, retries, duplicates, device mapping and monitoring. |
| P05 Partnerships | Recipient eligibility/capacity, transport and cold-chain capability, confirmed receipt and downstream outcome. |
| P06 Operational rollout | Security/accessibility/browser review, pilot agreements, incident handling, budgets and accountable staff. |
| P07 Impact measurement | Matched baseline periods, discard/stockout outcomes, costs and additional transport. Climate factors only with suitable evidence. |

## Definition of done for this package

The eight local epics work with synthetic or user-entered data, key domain invariants pass automated tests, code is dependency-free and documented, and the project can be served from `dist`. Browser visual QA is a remaining verification limitation in this environment; do not describe this as a production-tested application.
