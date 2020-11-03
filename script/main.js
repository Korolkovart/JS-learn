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

calculate.disabled = true;

console.log(periodSelect);

const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: "false",
  percentDeposit: 0,
  moneyDeposit: 0,
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  incomeMonth: 0,
  getRange: () => {
    periodaAmount.innerHTML = periodSelect.value;
    return;
  },
  start: function () {
    let inputs = document.querySelectorAll(".data input[type = text]");
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

    console.log(this.appData);
    console.log(appData);

  },

  showResult: function () {
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
  },
  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, plusTwo);
    expensesItems = document.querySelectorAll(".expenses-items");

    if (expensesItems.length === 3) {
      plusTwo.style.display = "none";
    }
  },
  getExpenses: function () {
    expensesItems.forEach((item) => {
      let itemExpenses = item.querySelector(".expenses-title").value;
      let itemAmount = item.querySelector(".expenses-amount").value;

      if (itemExpenses !== "" && itemAmount !== "") {
        appData.expenses[itemExpenses] = +itemAmount;
      }
    });
  },
  addIncomeBlock: () => {
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems, plus);
    incomeItems = document.querySelectorAll(".income-items");

    if (incomeItems.length === 3) {
      plus.style.display = "none";
    }
  },
  getIncome: () => {
    incomeItems.forEach((item) => {
      let itemIncomeTitle = item.querySelector(".income-title").value;
      let itemIncomeAmount = item.querySelector(".income-amount").value;

      if (itemIncomeTitle !== "" && itemIncomeAmount !== "") {
        appData.income[itemIncomeTitle] = +itemIncomeAmount;
      }
    });
    for (let key in appData.income) {
      appData.incomeMonth += appData.income[key];
    }
  },
  getAddExpenses: () => {
    let addExpenses = possibleExpenses.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        appData.addExpenses.push(item);
      }
    });
  },
  getAddIncome: () => {
    addIncome.forEach((item) => {
      let itemValue = item.value.trim();
      if (itemValue !== "") {
        appData.addIncome.push(itemValue);
      }
    });
  },
  getExpensesMonth: function () {
    for (let item in this.expenses) {
      this.expensesMonth += this.expenses[item];
    }

    return this.expensesMonth;
  },
  getBudget: function () {
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = this.budgetMonth / 30;
    // return appData.budgetDay
  },
  getTargetMonth: function () {
    // if ((targetMonth.value / appData.budgetMonth) > 0 ){
    //   return  console.log('Цель будет достигнута :', Math.ceil(appData.mission /  appData.budgetMonth) + ' мес');
    // } else if ((appData.mission /  appData.budgetMonth) < 0 ){
    //   return  console.log('Цель не будет достигнута');
    // }
    return targetAmount.value / this.budgetMonth;
  },
  // getSatusIncome: function () {
  //   if (appData.budgetDay > 1200) {
  //     return console.log("У вас высокий уровень дохода");
  //   } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
  //     return console.log("У вас средний уровень дохода");
  //   } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
  //     return console.log("К сожалению у вас уровень дохода ниже среднего");
  //   } else if (appData.budgetDay < 0) {
  //     return console.log("Что то пошло не так");
  //   }
  // },
  // getInfoDeposit: function () {
  //   if (appData.deposit) {
  //     let moneyDeposit, precent;
  //     do {
  //       precent = prompt("Какой годовой процент?", 10);
  //     } while (!isNumber(precent));
  //     appData.percentDeposit = precent;

  //     do {
  //       deposit = prompt("Какая сумма заложена?", 10000);
  //     } while (!isNumber(deposit));
  //     appData.moneyDeposit = moneyDeposit;
  //   }
  // },
  calcSavedMoney: function () {
    return this.budgetMonth * periodSelect.value;
  },
  reset: function(){

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
    
    let dataInputReset = document.querySelectorAll(".data input[type = text]"),
      resultInputReset = document.querySelectorAll(
        ".result input[type = text]"
      );

    dataInputReset.forEach((item) => {
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
};

periodSelect.addEventListener("input", appData.getRange);
salaryAmount.addEventListener("input", (e) => {
  calculate.disabled = !(e.target.value.length > 1);
});

calculate.addEventListener("click", appData.start.bind(appData));
plusTwo.addEventListener("click", appData.addExpensesBlock);
plus.addEventListener("click", appData.addIncomeBlock);
cancel.addEventListener("click", appData.reset.bind(appData));
