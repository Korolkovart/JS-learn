const calc = (price = 100 ) => {
  const calcBlock = document.querySelector('.calc-block'),
    caclType = document.querySelector('.calc-type'),
    calcSquere = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');

  const coutSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = caclType.options[caclType.selectedIndex].value,
      squreValue = +calcSquere.value;

  if(calcCount.value > 1){
    countValue += (calcCount.value - 1) / 10;
  }

  if (calcDay.value && calcDay.value < 5){
    dayValue *= 2;
  }else if (calcDay.value && calcDay.value < 10){
    dayValue *= 1.5;
  }

  if (typeValue && squreValue){
    total = price * typeValue * squreValue * countValue * dayValue;
  }

  totalValue.textContent = Math.floor(total);

  }

  calcBlock.addEventListener('change', (event) => {
    let target = event.target;
    if(target === caclType || target ==   calcSquere || 
      target === calcDay || target === calcCount){
        coutSum()
      }
  })
}

export default calc;