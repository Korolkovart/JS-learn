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

export default imputRegEx;