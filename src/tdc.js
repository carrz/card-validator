const Validator = {};
Validator.validCreditCard = function(form, cnIn, exp, cvvIn, nameIn, btnValid) {
  // Validaciones Numero de tarjeta
  cnIn.addEventListener('keypress', (event) => {
    if (!Validator.onlyNumber(event.keyCode)) {
      event.preventDefault();
    }
  });

  let cnReverse = cnIn.addEventListener('keyup', () => {
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

  nameIn.addEventListener('keypress', (event) => {
    if (!Validator.onlyText(event.keyCode)) {
      event.preventDefault();
    }
  });

  nameIn.addEventListener('keyup', () => {
    nameIn.setAttribute('style', 'text-transform:uppercase');
    if (nameIn.value.length !== 0) {
      nameIn.classList.add('success');
      nameIn.classList.remove('error');
    } else {
      nameIn.classList.add('error');
      nameIn.classList.remove('success');
    }
  });

  btnValid.addEventListener('click', (event) => {
    let form = document.getElementById('form');
    let classError = false;
    for (let index in form) {
      if (form[index].className !== 'error') {
        classError = true;
        event.preventDefault();
        break;
      }
      if (classError === false) {
        let cnReverse = [...cnIn.value].reverse().map(Number);
        Validator.luhn(cnReverse);
      }
    }
  });
  exp.addEventListener('keyup', (event) => {
    const exp = document.getElementById('exp');
    exp.setAttribute('maxlength', '5');
    if (!Validator.theDate(event.keyCode)) {
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
};

// Solo permite introducir letras
Validator.onlyText = function(letters) {
  let isLetter = true;
  let letter = (String.fromCharCode(letters).toString()).toUpperCase();
  const letterDemo = ' ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

  if (letterDemo.indexOf(letter) === -1) {
    isLetter = false;
  }
  return isLetter;
};

// Solo permite introducir numeros
Validator.onlyNumber = function(code) {
  let isNumber = false;
  if (code >= 48 && code <= 57) {
    isNumber = true;
  }
  return isNumber;
};
// Solo permite introducir numeros y el simbolo /.
Validator.theDate = function(date) {
  isDate = String.fromCharCode(date).toString();
  daysDemo = '/0123456789';
  if (daysDemo.indexOf(isDate) === -1) {
    return false;
  } else {
    return true;
  }
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
    // alert('tarjeta valida');
    return true;
  } else {
    // alert('tarjeta invalida');
    return false;
  }
};
Validator.validCreditCard(form, cnIn, exp, cvvIn, nameIn, btnValid);

// module.exports = Validator;