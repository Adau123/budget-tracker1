# SpendWise

SpendWise is a personal budgeting dashboard that helps users track expenses, monitor their spending, and understand their remaining budget.

The project has been developed using HTML, CSS, and JavaScript.

---

# Week 6 - Making SpendWise Interactive

This week's update transformed SpendWise from a mostly static dashboard into an interactive budgeting application.

The main improvements include:

- Adding expenses through a form
- Storing expenses in an array
- Using loops to process expense records
- Using conditional statements for budget decisions
- Updating the webpage dynamically
- Using event listeners to respond to user actions
- Updating expense totals automatically
- Updating category totals automatically
- Displaying recent transactions dynamically
- Displaying budget feedback directly on the webpage

---

# 1. Conditionals

Conditional statements are used to evaluate the user's budget situation.

The application checks the remaining balance and provides different feedback.

For example:

```javascript
if (remainingBalance < 0) {

    budgetMessage.innerHTML =
        "<strong>Budget exceeded:</strong> " +
        "You have spent more than your monthly budget.";

}

else if (remainingBalance <= monthlyBudget * 0.2) {

    budgetMessage.innerHTML =
        "<strong>Budget warning:</strong> " +
        "You have less than 20% of your budget remaining.";

}

else {

    budgetMessage.innerHTML =
        "<strong>Budget status:</strong> " +
        "You are within your budget.";

}
