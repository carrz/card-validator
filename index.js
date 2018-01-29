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
    let cnReverse = cnInVal.split('').reverse();

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
<<<<<<< HEAD
// Algoritmo luhn
for (var index = 1; index < arrInv.length; index += 2) {
  if (arrInv[index] * 2 >= 10) {
    var sum = 0;
    var aux = arrInv[index] * 2;
    aux = aux.toString();
    for (var indexAux = 0; indexAux < aux.length; indexAux++) {
      sum += parseInt(aux[indexAux]);
    }
    arrInv[index] = sum;
  } else {
    arrInv[index] *= 2;
  }
}

var sumDigit = 0;
for (var index = 0; i < arrInv.length; index++) {
  sumDigit += arrInv[index];
}
var tarjetaValida = false;
if (sumDigit % 10 === 0) {
  alert('Tarjeta Válida');
} else {
  alert('Tarjeta Inválida');
}
=======
// Solo permite introducir letras.
function onlyText(letters) {
  let isLetter = true;
  let letter = String.fromCharCode(letters).toString();
  const letterDemo = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

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
/* form.name.addEventListener('keyup', () => {
  const name = document.getElementById('name');
  let nameVal = name.value;
  nameVal = nameVal.toUpperCase();
}); */ // No funciona todavía


function theDate(date) {
  isDate = String.fromCharCode(date).toString();
  daysDemo = '/0123456789';

  if (daysDemo.indexOf(isDate) === -1) {
    return false;
  }
  return isDate;
}
form.exp.addEventListener('keypress', (event) => {
  const exp = document.getElementById('exp');
  if ((!theDate(event.keyCode)) || (exp.value.length === 5)) {
    event.preventDefault();
  }
}); 

// Formula validadora de fecha formato MM/YY
/* function validDate(exp.value) {
  const exp = document.getElementById('exp');
  var result = false;
  var date = exp.value.split('/');

  if ((date[0] >= 1 && date[0] <= 12) && (date[1] >= 18 && date[1] <= 23)) {
    result = true;
  }
  return result;
} */
>>>>>>> upstream/BianCarla
