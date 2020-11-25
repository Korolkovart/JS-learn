require('formdata-polyfill')

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
      // body: fd._blob ? fd._blob(formData) : fd,
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

export default sendForm;
