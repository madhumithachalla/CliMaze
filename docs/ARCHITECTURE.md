# Architecture and data contract

## Runtime

Static HTML/CSS and native ES modules. No framework build or server API. `core.js` contains calculation and validation functions. `app.js` renders the views, handles forms and uses localStorage. Commands are applied to a structured clone, validated, persisted, then published to the UI. A failed calculation/validation/save leaves the previous in-memory state unchanged.

## State version 1

| Collection | Fields |
|---|---|
| root | version, asOf (model clock ISO timestamp), revision (input version), settings, arrays below |
| batches | id, product enum, original quantity kg, received ISO, limit ISO, location, hold boolean, sensors[] |
| sensors | at ISO, temperature °C |
| sales | id, date YYYY-MM-DD, product, sector, kg (daily total) |
| inbound | id, product, kg, arrival ISO, limit ISO, confirmed |
| settings | sector, product, today kg, tomorrow kg, needIn hours, buffer kg, price A$/kg, markdown %, uplift %, capacity kg, travel h, destination |
| decisions | id, batchId, action, kg, destination, reviewer, note, status, revision, actual-entry at timestamp, input snapshot |
| outcomes | id, decisionId, batchId, action, kg, evidence, actual-entry at timestamp |
| audit | id, at (actual-entry timestamp), action, detail |

Model clock and audit timestamps are different by design. Date-only sales history uses the UTC date of the model timestamp. Datetime inputs are displayed in the browser's local timezone and stored as ISO UTC.

## Equations

- Effective age = sum over piecewise-constant temperature segments of duration hours × 2^((temperature − reference temperature)/10).
- Remaining quality hours = max(0, min(starting life − effective age, date-limit hours remaining)). Future conditions are assumed to stay at reference temperature.
- Starting life / reference: strawberries 96 h / 4 °C; tomatoes 120 h / 8 °C; greens 72 h / 4 °C. These are demonstration parameters, not scientific or safety claims.
- Batch remaining = original quantity − sum of all recorded movements for that batch.
- Allocation: sort by remaining quality hours; allocate only non-held batches reaching today's needIn timestamp.
- Carryover: remaining after today's allocation, only when the batch reaches 24 + needIn hours.
- Replenishment = max(0, tomorrow forecast + buffer − eligible carryover − eligible confirmed inbound).
- Recipe requirement = output units × ingredient kg per unit ÷ (yield percent / 100).
- Forecast baseline = total observations / number of distinct observed dates among seven complete days. Missing dates are not zeros.

## Scenario engine

The scenario engine distributes today's demand across 24 hourly buckets, unlike the planner's single need-by event. Ordinary rotation uses receipt order; use-first uses quality order. Markdown multiplies demand by an explicit uplift assumption and reduces the unit price. Transfer allocates leftovers after the 24-hour period only if quality remains through 24 + collection/travel hours. Capacity limits the amount. Held quantities are separate; none of these scenarios writes inventory.

## Validation and concurrency

Backups are untrusted input. The validator checks version, bounded arrays, types/enums, unique batch IDs, temperature timestamp uniqueness, date ordering, parent references, outcome/decision consistency and aggregate quantity bounds. UI text is escaped before insertion. CSV cells beginning with spreadsheet formula characters are prefixed with an apostrophe.

The revision guard is local and conservative, not a distributed transaction. This MVP is single-browser, single-user. Two simultaneously open tabs can overwrite each other's localStorage state; use one active tab and export backups. A production server must replace this with atomic versioned writes and real authorization.

## Future backend boundary

Pure functions can move behind API endpoints: receiveBatch, appendReading, computePlan, proposeDecision, approveDecision and recordOutcome. Keep server-authoritative batch balances and approvals. Add database transactions, role enforcement, history retention and validated sensor/model services before treating this as live operations.
