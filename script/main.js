const isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n) && n.trim()
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
  if (budgetDay > 1200){
    return ('У вас высокий уровень дохода')
  } else if(budgetDay > 600 && budgetDay < 1200){
    return ('У вас средний уровень дохода')
  } else if (budgetDay < 600 && budgetDay > 0 ){
    return ('К сожалению у вас уровень дохода ниже среднего');
  } else if (budgetDay < 0 ) {
    return ('Что то пошло не так')
  }
}

const getExpensesMonth = function(){
  let sum = 0;
  let current = 0;

  for (let i = 0; i < 2; i++){
    expenses[i] = +prompt('Введите обязательную статью расходов?')
    
    do{
      current = prompt('Во сколько это обойдется?');
    } while(!isNumber(current))
    sum += parseFloat(current) 
  }
  return sum;
};

const expensesAmount = getExpensesMonth();

console.log('Расходы за месяц', expensesAmount);

function getAccumulatedMonth(money, expensesAmount){
  return money - expensesAmount;
   
}

accumulateMonth = getAccumulatedMonth(money, expensesAmount)
budgetDay = Math.floor(accumulateMonth / 30);



function getTargetMonth(mission, accumulateMonth){
  if ((mission / accumulateMonth) > 0 ){
    return  console.log('Цель будет достигнута :', Math.ceil(mission / accumulateMonth) + ' мес');
  } else if ((mission / accumulateMonth) < 0 ){
    return  console.log('Цель не будет достигнута');
  }
}
getTargetMonth( mission, accumulateMonth)

console.log([...addExpenses.toLowerCase().split(',')]);
// console.log('getTargetMonth :', getTargetMonth( mission, accumulateMonth));
console.log('budgetDay :', budgetDay);
console.log(getStatusIncome());

