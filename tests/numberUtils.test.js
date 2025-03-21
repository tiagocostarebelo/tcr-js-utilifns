import {
    isEven,
    isOdd,
    roundTo,
    getRandomInt,
    sum
} from '../src/numberUtils';

describe('Number Utilities', () => {

    // isEven function test
    describe('isEven', () => {
        it('Should return true if a number is even', () => {
            expect(isEven(2)).toBe(true);
            expect(isEven(26)).toBe(true);
            expect(isEven(2608)).toBe(true);
        });

        it('Should return false if a number is not even', () => {
            expect(isEven(3)).toBe(false);
            expect(isEven(77)).toBe(false);
        });

        it('should return undefined if the input is not a valid number', () => {
            console.error = jest.fn();// Mock console.error to avoid output in tests
            expect(isEven("3")).toBeUndefined();
            expect(isEven(NaN)).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("isEven: Input must be a valid number.");
            console.error.mockRestore();
        });
    });

    // isOdd function test
    describe('isOdd', () => {
        it('Should return true if a number is odd', () => {
            expect(isOdd(3)).toBe(true);
            expect(isOdd(137)).toBe(true);
        });

        it('Should return false if a number is not odd', () => {
            expect(isOdd(6)).toBe(false);
            expect(isOdd(86)).toBe(false);
        });

        it('should return undefined if the input is not a valid number', () => {
            console.error = jest.fn();// Mock console.error to avoid output in tests
            expect(isOdd("120")).toBeUndefined();
            expect(isOdd(NaN)).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("isOdd: Input must be a valid number.");
            console.error.mockRestore();
        });
    })



})