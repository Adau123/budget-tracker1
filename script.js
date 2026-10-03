// ==========================================
// SPENDWISE - INTERACTIVE VERSION
// ==========================================


// ==========================================
// 1. APPLICATION DATA
// ==========================================

// Monthly budget
let monthlyBudget = 50000;


// Array containing all expense records
let expenses = [];


// ==========================================
// 2. GET HTML ELEMENTS
// ==========================================

const expenseForm = document.getElementById("expense-form");

const expenseNameInput =
    document.getElementById("expense-name");

const expenseAmountInput =
    document.getElementById("expense-amount");

const expenseCategoryInput =
    document.getElementById("expense-category");

const expenseList =
    document.getElementById("expense-list");

const totalExpensesDisplay =
    document.getElementById("total-expenses");

const remainingBalanceDisplay =
    document.getElementById("remaining-balance");

const budgetDisplay =
    document.getElementById("budget-display");

const budgetMessage =
    document.getElementById("budget-message");

const expenseCount =
    document.getElementById("expense-count");

const emptyMessage =
    document.getElementById("empty-message");

const recentTransactions =
    document.getElementById("recent-transactions");


// ==========================================
// 3. CATEGORY TOTAL ELEMENTS
// ==========================================

const categoryDisplays = {

    Food: document.getElementById("food-total"),

    Transport:
        document.getElementById("transport-total"),

    Rent:
        document.getElementById("rent-total"),

    Entertainment:
        document.getElementById("entertainment-total"),

    Savings:
        document.getElementById("savings-total"),

    Utilities:
        document.getElementById("utilities-total")

};


// ==========================================
// 4. FORMAT CURRENCY
// ==========================================

function formatCurrency(amount) {

    return "KSh " + amount.toLocaleString();

}


// ==========================================
// 5. CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses() {

    let total = 0;


    // Loop through every expense in the array
    for (let i = 0; i < expenses.length; i++) {

        total += expenses[i].amount;

    }


    return total;

}


// ==========================================
// 6. CALCULATE REMAINING BALANCE
// ==========================================

function calculateRemainingBalance() {

    const totalExpenses =
        calculateTotalExpenses();

    return monthlyBudget - totalExpenses;

}


// ==========================================
// 7. BUDGET CONDITIONALS
// ==========================================

function updateBudgetStatus() {

    const remainingBalance =
        calculateRemainingBalance();


    // Remove old status classes
    budgetMessage.classList.remove(
        "warning",
        "danger"
    );


    // Decision making using conditionals
    if (remainingBalance < 0) {

        budgetMessage.classList.add("danger");

        budgetMessage.innerHTML =
            "<strong>Budget exceeded:</strong> " +
            "You have spent more than your monthly budget.";

    }

    else if (remainingBalance <= monthlyBudget * 0.2) {

        budgetMessage.classList.add("warning");

        budgetMessage.innerHTML =
            "<strong>Budget warning:</strong> " +
            "You have less than 20% of your budget remaining.";

    }

    else {

        budgetMessage.innerHTML =
            "<strong>Budget status:</strong> " +
            "You are within your budget.";

    }

}


// ==========================================
// 8. DISPLAY EXPENSES IN THE TABLE
// ==========================================

function displayExpenses() {

    // Clear existing table content
    expenseList.innerHTML = "";


    // Check if there are no expenses
    if (expenses.length === 0) {

        emptyMessage.style.display = "block";

    }

    else {

        emptyMessage.style.display = "none";


        // Loop through the expense array
        for (let i = 0; i < expenses.length; i++) {

            const expense = expenses[i];


            const row =
                document.createElement("tr");


            row.innerHTML = `
                <td>${expense.name}</td>

                <td>${formatCurrency(expense.amount)}</td>

                <td>${expense.category}</td>

                <td>${expense.date}</td>
            `;


            expenseList.appendChild(row);

        }

    }


    // Update number of expenses
    expenseCount.textContent =
        expenses.length +
        (expenses.length === 1
            ? " expense"
            : " expenses");

}


