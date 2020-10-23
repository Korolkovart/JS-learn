const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money,
    start = function(){
      do{
        money = prompt("Ваш месячный доход?");
      }
      while(!isNumber(money))
    }

start()

let appData = {
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: 'false',
  mission: 1000000,
  percentDeposit: 0,
  moneyDeposit: 0,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    
    if(confirm('Есть ли у вас дополнительный источник заработока?')){
      let itemIncome,
          cashIcome = 0;
      do{
        itemIncome = prompt('Какой у вас дополнительный заработок?', 'Торги на бирже');
      } while(parseFloat(itemIncome) && itemIncome.trim())

      do{
        cashIcome = prompt('Сколько в месяц вы на этом зарабатываете?', 25000);
      } while(!isNumber(cashIcome))
      appData.income[itemIncome] = cashIcome;
    }

    let addExpenses;
        do{
          addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'cat,car,flat');
        }while(parseFloat(addExpenses))
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

      for (let i = 0; i < 2; i++){
          let expensesValue;
          let amount = 0
        do{
          expensesValue = prompt('Введите обязательную статью расходов?','bike');
        }while(parseFloat(expensesValue))

        do{
          amount = prompt('Во сколько это обойдется?',10000);
        } while(!isNumber(amount))
        appData.expenses[expensesValue] = amount
      }  
  },
  getExpensesMonth: function(){

    for (let item in appData.expenses){
      appData.expensesMonth += appData.expenses[item];
    }

    return appData.expensesMonth
    
  },
  getBudget: function(){
    appData.budgetDay = (appData.budget - appData.expensesMonth) / 30;
    appData.budgetMonth = appData.budget - appData.expensesMonth
    // return appData.budgetDay
  },
  getTargetMonth: function(){
    if ((appData.mission / appData.budgetMonth) > 0 ){
      return  console.log('Цель будет достигнута :', Math.ceil(appData.mission /  appData.budgetMonth) + ' мес');
    } else if ((appData.mission /  appData.budgetMonth) < 0 ){
      return  console.log('Цель не будет достигнута');
    }

  },
  getSatusIncome: function(){
    if (appData.budgetDay > 1200){
      return console.log('У вас высокий уровень дохода')
    } else if(appData.budgetDay > 600 && appData.budgetDay < 1200){
      return console.log('У вас средний уровень дохода')
    } else if (appData.budgetDay < 600 && appData.budgetDay > 0 ){
      return console.log('К сожалению у вас уровень дохода ниже среднего');
    } else if (appData.budgetDay < 0 ) {
      return console.log('Что то пошло не так')
    }
  },
  getInfoDeposit: function(){
    if(appData.deposit){
      let moneyDeposit,
          precent;
      do{
        precent = prompt('Какой годовой процент?', 10);
      }while(!isNumber(precent))
      appData.percentDeposit = precent;

      do{
        deposit = prompt('Какая сумма заложена?', 10000);
      }while(!isNumber(deposit))
      appData.moneyDeposit = moneyDeposit;
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
}
appData.asking()
// console.log(appData.expenses);
// appData.getExpensesMonth() // 1
// appData.getBudget()
// appData.getTargetMonth() // 2
// appData.getSatusIncome() //3
// appData.getInfoDeposit()
// appData.calcSavedMoney()


let stringAddExpenses = appData.addExpenses.map(item => {
   return item.toString().charAt(0).toUpperCase() + item.slice(1)
})
console.log(stringAddExpenses.join(', '));

// for (let item in appData){
//   console.log('Наша программа включает в себя данные: ' + item + ' = '  + appData[item])
// }