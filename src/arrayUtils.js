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