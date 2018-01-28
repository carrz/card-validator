module.exports = {
  onlyNumber(code) {
    let isNumber = false;
    if (code >= 48 && code <= 57) {
      isNumber = true;
    }
    return isNumber;
  },
  onlyText(letters) {
    let isLetter = true;
    let letter = String.fromCharCode(letters).toString();
    const letterDemo = ' abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
  
    if (letterDemo.indexOf(letter) === -1) {
      isLetter = false;
    }
    return isLetter;
  },
  theDate(date) {
    isDate = String.fromCharCode(date).toString();
    daysDemo = '/0123456789';
  
    if (daysDemo.indexOf(isDate) === -1) {
      return false;
    } else {
      return true;
    }
  }
};