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
        });
    });

    // merge function test
    describe('merge', () => {
        it('Should merge two objects with properties from the second object overwriting those in the first.', () => {
            const objTarget = { firstName: "John", lastname: "Doe", age: 31 };
            const objSource = { planet: "Earth", hobbies: "Space travel" };
            expect(merge(objTarget, objSource)).toEqual({ firstName: 'John', lastname: 'Doe', age: 31, planet: 'Earth', hobbies: 'Space travel' });
        });

        it('Should return null if one or both arguments are not valid objects', () => {
            const objTarget = { firstName: "John", lastname: "Doe", age: 31 };
            const objSource = { planet: "Earth", hobbies: "Space travel" };
            console.error = jest.fn();
            expect(merge(objTarget, 1234)).toBeNull();
            expect(merge(1234, objSource)).toBeNull();
            expect(merge(objTarget, "object")).toBeNull();
            expect(merge("object", objSource)).toBeNull();
            console.error.mockRestore();
        });
    });

})