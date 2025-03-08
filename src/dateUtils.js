/**
 * Gets the day of the week for a given date.
 * @param {Date} date - The date to check.
 * @returns {string | undefined} The name of the day (e.g., "Monday"), or undefined if the input is invalid.
 */
export function getDayOfTheWeek(date) {
    if (!(date instanceof Date)) {
        console.error("getDayOfTheWeek: Input must be a valid Date object.");
        return undefined;
    }

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[date.getDay()];
}

/**
 * Calculates the difference in days between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number | undefined} The difference in days, or undefined if the inputs are invalid.
 */
export function diffInDays(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        console.error("diffInDays: Both inputs must be valid Date objects.");
        return undefined;
    }

    const timeDiff = Math.abs(date2 - date1);
    return Math.floor(timeDiff / (1000 * 3600 * 24));
}

/**
 * Calculates the difference in months between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number | undefined} The difference in months, or undefined if the inputs are invalid.
 */
export function diffInMonths(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        console.error("diffInMonths: Both inputs must be valid Date objects.");
        return undefined;
    }

    const yearsDiff = date2.getFullYear() - date1.getFullYear();
    const monthsDiff = date2.getMonth() - date1.getMonth();
    return yearsDiff * 12 + monthsDiff;
}


/**
 * Calculates the difference in years between two dates.
 * @param {Date} date1 - The first date.
 * @param {Date} date2 - The second date.
 * @returns {number | undefined} The difference in years, or undefined if the inputs are invalid.
 */
export function diffInYears(date1, date2) {
    if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
        console.error("diffInYears: Both inputs must be valid Date objects.");
        return undefined;
    }

    return date2.getFullYear() - date1.getFullYear();
}

/**
 * Checks if a given year is a leap year.
 * @param {number} year - The year to check.
 * @returns {boolean | undefined} True if the year is a leap year, false otherwise, or undefined if the input is invalid.
 */
export function isLeapYear(year) {
    if (typeof year !== 'number' || isNaN(year)) {
        console.error("isLeapYear: Input must be a valid number.");
        return undefined;
    }

    return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
}

