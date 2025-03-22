/**
 * Checks if an object is empty (has no enumerable properties).
 * @param {Object} obj - The object to check.
 * @returns {boolean} True if the object is empty, false otherwise, null if object is null or not an object
 * @example
 * isEmpty({}); // true
 * isEmpty({ key: 'value' }); // false
 */
export function isEmpty(obj) {
    if (obj === null || typeof obj !== 'object') {
        console.error('isEmpty: Argument is not a valid object.');
        return null;
    }
    return Object.keys(obj).length === 0;
}


/**
 * Merges two objects, with properties from the second object overwriting those in the first.
 * @param {Object} target - The target object to merge into.
 * @param {Object} source - The source object to merge from.
 * @returns {Object} The merged object.
 * @example
 * merge({ a: 1, b: 2 }, { b: 3, c: 4 }); // { a: 1, b: 3, c: 4 }
 */
export function merge(target, source) {
    if (target === null || typeof target !== 'object' || source === null || typeof source !== 'object') {
        console.error('merge: Both arguments must be valid objects.');
        return {};
    }
    return { ...target, ...source };
}


/**
 * Creates a deep clone of an object.
 * @param {Object} obj - The object to clone.
 * @returns {Object} The deep-cloned object.
 * @example
 * const original = { a: 1, b: { c: 2 } };
 * const clone = deepClone(original);
 * clone.b.c = 3;
 * console.log(original.b.c); // 2
 */
export function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') {
        console.error('deepClone: Argument is not a valid object.');
        return obj;
    }
    return JSON.parse(JSON.stringify(obj));
}


/**
 * Checks if an object has a specific property as its own (not inherited).
 * @param {Object} obj - The object to check.
 * @param {string} key - The property name to check for.
 * @returns {boolean} True if the property exists, false otherwise.
 * @example
 * hasKey({ a: 1, b: 2 }, 'b'); // true
 * hasKey({ a: 1, b: 2 }, 'c'); // false
 */
export function hasKey(obj, key) {
    if (obj === null || typeof obj !== 'object') {
        console.error('hasKey: First argument is not a valid object.');
        return false;
    }
    if (typeof key !== 'string') {
        console.error('hasKey: Second argument is not a valid string.');
        return false;
    }
    return Object.prototype.hasOwnProperty.call(obj, key);
}


/**
 * Retrieves the value at a given path within an object.
 * @param {Object} obj - The object to query.
 * @param {string} path - The path of the property to get.
 * @param {*} [defaultValue] - The value returned if the path doesn't exist.
 * @returns {*} The value at the specified path or the default value.
 * @example
 * const obj = { a: { b: { c: 3 } } };
 * get(obj, 'a.b.c'); // 3
 * get(obj, 'a.b.d', 'default'); // 'default'
 */
export function get(obj, path, defaultValue) {
    if (obj === null || typeof obj !== 'object') {
        console.error('get: First argument is not a valid object.');
        return defaultValue;
    }
    if (typeof path !== 'string') {
        console.error('get: Second argument is not a valid string.');
        return defaultValue;
    }
    const pathArray = path.split('.');
    let result = obj;
    for (const key of pathArray) {
        if (result[key] === undefined) {
            return defaultValue;
        }
        result = result[key];
    }
    return result;
}


/**
 * Sets the value at a given path within an object.
 * @param {Object} obj - The object to modify.
 * @param {string} path - The path of the property to set.
 * @param {*} value - The value to set.
 * @returns {Object} The updated object.
 * @example
 * const obj = { a: { b: { c: 3 } } };
 * set(obj, 'a.b.c', 4);
 * console.log(obj.a.b.c); // 4
 * set(obj, 'a.b.d.e', 5);
 * console.log(obj.a.b.d.e); // 5
 */
export function set(obj, path, value) {
    if (obj === null || typeof obj !== 'object') {
        console.error('set: First argument is not a valid object.');
        return obj;
    }
    if (typeof path !== 'string') {
        console.error('set: Second argument is not a valid string.');
        return obj;
    }
    const pathArray = path.split('.');
    let current = obj;
    for (let i = 0; i < pathArray.length; i++) {
        const key = pathArray[i];
        if (i === pathArray.length - 1) {
            current[key] = value;
        } else {
            if (current[key] === undefined || typeof current[key] !== 'object') {
                current[key] = {};
            }
            current = current[key];
        }
    }
    return obj;
}
