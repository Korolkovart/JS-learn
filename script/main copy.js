const calculate = document.getElementById("start"),
  plus = document.getElementsByTagName("button")[0],
  plusTwo = document.getElementsByTagName("button")[1],
  checkBox = document.getElementById("deposit-check"),
  // value = document.getElementsByClassName('result')[0],
  budgetMonth = document.getElementsByClassName("budget_month-value")[0],
  budgetDay = document.getElementsByClassName("budget_day-value")[0],
  expensesMonth = document.getElementsByClassName("expenses_month-value")[0],
  additionalIncome = document.getElementsByClassName(
    "additional_income-value"
  )[0],
  additionalExpenses = document.getElementsByClassName(
    "additional_expenses-value"
  )[0],
  incomPeriod = document.getElementsByClassName("income_period-value")[0],
  targetMonth = document.getElementsByClassName("target_month-value")[0],
  salaryAmount = document.querySelector(".salary-amount"),
  incomeTitle = document.querySelectorAll(".income-title")[1],
  // incomeAmount = document.querySelector('.income-amount'),
  // addIncomeTwo = document.querySelectorAll('.additional_income-item')[1],
  expensesTitle = document.querySelectorAll(".expenses-title")[0],
  expensesAmount = document.querySelector(".expenses-amount"),
  possibleExpenses = document.querySelector(".additional_expenses-item"),
  targetAmount = document.querySelector(".target-amount"),
  cancel = document.getElementById("cancel");

let expensesItems = document.querySelectorAll(".expenses-items"),
  addIncome = document.querySelectorAll(".additional_income-item"),
  incomeItems = document.querySelectorAll(".income-items"),
  periodaAmount = document.querySelector(".period-amount"),
  periodSelect = document.querySelector(".period-select");

// calculate.disabled = true;

console.log(periodSelect);

// const isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };


periodSelect.addEventListener("input", appData.getRange);
salaryAmount.addEventListener("input", (e) => {
  calculate.disabled = !(e.target.value.length > 1);
});

calculate.addEventListener("click", appData.start.bind(appData));
plusTwo.addEventListener("click", appData.addExpensesBlock);
plus.addEventListener("click", appData.addIncomeBlock);
cancel.addEventListener("click", appData.reset.bind(appData));
