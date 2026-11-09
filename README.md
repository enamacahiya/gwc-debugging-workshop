# Debugging A Web Application

Workshop Context: Students simulate as software engineering intern at Tech Mart, a fake online store. After teammate's deployment to production, customers reported **incorrect cart totals** and **failed checkouts**. You have to investigate and restore the platform.

## What you'll practice

- Reproducing a reported bug and recording evidence
- Using browser dev tools to investigate JavaScript errors
- Tracing behavior across JavaScript and HTML files
- Making targeted fixes and verifying them with regression tests
- Writing a short, blameless incident postmortem

## Getting Started

1. Download and extract the starter project ZIP.
2. Open the `gwc-checkout-starter` folder in VS Code.
3. Navigate to `src/` and open `index.html` in Google Chrome.
4. Open Chrome DevTools:
   - Windows/Linux: `Ctrl + Shift + J`
   - Mac: `Cmd + Option + J`
5. Read `docs/incident-report.md` for your investigation instructions.
6. After making your fixes, use `docs/debugging-checklist.md` to verify your work.

No API keys, accounts, servers, or additional dependencies are required.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and element IDs |
| `style.css` | Visual styling |
| `script.js` | Products, cart behavior, subtotal, and checkout |
| `incident-report.md` | Investigation worksheet and postmortem |
| `debugging-checklist.md` | Tests to confirm the incident is resolved |

**Simulation note:** Tech Mart has no real server, customer accounts, or payment processing. Use the browser Console and local code as evidence; you won't see server logs or real HTTP 500 responses.