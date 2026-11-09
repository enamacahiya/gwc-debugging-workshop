# Regression Testing Checklist

**System:** Tech Mart Online Store

**Goal:** Verify that the bugs are fixed and that existing functionality still works.

After making your changes, refresh the application and work through the following tests.

## 1. Shopping Cart

- [ ] All four products display correctly.
- [ ] Adding a product updates the cart.
- [ ] Adding the same product again increases its quantity.
- [ ] The + and − buttons update quantities correctly.
- [ ] Reducing a quantity to zero removes the product.
- [ ] The cart count reflects the total number of items.

## 2. Subtotal Calculations

Test each scenario and record whether it passes.

| Cart Contents | Expected Subtotal | Pass/Fail |
|---|---|---|
| Empty cart | $0.00 | |
| 1 Mechanical Keyboard | $49.99 | |
| 2 Mechanical Keyboards | $99.98 | |
| 2 Keyboards + 1 Notebook | $112.48 | |

- [ ] Subtotals update correctly when quantities change.
- [ ] Removing an item updates the subtotal.

## 3. Checkout

- [ ] Empty-cart checkout displays an appropriate message.
- [ ] Checkout with items displays a success message.
- [ ] The confirmation includes the customer name and correct total.
- [ ] Successful checkout clears the cart.
- [ ] The cart count and subtotal reset to zero.
- [ ] No unexpected errors appear in the DevTools Console.

## 4. Final Verification

- [ ] Complete one more checkout with multiple products.
- [ ] Confirm the original customer complaints can no longer be reproduced.

**Final Result:** Pass / Fail

**Any remaining issues?**

________________________________________

________________________________________