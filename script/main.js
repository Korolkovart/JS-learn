let money = 150000,
    income = '50000',
    addExpenses = `Интернет, Такси, Коммуналка`,
    deposit = true,
    mission = 1000000,
    period = 12,
    budgetDay = money / 30;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log('Период равен ' + period  + ' месяцев');
console.log('Цель заработать ' + mission  + ' рублей');

console.log(addExpenses.toLowerCase());

console.log(addExpenses.split(', '));

console.log(budgetDay);




