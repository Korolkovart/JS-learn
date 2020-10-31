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
  targetAmount = document.querySelector(".target-amount");

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
  // checkData: (e) => {
  //   if (salaryAmount.value === ''){
  //     e.preventDefault();
  //     return
  //   }
  //   appData.start()
  // },
  start: function () {
    // do{
    //   money = prompt("Ваш месячный доход?");
    // }
    // while(!isNumber(money))
    // if (salaryAmount.value === ''){
    //   alert('Ошибка, поле "Месячный доход" должно быть заполнено');
    //   return
    // }
    appData.budget = +salaryAmount.value;

    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  },

  showResult: function () {
    budgetMonth.value = appData.budgetMonth;
    budgetDay.value = Math.floor(appData.budgetDay);
    expensesMonth.value = appData.expensesMonth;
    additionalExpenses.value = appData.addExpenses.join(", ");
    additionalIncome.value = appData.addIncome.join(", ");
    targetMonth.value = Math.ceil(appData.getTargetMonth());

    incomPeriod.value = appData.calcSavedMoney();
    periodSelect.addEventListener("input", () => {
      incomPeriod.value = appData.calcSavedMoney();
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
    for (let item in appData.expenses) {
      appData.expensesMonth += appData.expenses[item];
    }

    return appData.expensesMonth;
  },
  getBudget: function () {
    appData.budgetMonth =
      appData.budget + appData.incomeMonth - appData.expensesMonth;
    appData.budgetDay = appData.budgetMonth / 30;
    // return appData.budgetDay
  },
  getTargetMonth: function () {
    // if ((targetMonth.value / appData.budgetMonth) > 0 ){
    //   return  console.log('Цель будет достигнута :', Math.ceil(appData.mission /  appData.budgetMonth) + ' мес');
    // } else if ((appData.mission /  appData.budgetMonth) < 0 ){
    //   return  console.log('Цель не будет достигнута');
    // }
    return targetAmount.value / appData.budgetMonth;
  },
  getSatusIncome: function () {
    if (appData.budgetDay > 1200) {
      return console.log("У вас высокий уровень дохода");
    } else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
      return console.log("У вас средний уровень дохода");
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0) {
      return console.log("К сожалению у вас уровень дохода ниже среднего");
    } else if (appData.budgetDay < 0) {
      return console.log("Что то пошло не так");
    }
  },
  getInfoDeposit: function () {
    if (appData.deposit) {
      let moneyDeposit, precent;
      do {
        precent = prompt("Какой годовой процент?", 10);
      } while (!isNumber(precent));
      appData.percentDeposit = precent;

      do {
        deposit = prompt("Какая сумма заложена?", 10000);
      } while (!isNumber(deposit));
      appData.moneyDeposit = moneyDeposit;
    }
  },
  calcSavedMoney: function () {
    return appData.budgetMonth * periodSelect.value;
  },
};

// appData.getRange();

periodSelect.addEventListener("input", appData.getRange);
salaryAmount.addEventListener("input", (e) => {
  calculate.disabled = !(e.target.value.length > 1);
});
calculate.addEventListener("click", appData.start);
plusTwo.addEventListener("click", appData.addExpensesBlock);
plus.addEventListener("click", appData.addIncomeBlock);
