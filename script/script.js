window.addEventListener('DOMContentLoaded', function(){
  'use strict';
 //timer

 const countTimer = (deadline) => {
  let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');

  function getTimeRemaining() {
      let    dateStop = new Date(deadline).getTime(),
      dateNow = new Date().getTime(),
      timeRemaining = (dateStop - dateNow)/1000,
      seconds = Math.floor(timeRemaining % 60),
      minutes = Math.floor((timeRemaining / 60) % 60),
      hours = Math.floor(timeRemaining / 60 / 60);
      return {timeRemaining, hours, minutes, seconds};
  }
  let updateClock = () => {
      let timer = getTimeRemaining();
      
      
      timer.hours.toString().length < 2 ? timerHours.textContent = ("0" + timer.hours) : timerHours.textContent = timer.hours;
      timer.minutes.toString().length < 2 ? timerMinutes.textContent = ("0" + timer.minutes) : timerMinutes.textContent = timer.minutes;
      timer.seconds.toString().length < 2 ? timerSeconds.textContent = ("0" + timer.seconds) : timerSeconds.textContent = timer.seconds;
      ;
      
      
      if(timer.timeRemaining < 0){
          clearInterval(setInterval);
          timerHours.textContent = '00';
          timerMinutes.textContent = '00';
          timerSeconds.textContent = '00';
      }
  }
  updateClock()
  let intervalId = setInterval(updateClock, 1000)
      
}
countTimer('24 november 2020')
 
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
    const form1Name = document.getElementById('form1-name'),
      form1Phone = document.getElementById('form1-phone'),
      form2Name = document.getElementById('form2-name'),
      form2Phone = document.getElementById('form2-phone'),
      form2Message = document.getElementById('form2-message'),
      form3Name = document.getElementById('form3-name'),
      form3Phone = document.getElementById('form3-phone');

    let calcItem = document.querySelectorAll('.calc-item');
      for(let i = 1; i < calcItem.length; i++){
        calcItem[i].addEventListener('input', () => {
          calcItem[i].value = calcItem[i].value.replace(/\D/g, '');
        })
      }
      form1Name.addEventListener('input', () => {
        form1Name.value = form1Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      })
      form1Phone.addEventListener('input', () => {
        form1Phone.value = form1Phone.value.replace(/[^0-9\+]/g, '')
      })
      form2Name.addEventListener('input', () => {
        form2Name.value = form2Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      })
      form2Phone.addEventListener('input', () => {
        form2Phone.value = form2Phone.value.replace(/[^0-9\+]/g, '')
      })
      form2Message.addEventListener('input', () => {
        form2Message.value = form2Message.value.replace(/[?!,.a-z0-9]+$/ig, '');
      })
      form3Name.addEventListener('input', () => {
        form3Name.value = form3Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      })
      form3Phone.addEventListener('input', () => {
        form3Phone.value = form3Phone.value.replace(/[^0-9\+]/g, '')
      })
  }
  imputRegEx()

  //калькулятор
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
        squreValue =    calcSquere.value;

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

    totalValue.textContent = total;

    }

    calcBlock.addEventListener('change', () => {
      let target = event.target;
      if(target === caclType || target ==   calcSquere || 
        target === calcDay || target === calcCount){
          coutSum()
        }
    })
  }
  calc(100)

  //send_aiax-form
  const sendForm = () => {
    const errorMessage = 'Что то пошло не так',
      loadMessage = 'Загрузка...',
      sucsessMessage = 'Спасибо! Мы скоро с Вами свяжемся!',
      form1Name = document.getElementById('form1-name'),
      form1Email = document.getElementById('form1-email'),
      form1Phone = document.getElementById('form1-phone'),
      form2Name = document.getElementById('form2-name'),
      form2Phone = document.getElementById('form2-phone'),
      form2Message = document.getElementById('form2-message'),
      form2Email = document.getElementById('form2-email'),
      form3Name = document.getElementById('form3-name'),
      form3Phone = document.getElementById('form3-phone'),
      form3Email = document.getElementById('form3-email');
    
    const form = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = `font-size: 2rem;`;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      // let body = {};
      // formData.forEach((val, key) => {
      //   body[key] = val;
      // })
      postData(formData)
        .then((response) => {
          if(response.status !== 200){
            throw new Error('status network not 200')
          }
          statusMessage.textContent = sucsessMessage
        })
      .catch((error) => {
        statusMessage.textContent = errorMessage
        console.error(error)
      })
        .finally(() => {
          form1Name.value = '';
          form1Email.value = '';
          form1Phone.value = '';
        })
    });

    form2.addEventListener('submit', (event) => {
      event.preventDefault();
      form2.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      // let body = {};
      // formData.forEach((val, key) => {
      //   body[key] = val;
      // })
      postData(formData)
        .then((response) => {
          if(response.status !== 200){
            throw new Error('status network not 200')
          } 
          statusMessage.textContent = sucsessMessage
        })
      .catch((error) => {
        statusMessage.textContent = errorMessage
        console.error(error)
      })
        .finally(() => {
          form2Name.value = '';
          form2Message.value = '';
          form2Phone.value = '';
          form2Email.value = '';
        })
    });

    form3.addEventListener('submit', (event) => {
      event.preventDefault();
      form3.appendChild(statusMessage);
      statusMessage.style.cssText = `color: #fff;`;
      statusMessage.textContent = loadMessage;
      const formData = new FormData(form);
      // let body = {};
      // formData.forEach((val, key) => {
      //   body[key] = val;
      // })
      postData(formData)
        .then((response) => {
          if(response.status !== 200){
            throw new Error('status network not 200')
          }
          statusMessage.textContent = sucsessMessage
        })
      .catch((error) => {
        statusMessage.textContent = errorMessage
        console.error(error)
      })
      .finally(() => {
        form3Name.value = '';
        form3Phone.value = '';
        form3Email.value = '';
        })
    });

    const postData = (formData) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: "include"
      });


      // return new Promise((resolve, reject) => {
      //   const request = new XMLHttpRequest();
      //   request.addEventListener('readystatechange', () => {
      //     if (request.readyState !== 4){
      //       return;
      //     }
      //     if (request.status === 200){
      //       resolve()
      //     } else {
      //       reject()
      //     }
      //   });
      //   request.open('POST', './server.php');
      //   request.setRequestHeader('Content-Type', 'application/json');
        
      //   request.send(JSON.stringify(body))
      // });
      
    }
  }
  sendForm()


  slider()

});

