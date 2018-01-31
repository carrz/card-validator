const tdc = require('../src/tdc');
const assert = require('chai').assert;

// Test de prueba validar tarjeta
describe('luhn()', () => {
  it('Debería devolver true si la tarjeta es válida', () => {
    assert.equal(tdc.luhn([0, 7, 4, 6, 5, 0, 4, 5, 1, 1, 8, 0, 1, 1, 6, 4]), true);
    assert.equal(tdc.luhn([2, 7, 4, 6, 5, 0, 4, 5, 1, 1, 8, 0, 1, 1, 6, 4]), false);
  });
});

// Test de prueba si es tarjeta
describe('onlyNumber()', () => {
  it('Debería devolver true si recibe un numero', () => {
    assert.equal(tdc.onlyNumber(50), true);
    assert.equal(tdc.onlyNumber(62), false);
  });
});

// Test de prueba si es letra y/o espacio
describe('onlyText()', () => {
  it('Debería devolver true si recibe letras y espacios', () => {
    assert.equal(tdc.onlyText(113), true);
    assert.equal(tdc.onlyText(36), false);
  });
});

// Test de prueba si es número o '/'
describe('theDate()', () => {
  it('Debería devolver true si recibe números y / ', () => {
    assert.equal(tdc.theDate(47), true);
  });
  it('Debería devolver false si no recibe cualquier otro caracter', () => {
    assert.equal(tdc.theDate(113), false);
  });
});