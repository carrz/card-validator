const app = require('../app');
const assert = require('chai').assert;

// Test de prueba validar tarjeta
/* describe('validCard()', () => {
  it('Debería devolver true si la tarjeta es válida', () => {
    assert.equal(app.validCard(), true);
  });
  it('debería devolver false si la tarjeta es inválida', () => {
    assert.equal(app.validCard(), false);
  });
}); */

// Test de prueba si es tarjeta
describe('onlyNumber()', () => {
  it('Debería devolver true si recibe un numero', () => {
    assert.equal(app.onlyNumber(50), true);
  });
  it('Debería devolver false si no recibe un numero', () => {
    assert.equal(app.onlyNumber(62), false);
  });
});

// Test de prueba si es letra y/o espacio
describe('onlyText()', () => {
  it('Debería devolver true si recibe letras y espacios', () => {
    assert.equal(app.onlyText(113), true);
  });
  it('Debería devolver false si no recibe cualquier otro caracter', () => {
    assert.equal(app.onlyText(36), false);
  });
});