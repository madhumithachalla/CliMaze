# Validation record

Build date: 4 October 2026 (climate lens update).

- `node --test tests/*.test.mjs`: 40 tests passed, 0 failed.
  - 31 domain/data tests in `tests/core.test.mjs`, including what-if temperature, freshness curve, at-risk scenarios, CO₂-e conversion, rescue-ladder routing and backup migration.
  - 9 UI module tests in `tests/ui-smoke.test.mjs`: all eight screens render without `NaN`/`undefined`; climate lens and rescue ladder render; prefill reaches the proposal form; the lowest-risk scenario is highlighted; the what-if slider updates the twin; the guided demo steps through and closes.
- `node e2e/journey.mjs` (real Chromium via Playwright against `npm start`): climate lens value, guided demo, Expiry Twin slider, rescue-ladder prefill → propose → approve → record outcome, and no horizontal overflow at 390 px. Passed with no page errors.
- No dependency installation or build step is required to run the app or the unit tests.

Tests use synthetic inputs. They do not establish forecasting accuracy, food safety, actual environmental impact or production security.
