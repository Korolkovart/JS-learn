let money = 150000,
  income = "фриланс",
  addExpenses = `Интернет, Такси, Коммуналка`,
  deposit = true,
  mission = 1000000,
  period = 12,
  budgetDay = money / 30,
  expenses1,
  expenses2,
  amount1,
  amount2,
  budgetMonth,
  month;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей");

console.log(addExpenses.toLowerCase().split(", "));

console.log(budgetDay);

money = +prompt("Ваш месячный доход?");
let checkMoney = ( !parseInt(money)) ? alert('Не корректный ввод, введите число!')  : true
console.log("Месячный доход - ", money);

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);
console.log(addExpenses);

deposit = confirm('Есть ли у вас депозит в банке?')
console.log('deposit: ', deposit);

expenses1 = prompt('Введите обязательную статью расходов?');

amount1 = +prompt('Во сколько это обойдется?');
let check = ( !parseInt(amount1)) ? alert('Не корректный ввод, введите число!')  : true


expenses2 = prompt('Введите обязательную статью расходов?');

amount2 = +prompt('Во сколько это обойдется?');
let check2 = ( !parseInt(amount2)) ? alert('Не корректный ввод')  : true


budgetMonth = money - (amount1 + amount2);
console.log('Бюджет на месяц - ', budgetMonth);

month = Math.ceil(mission / budgetMonth)
console.log('За сколько месяцев будет достигнута цель: ', month);

console.log('Бюджет на день - ', Math.floor(budgetMonth / 30));

budgetDay = function(){
  if ((Math.floor(budgetMonth / 30)) >= 1200){
    console.log('У вас высокий уровень дохода')
  } else if((Math.floor(budgetMonth / 30)) >= 600 && (Math.floor(budgetMonth / 30)) <= 1199){
    console.log('У вас средний уровень дохода')
  } else if ((Math.floor(budgetMonth / 30)) <= 599 && (Math.floor(budgetMonth / 30)) >= 0 ){
    console.log('К сожалению у вас уровень дохода ниже среднего');
  } else if ((Math.floor(budgetMonth / 30)) < 0 ) {
    console.log('Что то пошло не так')
  }
} 
budgetDay()
// console.log('Бюджет на день - ', );

