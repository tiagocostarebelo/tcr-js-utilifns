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
            console.error.mockRestore(); // Restore console.error
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
            console.error = jest.fn();
            expect(isOdd("120")).toBeUndefined();
            expect(isOdd(NaN)).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("isOdd: Input must be a valid number.");
            console.error.mockRestore();
        });
    });

    // roundTo function test
    describe('roundTo', () => {
        it('should round a number to a specified number of decimal places', () => {
            expect(roundTo(20.123123, 2)).toBe(20.12);
            expect(roundTo(548.445612, 1)).toBe(548.4);
            expect(roundTo(548.445612, 0)).toBe(548);
        });

        it('should return NaN if the inputs are not valid numbers', () => {
            console.error = jest.fn();
            expect(roundTo("20.3232", "2")).toBeNaN();
            expect(roundTo("20.3232", 1)).toBeNaN();
            expect(roundTo(20.3232, "1")).toBeNaN();
            expect(console.error).toHaveBeenCalled();
            console.error.mockRestore();
        });

        it('Should return NaN if the decimalPlaces input is a negative number', () => {
            console.error = jest.fn();
            expect(roundTo(20.123, -1)).toBeNaN();
            expect(console.error).toHaveBeenCalledWith("roundTo: decimalPlaces must be a non-negative number.");
            console.error.mockRestore();
        });

    })



})