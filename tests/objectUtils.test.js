import {
    isEmpty,
    merge,
    deepClone,
    hasKey,
    get,
    set
} from '../src/objectUtils';

describe('Object Utils', () => {

    // isEmpty function test
    describe('isEmpty', () => {
        it('Should check if an object is empty (has no enumerable properties)', () => {
            const newObj = { firstName: "John", lastName: "Doe", age: 30 }
            const emptyObj = {};
            expect(isEmpty(newObj)).toBe(false);
            expect(isEmpty(emptyObj)).toBe(true);
        });

        it('Should return null if the input is null or not a type of object', () => {
            console.error = jest.fn();
            expect(isEmpty(1234)).toBeNull();
            expect(isEmpty(null)).toBeNull();
            console.error.mockRestore();
        })
    })

})