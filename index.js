const form = document.querySelector('form');
/*
form.addEventListener('submit', (event) => {
  e.preventDefault();
  if (validateCardDetails(form)) {
    console.log('datos válido... enviar...');
  } else {
    console.log('datos inválidos');
  }
});*/
const cn = document.getElementById('cn');
const cnMsg = document.createElement('span');
const msgTxt1 = document.createTextNode('Verifique el número de caracteres ingresados');
cnMsg.appendChild(msgTxt1);
cn.appendChild(cnMsg);
cnMsg.style.display = 'none';

const cvv = document.getElementById('cvv');
const cvvMsg = document.createElement('span');
const msgTxt2 = document.createTextNode('Verifique el número de caracteres ingresados');
cvvMsg.appendChild(msgTxt2);
cvv.appendChild(cvvMsg);
cvvMsg.style.display = 'none';

form.cnIn.addEventListener('keypress', (event) => {
  if (!onlyNumber(event.keyCode)) {
    event.preventDefault();
  }
});

form.cnIn.addEventListener('keyup', () => {
  const cnIn = document.getElementById('cnIn');
  cnIn.setAttribute('maxlength', '18');
  let cnInVal = cnIn.value;
  if (cnInVal.length >= 15) {
    cnMsg.style.display = 'none';
    /* cnIn.classList.add('success');
    cnIn.classList.remove('error'); */
  } else {
    cnMsg.style.display = 'initial';
    /* cnIn.classList.add('error');
    cnIn.classList.remove('success'); */
  }
});

form.cvvIn.addEventListener('keypress', (event) => {
  if (!onlyNumber(event.keyCode)) {
    event.preventDefault();
  }
});
form.cvvIn.addEventListener('keyup', () => {
  const cvvIn = document.getElementById('cvvIn');
  cvvIn.setAttribute('maxlength', '3');
  let cvvInVal = cvvIn.value;
  if (cvvInVal.length === 3) {
    cvvMsg.style.display = 'none';
    // cvvIn.classList.add('success');
  } else {
    cvvMsg.style.display = 'initial';
    // cvvIn.classList.add('error');
  }
});
// Sólo permite introducir números.
function onlyNumber(code) {
  let isNumber = false;
  if (code >= 48 && code <= 57) {
    isNumber = true;
  }
  return isNumber;
}

// Solo permite introducir letras.
function onlyText(letters) {
  let isLetter = true;
  let letter = (String.fromCharCode(letters).toString()).toUpperCase();
  const letterDemo = ' ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

  if (letterDemo.indexOf(letter) === -1) {
    isLetter = false;
  }
  return isLetter;
}

form.name.addEventListener('keypress', (event) => {
  if (!onlyText(event.keyCode)) {
    event.preventDefault();
  }
}); 
form.name.addEventListener('keyup', () => {
  const name = document.getElementById('name');
  name.setAttribute('style', 'text-transform:uppercase');
  if (name.value.length !== 0) {
    name.classList.add('success');
    name.classList.remove('error');
  } else {
    name.classList.add('error');
    name.classList.remove('success');
  }
});

// Solo permite introducir numeros y el simbolo /.
function theDate(date) {
  isDate = String.fromCharCode(date).toString();
  daysDemo = '/0123456789';

  if (daysDemo.indexOf(isDate) === -1) {
    return false;
  } else {
    return true;
  }
}

form.exp.addEventListener('keypress', (event) => {
  const exp = document.getElementById('exp');
  exp.setAttribute('maxlength', '5');
  if (!theDate(event.keyCode)) {
    event.preventDefault();
  }
  if (exp.value.length === 5) {
    let date = exp.value.split('/');
    if ((date[0] >= 1 && date[0] <= 12) && (date[1] >= 18 && date[1] <= 23)) {
      exp.classList.add('success');
      exp.classList.remove('error');
    } else {
      exp.classList.add('error');
      exp.classList.remove('success');
    }
  } 
}); 

