const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};


let money,
  income = "фриланс",
  addExpenses,
  deposit = true,
  mission = 1000000,
  expenses1,
  expenses2,
  amount1,
  amount2,
  month,
  expenses = [];

  const start = function(){
    do{
      money = prompt("Ваш месячный доход?");
    }
    while(!isNumber(money))
  }

  start()


addExpenses = prompt(
  "Перечислите возможные расходы за рассчитываемый период через запятую"
);


deposit = confirm('Есть ли у вас депозит в банке?')

const showTypeOf = function(date){
  console.log(date, typeof(date));
}

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);



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

// let ku;
// const foo = function(){
//   do{
//     ku = prompt('Во сколько это обойдется?')
//   }
//   while(!isNumber(ku))
// }
// const cost = foo()

const getExpensesMonth = function(){
  let sum;

  for (let i = 0; i < 1; i++){
    expenses[i] = prompt('Введите обязательную статью расходов?')
    
    if (!isNumber){
      sum += prompt('Во сколько это обойдется?')
    } else{
      sum += prompt('Во сколько это обойдется?')
    }

  console.log('sum',sum);
  }
  return sum
};

const expensesAmount = getExpensesMonth()

console.log('Расходы за месяц', expensesAmount);

function getAccumulatedMonth(a, b){
  const accumulate = a - b;
  return accumulate
}

accumulateMonth = getAccumulatedMonth(money, expensesAmount)
budgetDay = Math.floor(accumulateMonth / 30);



function getTargetMonth(a, b){
  return Math.ceil(a / b)
}

console.log([...addExpenses.toLowerCase().split(',')]);
console.log('getTargetMonth :', getTargetMonth( mission, accumulateMonth));
console.log('budgetDay :', budgetDay);
console.log(getStatusIncome());

