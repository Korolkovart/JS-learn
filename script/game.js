

const startGame = function() {
  let number = Math.ceil(Math.random()*10)
  let counter = 0

  console.log(number);

  function game() {
    let getNumber = prompt("Угадай число от 1 до 100")

    counter++
    if(getNumber == null || getNumber === ' '){
      alert('Игра окончена! ' +  counter + ' попыток');
    } else if(parseFloat(getNumber) > number){
      alert('Загаданное число меньше')
      return (game(getNumber))
    }else if(parseFloat(getNumber) < number){
      alert('Загаданное число больше')
      return (game(getNumber), counter)
    } else if(!parseFloat(getNumber)){
      alert('Введи число!')
      return (game(getNumber), counter)
    } else if (parseFloat(getNumber) === number){
      alert('Поздравляю, Вы угадали!!! ' +  counter + ' попыток' )
    }
  };
  game()
};
startGame()