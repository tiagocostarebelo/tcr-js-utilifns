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
        it('Should capitalize the first letter of a string', () => {
            expect(capitalize('hello')).toBe('Hello');
            expect(capitalize('world')).toBe('World');
            expect(capitalize('hello world')).toBe('Hello world');
        });

        it('Should return an empty string if the input is invalid', () => {
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
        it('Should converta string to camelCase', () => {
            expect(camelCase("Hello world")).toBe("helloWorld");
            expect(camelCase("Your name HERE")).toBe("yourNameHere");
            expect(camelCase("New String name here")).toBe("newStringNameHere");
            expect(camelCase("new-string-with-hyphens")).toBe("newStringWithHyphens");
            expect(camelCase("new_string_with_underscores")).toBe("newStringWithUnderscores");
            expect(camelCase("string123with456numbers789")).toBe("string123with456numbers789");
            expect(camelCase("string 123 with 456 numbers 789")).toBe("string123With456Numbers789");
            expect(camelCase("string@123$with^456*numbers#789")).toBe("string123With456Numbers789");
        });

        it('Should return an empty string if input is invalid', () => {
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
        it('Should converta string to kebabCase', () => {
            expect(kebabCase("Hello world")).toBe("hello-world");
            expect(kebabCase("Your name HERE")).toBe("your-name-here");
            expect(kebabCase("New String name here")).toBe("new-string-name-here");
            expect(kebabCase("already-in-kebab-case")).toBe("already-in-kebab-case");
            expect(kebabCase("new_string_with_underscores")).toBe("new-string-with-underscores");
            expect(kebabCase("string 123 with 456 numbers 789")).toBe("string-123-with-456-numbers-789");
            expect(kebabCase("  leading and trailing spaces  ")).toBe("leading-and-trailing-spaces");
        });

        it('Should return an empty string if input is invalid', () => {
            console.error = jest.fn();
            expect(kebabCase(1234)).toBe("");
            expect(kebabCase("")).toBe("");
            expect(kebabCase(null)).toBe("");
            expect(kebabCase(undefined)).toBe("");
            expect(console.error).toHaveBeenCalledWith("kebabCase: Input must be a non-empty string.");
            console.error.mockRestore();
        });
    });

    // snakeCase function test 
    describe('snakeCase', () => {
        it('Should convert a string to snake_case', () => {
            expect(snakeCase("Hello world")).toBe("hello_world");
            expect(snakeCase("Your name HERE")).toBe("your_name_here");
            expect(snakeCase("New String name here")).toBe("new_string_name_here");
            expect(snakeCase("string-in-kebab-case")).toBe("string_in_kebab_case");
            expect(snakeCase("already_in_snakeCase")).toBe("already_in_snakecase");
            expect(snakeCase("string 123 with 456 numbers 789")).toBe("string_123_with_456_numbers_789");
            expect(snakeCase("  leading and trailing spaces  ")).toBe("leading_and_trailing_spaces");
        });

        it('Should return an empty string if input is invalid', () => {
            console.error = jest.fn();
            expect(snakeCase(1234)).toBe("");
            expect(snakeCase("")).toBe("");
            expect(snakeCase(null)).toBe("");
            expect(snakeCase(undefined)).toBe("");
            expect(console.error).toHaveBeenCalledWith("snakeCase: Input must be a non-empty string.");
            console.error.mockRestore();
        });
    });

    // truncate function test
    describe('truncate', () => {
        it('Should truncate a given string to a specified length adding "..." if truncated', () => {
            expect(truncate("Hello world", 5)).toBe("Hello...");
            expect(truncate("Hello world", 10)).toBe("Hello worl...");
        });

        it('Should return an empty string if input is a non-empty string', () => {
            console.error = jest.fn();
            expect(truncate("", 5)).toBe("");
            expect(truncate(null, 15)).toBe("");
            expect(truncate(undefined, 15)).toBe("");
            expect(console.error).toHaveBeenCalledWith("truncate: Input must be a non-empty string.");
            console.error.mockRestore();
        });

        it('Should return given string if length is not a positive or valid number', () => {
            console.error = jest.fn();
            expect(truncate("Hello world", "10")).toBe("Hello world");
            expect(truncate("Hello world", -5)).toBe("Hello world");
            expect(truncate("Hello world")).toBe("Hello world");
            expect(console.error).toHaveBeenCalledWith("truncate: Length must be a positive number.");
            console.error.mockRestore();
        });
    });

    // reverseString function test
    describe('reverseString', () => {
        it('Should reverse a given string', () => {
            expect(reverseString("My name is")).toBe("si eman yM");
            expect(reverseString("123 Follow my lead")).toBe("dael ym wolloF 321");
        });

        it('Should return an empty string if input is not a valid string', () => {
            console.error = jest.fn();
            expect(reverseString("")).toBe("");
            expect(reverseString(1234)).toBe("");
            expect(reverseString(undefined)).toBe("");
            expect(reverseString(null)).toBe("");
            expect(console.error).toHaveBeenCalledWith("reverseString: Input must be a string.");
            console.error.mockRestore();
        });
    });

    // countOccurences function test
    describe('countOccurences', () => {
        it('Should return the number of occurences of a substring within a string', () => {
            expect(countOccurrences("Hello", "o")).toBe(1);
            expect(countOccurrences("Hello", "l")).toBe(2);
            expect(countOccurrences("Anthropology", "a")).toBe(0);
            expect(countOccurrences("Synonyms", "S")).toBe(1);
            expect(countOccurrences("Synonyms", "y")).toBe(2);
            expect(countOccurrences("hello hello hello", "hello")).toBe(3);
        });

        it('Should return 0 if one or both arguments are not valid', () => {
            console.error = jest.fn();
            expect(countOccurrences("Hello")).toBe(0);
            expect(countOccurrences("Hello", undefined)).toBe(0);
            expect(countOccurrences("Hello", null)).toBe(0);
            expect(countOccurrences("Hello", "")).toBe(0);
            expect(countOccurrences("e")).toBe(0);
            expect(countOccurrences("", "e")).toBe(0);
            expect(countOccurrences(undefined, "e")).toBe(0);
            expect(countOccurrences(null, "e")).toBe(0);
            expect(console.error).toHaveBeenCalledWith("countOccurrences: Both arguments must be valid strings.");
            console.error.mockRestore();
        });
    });
});
