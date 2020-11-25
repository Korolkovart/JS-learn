const imputRegEx = () => {
  const form1Name = document.getElementById('form1-name'),
    form1Email = document.getElementById('form1-email'),
    form1Phone = document.getElementById('form1-phone'),
    form2Name = document.getElementById('form2-name'),
    form2Email = document.getElementById('form2-email'),
    form2Phone = document.getElementById('form2-phone'),
    form2Message = document.getElementById('form2-message'),
    form3Name = document.getElementById('form3-name'),
    form3Email = document.getElementById('form3-email'),
    form3Phone = document.getElementById('form3-phone'),
    formBtn = document.querySelectorAll('.form-btn');
      console.log(formBtn[0]);
      //0

      //4

      //5
  let calcItem = document.querySelectorAll('.calc-item');
    for(let i = 1; i < calcItem.length; i++){
      calcItem[i].addEventListener('input', () => {
        calcItem[i].value = calcItem[i].value.replace(/\D/g, '');
      })
    }

    formBtn[0].setAttribute('disabled', true)
    form1Name.addEventListener('input', () => {
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form1Email.value);
      const checkPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(form1Phone.value);
      form1Name.value = form1Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      for(let i = 0; form1Name.value.length > i; i++){
        formBtn[0].setAttribute('disabled', true)
        if (i > 1 && checkEmail === true && checkPhone === true){
          formBtn[0].removeAttribute('disabled')
        }
      }
    })

    form1Email.addEventListener('input', () => {
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form1Email.value);
      console.log(checkEmail);
      if (checkEmail){
        formBtn[0].removeAttribute('disabled')
      } else {
        formBtn[0].setAttribute('disabled', true)
      }
    })


    form1Phone.addEventListener('input', () => {
      const checkPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(form1Phone.value)
      form1Phone.value = form1Phone.value.replace(/[^0-9\+]/g, '')
      if(checkPhone){
        formBtn[0].removeAttribute('disabled')
      }else {
        formBtn[0].setAttribute('disabled', true)
      }
    })


    formBtn[4].setAttribute('disabled', true)
    form2Name.addEventListener('input', () => {
      formBtn[4].setAttribute('disabled', true)
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form2Email.value);
      form2Name.value = form2Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      for(let i = 0; form2Name.value.length > i; i++){
        formBtn[4].setAttribute('disabled', true)
        if (i > 1 && checkEmail === true){
          formBtn[4].removeAttribute('disabled')
        }
      }
    })

    form2Email.addEventListener('input', () => {
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form2Email.value);
      console.log(checkEmail);
      if (checkEmail){
        formBtn[4].removeAttribute('disabled')
      } else {
        formBtn[4].setAttribute('disabled', true)
      }
    })


    // form2Name.addEventListener('input', () => {
    //   form2Name.value = form2Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
    // })
    form2Phone.addEventListener('input', () => {
      form2Phone.value = form2Phone.value.replace(/[^0-9\+]/g, '')
    })
    form2Message.addEventListener('input', () => {
      form2Message.value = form2Message.value.replace(/[^-\s.,":;!?А-Яа-я]/g,'');
    })


    formBtn[5].setAttribute('disabled', true)
    form3Name.addEventListener('input', () => {
      formBtn[5].setAttribute('disabled', true)
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form3Email.value);
      form3Name.value = form3Name.value.replace(/[?!,.a-z0-9]+$/ig, '');
      for(let i = 0; form3Name.value.length > i; i++){
        formBtn[4].setAttribute('disabled', true)
        if (i > 1 && checkEmail === true){
          formBtn[5].removeAttribute('disabled')
        }
      }
    })

    form3Email.addEventListener('input', () => {
      const checkEmail = /\w+@\w+\.\w{2,3}/.test(form3Email.value);
      console.log(checkEmail);
      if (checkEmail){
        formBtn[5].removeAttribute('disabled')
      } else {
        formBtn[5].setAttribute('disabled', true)
      }
    })

    form3Phone.addEventListener('input', () => {
      form3Phone.value = form3Phone.value.replace(/[^0-9\+]/g, '')
    })
    
 


}

export default imputRegEx;