import {
    chunkArray,
    isArrayEmpty,
    isArrayEqual,
    removeDuplicates,
    removeFalsy,
    difference
} from '../src/arrayUtils';

describe('Array Utilities', () => {

    //isArrayEmpty function test
    describe('isArrayEmpty', () => {
        it('Should return undefined for invalid array', () => {
            console.error = jest.fn();
            expect(isArrayEmpty('I am a string, not an array')).toBeUndefined();
            expect(isArrayEmpty({ key: "value" })).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('isArrayEmpty: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return true if array is empty', () => {
            expect(isArrayEmpty([])).toBe(true);
        });

        it('Should return false if array is not empty', () => {
            expect(isArrayEmpty(['John', 'Jane', 'Janet', 1, 2, 3])).toBe(false);
        });
    });

    //isArrayEqual function test
    describe('isArrayEqual', () => {
        it('Should return undefined for invalid argument array', () => {
            console.error = jest.fn();
            expect(isArrayEqual('I am a string, not an array', [1, 2, 3])).toBeUndefined();
            expect(isArrayEqual([1, 2, 3], 'I am a string, not an array')).toBeUndefined();
            expect(isArrayEqual({ key: "value" })).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('isArrayEqual: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return false if the arrays do not have the same length', () => {
            console.error = jest.fn();
            expect(isArrayEqual([1, 2], [1, 2, 3])).toBe(false);
            expect(console.error).toHaveBeenCalledWith('isArrayEqual: Arrays are not of equal length.');
            console.error.mockRestore();
        });

        it('Should return true if the arrays are equal in their value and order', () => {
            expect(isArrayEqual([1, 2, 3], [1, 2, 3])).toBe(true);
            expect(isArrayEqual([1, 2, "3"], [1, 2, "3"])).toBe(true);
            expect(isArrayEqual(["one value"], ["one value"])).toBe(true);
            expect(isArrayEqual([3, 5, 7, 8], [3, 5, 7, 8])).toBe(true);
        });

        it('Should return false if the arrays are not equal in their value and order', () => {
            expect(isArrayEqual([1, 2, 3], [3, 4, 5])).toBe(false);
            expect(isArrayEqual([1, 2, 3], [1, 2, "3"])).toBe(false);
            expect(isArrayEqual([3, 5, 6, 7], [1, 2, 3, 4])).toBe(false);
            expect(isArrayEqual([3, 5, 6, 7], [3, 5, 7, 8])).toBe(false);
            expect(isArrayEqual(["one", { name: "John" }], ["one", { name: "John" }])).toBe(false);
        });
    });

    // chunkArray function test
    describe('chunkArray', () => {
        it('Should return undefined for invalid argument array', () => {
            console.error = jest.fn();
            expect(chunkArray('I am a string', 1)).toBeUndefined();
            expect(chunkArray({ key: "value" }, 2)).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('chunkArray: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return undefined for invalid argument size', () => {
            console.error = jest.fn();
            expect(chunkArray([1, 2, 3, 4, 5], 'Not a number')).toBeUndefined();
            expect(chunkArray([1, 2, 3, 4, 5], { key: "value" })).toBeUndefined();
            expect(chunkArray(["A", "B", "C"], true)).toBeUndefined();
            expect(chunkArray([1, 2, 3], -2)).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('chunkArray: Size needs to be a positive integer.');
            console.error.mockRestore();
        });

        it('Should split the array correctly into chunks', () => {
            expect(chunkArray([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
            expect(chunkArray([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
            expect(chunkArray([1, 2], 3)).toEqual([[1, 2]]);
            expect(chunkArray([], 2)).toEqual([]);
        });
    });

    //removeDuplicates function test
    describe('removeDuplicates', () => {
        it('Should return undefined for invalid argument array', () => {
            console.error = jest.fn();
            expect(removeDuplicates('I am a string')).toBeUndefined();
            expect(removeDuplicates({ key: "value" })).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('removeDuplicates: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return an array without any duplicate values', () => {
            expect(removeDuplicates([1, 2, 2, 3, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
            expect(removeDuplicates(["John", "Alice", "Ben", "Ben", "John"])).toEqual(["John", "Alice", "Ben"]);
        });
    });

    //removeFalsy function test
    describe('removeFalsy', () => {
        it('Should return undefined for invalid argument array', () => {
            console.error = jest.fn();
            expect(removeFalsy('I am a string')).toBeUndefined();
            expect(removeFalsy({ key: "value" })).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('removeFalsy: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return an empty array if all values are falsy', () => {
            expect(removeFalsy([0, false, '', null, undefined, NaN])).toEqual([]);
        });

        it('Should return an array without falsy values', () => {
            expect(removeFalsy([1, "Ben", null, { key: "value" }, undefined, 23, 0, true, false])).toEqual([1, 'Ben', { key: "value" }, 23, true]);
        });

        it('Should return the same array if there are no falsy values', () => {
            expect(removeFalsy([1, "text", true, {}, []])).toEqual([1, "text", true, {}, []]);
        });
    });

    //difference function test
    describe('difference', () => {
        it('Should return undefined for invalid argument values', () => {
            console.error = jest.fn();
            expect(difference('I am a string, not an array', [1, 2, 3])).toBeUndefined();
            expect(difference([1, 2, 3], 'I am a string, not an array')).toBeUndefined();
            expect(difference({ key: "value" }, [1, 2, 3])).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('difference: Argument is not a valid array.');
            console.error.mockRestore();
        });

        it('Should return an array with the values present in array1 that are not in array2', () => {
            expect(difference([1, 2, 3], [2])).toEqual([1, 3]);
            expect(difference([], [1, 2, 3])).toEqual([]);
            expect(difference([1, 2, 3], [])).toEqual([1, 2, 3]);
            expect(difference([1, 2, "3"], [3])).toEqual([1, 2, "3"]);
            expect(difference(["Test", "my", "array"], ["My", "Array"])).toEqual(['Test', 'my', 'array']);
        });
    });
});