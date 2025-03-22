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

    // kebabCase function test
    describe('kebabCase', () => {
        it('should converta string to kebabCase', () => {
            expect(kebabCase("Hello world")).toBe("hello-world");
            expect(kebabCase("Your name HERE")).toBe("your-name-here");
            expect(kebabCase("New String name here")).toBe("new-string-name-here");
            expect(kebabCase("already-in-kebab-case")).toBe("already-in-kebab-case");
            expect(kebabCase("new_string_with_underscores")).toBe("new-string-with-underscores");
            expect(kebabCase("string 123 with 456 numbers 789")).toBe("string-123-with-456-numbers-789");
            expect(kebabCase("  leading and trailing spaces  ")).toBe("leading-and-trailing-spaces");
        });

        it('should return an empty string if input is invalid', () => {
            console.error = jest.fn();
            expect(kebabCase(1234)).toBe("");
            expect(kebabCase("")).toBe("");
            expect(kebabCase(null)).toBe("");
            expect(kebabCase(undefined)).toBe("");
            expect(console.error).toHaveBeenCalledWith("kebabCase: Input must be a non-empty string.");
            console.error.mockRestore();
        });
    });
});
