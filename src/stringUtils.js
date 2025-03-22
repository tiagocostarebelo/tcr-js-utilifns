/**
 * Capitalizes the first letter of a string.
 * @param {string} str - The input string.
 * @returns {string | undefined} The capitalized string, or undefined if input is invalid.
 * @example
 * capitalize("hello world"); // "Hello world"
 */
export function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error("capitalize: Input must be a non-empty string.");
        return undefined;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts a string to camelCase.
 * @param {string} str - The input string.
 * @returns {string | undefined} The camelCased string or undefined if input is invalid.
 * @example
 * camelCase("hello world"); // "helloWorld"
 */
export function camelCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error("camelCase: Input must be a non-empty string.");
        return undefined;
    }
    return str
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => chr.toUpperCase());
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The input string.
 * @returns {string | undefined} The kebab-cased string or undefined if input is not a valid string.
 * @example
 * kebabCase("hello world"); // "hello-world"
 */
export function kebabCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error("kebabCase: Input must be a non-empty string.");
        return undefined;
    }
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "-");
}


/**
 * Converts a string to snake_case.
 * @param {string} str - The input string.
 * @returns {string | undefined } The snake_cased string or undefined if input is not a valid string.
 * @example
 * snakeCase("hello world"); // "hello_world"
 */
export function snakeCase(str) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error("snakeCase: Input must be a non-empty string.");
        return undefined;
    }
    return str
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "_")
        .replace(/[^a-z0-9_]/g, "_");
}


/**
 * Truncates a string to a specified length, adding "..." if truncated.
 * @param {string} str - The input string.
 * @param {number} length - The maximum length.
 * @returns {string | undefined } The truncated string, undefined if input is not a valid string or return the origin string if Length is not a positive number.
 * @example
 * truncate("Hello world", 5); // "Hello..."
 */
export function truncate(str, length) {
    if (typeof str !== 'string' || str.length === 0) {
        console.error("truncate: Input must be a non-empty string.");
        return undefined;
    }
    if (typeof length !== 'number' || length <= 0) {
        console.error("truncate: Length must be a positive number.");
        return str;
    }
    return str.length > length ? str.slice(0, length) + "..." : str;
}

/**
 * Reverses a string.
 * @param {string} str - The input string.
 * @returns {string | undefined } The reversed string or undefined if input is not a valid string.
 * @example
 * reverseString("hello"); // "olleh"
 */
export function reverseString(str) {
    if (typeof str !== 'string' || str === "") {
        console.error("reverseString: Input must be a string.");
        return undefined;
    }
    return str.split("").reverse().join("");
}


/**
 * Counts the occurrences of a substring within a string.
 * @param {string} str - The main string.
 * @param {string} sub - The substring to count.
 * @returns {number | undefined } The number of occurrences or undefiend if any or both inputs are not valid strings.
 * @example
 * countOccurrences("hello hello", "hello"); // 2
 */
export function countOccurrences(str, sub) {
    if (typeof str !== 'string' || typeof sub !== 'string' || str === "" || sub.length === 0) {
        console.error("countOccurrences: Both arguments must be valid strings.");
        return undefined;
    }
    return str.split(sub).length - 1;
}

/**
 * Checks if a string starts with a given substring.
 * @param {string} str - The main string.
 * @param {string} prefix - The prefix to check.
 * @returns {boolean} True if the string starts with the prefix, false otherwise. Returns undefined if one or both inputs are not valid strings.
 * @example
 * startsWith("hello world", "hello"); // true
 */
export function startsWith(str, prefix) {
    if (typeof str !== 'string' || typeof prefix !== 'string' || str === "" || prefix === "") {
        console.error("startsWith: Both arguments must be valid strings.");
        return undefined;
    }
    return str.startsWith(prefix);
}

/**
 * Checks if a string ends with a given substring.
 * @param {string} str - The main string.
 * @param {string} suffix - The suffix to check.
 * @returns {boolean | undefined } True if the string ends with the suffix, false otherwise and undefined if one or both argument inputs are not valid.
 * @example
 * endsWith("hello world", "world"); // true
 */
export function endsWith(str, suffix) {
    if (typeof str !== 'string' || typeof suffix !== 'string' || str === "" || suffix === "") {
        console.error("endsWith: Both arguments must be valid strings.");
        return undefined;
    }
    return str.endsWith(suffix);
}


/**
 * Removes all whitespace from a string.
 * @param {string} str - The input string.
 * @returns {string | undefined} The string without whitespace or undefined if input is invalid.
 * @example
 * removeWhitespace("  hello world  "); // "helloworld"
 */
export function removeWhitespace(str) {
    if (typeof str !== 'string' || str === '') {
        console.error("removeWhitespace: Input must be a string.");
        return undefined;
    }
    return str.replace(/\s+/g, "");
}

/**
 * Checks if two strings are anagrams (contain the same characters in any order).
 * @param {string} str1 - First string to check
 * @param {string} str2 - Second string to compare with
 * @return {boolean} True if the strings have the same characters, or false if otherwise.
 * @example
 * isAnagram("listen", "silent"); // true
 * isAnagram("hello", "world"); // false
 */
export function isAnagram(str1, str2) {
    if (typeof str1 !== 'string' || typeof str2 !== 'string') {
        console.error("isAnagram: Inputs must be strings.");
        return false;
    }
    const formatString = (str) =>
        str
            .replace(/[^\w]/g, '')
            .toLowerCase()
            .split('')
            .sort()
            .join('');

    return formatString(str1) === formatString(str2);

}
