// ==========================================
// SPENDWISE - WEEK 6
// JavaScript Foundation
// ==========================================


// ==========================================
// 1. APPLICATION VARIABLES
// ==========================================

// Monthly budget
let monthlyBudget = 50000;

// Expense data
let foodExpenses = 4800;
let transportExpenses = 3200;
let rentExpenses = 15000;
let entertainmentExpenses = 2100;
let savingsExpenses = 10000;
let utilitiesExpenses = 1400;


// ==========================================
// 2. FUNCTION TO CALCULATE TOTAL EXPENSES
// ==========================================

function calculateTotalExpenses() {

    let totalExpenses =
        foodExpenses +
        transportExpenses +
        rentExpenses +
        entertainmentExpenses +
        savingsExpenses +
        utilitiesExpenses;

    return totalExpenses;
}


// ==========================================
// 3. FUNCTION TO CALCULATE REMAINING BALANCE
// ==========================================

function calculateRemainingBalance(budget, expenses) {

    let remainingBalance = budget - expenses;

    return remainingBalance;
}


// ==========================================
// 4. COLLECT USER INPUT
// ==========================================

let userBudget = prompt(
    "Welcome to SpendWise!\n\nEnter your monthly budget in KSh:"
);


// Convert budget input from text to number
userBudget = Number(userBudget);


// Ask for an additional expense
let userExpense = prompt(
    "Enter an additional expense amount in KSh:"
);


// Convert expense input from text to number
userExpense = Number(userExpense);


// ==========================================
// 5. PERFORM CALCULATIONS
// ==========================================

// Calculate the existing expenses
let existingExpenses = calculateTotalExpenses();


// Add the user's additional expense
let totalExpenses = existingExpenses + userExpense;


// Calculate remaining balance
let remainingBalance = calculateRemainingBalance(
    userBudget,
    totalExpenses
);


// ==========================================
// 6. DISPLAY RESULTS IN THE CONSOLE
// ==========================================

console.log("====================================");
console.log("       SPENDWISE BUDGET SUMMARY");
console.log("====================================");

console.log("Monthly Budget: KSh " + userBudget);

console.log("Existing Expenses: KSh " + existingExpenses);

console.log("Additional Expense: KSh " + userExpense);

console.log("Total Expenses: KSh " + totalExpenses);

console.log("Remaining Balance: KSh " + remainingBalance);

console.log("====================================");
console.log("Thank you for using SpendWise!");
console.log("====================================");
