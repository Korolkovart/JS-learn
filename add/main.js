function timer(deadline){

  function getDateInfo(){
    let deteNow = new Date().getTime(),
      dateStop= new Date(deadline).getTime(),
      timeRemaining = (dateStop - deteNow) / 1000,
      second = new Date().getSeconds(),
      minuts = new Date().getMinutes(),
      hours = new Date().getHours(),
      halfDay,
      day,
      greeting,
      dayToday = new Date().getDay();

      if(hours > 0 && hours < 4 ){
        greeting = 'Доброй ночи!';
      } else if (hours > 4 && hours < 12 ){
        greeting = 'Доброе утро!';
      } else if(hours > 12 && hours < 17){
        greeting = 'Добрый день!';
      } else if(hours > 17 || hours < 0){
        greeting = 'Добрый вечер!';
      }


      if(hours >= 0 && hours < 12 ){
        halfDay = 'AM'
      } else {
        halfDay = 'PM'
      }

      if(second < 10){
        second = '0' + second
      }
      if(minuts < 10){
        minuts = '0' + minuts
      }
      if(hours < 10){
        hours = '0' + hours
      }

      day = Math.floor(timeRemaining / 60 / 60 / 24)

      switch (dayToday){
        case 0:
          dayToday =  'Воскресенье';
          break;
        case 1:
          dayToday =  'Понедельник';
          break;
        case 2:
         dayToday = 'Вторник';
          break;
        case 3:
          dayToday =  'Среда';
          break;
        case 4:
          dayToday =  'Четверг';
          break;
        case 5:
          dayToday =  'Пятница';
          break;
        case 6:
          dayToday =  'Суббота';
          break;
        default:
          dayToday =  'Ошибка'
      }
      return {greeting ,timeRemaining, dayToday, day, hours, minuts, second, halfDay  }
  }
    function updateTime(){
      let timer = getDateInfo()

      if (timer.timeRemaining > 0){
        document.body.innerHTML = `
          ${timer.greeting} <br> 
          Сегодня: ${timer.dayToday} <br>
          Текущее время: ${timer.hours}:${timer.minuts}:${timer.second} ${timer.halfDay} <br>
          До нового года осталось ${timer.day}`
        
      
      } else if (timer.timeRemaining <= 0){
        clearInterval(setIntervalID)
      }
    }
    updateTime()
  }

  let setIntervalID = setInterval(timer, 1000, '1 January 2021')
