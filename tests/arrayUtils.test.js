import {
    isArrayEmpty
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
            expect(isArrayEmpty('I am a string, not an array')).toBeUndefined;
            expect(isArrayEmpty({ key: "value" })).toBeUndefined;
            expect(console.error).toHaveBeenCalledWith('isArrayEmpty: Argument is not a valid array.');
            console.error.mockRestore();
        });
    });
});