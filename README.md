**js-utilifns**
================================

A collection of JavaScript utility functions for common operations on **dates, numbers, objects, and strings**. This library was built to improve my developer's knowledge of JavaScript while creating a useful set of tools for personal projects and, potentially, for others in the community.  `js-utilifns` aims to provide a consistent and reliable set of functions, reducing the need for repetitive coding.



**Features**
---------------

*   Functions for manipulating arrays, dates, numbers, objects, and strings.
*   Each function includes error handling and input validation for increased reliability.
*   Simple and easy-to-use API with clear JSDoc documentation.
*   ES6 module-based structure for easy imports in modern JavaScript projects.
*   Comprehensive unit tests using Jest.



**Installation**
-------------------

You can install `js-utilifns` using npm or yarn:

```

npm install js-utilifns

```

If using **yarn**:

```

yarn add js-utilifns

```



**Documentation (JSDoc)**

You can [View documentation here](https://tiagocostarebelo.github.io/js-utilifns/)


**Usage**
------------

You can **import individual utility functions** as needed:

### **Example: Using `getDayOfTheWeek()` from `dateUtils.js`**

```

`import { getDayOfTheWeek } from ".js-utilifns";

console.log(getDayOfTheWeek(new Date("2025-03-26"))); // Outputs: "Wednesday"
console.log(getDayOfTheWeek(new Date("2020,10,01"))); // Outputs: "Thursday"`

```

### **Example: Using `getRandomInt()` from `numberUtils.js`**


```

`import { getRandomInt } from "js-utilifns";

console.log(getRandomInt(1, 10)); // Outputs a random integer between 1 and 10`

```

### **Example: Using `hasKey()` from `objectUtils.js`**


```

`import { hasKey } from "js-utilifns";

const newObject = {name: "John Doe", age: 42};
console.log(hasKey(newObject, "name")); // Outputs: true`

```



## Available Utility Functions

### **Date Utilities (`dateUtils.js`)**

| Function                    | Description                                             |
|-----------------------------|---------------------------------------------------------|
| `getDayOfTheWeek(date)`     | Returns the day of the week (e.g., "Monday").           |
| `diffInDays(date1, date2)`  | Calculates the number of days between two dates.        |
| `diffInMonths(date1, date2)`| Calculates the number of months between two dates.      |
| `diffInYears(date1, date2)` | Calculates the number of years between two dates.       |
| `isLeapYear(year)`          | Checks if a given year is a leap year.                  |


### **Number Utilities (`numberUtils.js`)**

| Function                         | Description                                                                                                           |
|----------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `isEven(number)`                 | Checks if a number is even. Returns `true` if even, `false` if odd, and `undefined` if input is invalid.              |
| `isOdd(number)`                  | Checks if a number is odd. Returns `true` if odd, `false` if even, and `undefined` if input is invalid.               |
| `roundTo(number, decimalPlaces)` | Rounds a number to a specified decimal place. Returns NaN if input is invalid.                                        |
| `getRandomInt(min, max)`         | Generates a random integer within a specified range (inclusive). Returns NaN if inputs are invalid.                   |
| `sum(numbersArray)`              | Returns the sum of all numbers in an array. Returns NaN if input is not a valid array or contains non-numeric values. |


### **Object Utilities (`objectUtils.js`)**

| Function                       | Description                                                                                                                     |
|--------------------------------|---------------------------------------------------------------------------------------------------------------------------------|
| `isEmpty(obj)`                 | Checks if an object is empty (has no enumerable properties). Returns `true` if empty, `false` otherwise.                        |
| `merge(target, source)`        | Merges two objects, with properties from the second object overwriting those in the first.                                      |
| `deepClone(obj)`               | Creates a deep clone of an object. Returns a new object with the same properties.                                               |
| `hasKey(obj, key)`             | Checks if an object has a specific property as its own (not inherited). Returns `true` if property exists, `false` otherwise.   |
| `get(obj, path, defaultValue)` | Retrieves the value at a given path within an object. Returns the value at the specified path or the default value.             |
| `set(obj, path, value)`        | Sets the value at a given path within an object. Returns the updated object.                                                    | 


### **String Utilities (`stringUtils.js`)**

| Function                     | Description                                                                                                       |
|------------------------------|-------------------------------------------------------------------------------------------------------------------|
| `capitalize(str)`            | Capitalizes the first letter of a string. Returns the capitalized string or an empty string if input is invalid.  |
| `camelCase(str)`             | Converts a string to camelCase. Returns the camelCased string.                                                    |
| `kebabCase(str)`             | Converts a string to kebab-case. Returns the kebab-cased string.                                                  |
| `snakeCase(str)`             | Converts a string to snake_case. Returns the snake_cased string.                                                  |
| `truncate(str, length)`      | Truncates a string to a specified length, adding "..." if truncated. Returns the truncated string.                |
| `reverseString(str)`         | Reverses a string. Returns the reversed string.                                                                   |
| `countOccurrences(str, sub)` | Counts the occurrences of a substring within a string. Returns the number of occurrences.                         |
| `startsWith(str, prefix)`    | Checks if a string starts with a given substring. Returns `true` if it starts with the prefix, `false` otherwise. |
| `endsWith(str, suffix)`      | Checks if a string ends with a given substring. Returns `true` if it ends with the suffix, `false` otherwise.     |
| `removeWhitespace(str)`      | Removes all whitespace from a string. Returns the string without whitespace.                                      |



**Running Tests**
---------------------

This library is thoroughly tested using Jest. You can run the tests locally by running:

```
npm test

```



**License**
--------------

This project is licensed under the **MIT License**. You are free to use, modify, and distribute it.



**Contributing**
-------------------

Want to contribute? Follow these steps:

1.  **Fork** the repository.
2.  Create a **new branch** (`feature-xyz`).
3.  Make your changes and **commit** them.
4.  **Push** to your forked repo.
5.  Open a **Pull Request** .



**Contact**
--------------

**Author:** [Tiago Costa Rebelo](https://github.com/tiagocostarebelo)

Have suggestions or found a bug? **Open an issue** or **reach out**!



**Support the Project**
--------------------------

Star this repo if you found it useful!