window.addEventListener('DOMContentLoaded', function(){
  'use strict';

  //timer

  function countTimer(deadline){
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

    function getTimeRemaining(){
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        second,
        minuts,
        hours;

        second = Math.floor(timeRemaining % 60)
        if(second < 10){
          second = '0' + second
        }

        minuts = Math.floor((timeRemaining / 60) % 60)
        if(minuts < 10){
          minuts = '0' + minuts
        }

        hours = Math.floor(timeRemaining / 60 / 60)
        if(hours < 10){
          hours = '0' + hours
        }

        return { timeRemaining, hours, minuts, second }
    }

    function updateClock(){
      let timer = getTimeRemaining()

      if (timer.timeRemaining > 0){
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minuts;
        timerSeconds.textContent = timer.second;
      
      } else if (timer.timeRemaining <= 0){
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
        clearInterval(setIntervalID)
      }
    }
    updateClock()

  }
  let setIntervalID = setInterval(countTimer, 1000, '11 november 2020')
  // console.log(setIntervalID);
});

// document.body.textContent = 'kuku epty'