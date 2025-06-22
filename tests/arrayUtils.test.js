import {
    chunkArray,
    isArrayEmpty,
    isArrayEqual
} from '../src/arrayUtils';

describe('Array Utilities', () => {

    //isArrayEmpty function test
    describe('isArrayEmpty', () => {
        it('Should return true if array is empty', () => {
            expect(isArrayEmpty([])).toBe(true);
        });

        it('Should return false if array is not empty', () => {
            expect(isArrayEmpty(['John', 'Jane', 'Janet', 1, 2, 3])).toBe(false);
        });

        it('Should return undefined for invalid array', () => {
            console.error = jest.fn();
            expect(isArrayEmpty('I am a string, not an array')).toBeUndefined();
            expect(isArrayEmpty({ key: "value" })).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith('isArrayEmpty: Argument is not a valid array.');
            console.error.mockRestore();
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
        })

        it('Should return false if the arrays are not equal in their value and order', () => {
            expect(isArrayEqual([1, 2, 3], [3, 4, 5])).toBe(false);
            expect(isArrayEqual([1, 2, 3], [1, 2, "3"])).toBe(false);
            expect(isArrayEqual([3, 5, 6, 7], [1, 2, 3, 4])).toBe(false);
            expect(isArrayEqual([3, 5, 6, 7], [3, 5, 7, 8])).toBe(false);
            expect(isArrayEqual(["one", { name: "John" }], ["one", { name: "John" }])).toBe(false);
        })
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
});