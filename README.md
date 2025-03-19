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

**Available Utility Functions**
----------------------------------

### **Date Utilities (`dateUtils.js`)**

| Function | Description |
| --- | --- |
| `formatDate(date, format)` | Formats a date according to a given format (`YYYY-MM-DD`, `DD/MM/YYYY`). |
| `parseDate(dateString, format)` | Converts a formatted string into a Date object. |
| `getDayOfTheWeek(date)` | Returns the day of the week (e.g., "Monday"). |
| `diffInDays(date1, date2)` | Calculates the number of days between two dates. |
| `diffInMonths(date1, date2)` | Calculates the number of months between two dates. |
| `diffInYears(date1, date2)` | Calculates the number of years between two dates. |
| `isLeapYear(year)` | Checks if a given year is a leap year. |



### **Math Utilities (`mathUtils.js`)**

| Function | Description |
| --- | --- |
| `roundTo(number, decimalPlaces)` | Rounds a number to a specified decimal place. |
| `getRandomInt(min, max)` | Returns a random integer between `min` and `max` (inclusive). |
| `sum(numbersArray)` | Returns the sum of an array of numbers. |



### **String Utilities (`stringUtils.js`)**

| Function | Description |
| --- | --- |
| `capitalize(str)` | Capitalizes the first letter of a string. |
| `truncate(str, length)` | Truncates a string to a specified length with `...`. |
| `reverseString(str)` | Reverses the given string. |



### **Object Utilities (`objectUtils.js`)**

| Function | Description |
| --- | --- |
| `deepClone(obj)` | Creates a deep clone of an object. |
| `isEmptyObject(obj)` | Checks if an object is empty (`{}`). |



### **Array Utilities (`arrayUtils.js`)**

| Function | Description |
| --- | --- |
| `chunkArray(arr, size)` | Splits an array into chunks of a given size. |
| `removeDuplicates(arr)` | Removes duplicate values from an array. |



**Running Tests**
---------------------

(Currently, tests are not implemented, but they will be added using Jest.)

Once tests are implemented, you can run:

```

`npm test`

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