/**
 *  Checks if an array is empty 
 * @param { Array } array - The array to be checked
 * @returns { boolean | undefined } True if array is empty, false if not, undefined if input provided is not a valid array.
 * @example
 * isArrayEmpty([]); // true
 * isArrayEmpty(['John', 'Maria', 'Joseph']); // false
 */
export function isArrayEmpty(arr) {
    if (!Array.isArray(arr)) {
        console.error('isArrayEmpty: Argument is not a valid array.');
        return undefined;
    }
    return arr.length === 0;
}


/**
 * Performs a shallow comparison to check if two arrays are equal in both value and order.
 * Only compares primitive values (e.g., strings, numbers, booleans). 
 * @param { Array } arr1 - The first array being entered as an argument
 * @param { Array } arr2 - The second array being entered as an argument
 * @returns { boolean | undefined } True if the provided Arrays are equal in their values, false if they have different values, undefined if one or both the arrays are not valid.
 * @example
 * isArrayEqual([1, 2, 3], [1, 2, 3]); // true
 * isArrayEqual([1, 2, 3], [1, 2, "3"]); // false
 * isArrayEqual([1, 2], [2, 1]); // false
 * isArrayEqual([1, 2], 'not-an-array'); // undefined
 * isArrayEqual(["one", { name: "John" }], ["one", { name: "John" }]); // false (different object references)
 */
export function isArrayEqual(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        console.error('isArrayEqual: Argument is not a valid array.');
        return undefined;
    }
    if (arr1.length !== arr2.length) {
        console.error('isArrayEqual: Arrays are not of equal length.');
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
};

/**
 * Splits an array into smaller arrays ("chunks") of a specified size.
 *
 * @param {Array} array - The array to be chunked.
 * @param {number} size - The size of each chunk (must be a positive integer).
 * @returns {Array | undefined} An array containing the chunked arrays, or undefined if inputs are invalid.
 *
 * @example
 * chunkArray([1, 2, 3, 4, 5], 2); // Returns: [[1, 2], [3, 4], [5]]
 * chunkArray('not-an-array', 2);  // Returns: undefined
 */
export function chunkArray(array, size) {
    if (!Array.isArray(array)) {
        console.error('chunkArray: Argument is not a valid array.');
        return undefined;
    }

    if (typeof size !== 'number' || isNaN(size) || size <= 0 || !Number.isInteger(size)) {
        console.error('chunkArray: Size needs to be a positive integer.');
        return undefined;
    }

    const newChunkArray = []

    for (let i = 0; i < array.length; i += size) {
        newChunkArray.push(array.slice(i, i + size));
    }

    return newChunkArray;
}

/**
 * Removes duplicate primitive values from an array
 * 
 * @param {Array} array - The array to check for duplicate values
 * @returns {Array | undefined} An array with no duplicate values or undefined if input is invalid.
 * 
 * @example
 * removeDuplicates([1, 2, 2, 3, 4, 5, 5, 6]); // Returns: [1, 2, 3, 4, 5, 6]
 * removeDuplicates('not-an-array'); // Returns: undefined
 */
export function removeDuplicates(array) {
    if (!Array.isArray(array)) {
        console.error('removeDuplicates: Argument is not a valid array.');
        return undefined;
    }

    return array.filter((element, index) => array.indexOf(element) === index)
}

/**
 * Remove falsy values from an array
 * 
 * Falsy values include: `false`, `0`, `''` (empty string), `null`, `undefined`, and `NaN`.
 * 
 * @param {Array} array - The array to check for falsy values
 * @returns {Array | undefined} An array with no falsy values or undefined if input is invalid.
 * 
 * @example
 * removeFalsy([1, "Ben", null, {"key": "value"}, undefined, 23, 0, true, false]) // Returns: [1, 'Ben', {…}, 23, true]
 */
export function removeFalsy(array) {
    if (!Array.isArray(array)) {
        console.error('removeFalsy: Argument is not a valid array.');
        return undefined;
    }

    return array.filter(Boolean);
}




