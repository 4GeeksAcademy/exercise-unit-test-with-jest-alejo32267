const oneEuroIs = {
    JPY: 156.5, // yen japonés
    USD: 1.07,  // dólar estadounidense
    GBP: 0.87   // libra esterlina
};

const fromEuroToDollar = (euros) => euros * oneEuroIs.USD;

const fromDollarToYen = (dollars) => {
    const euros = dollars / oneEuroIs.USD;
    const yenes = euros * oneEuroIs.JPY;
    return yenes;
};

const fromYenToPound = (yenes) => {
    const euros = yenes / oneEuroIs.JPY;
    const libras = euros * oneEuroIs.GBP;
    return libras;
};

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
