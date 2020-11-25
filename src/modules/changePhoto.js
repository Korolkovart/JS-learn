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

export default changePhoto;
