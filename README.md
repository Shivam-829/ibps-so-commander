# IBPS SO AI Commander

A local-first React + TypeScript preparation dashboard for IBPS SO IT Officer Scale I.

## Run locally
1. Install Node.js 20 or newer.
2. Extract this folder.
3. Open a terminal in this folder and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually http://localhost:5173).

## Included in this first build
- Daily mission sequence based on the user's weekday study window.
- Syllabus topic map with completion tracking.
- Topic and mixed practice checks using a small original sample question bank.
- Performance-based flags: below 60% = repair; 85%+ = maintenance.
- Revision scheduling after a completed learning session or quiz.
- Practice history and basic score analytics.
- UKG WFM / SQL / API / JSON-XML / Dell Boomi career roadmap.
- Progress stored in browser localStorage; no account or backend required.

## Important limitations
- This is a functional first version, not a fully autonomous AI tutor. The adaptive rules are transparent and local; there is no external AI API integration yet.
- The included question bank is a tiny demonstration bank of original questions, not official IBPS previous-year questions.
- The topic taxonomy is a broad preparation map, not a verbatim official syllabus. Verify the next IBPS notification for exact eligibility, exam structure, section timings and syllabus before relying on it.
- The current practice check is untimed and is not a full-length IBPS mock.
- The date label and mission schedule are starter defaults; the dashboard should next be extended to account for Thursday office day, weekends, missed-session rescheduling and real exam dates.

## Suggested next build milestones
1. Import verified syllabus and PYQ bank from CSV/JSON with source metadata.
2. Add full-length timed tests and section timers matching the current notification.
3. Implement a proper adaptive scheduler with spaced repetition, missed-task load balancing, and weekly hour targets.
4. Add an optional AI tutor provider integration (API key configured by the user), with local fallback.
5. Add PWA installability, export/backup, and optional cloud sync.


## iPhone Home Screen / PWA
This project includes a web app manifest, app icons, and a service worker.
Deploy the Vite app to an HTTPS host, open its URL in Safari on iPhone, tap Share,
then choose Add to Home Screen. Progress remains in that browser's localStorage.
