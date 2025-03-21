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
    });

    // getRandomInt function test
    describe('getRandomInt', () => {
        it('Should generate a random integer within the specified range', () => {
            const min = 1;
            const max = 10;
            const numberOfTests = 100;

            for (let i = 0; i < numberOfTests; i++) {
                const randomNumber = getRandomInt(min, max);
                expect(randomNumber).toBeGreaterThanOrEqual(min);
                expect(randomNumber).toBeLessThanOrEqual(max);
                expect(Number.isInteger(randomNumber)).toBe(true);
            }
        });

        it('should return NaN if min or max are invalid numbers', () => {
            console.error = jest.fn();
            expect(getRandomInt("not a number", 10)).toBeNaN();
            expect(getRandomInt(1, "not a number")).toBeNaN();
            expect(getRandomInt(NaN, 10)).toBeNaN();
            expect(getRandomInt(1, NaN)).toBeNaN();
            expect(console.error).toHaveBeenCalled();
            console.error.mockRestore();
        });

        it('Should generate a random integer within the swapped range if min > max', () => {
            console.warn = jest.fn();
            const min = 10;
            const max = 1;
            const numberOfTests = 100;

            for (let i = 0; i < numberOfTests; i++) {
                const randomNumber = getRandomInt(min, max);
                expect(randomNumber).toBeGreaterThanOrEqual(max);
                expect(randomNumber).toBeLessThanOrEqual(min);
                expect(Number.isInteger(randomNumber)).toBe(true);
            }
            expect(console.warn).toHaveBeenCalledWith("getRandomInt: min cannot be greater than max. Swapping values.");
            console.warn.mockRestore();
        });
    });

    // sum function test 
    describe('sum', () => {
        it('should return the sum of all numbers in an array', () => {
            const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
            expect(sum(numbersArr)).toBe(55);
        })
    })




})