const calculate = document.getElementById('start'),
    plus = document.getElementsByTagName('button')[0],
    plusTwo = document.getElementsByTagName('button')[1],
    checkBox = document.getElementById('deposit-check'),
    // value = document.getElementsByClassName('result')[0],
    budgetMonth = document.getElementsByClassName('budget_month-value')[0],
    budgetDay = document.getElementsByClassName('budget_day-value')[0],
    expensesMonth = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncome = document.getElementsByClassName('additional_income-value')[0],
    additionalExpenses = document.getElementsByClassName('additional_expenses-value')[0],
    incomPeriod = document.getElementsByClassName('income_period-value')[0],
    targetMonth = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelectorAll('.income-title')[1],
    incomeAmount = document.querySelector('.income-amount'),
    addIncome = document.querySelectorAll('.additional_income-item')[0],
    addIncomeTwo = document.querySelectorAll('.additional_income-item')[1],
    expensesTitle = document.querySelectorAll('.expenses-title')[1],
    expensesAmount = document.querySelector('.expenses-amount'),
    possibleExpenses = document.querySelector('.additional_expenses-item'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select')    



console.log(periodSelect);
















// const isNumber = function(n){
//   return !isNaN(parseFloat(n)) && isFinite(n)
// };

// let money,
//     start = function(){
//       do{
//         money = prompt("Ваш месячный доход?");
//       }
//       while(!isNumber(money))
//     }

// start()

// let appData = {
//   income: {},
//   addIncome: [],
//   expenses: {},
//   addExpenses: [],
//   deposit: 'false',
//   mission: 1000000,
//   percentDeposit: 0,
//   moneyDeposit: 0,
//   period: 3,
//   budget: money,
//   budgetDay: 0,
//   budgetMonth: 0,
//   expensesMonth: 0,
//   asking: function(){
    
//     if(confirm('Есть ли у вас дополнительный источник заработока?')){
//       let itemIncome,
//           cashIcome = 0;
//       do{
//         itemIncome = prompt('Какой у вас дополнительный заработок?', 'Торги на бирже');
//       } while(parseFloat(itemIncome) && itemIncome.trim())

//       do{
//         cashIcome = prompt('Сколько в месяц вы на этом зарабатываете?', 25000);
//       } while(!isNumber(cashIcome))
//       appData.income[itemIncome] = cashIcome;
//     }

//     let addExpenses;
//         do{
//           addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'cat,car,flat');
//         }while(parseFloat(addExpenses))
//         appData.addExpenses = addExpenses.toLowerCase().split(',');
//         appData.deposit = confirm('Есть ли у вас депозит в банке?');

//       for (let i = 0; i < 2; i++){
//           let expensesValue;
//           let amount = 0
//         do{
//           expensesValue = prompt('Введите обязательную статью расходов?','bike');
//         }while(parseFloat(expensesValue))

//         do{
//           amount = prompt('Во сколько это обойдется?',10000);
//         } while(!isNumber(amount))
//         appData.expenses[expensesValue] = amount
//       }  
//   },
//   getExpensesMonth: function(){

//     for (let item in appData.expenses){
//       appData.expensesMonth += appData.expenses[item];
//     }

//     return appData.expensesMonth
    
//   },
//   getBudget: function(){
//     appData.budgetDay = (appData.budget - appData.expensesMonth) / 30;
//     appData.budgetMonth = appData.budget - appData.expensesMonth
//     // return appData.budgetDay
//   },
//   getTargetMonth: function(){
//     if ((appData.mission / appData.budgetMonth) > 0 ){
//       return  console.log('Цель будет достигнута :', Math.ceil(appData.mission /  appData.budgetMonth) + ' мес');
//     } else if ((appData.mission /  appData.budgetMonth) < 0 ){
//       return  console.log('Цель не будет достигнута');
//     }

//   },
//   getSatusIncome: function(){
//     if (appData.budgetDay > 1200){
//       return console.log('У вас высокий уровень дохода')
//     } else if(appData.budgetDay > 600 && appData.budgetDay < 1200){
//       return console.log('У вас средний уровень дохода')
//     } else if (appData.budgetDay < 600 && appData.budgetDay > 0 ){
//       return console.log('К сожалению у вас уровень дохода ниже среднего');
//     } else if (appData.budgetDay < 0 ) {
//       return console.log('Что то пошло не так')
//     }
//   },
//   getInfoDeposit: function(){
//     if(appData.deposit){
//       let moneyDeposit,
//           precent;
//       do{
//         precent = prompt('Какой годовой процент?', 10);
//       }while(!isNumber(precent))
//       appData.percentDeposit = precent;

//       do{
//         deposit = prompt('Какая сумма заложена?', 10000);
//       }while(!isNumber(deposit))
//       appData.moneyDeposit = moneyDeposit;
//     }
//   },
//   calcSavedMoney: function(){
//     return appData.budgetMonth * appData.period;
//   }
// }
// appData.asking()
// // console.log(appData.expenses);
// // appData.getExpensesMonth() // 1
// // appData.getBudget()
// // appData.getTargetMonth() // 2
// // appData.getSatusIncome() //3
// // appData.getInfoDeposit()
// // appData.calcSavedMoney()


// let stringAddExpenses = appData.addExpenses.map(item => {
//    return item.toString().charAt(0).toUpperCase() + item.slice(1)
// })
// console.log(stringAddExpenses.join(', '));

// // for (let item in appData){
// //   console.log('Наша программа включает в себя данные: ' + item + ' = '  + appData[item])
// // }

