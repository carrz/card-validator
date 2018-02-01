'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Validator = {};
Validator.validCreditCard = function(cnIn, exp, cvvIn, nameIn, btnValid) {
  // Validaciones Numero de tarjeta
  cnIn.addEventListener('keypress', function(event) {
    if (!Validator.onlyNumber(event.keyCode)) {
      event.preventDefault();
    }
  });

  var cnReverse = cnIn.addEventListener('keyup', function() {
    cnIn.setAttribute('maxlength', '18');
    var cnInVal = cnIn.value;
    if (cnInVal.length >= 15) {
      cnIn.classList.add('success');
      cnIn.classList.remove('error');
    } else {
      cnIn.classList.add('error');
      cnIn.classList.remove('success');
    }
  });

  // Validaciones Numero de verificación (cvv)
  cvvIn.addEventListener('keypress', function(event) {
    if (!Validator.onlyNumber(event.keyCode)) {
      event.preventDefault();
    }
  });
  cvvIn.addEventListener('keyup', function() {
    var cvvIn = document.getElementById('cvvIn');
    cvvIn.setAttribute('maxlength', '3');
    var cvvInVal = cvvIn.value;
    if (cvvInVal.length === 3) {
      cvvIn.classList.add('success');
      cvvIn.classList.remove('error');
    } else {
      cvvIn.classList.add('error');
      cvvIn.classList.remove('success');
    }
  });

  nameIn.addEventListener('keypress', function(event) {
    if (!Validator.onlyText(event.keyCode)) {
      event.preventDefault();
    }
  });

  nameIn.addEventListener('keyup', function() {
    nameIn.setAttribute('style', 'text-transform:uppercase');
    if (nameIn.value.length !== 0) {
      nameIn.classList.add('success');
      nameIn.classList.remove('error');
    } else {
      nameIn.classList.add('error');
      nameIn.classList.remove('success');
    }
  });

  btnValid.addEventListener('click', function(event) {
    if (document.querySelector('.error') || !document.querySelector('.success')) {
      classError = true;
      event.preventDefault();
    } else {
      var _cnReverse = [].concat(_toConsumableArray(cnIn.value)).reverse().map(Number);
      Validator.luhn(_cnReverse);
    }
  });
  exp.addEventListener('keyup', function(event) {
    var exp = document.getElementById('exp');
    exp.setAttribute('maxlength', '5');
    if (!Validator.theDate(event.keyCode)) {
      event.preventDefault();
    }
    if (exp.value.length === 5) {
      var date = exp.value.split('/');
      if (date[0] >= 1 && date[0] <= 12 && date[1] >= 18 && date[1] <= 23) {
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
  var isLetter = true;
  var letter = String.fromCharCode(letters).toString().toUpperCase();
  var letterDemo = ' ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

  if (letterDemo.indexOf(letter) === -1) {
    isLetter = false;
  }
  return isLetter;
};

// Solo permite introducir numeros
Validator.onlyNumber = function(code) {
  var isNumber = false;
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
  for (var index = 1; index < cnReverse.length; index += 2) {
    if (cnReverse[index] * 2 >= 10) {
      var sum = 0;
      var aux = cnReverse[index] * 2;
      aux = aux.toString();
      for (var indexAux = 0; indexAux < aux.length; indexAux++) {
        sum += parseInt(aux[indexAux]);
      }
      cnReverse[index] = sum;
    } else {
      cnReverse[index] *= 2;
    }
  }
  var sumReverse = cnReverse.reduce(function(previousValue, currentValue) {
    return previousValue + currentValue;
  });
  var validCard = false;
  if (sumReverse % 10 === 0) {
    return true;
  } else {
    return false;
  }
};
module.exports = Validator;