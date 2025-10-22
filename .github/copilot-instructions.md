# Copilot / AI agent instructions for voice-interview

This file contains concise, actionable guidance to help an AI coding agent be productive in this repository.

Key ideas
- This is a Create React App site (React 17 + react-scripts 4). Dev server: `npm start`. Build: `npm run build` -> `build/` folder.
- Voice-driven navigation: core logic lives in `src/App.js` and the JSON phrase/URL mappings in `src/json/`.

Essential files to read first
- `src/App.js` — wiring for speech recognition, contexts (`LangContext`, `CourseContext`), localStorage keys (`lang`, `course`), and how redirects are computed.
- `src/components/Routing.js` — switches language-specific route sets (`src/components/en/Routeen.js` and `src/components/fr/Routefr.js`).
- `src/components/Nav.js` and the `src/components/Nav*` files — how the selected course determines which nav items are shown.
- `src/json/search/*.js` — arrays of phrases used by the speech matcher (e.g. `pagesreact`).
- `src/json/urls/*.js` — objects mapping phrase -> route path (e.g. `urlsreact` maps "arrow function" -> "/arrowfunc").

Project-specific conventions and patterns
- Voice mapping pattern: the app uses `react-speech-recognition` + `string-similarity.findBestMatch`.
  - `pages*` files are arrays of possible spoken phrases.
  - `urls*` files are objects whose keys are the same phrases and whose values are the route path.
  - To add a new voice command: add phrase(s) to the appropriate `pagesXXX` array and add a matching key in `urlsXXX` pointing to an existing route defined in `Routeen` / `Routefr`.
- Routing: the project uses `react-router-dom@5` (v5 API). Use `BrowserRouter`, `Redirect`, `Switch` and route components in the language-specific files — do NOT migrate code to v6-style routes unless you update `package.json` and tests.
- Contexts and localStorage: language and course are stored in localStorage under keys `lang` and `course`. Components read these contexts (`LangContext`, `CourseContext`) instead of direct prop drilling.

Behavioral notes an AI should follow when editing code
- Preserve the `pages`/`urls` mapping contract: pages is an array, urls is an object mapping exact phrase -> path. Mismatches will break the speech redirect flow.
- Keep `react-speech-recognition` usage intact: App passes a commands array with a wildcard `"*"` command which the callback resolves via `string-similarity`. Changing this requires adjusting the matching logic.
- When adding routes, update both language route files (`src/components/en/Routeen.js` and `src/components/fr/Routefr.js`) and the corresponding `urls*` mapping.
- For UI changes, prefer editing components under `src/components/*`. Nav composition is controlled by `src/components/Nav.js` switching on `CourseContext`.

Developer workflows and commands
- Start dev server (CRA): `npm start` (runs on localhost:3000 by default).
- Build for production: `npm run build` (output to `build/`). The repo already has a `build/` with produced assets.
- Run tests: `npm test` (react-scripts test/watch).
- Node engine: `node` should match `16.13.2` (declared in `package.json` `engines`).

Environment & testing tips
- Speech APIs are browser-dependent. Use Chrome for the best dev experience — the app calls `SpeechRecognition.browserSupportsSpeechRecognition()` and returns null when unsupported.
- Because voice recognition depends on the browser and microphone permissions, run end-to-end verification manually in a browser after changes that touch speech logic.

Examples
- Phrase -> route example (from repo):
  - `src/json/search/searchreact.js` includes the phrase `"arrow function"`.
  - `src/json/urls/urlsreact.js` maps `"arrow function"` -> `"/arrowfunc"`.
  - `/arrowfunc` is expected to be defined in the route files under `src/components/en/Routeen.js` and `src/components/fr/Routefr.js`.

Quick do/don't checklist for PRs
- Do: update both the `pages*` and `urls*` files when adding voice phrases.
- Do: update both language route files when adding routes.
- Don't: change routing API (v5 -> v6) without updating `package.json` and running tests.
- Don't: assume speech works in all browsers — add graceful fallbacks if you modify `App.js` to change behavior when speech isn't supported.

If something is unclear
- Ask for the preferred course (which `pages`/`urls` pair to modify) and whether the change should apply to EN, FR, or both route sets.

Thanks — please tell me which section you want expanded or if you want me to auto-edit/add an example phrase and route now.
