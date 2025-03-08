/**
 * Checks if a number is even
 * @param {number} number - The number to check.
 * @returns {boolean | undefined} True if the number is even, false otherwise. Returns undefined if the input is not a valid number.
 */
export function isEven(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.error("isEven: Input must be a valid number.");
        return undefined;
    }

    return number % 2 === 0;
}

/**
 * Checks if a number is odd
 * @param {number} number - The number to check.
 * @returns {boolean | undefined} True if the number is odd, false otherwise. Returns undefined if the input is not a valid number.
 */
export function isOdd(number) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.error("isOdd: Input must be a valid number.");
        return undefined;
    }

    return number % 2 !== 0;
}

/**
 * Rounds a number to a specified number of decimal places
 * @param {number} number - The number to round.
 * @param {number} decimalPlaces - The number of decimal places to round to. Defaults to 0.
 * @returns {number | NaN} The rounded number.Returns NaN if the inputs are not valid numbers.
 */
export function roundTo(number, decimalPlaces) {
    if (typeof number !== 'number' || isNaN(number)) {
        console.error("roundTo: Input number must be valid number.");
        return NaN;
    }

    if (typeof decimalPlaces !== 'number' || isNaN(decimalPlaces)) {
        console.error("roundTo: Input decimalPlaces must be a valid number. Using default value of 0.");
        decimalPlaces = 0;
    }

    if (decimalPlaces < 0) {
        console.error("roundTo: decimalPlaces must be a non-negative number.");
        return NaN;
    }

    return Number(number.toFixed(decimalPlaces));
}

/**
 * Generates a random integer within a specified range (inclusive)
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number | NaN} A random integer between min and max (inclusive), or NaN if min or max are not valid numbers.
 */
export function getRandomInt(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number' || isNaN(min) || isNaN(max)) {
        console.error("getRandomInt: min and max must be valid numbers");
        return NaN;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    if (min > max) {
        console.warn("getRandomInt: min cannot be greated than max. Swapping values.");
        [min, max] = [max, min];
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}
