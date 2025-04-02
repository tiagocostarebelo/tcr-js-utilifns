/**
 *  Checks if an array is empty 
 * @param { Array } array - The array to be checked
 * @returns { boolean | null} True if array is empty, false if not, null if input provided is not a valid array.
 * @example
 * isArrayEmpty([]); // true
 * isArrayEmpty(['John', 'Maria', 'Joseph']); // false
 */
export function isArrayEmpty(arr) {
    if (!Array.isArray(arr)) {
        console.error('isArrayEmpty: Argument is not a valid array.');
        return null;
    }
    return arr.length === 0;
} 