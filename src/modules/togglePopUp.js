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
        } else {
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

export default togglePopUp