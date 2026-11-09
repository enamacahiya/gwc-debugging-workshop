# 🚨 Tech Mart: Your First Production Incident

For this workshop, we will simulate students as a software engineering intern at Tech Mart, a fake online store. After the most recently deployment to production, customers have reported **incorrect cart totals** and **failed checkouts**. Your team needs to investigate and restore the checkout experience.

## What you'll practice

- Reproducing a reported bug and recording evidence
- Using browser developer tools to investigate JavaScript errors
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

## Your mission

1. Read `incident-report.md` and follow its checkpoints.
2. Reproduce the reported behavior **before editing code**.
3. Record the error or incorrect result, and form a hypothesis about the cause.
4. Make a focused fix, then retry the same steps.
5. Complete `debugging-checklist.md` before declaring recovery.
6. Answer the mini postmortem questions in the incident report.

You may work individually or with a partner. If you get stuck, ask a facilitator for a hint rather than jumping straight to the solution.

## Project files

| File | Purpose |
| --- | --- |
| `index.html` | Page structure and element IDs |
| `style.css` | Visual styling |
| `script.js` | Products, cart behavior, subtotal, and checkout |
| `incident-report.md` | Investigation worksheet and postmortem |
| `debugging-checklist.md` | Tests to confirm the incident is resolved |

**Simulation note:** Tech Mart has no real server, customer accounts, or payment processing. Use the browser Console and local code as evidence; you won't see server logs or real HTTP 500 responses.
