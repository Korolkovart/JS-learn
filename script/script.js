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
 //menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      // menuItems = menu.querySelectorAll('ul>li'),
      anchors = menu.querySelectorAll('ul>li>a[href*="#"]'),
      scrollBtn = document.querySelector('main>a[href*="#"]');

  const handlerMenu = () =>{
    menu.classList.toggle('active-menu')
  }

    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);

    scrollBtn.addEventListener('click', (e) => {
      e.preventDefault()
      const blockID = scrollBtn.getAttribute('href').substr(1)
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    })

    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        const blockID = anchor.getAttribute('href').substr(1)
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }

  }
  toggleMenu()

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupClose = document.querySelector('.popup-close'),
      popupContent = document.querySelector('.popup-content'),
      widthScreen = document.documentElement.clientWidth;
      console.log(widthScreen);
      popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {

          if(widthScreen > 750){
            let start = Date.now();
            let i = 100;
            let timer = setInterval(() => {
              let timePassed = Date.now() - start ;
              popupContent.style.left = timePassed / 52 + '%';
              if (timePassed > 2000) clearInterval(timer);
              popup.style.display = 'block'
            }, 10);
          } else {
            popup.style.display = 'block'
          }
        })
      })

      popupClose.addEventListener('click', () => {
        popup.style.display = 'none'
      })
  }
  togglePopUp()

  // animationPopup()
});

