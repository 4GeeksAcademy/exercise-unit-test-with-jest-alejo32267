// Importo las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const expected = 3.5 * 1.07;
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(expected); // Utiliza toBeCloseTo para comparar números flotantes
});

test("One dollar should be 156.5 yenes", function() {
    const expected = 3.5 * 156.5 / 1.07; // Convertir 3.5 dólares a yenes
    const yenes = fromDollarToYen(3.5);
    expect(yenes).toBeCloseTo(expected);
});

test("One yen should be 0.0055 libras", function() {
    const expected = 3.5 / 156.5 * 0.87; // Convertir 3.5 yenes a libras
    const libras = fromYenToPound(3.5);
    expect(libras).toBeCloseTo(expected);
});
