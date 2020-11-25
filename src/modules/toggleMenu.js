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

export default toggleMenu;