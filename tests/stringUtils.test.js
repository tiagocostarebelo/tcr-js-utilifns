import {
    capitalize,
    camelCase,
    kebabCase,
    snakeCase,
    truncate,
    reverseString,
    countOccurrences,
    startsWith,
    endsWith,
    removeWhitespace,
    isAnagram
} from '../src/stringUtils';

describe('String Utilities', () => {

    // capitalize function test
    describe('capitalize', () => {
        it('should capitalize the first letter of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('world')).toBe('World');
            expect(capitalize('hello world')).toBe('Hello world');
        });

        it('should return an empty string if the input is invalid', () => {
            console.error = jest.fn();
            expect(capitalize(1234)).toBe("");
            expect(capitalize("")).toBe("");
            expect(capitalize(null)).toBe("");
            expect(capitalize(undefined)).toBe("");
            expect(console.error).toHaveBeenCalledWith("capitalize: Input must be a non-empty string.");
            console.error.mockRestore();
        });
    });
});
