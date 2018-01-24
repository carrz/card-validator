module.exports = {
  onlyNumber(code) {
    let isNumber = false;
    if (code >= 48 && code <= 57) {
      isNumber = true;
    }
    return isNumber;
  }
}