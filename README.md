**JS Utility Functions Library**
================================

A collection of JavaScript utility functions for common operations such as working with **arrays, dates, numbers, objects, and strings**. This library provides reusable functions to improve productivity and maintainability in JavaScript projects.


**Features**
---------------

✔️ Modular utility functions for various data types.\
✔️ Error handling and input validation included.\
✔️ Simple and easy-to-use API.\
✔️ ES6 module-based structure for easy imports.\
✔️ Well-documented with JSDoc comments.\
✔️ (Upcoming) Unit tests using Jest.


**Installation**
-------------------

Clone the repository:

```

`git clone https://github.com/tiagocostarebelo/js-utilifns.git
cd js-utilifns`

```

If using **npm** or **yarn**, you can add this project as a dependency by running:

```

`npm install https://github.com/tiagocostarebelo/js-utilifns.git
# OR
yarn add https://github.com/tiagocostarebelo/js-utilifns.git`

```

**Usage**
------------

You can **import individual utility functions** as needed:

### **Example: Using `formatDate()` from `dateUtils.js`**

```

`import { formatDate } from "./src/dateUtils.js";

console.log(formatDate(new Date(), "YYYY-MM-DD")); // Outputs: "2024-03-07"`

```

### **Example: Using `getRandomInt()` from `mathUtils.js`**


```

`import { getRandomInt } from "./src/mathUtils.js";

console.log(getRandomInt(1, 10)); // Outputs a random integer between 1 and 10`

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

(Currently, tests are not implemented, but they will be added using Jest.)

Once tests are implemented, this section will be updated.


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