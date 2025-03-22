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

        it('Should return undefined if the input is invalid', () => {
            console.error = jest.fn();
            expect(capitalize(1234)).toBeUndefined();
            expect(capitalize("")).toBeUndefined();
            expect(capitalize(null)).toBeUndefined();
            expect(capitalize(undefined)).toBeUndefined();
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

        it('Should return undefined if input is invalid', () => {
            console.error = jest.fn();
            expect(camelCase(1234)).toBeUndefined();
            expect(camelCase("")).toBeUndefined();
            expect(camelCase(null)).toBeUndefined();
            expect(camelCase(undefined)).toBeUndefined();
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

        it('Should return undefined if input is invalid', () => {
            console.error = jest.fn();
            expect(kebabCase(1234)).toBeUndefined();
            expect(kebabCase("")).toBeUndefined();
            expect(kebabCase(null)).toBeUndefined();
            expect(kebabCase(undefined)).toBeUndefined();
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

        it('Should return undefined if input is invalid', () => {
            console.error = jest.fn();
            expect(snakeCase(1234)).toBeUndefined();
            expect(snakeCase("")).toBeUndefined();
            expect(snakeCase(null)).toBeUndefined();
            expect(snakeCase(undefined)).toBeUndefined();
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

        it('Should return undefined if input is a non-empty string', () => {
            console.error = jest.fn();
            expect(truncate("", 5)).toBeUndefined();
            expect(truncate(null, 15)).toBeUndefined();
            expect(truncate(undefined, 15)).toBeUndefined();
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

        it('Should return undefined if input is not a valid string', () => {
            console.error = jest.fn();
            expect(reverseString("")).toBeUndefined();
            expect(reverseString(1234)).toBeUndefined();
            expect(reverseString(undefined)).toBeUndefined();
            expect(reverseString(null)).toBeUndefined();
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
            expect(countOccurrences("Hello")).toBeUndefined();
            expect(countOccurrences("Hello", undefined)).toBeUndefined();
            expect(countOccurrences("Hello", null)).toBeUndefined();
            expect(countOccurrences("Hello", "")).toBeUndefined();
            expect(countOccurrences("e")).toBeUndefined();
            expect(countOccurrences("", "e")).toBeUndefined();
            expect(countOccurrences(undefined, "e")).toBeUndefined();
            expect(countOccurrences(null, "e")).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("countOccurrences: Both arguments must be valid strings.");
            console.error.mockRestore();
        });

        // startsWith function test
        describe('startsWith', () => {
            it('Should check if a string starts with a given substring and return true or false', () => {
                expect(startsWith("Hello world", "H")).toBe(true);
                expect(startsWith("Hello world", "W")).toBe(false);
                expect(startsWith("Who wants to live forever", "W")).toBe(true);
                expect(startsWith("Who wants to live forever", "w")).toBe(false);
            });

            it('Should return undefined if one or both input strings are not valid', () => {
                console.error = jest.fn();
                expect(startsWith("Hello world", "")).toBeUndefined();
                expect(startsWith("Who wants to live forever", undefined)).toBeUndefined();
                expect(startsWith("Who wants to live forever", null)).toBeUndefined();
                expect(startsWith("", "A")).toBeUndefined();
                expect(startsWith(undefined, "B")).toBeUndefined();
                expect(startsWith(null, "B")).toBeUndefined();
                expect(console.error).toHaveBeenCalledWith("startsWith: Both arguments must be valid strings.");
                console.error.mockRestore();
            });
        });

        // endsWith function test
        describe('endsWith', () => {
            it('Should check if a string starts with a given substring and return true or false', () => {
                expect(endsWith("Hello world", "d")).toBe(true);
                expect(endsWith("Hello world", "world")).toBe(true);
                expect(endsWith("Hello world", "W")).toBe(false);
                expect(endsWith("Who wants to live forever", "er")).toBe(true);
                expect(endsWith("Who wants to live forever", "ever")).toBe(true);
                expect(endsWith("Who wants to live forever", "w")).toBe(false);
            });

            it('Should return undefined if one or both input strings are not valid', () => {
                console.error = jest.fn();
                expect(endsWith("Hello world", "")).toBeUndefined();
                expect(endsWith("Who wants to live forever", undefined)).toBeUndefined();
                expect(endsWith("Who wants to live forever", null)).toBeUndefined();
                expect(endsWith("", "A")).toBeUndefined();
                expect(endsWith(undefined, "B")).toBeUndefined();
                expect(endsWith(null, "B")).toBeUndefined();
                expect(console.error).toHaveBeenCalledWith("endsWith: Both arguments must be valid strings.");
                console.error.mockRestore();
            });
        });


        // removeWhitespace function test
        describe('removeWhitespace', () => {
            it('Should remove all whitespaces from a string', () => {
                expect(removeWhitespace("  Hello world  .  ")).toBe("Helloworld.");
                expect(removeWhitespace("White space is removed")).toBe("Whitespaceisremoved");
            });

            it('Should return undefined if input string is invalid', () => {
                console.error = jest.fn();
                expect(removeWhitespace("")).toBeUndefined();
                expect(removeWhitespace(undefined)).toBeUndefined();
                expect(removeWhitespace(null)).toBeUndefined();
                expect(removeWhitespace(1245)).toBeUndefined();
                expect(console.error).toHaveBeenCalledWith("removeWhitespace: Input must be a string.");
                console.error.mockRestore();
            });
        });
    });
});
