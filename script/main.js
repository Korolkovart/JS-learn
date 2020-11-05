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


// const isNumber = function (n) {
//   return !isNaN(parseFloat(n)) && isFinite(n);
// };

class AppData{
  constructor(){
    this.income =  {};
    this.addIncome =  [];
    this.expenses =  {};
    this.addExpenses =  [];
    this.deposit =  "false";
    this.percentDeposit =  0;
    this.moneyDeposit =  0;
    this.budget =  0;
    this.budgetDay =  0;
    this.budgetMonth =  0;
    this.expensesMonth =  0;
    this.incomeMonth =  0;
  }
  getRange(){
    periodaAmount.innerHTML = periodSelect.value;
    return;
  };

  start(){
    const inputs = document.querySelectorAll(".data input[type = text]");
    inputs.forEach((item) => {
    item.setAttribute("disabled", "disabled");
    });
    plus.setAttribute("disabled", "true");
    plusTwo.setAttribute("disabled", "true");
    calculate.style.display = "none";
    cancel.style.display = "block";

    this.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.showResult();
  };
  showResult(){
    // const _this = this;
    budgetMonth.value = this.budgetMonth;
    budgetDay.value = Math.floor(this.budgetDay);
    expensesMonth.value = this.expensesMonth;
    additionalExpenses.value = this.addExpenses.join(", ");
    additionalIncome.value = this.addIncome.join(", ");
    targetMonth.value = Math.ceil(this.getTargetMonth());
  
    incomPeriod.value = this.calcSavedMoney();
    periodSelect.addEventListener("input", () => {
      incomPeriod.value = this.calcSavedMoney();
    });
  };

  addExpensesBlock(){
    const cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusTwo);
    expensesItems = document.querySelectorAll(".expenses-items");

    if (expensesItems.length === 3) {
      plusTwo.style.display = "none";
    }
  };
  
  getExpenses(){
    // const _this = this;
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let itemAmount = item.querySelector(".expenses-amount").value;

      if (itemExpenses !== "" && itemAmount !== "") {
        this.expenses[itemExpenses] = +itemAmount;
      }
    });
  };

  addIncomeBlock(){
    const cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, plus);
    incomeItems = document.querySelectorAll(".income-items");

    if (incomeItems.length === 3) {
      plus.style.display = "none";
    }
  };

  getIncome(){
    // const _this = this;
    incomeItems.forEach((item) => {
      const itemIncomeTitle = item.querySelector(".income-title").value;
      const itemIncomeAmount = item.querySelector(".income-amount").value;

      if (itemIncomeTitle !== "" && itemIncomeAmount !== "") {
        this.income[itemIncomeTitle] = +itemIncomeAmount;
      }
    });
    for (let key in appData.income) {
      this.incomeMonth += +this.income[key];
    }
  };

  getAddExpenses(){
    // const _this = this;
    let addExpenses = possibleExpenses.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
  };

  getAddIncome(){
    // const _this = this;
    addIncome.forEach( (item) => {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        this.addIncome.push(itemValue);
      }
    });
  };

  getExpensesMonth(){
    for (let item in this.expenses) {
      this.expensesMonth += this.expenses[item];
    }
    return this.expensesMonth;
  };

  getBudget(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
  };

  getTargetMonth(){
    return targetAmount.value / this.budgetMonth;
  };

  calcSavedMoney(){
    return this.budgetMonth * periodSelect.value;
  };

  reset(){
    this.budget = 0;
    this.budgetDay = 0;
    this.deposit = false;
    this.income = {};
    this.addIncome = [];
    this.expenses = {};
    this.addExpenses = [];
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.incomeMonth = 0;
    
    const dataInputReset = document.querySelectorAll(".data input[type = text]"),
      resultInputReset = document.querySelectorAll(
        ".result input[type = text]"
      );

    dataInputReset.forEach((item) =>  {
      item.value = "";
      item.removeAttribute("disabled");
      periodSelect.value = "0";
      periodaAmount.innerHTML = periodSelect.value;
    });

    resultInputReset.forEach((item) => {
      item.value = "";
    });


    for (let i = 1; i < incomeItems.length; i++) { 
      incomeItems[i].parentNode.removeChild(incomeItems[i]);
      plus.style.display = "block";
    }

    for (let i = 1; i < expensesItems.length; i++) {
      expensesItems[i].parentNode.removeChild(expensesItems[i]);
      plusTwo.style.display = "block";
    }

    plus.removeAttribute("disabled");
    plusTwo.removeAttribute("disabled");
    calculate.style.display = "block";
    cancel.style.display = "none";
    checkBox.checked = false;
    console.log(appData);

  }

  eventListener(){
    periodSelect.addEventListener("input", this.getRange);
    salaryAmount.addEventListener("input", (e) => {
    calculate.disabled = !(e.target.value.length > 1);
    });

    calculate.addEventListener("click", this.start.bind(appData));
    plusTwo.addEventListener("click", this.addExpensesBlock);
    plus.addEventListener("click", this.addIncomeBlock);
    cancel.addEventListener("click", this.reset.bind(appData));
  }
}

const appData = new AppData();
appData.eventListener()

console.log(appData);

