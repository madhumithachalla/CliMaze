# Validation record

Build date: 4 October 2026.

- JavaScript syntax checks passed for app.js and core.js.
- 23 domain/data tests passed.
- One UI module smoke test rendered all eight screens with mocked browser globals; passed.
- Total: 24 tests passed; 0 failed.
- No dependency installation or framework build is required.
- Browser visual/interaction QA was unavailable in the build environment. The UI is responsive by CSS design but has not been visually certified across browsers.

Run `node --test tests/*.test.mjs` after changes. Tests use synthetic inputs and do not establish forecasting accuracy, food safety, actual environmental impact or production security.
