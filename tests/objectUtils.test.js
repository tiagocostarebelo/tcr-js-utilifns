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
            expect(console.error).toHaveBeenCalledWith("isEmpty: Argument is not a valid object.");
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
            expect(console.error).toHaveBeenCalledWith("merge: Both arguments must be valid objects.");
            console.error.mockRestore();
        });
    });

    // deepClone function test
    describe('deepClone', () => {
        it('Should create a deep clone of an object', () => {
            const objTarget = { firstName: "John", lastname: "Doe", age: 31 };
            expect(deepClone(objTarget)).toEqual({ firstName: 'John', lastname: 'Doe', age: 31 });
        });

        it('Should return null if the argument provided is not a valid object', () => {
            const newObj = "name: Tiago";
            console.error = jest.fn();
            expect(deepClone(newObj)).toBeNull();
            expect(console.error).toHaveBeenCalledWith("deepClone: Argument is not a valid object.");
            console.error.mockRestore();
        });
    });

    // hasKey function test
    describe('hasKey', () => {
        it('Should check if an object has a specific property as its own', () => {
            const testObj = { name: "John", age: 60 };
            expect(hasKey(testObj, "name")).toBe(true);
            expect(hasKey(testObj, "age")).toBe(true);
            expect(hasKey(testObj, "toString")).toBe(false); // Not an own property
        });

        it('Should return true if an object has the key but the key is undefined', () => {
            const testObj = { name: "John", age: 60, car: undefined };
            expect(hasKey(testObj, "car")).toBe(true);
        });

        it('Should return false if an object does not have a specific property as its own', () => {
            const testObj = { name: "John", age: 60 };
            expect(hasKey(testObj, "city")).toBe(false);
            expect(hasKey(testObj, "address")).toBe(false);
        });

        it('Should return null if one or both arguments are not valid', () => {
            console.error = jest.fn();
            expect(hasKey(null, "name")).toBeNull();
            expect(hasKey({ name: "John" }, null)).toBeNull();
            expect(hasKey(undefined, "name")).toBeNull();
            expect(hasKey({ name: "John" }, undefined)).toBeNull();
            expect(console.error).toHaveBeenCalledWith("hasKey: First argument is not a valid object.");
            console.error.mockRestore();
        });
    });

    // get function test
    describe('get', () => {
        it('Should retrieve a value at a given path within an object', () => {
            const obj = { a: { b: { c: 3 } } };
            expect(get(obj, 'a.b.c')).toBe(3);
            expect(get(obj, 'a.b')).toEqual({ c: 3 });
            expect(get(obj, 'a')).toEqual({ b: { c: 3 } });
        });

        it('Should return the default value if the path doesnt exist', () => {
            const obj = { a: { b: { c: 3 } } };
            expect(get(obj, 'a.b.d', 'default')).toBe('default');
            expect(get(obj, 'a.c', null)).toBe(null);
            expect(get(obj, 'd', undefined)).toBe(undefined);
        });

        it('Should return the default value if object is not valid', () => {
            console.error = jest.fn();
            expect(get(1234, 'a.b.c', 'default')).toBe('default');
            expect(get(null, 'a.b.c', 'default')).toBe('default');
            expect(get(undefined, 'a.b.c', 'default')).toBe('default');
            expect(console.error).toHaveBeenCalledWith("get: First argument is not a valid object.");
            console.error.mockRestore();
        });

        it('Should return the default value if path is not valid', () => {
            console.error = jest.fn();
            const obj = { a: { b: { c: 3 } } };
            expect(get(obj, 1234, 'default')).toBe('default');
            expect(get(obj, null, 'default')).toBe('default');
            expect(get(obj, undefined, 'default')).toBe('default');
            expect(console.error).toHaveBeenCalledWith("get: Second argument is not a valid string.");
            console.error.mockRestore();
        });
    });

    // set function test
    describe('set', () => {
        it('Should set the value at a given path within an object', () => {
            const obj = { a: { b: { c: 3 } } };
            set(obj, 'a.b.c', 4);
            expect(obj.a.b.c).toBe(4);

            set(obj, 'a.b.newProperty', "hello");
            expect(obj.a.b.newProperty).toBe("hello");
        });

        it('Should create nested objects if they do not exist', () => {
            const obj = {};
            set(obj, 'a.b.c', 5);
            expect(obj.a.b.c).toBe(5);
            expect(typeof obj.a).toBe('object');
            expect(typeof obj.a.b).toBe('object');
        });

        it('Should return the original object, modified with the new value', () => {
            const obj = { a: 1 };
            const returnedObj = set(obj, 'b', 2);
            expect(returnedObj).toBe(obj); // Check if it's the same object
            expect(obj.b).toBe(2);
        });

        it('Should return the original object if first argument is not valid', () => {
            console.error = jest.fn();
            const notObj = 123;
            const returnedValue = set(notObj, 'a.b.c', 4);
            expect(returnedValue).toBe(notObj);
            expect(console.error).toHaveBeenCalledWith("set: First argument is not a valid object.");
            console.error.mockRestore();
        });

        it('Should return the original object if second argument is not valid', () => {
            console.error = jest.fn();
            const obj = { a: 1 };
            const returnedValue = set(obj, 123, 4);
            expect(returnedValue).toBe(obj);
            expect(console.error).toHaveBeenCalledWith("set: Second argument is not a valid string.");
            console.error.mockRestore();
        });
    });


})