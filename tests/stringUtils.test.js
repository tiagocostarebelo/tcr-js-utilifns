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

    // camelCase function test
    describe('camelCase', () => {
        it('should converta string to camelCase', () => {
            expect(camelCase("Hello world")).toBe("helloWorld");
            expect(camelCase("Your name HERE")).toBe("yourNameHere");
            expect(camelCase("New String name here")).toBe("newStringNameHere");
            expect(camelCase("new-string-with-hyphens")).toBe("newStringWithHyphens");
            expect(camelCase("new_string_with_underscores")).toBe("newStringWithUnderscores");
            expect(camelCase("string123with456numbers789")).toBe("string123with456numbers789");
            expect(camelCase("string 123 with 456 numbers 789")).toBe("string123With456Numbers789");
            expect(camelCase("string@123$with^456*numbers#789")).toBe("string123With456Numbers789");
        });

        it('should return an empty string if input is invalid', () => {
            console.error = jest.fn();
            expect(camelCase(1234)).toBe("");
            expect(camelCase("")).toBe("");
            expect(camelCase(null)).toBe("");
            expect(camelCase(undefined)).toBe("");
            expect(console.error).toHaveBeenCalledWith("camelCase: Input must be a non-empty string.");
            console.error.mockRestore();
        });
    });
});
