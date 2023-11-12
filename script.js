// Budget class to encapsulate functionality
class Budget {
    constructor() {
        this.income = [];
        this.expenses = [];
    }

    // Method to add income
    addIncome(name, amount) {
        if (!name || amount <= 0) {
            alert("Please enter valid income details.");
            return;
        }

        this.income.push({ name, amount });
        this.updateUI();
        this.updateLog(`Added Income: ${name} + ${amount}`);
    }

    // Method to add expense
    addExpense(name, amount) {
        if (!name || amount <= 0) {
            alert("Please enter valid expense details.");
            return;
        }

        this.expenses.push({ name, amount });
        this.updateUI();
        this.updateLog(`Added Expense: ${name} - ${amount}`);
    }

    // Method to calculate total budget
    calculateTotalBudget() {
        const totalIncome = this.income.reduce((total, item) => total + item.amount, 0);
        const totalExpenses = this.expenses.reduce((total, item) => total + item.amount, 0);

        return totalIncome - totalExpenses;
    }

    // Method to update UI
    updateUI() {
        const totalIncomeElement = document.getElementById("totalIncome");
        const totalExpensesElement = document.getElementById("totalExpenses");
        const totalBudgetElement = document.getElementById("totalBudget");

        totalIncomeElement.textContent = this.calculateTotalIncome();
        totalExpensesElement.textContent = this.calculateTotalExpenses();
        totalBudgetElement.textContent = this.calculateTotalBudget();
    }

    // Method to calculate total income
    calculateTotalIncome() {
        return this.income.reduce((total, item) => total + item.amount, 0);
    }

    // Method to calculate total expenses
    calculateTotalExpenses() {
        return this.expenses.reduce((total, item) => total + item.amount, 0);
    }

    // Method to update log
    updateLog(message) {
        const logList = document.getElementById("logList");
        const listItem = document.createElement("li");
        listItem.textContent = message;
        logList.appendChild(listItem);
    }
}

// Function to add income
function addIncome() {
    const name = document.getElementById("incomeName").value;
    const amount = parseFloat(document.getElementById("incomeAmount").value);
    budget.addIncome(name, amount);
}

// Function to add expense
function addExpense() {
    const name = document.getElementById("expenseName").value;
    const amount = parseFloat(document.getElementById("expenseAmount").value);
    budget.addExpense(name, amount);
}

// Create an instance of the Budget class
const budget = new Budget();