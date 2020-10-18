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
  month;



// console.log("Период равен " + period + " месяцев");
// console.log("Цель заработать " + mission + " рублей");

// console.log(addExpenses.toLowerCase().split(", "));


money = +prompt("Ваш месячный доход?");
let checkMoney = ( !parseInt(money)) ? alert('Не корректный ввод, введите число!')  : true
// console.log("Месячный доход - ", money);

addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);


deposit = confirm('Есть ли у вас депозит в банке?')
// console.log('deposit: ', deposit);

expenses1 = prompt('Введите обязательную статью расходов?');

amount1 = +prompt('Во сколько это обойдется?');
let check = ( !parseInt(amount1)) ? alert('Не корректный ввод, введите число!')  : true


expenses2 = prompt('Введите обязательную статью расходов?');

amount2 = +prompt('Во сколько это обойдется?');
let check2 = ( !parseInt(amount2)) ? alert('Не корректный ввод')  : true

const showTypeOf = function(date){
  console.log(date, typeof(date));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getAccumulatedMonth(a, b, c){
  const accumulate = a - (b + c);
  return accumulate
}

accumulateMonth = getAccumulatedMonth(money, amount1, amount2)

budgetDay = Math.floor(accumulateMonth / 30);
// console.log('budgetDay: ', budgetDay);

const getStatusIncome = function(){
  if (budgetDay >= 1200){
    return ('У вас высокий уровень дохода')
  } else if(budgetDay >= 600 && budgetDay <= 1199){
    return ('У вас средний уровень дохода')
  } else if (budgetDay <= 599 && budgetDay >= 0 ){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0 ) {
    return ('Что то пошло не так')
  }
}



const getExpensesMonth = function(a, b){
  const ExpensesMonth = a + b;
  return ExpensesMonth;
}



// console.log('accumulateMonth :', accumulateMonth);

function getTargetMonth(a, b){
  return Math.ceil(a / b)
}


console.log('getExpensesMonth :', getExpensesMonth(amount1, amount2));
console.log([...addExpenses.split(',')]);
console.log('getTargetMonth :', getTargetMonth( mission, accumulateMonth));
console.log('budgetDay :', budgetDay);
console.log(getStatusIncome());

