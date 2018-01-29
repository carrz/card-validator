const tdc = require('../src/tdc');
const assert = require('chai').assert;

// Test de prueba validar tarjeta
describe('luhn()', () => {
  it('Debería devolver true si la tarjeta es válida', () => {
    assert.equal(tdc.luhn(4611081154056470), true);
    assert.equal(tdc.luhn(4611081154056472), false);
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