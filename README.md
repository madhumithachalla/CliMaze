# CliMaze Food Planner

Runnable hackathon MVP combining Madhumitha Challa's food-business demand and stock planning with Abhishek's temperature-history Expiry Twin. The app covers retail, hospitality and food production workflows.

## Run locally

Requirements: Python 3 for the simple static server; Node.js 20+ for tests. No npm dependencies, API key or build step is required.

```bash
python3 -m http.server 8080 --directory dist
```

Open http://localhost:8080. On Windows, `py -m http.server 8080 --directory dist` is an alternative. Do not double-click index.html: browser ES modules should be served over HTTP.

```bash
node --test tests/*.test.mjs
```

You can also run `npm start` and `npm test`. `npm install` is not required.

## Included

- Eight working screens, including overview and project handover.
- Inventory receipts, manual holds and timestamped temperature readings.
- Illustrative quality model with history completeness gates and date-limit caps.
- Seven-day observed-day demand baseline, manual forecasts, recipe/yield conversion.
- Batch allocation, carryover, inbound stock and replenishment planning.
- Rotation, markdown and transfer scenario comparisons.
- Proposals, explicit review, stale-input guards and outcome ledger.
- Browser-local persistence, JSON backup/restore, CSV export and audit history.
- Tests, requirements, feature ownership split, data model, acceptance checks and demo script.

## Where to start

1. Open Overview and inspect the two strawberry batches.
2. Open Demand forecast, choose a business setting, and apply history or a recipe conversion.
3. Open Stock planner and set requirements, product and need-by horizon.
4. Compare interventions under Actions & approvals; propose and approve a specific action.
5. Record its actual observed quantity under Outcomes & evidence.
6. Export workspace JSON under Project & backup to preserve your records.

## Data and verification boundaries

This version is a complete local demonstration, not a production retailer service. Its synthetic starting model clock is 4 October 2026, 06:00 UTC. It does not run a real-time sensor feed. Browser-local data is not shared across devices or team members. The hosted page's access control is separate from app records; typed reviewer names are not authenticated roles.

Q10 parameters and product quality windows are illustrative and unvalidated. Demand is a transparent average or user input, not trained ML. Transfer outcomes are not automatically counted as food consumed or waste prevented. No emissions credit is calculated. Production gates are listed in docs/EPICS.md.

## File map

- `dist/index.html`: app shell and module entry.
- `dist/styles.css`: responsive design.
- `dist/core.js`: pure calculations, state validation and decision safeguards.
- `dist/app.js`: screens, form handling, browser storage, imports/exports.
- `dist/PROJECT.md`: downloadable in-app handover.
- `tests/core.test.mjs`: domain and data integrity tests.
- `tests/ui-smoke.test.mjs`: module rendering smoke checks.
- `docs/EPICS.md`: epic and user-story split with suggested owners.
- `docs/REQUIREMENTS.md`: requirements for this exact implementation.
- `docs/ARCHITECTURE.md`: data contract, calculations and update flow.
- `docs/DEMO.md`: reproducible presentation walkthrough.
- `docs/IDEAS.md`: idea provenance including Vijay's separate Rot Clock.
- `.openai/hosting.json`: existing Site identity; do not reuse it to create a different hosted project.

Keep the folder intact when handing it to another developer. Source control does not contain browser-local operational records; export JSON separately.
