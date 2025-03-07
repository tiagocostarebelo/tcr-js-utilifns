export function isEven(number) {
    return number % 2 === 0;
}

export function isOdd(number) {
    return number % 2 !== 0;
}

export function roundTo(decimalPlaces, number) {
    return Number(number.toFixed(decimalPlaces));
}


