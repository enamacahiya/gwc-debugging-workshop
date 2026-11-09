# Incident #001 — Checkout Is Down

**System:** Tech Mart Online Store  
**Your Role:** Software Engineering Intern  
**Mission:** Investigate the reported issues, fix the root causes, and verify that the application works correctly.

**Customer Report:**
> "I added two keyboards to my cart, but the total only shows the price of one. And when I attempt to checkout, nothing happens!"

**Debugging Workflow:** Reproduce → Investigate → Fix → Verify → Prevent

## Checkpoint 1 — Incorrect Cart Total

**Customer complaint:** The shopping cart subtotal is incorrect.

### Step 1: Reproduce

1. Open Tech Mart in Chrome.
2. Add **2 Mechanical Keyboards** to your cart.
3. Compare the expected subtotal with the displayed subtotal.
4. Try adding **1 Notebook** as well.

| Cart Contents | Expected | Actual |
|---|---|---|
| 2 Keyboards | $99.98 | ______ |
| 2 Keyboards + 1 Notebook | $112.48 | ______ |

### Step 2: Investigate & Fix

Open `script.js` and find the code responsible for calculating the subtotal.

**Which function did you investigate?**

________________________________________

**What was causing the incorrect subtotal?**

________________________________________

**After making your fix:**

- [ ] The subtotal is correct for 2 keyboards.
- [ ] The subtotal is correct when adding a notebook.

---

## Checkpoint 2 — Broken Checkout

**Customer complaint:** Clicking checkout doesn't complete the order.

### Step 1: Reproduce

1. Add an item to your cart.
2. Open **Chrome DevTools → Console**.
3. Click **Complete checkout**.
4. Read the error message.

### Step 2: Investigate & Fix

**First error message (or a short summary):**

________________________________________

**What caused the error?**

________________________________________

Make a targeted fix, save your file, refresh Chrome, and retry checkout.

### Step 3: Keep Investigating

If another error appears, repeat the debugging process. Remember that one bug can hide another!

**Did you encounter another error?** Yes / No

**What did you discover?**

________________________________________

**Which file(s) did you need to inspect?**

________________________________________

### Step 4: Confirm the Fix

- [ ] Checkout completes successfully.
- [ ] A confirmation message appears.
- [ ] The cart clears after checkout.
- [ ] No unexpected Console errors remain.

---

## Checkpoint 3 — Regression Testing

**Regression testing:** Verify that your changes didn't break other functionality.

Open `docs/debugging-checklist.md` for additional test cases.

- [ ] Adding, updating, and removing items works.
- [ ] Subtotals are correct for different quantities.
- [ ] Empty-cart checkout is handled properly.
- [ ] Successful checkout displays a confirmation and clears the cart.
- [ ] No unexpected JavaScript errors appear in the Console.

**Did all tests pass?** Yes / No

**Any remaining issues?**

________________________________________

---

## Mini Postmortem — Incident Review

Now that the incident is resolved, reflect on what happened.

**1. What went wrong?**

What were the root causes of the issues?

________________________________________

________________________________________

**2. How was it resolved?**

What evidence or debugging tools helped you find and fix the bugs?

________________________________________

________________________________________

**3. How can we prevent it in the future?**

What tests or processes could catch these issues before deployment?

________________________________________

________________________________________