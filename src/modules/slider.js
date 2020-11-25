const slider = () => {
  const slide = document.querySelectorAll('.portfolio-item'),
    btn = document.querySelectorAll('.protfolio-btn'),
    slider = document.querySelector('.portfolio-content'),
    portfolioDots = document.querySelector('.portfolio-dots');
  
  const createDots = () => {
    let dots = document.createElement('li')
    dots.classList.add('dot')
    portfolioDots.appendChild(dots)
    for(let i = 1; i < slide.length; i++){
      let dot = dots.cloneNode(true)
      portfolioDots.appendChild(dot)
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

export default slider;