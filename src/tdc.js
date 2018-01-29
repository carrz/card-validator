// const form = document.querySelector('form');
const Validator = {};

Validator.validCreditCard = function(cnIn, exp, cvvIn, name, btnValid) {
  // Validaciones Numero de tarjeta
  cnIn.addEventListener('keypress', (event) => {
    if (!Validator.onlyNumber(event.keyCode)) {
      event.preventDefault();
    }
  });

  var cnReverse = form.cnIn.addEventListener('keyup', () => {
    cnIn.setAttribute('maxlength', '18');
    let cnInVal = cnIn.value;
    if (cnInVal.length >= 15) {
      cnIn.classList.add('success');
      cnIn.classList.remove('error');
    } else {
      cnIn.classList.add('error');
      cnIn.classList.remove('success');
    }
  });

  // Validaciones Numero de verificación (cvv)
  cvvIn.addEventListener('keypress', (event) => {
    if (!Validator.onlyNumber(event.keyCode)) {
      event.preventDefault();
    }
  });
  cvvIn.addEventListener('keyup', () => {
    const cvvIn = document.getElementById('cvvIn');
    cvvIn.setAttribute('maxlength', '3');
    let cvvInVal = cvvIn.value;
    if (cvvInVal.length === 3) {
      cvvIn.classList.add('success');
      cvvIn.classList.remove('error');
    } else {
      cvvIn.classList.add('error');
      cvvIn.classList.remove('success');
    }
  });

  // Sólo permite introducir números.
  /* Validator.onlyNumber = function(code) {
    let isNumber = false;
    if (code >= 48 && code <= 57) {
      isNumber = true;
    }
    return isNumber;
  }; */

  btnValid.addEventListener('click', () => {
    let cnReverse = [...cnIn.value].reverse().map(Number);
    Validator.luhn(cnReverse);
  });

  form.name.addEventListener('keypress', (event) => {
    if (!Validator.onlyText(event.keyCode)) {
      event.preventDefault();
    }
  });

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
};

Validator.onlyText = function(letters) {
  let isLetter = true;
  let letter = String.fromCharCode(letters).toString();
  const letterDemo = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

  if (letterDemo.indexOf(letter) === -1) {
    isLetter = false;
  }
  return isLetter;
};

Validator.onlyNumber = function(code) {
  let isNumber = false;
  if (code >= 48 && code <= 57) {
    isNumber = true;
  }
  return isNumber;
};

// Algoritmo luhn
Validator.luhn = function(cnReverse) {
  for (let index = 1; index < cnReverse.length; index += 2) {
    if (cnReverse[index] * 2 >= 10) {
      let sum = 0;
      let aux = cnReverse[index] * 2;
      aux = aux.toString();
      for (let indexAux = 0; indexAux < aux.length; indexAux++) {
        sum += parseInt(aux[indexAux]);
      }
      cnReverse[index] = sum;
    } else {
      cnReverse[index] *= 2;
    }
  }
  const sumReverse = cnReverse.reduce((previousValue, currentValue) => previousValue + currentValue);
  let validCard = false;
  if (sumReverse % 10 === 0) {
    alert('Tarjeta Válida');
    return true;
  } else {
    alert('Tarjeta Inválida');
    return false;
  }
};
Validator.validCreditCard(cnIn, exp, cvvIn, name, btnValid);

// module.exports = Validator;