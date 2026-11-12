const { sumar, multiplicar, dividir } = require('./calculadora');

describe('Pruebas de la Calculadora', () => {
  test('sumar 2 + 3 debe devolver 5', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('multiplicar 2 * 3 debe devolver 6', () => {
    expect(multiplicar(2, 3)).toBe(6);
  });

  // TODO (Estudiante): Agrega aquí los dos tests para dividir(a, b)
  test('dividir 10 / 2 debe devolver 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });
  test('dividir 10 / 0 debe dar un error', () => {
    expect(dividir(10, 0)).toBe("Error: división por cero");
  });
});
