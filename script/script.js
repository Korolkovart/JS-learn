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
      scrollBtn = document.querySelector('main>a[href*="#"]'),
      main = document.querySelector('main');
      console.log(main);
  const handlerMenu = () =>{
    menu.classList.toggle('active-menu')
  }

    // btnMenu.addEventListener('click', handlerMenu);
    // console.log(btnMenu);


    // scrollBtn.addEventListener('click', (e) => {
    //   e.preventDefault()
    //   const blockID = scrollBtn.getAttribute('href').substr(1)
    //   document.getElementById(blockID).scrollIntoView({
    //     behavior: 'smooth',
    //     block: 'start'
    //   })

    // })

    main.addEventListener('click', (e) => {
      // e.preventDefault()
      console.log(event.target);
      if(event.target.closest('.menu')){
        handlerMenu()
      } else if(event.target.tagName === 'A'){
        const blockID = scrollBtn.getAttribute('href').substr(1)
        console.log(blockID);
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })




    // for (let anchor of anchors) {
    //   anchor.addEventListener('click', function (e) {
    //     e.preventDefault()
    //     const blockID = anchor.getAttribute('href').substr(1)
    //     document.getElementById(blockID).scrollIntoView({
    //       behavior: 'smooth',
    //       block: 'start'
    //     })
    //   })
    // }

    const scroll = () => {
      anchors.forEach((elem) => {
        let target = event.target;
        if (target.tagName === 'A'){
          const blockID = elem.getAttribute('href').substr(1)
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
        
      })
        
    }

    menu.addEventListener('click', (e) => {
      console.log(event.target);
      // e.preventDefault()
      if(event.target.tagName === 'A'){
        // anchors.forEach((item) => {
        //   const blockID = item.getAttribute('href').substr(1)
        //   console.log(blockID);
        //     document.getElementById(blockID).scrollIntoView({
        //       behavior: 'smooth',
        //       block: 'start'
        //     })
        //   handlerMenu()
        // })
        // scroll()
        handlerMenu()
      
      } 
      if (event.target.classList.contains('.close-btn')){
        handlerMenu()
      }

    })

  }
  toggleMenu()

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popupContent = document.querySelector('.popup-content'),
      widthScreen = document.documentElement.clientWidth;
      popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
          if(widthScreen > 750){
            let start = Date.now();
            let i = 100;
            let timer = setInterval(() => {
              let timePassed = (Date.now() - start ) * 2;
              popupContent.style.left = timePassed / 52 + '%';
              if (timePassed > 2000) clearInterval(timer);
              popup.style.display = 'block'
            }, 10);
          } else {Ji
            popup.style.display = 'block'
          }
        })
      })

      popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
          popup.style.display = 'none'
        } else {
          target = target.closest('.popup-content');

          if(!target){
            popup.style.display = 'none'
          }
        }
      })



  }
  togglePopUp()

  // табы
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = document.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++ ){
        if(index === i){
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    } 
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      target = target.closest('.service-header-tab')

      if(target){
        tab.forEach((item, i) => {
          if(item === target){
            toggleTabContent(i)
          }
        })
      }
    })


  }
  tabs()

  // слайдер

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.protfolio-btn'),
      slider = document.querySelector('.portfolio-content'),
      portfolioDots = document.querySelector('.portfolio-dots');
    
    const createDots = () => {
      let dots = document.createElement('li')
      dots.classList.add('dot')
      portfolioDots.append(dots)
      for(let i = 1; i < slide.length; i++){
        let dot = dots.cloneNode(true)
        portfolioDots.append(dot)
      }
    }
    createDots()
    const dot = document.querySelectorAll('.dot');
    dot[0].classList.add('dot-active');

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    }
    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    }

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      if (currentSlide >= slide.length){
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    }
    const stratSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time)
    };

    const stopSlide = () => {
      clearInterval(interval)
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;
      if (!target.matches('.portfolio-btn, .dot')){
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if(target.matches('#arrow-right')){
        currentSlide++;
      } else if(target.matches('#arrow-left')){
        currentSlide--;
      } else if(target.matches('.dot')){
        dot.forEach((elem, index) => {
          if(elem === target){
            currentSlide = index;
          }
        });
      }

      if(currentSlide >= slide.length){
        currentSlide = 0;
      }
      if(currentSlide < 0){
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      let target = event.target;
      if(target.matches('.portfolio-btn') ||
        target.matches('.dot')){
          stopSlide()
        }
    });
  
    slider.addEventListener('mouseout', (event) => {
      let target = event.target;
      if(target.matches('.portfolio-btn') ||
        target.matches('.dot')){
          stratSlide()
        }
    });
    stratSlide(1500)
  }
  
  //смена фото
  const changePhoto = () => {
    const dataImg = document.querySelectorAll('.command__photo');

    for(let i = 0; i < dataImg.length; i++){
      let firstValue = dataImg[i].src
      dataImg[i].addEventListener('mouseenter', (e) => {
        event.target.src = event.target.dataset.img;
      })
      dataImg[i].addEventListener('mouseleave', (e) => {
        event.target.src = firstValue;
      })
    }
  } 
  changePhoto()

  //regExp
  const imputRegEx = () => {
    let calcItem = document.querySelectorAll('.calc-item');
      for(let i = 1; i < calcItem.length; i++){
        calcItem[i].addEventListener('input', () => {
          calcItem[i].value = calcItem[i].value.replace(/\D/g, '');
        })
      }
  }
  imputRegEx()

  slider()

});

