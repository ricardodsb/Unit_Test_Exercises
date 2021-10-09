const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // YEN
    "USD": 1.2, // DOLLAR
    "GBP": 0.8, // POUND
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * oneEuroIs["USD"];
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = (valueInDollar / oneEuroIs["USD"]) * oneEuroIs["JPY"];
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = (valueInYen / oneEuroIs["JPY"]) * oneEuroIs["GBP"];
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };