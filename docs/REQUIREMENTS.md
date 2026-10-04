# Requirements for the implemented MVP

## Product

Madhumitha's demand and stock planning for retail, hospitality and food production is coupled to Abhishek's batch-level temperature-history Expiry Twin. Planning is the end-to-end journey; freshness changes which inventory can fulfil each requirement.

## User workflow

1. Receive batches and observe temperature history.
2. Select business setting and product; set expected sales, ingredient use or production demand.
3. Estimate quality windows and identify holds.
4. Allocate stock that reaches the need-by time, earliest quality expiry first.
5. Count eligible carryover and confirmed next-horizon inbound to propose replenishment.
6. Compare transparent intervention scenarios, then propose a specific batch action.
7. Review and approve using current data.
8. Record actual observed stock disposition and an evidence reference.
9. Export outcomes and backup the workspace.

## Scope and priorities

Three product fixtures (strawberries, tomatoes, greens); three business settings; kilogram-based quantities; synthetic fixed model clock; editable planning inputs; browser-local state. Covers and output units can be converted into ingredient kilograms. This version does not model recipes as multi-ingredient bills of materials or coordinate multiple businesses automatically.

Planning allocates only current stock to today's requirement. Inbound affects tomorrow's requirement only. Incoming stock must not also exist as an inventory batch: remove its inbound record when receiving it. A future backend should make receiving an atomic operation.

All batch movement requires one approved decision and one outcome. A partial outcome closes that approval; remaining stock is available for replanning. Data-affecting changes increment a revision and invalidate all outstanding proposals/approvals. This conservative rule prevents silent use of outdated inputs.

## Data quality and release boundaries

The quality model requires coverage from receipt, no gap over 12 hours, and a reading within 6 hours of the model clock. Manual hold, reached date limit or ended estimated quality window blocks sell/use/donate/transfer proposals. Inspection and discard remain available for review. Releasing a manual hold does not bypass stale data or date-limit checks.

Temperature limits accepted by the input are -40 to 80 °C for technical validation only. They are not safe-storage recommendations. Product quality parameters are illustrative, and staff checks govern real release.

## Reporting

Recorded sales/use, donations, transfers and discards are distinct. A transfer is not automatically a consumed meal or avoided waste. Evidence text is a user-supplied reference, not an independently verified file. No unique beneficiaries, methane or CO2e totals are inferred.

## Persistence and exports

A versioned JSON object is stored under `climaze-workspace-v1`. Import validates schema and inventory consistency before replacing anything. Backups larger than 5 MB are rejected. Storage failures report an error. Corrupted stored data is retained for recovery and normal edits are blocked until deliberate reset or valid restore. Audit entries are capped at 1,000; export older history before that limit matters operationally.

## Acceptance and testing

Run `node --test tests/*.test.mjs`. Tests cover temperature effects, date caps and data holds, inventory conservation, replenishment, incoming-stock eligibility, demand baseline, recipe conversion, scenario conservation, approvals/outcomes, backup rejection and safe CSV formatting. UI smoke tests render all views with mocked browser globals; they do not replace real browser interaction or accessibility testing.