// ==========================================
// 9. UPDATE CATEGORY TOTALS
// ==========================================

function updateCategoryTotals() {

    // Create an object to store category totals
    const categoryTotals = {

        Food: 0,

        Transport: 0,

        Rent: 0,

        Entertainment: 0,

        Savings: 0,

        Utilities: 0

    };


    // Loop through all expenses
    for (let i = 0; i < expenses.length; i++) {

        const expense = expenses[i];


        // Check whether the category exists
        if (categoryTotals[expense.category] !== undefined) {

            categoryTotals[expense.category] +=
                expense.amount;

        }

    }


    // Update the category cards
    for (const category in categoryDisplays) {

        categoryDisplays[category].textContent =
            formatCurrency(
                categoryTotals[category]
            );

    }

}


// ==========================================
// 10. UPDATE RECENT TRANSACTIONS
// ==========================================

function updateRecentTransactions() {

    recentTransactions.innerHTML = "";


    if (expenses.length === 0) {

        recentTransactions.innerHTML =
            '<p class="empty-message">' +
            'No recent transactions.' +
            '</p>';

        return;

    }


    // Show newest transactions first
    const recentExpenses =
        expenses.slice(-5).reverse();


    for (let i = 0; i < recentExpenses.length; i++) {

        const expense = recentExpenses[i];


        const transaction =
            document.createElement("div");


        transaction.className = "transaction";


        transaction.innerHTML = `
            <div class="transaction-left">

                <span class="transaction-icon">
                    💳
                </span>

                <div>

                    <strong>
                        ${expense.name}
                    </strong>

                    <small>
                        ${expense.category} • ${expense.date}
                    </small>

                </div>

            </div>

            <strong class="transaction-amount">
                - ${formatCurrency(expense.amount)}
            </strong>
        `;


        recentTransactions.appendChild(
            transaction
        );

    }

}


// ==========================================
// 11. UPDATE THE DASHBOARD
// ==========================================

function updateDashboard() {

    const totalExpenses =
        calculateTotalExpenses();


    const remainingBalance =
        calculateRemainingBalance();


    // Update budget
    budgetDisplay.textContent =
        formatCurrency(monthlyBudget);


    // Update total expenses
    totalExpensesDisplay.textContent =
        formatCurrency(totalExpenses);


    // Update remaining balance
    remainingBalanceDisplay.textContent =
        formatCurrency(remainingBalance);


    // Update budget status
    updateBudgetStatus();


    // Update table
    displayExpenses();


    // Update category cards
    updateCategoryTotals();


    // Update recent transactions
    updateRecentTransactions();

}


// ==========================================
// 12. FORM EVENT LISTENER
// ==========================================

expenseForm.addEventListener(
    "submit",
    function (event) {

        // Stop the page from refreshing
        event.preventDefault();


        // Get user input
        const name =
            expenseNameInput.value.trim();

        const amount =
            Number(expenseAmountInput.value);

        const category =
            expenseCategoryInput.value;


        // Validate the input
        if (
            name === "" ||
            amount <= 0 ||
            category === ""
        ) {

            alert(
                "Please enter a valid expense name, amount, and category."
            );

            return;

        }


        // Create a new expense object
        const newExpense = {

            name: name,

            amount: amount,

            category: category,

            date: new Date().toLocaleDateString()

        };


        // Add the expense object to the array
        expenses.push(newExpense);


        // Update the dashboard
        updateDashboard();


        // Clear the form
        expenseForm.reset();


        // Show confirmation
        console.log(
            "New expense added:",
            newExpense
        );

    }
);


// ==========================================
// 13. INITIAL DASHBOARD LOAD
// ==========================================

updateDashboard();


// ==========================================
// 14. WELCOME MESSAGE
// ==========================================

console.log(
    "SpendWise interactive dashboard loaded successfully."
);
