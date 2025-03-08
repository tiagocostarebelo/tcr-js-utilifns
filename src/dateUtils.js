/**
 * Formats a date object into a string according to a specified format
 * @param {Date | string} date - The date object or string to format. 
 * @param {string} format - The format string (eg. "DD/MM/YYYY" or "YYYY-MM-DD").
 * @returns {string | undefined} The formatted date string or undefined if the date is invalid.
 */
export function formatDate(date, format) {
    if (!date) {
        console.error("formatDate: date cannot be empty, null, or undefined.");
        return undefined;
    }

    if (!(date instanceof Date)) {
        if (typeof date !== "object" && typeof date !== "string" && typeof date !== "number") {
            console.error("formatDate: date must be a valid Date object, string, or timestamp.");
            return undefined;
        }
    }

    if (typeof format !== "string") {
        console.error("formatDate: format must be a string.");
        return undefined;
    }
}


export function parseDate(dateString, format) {

}

export function getDayOfTheWeek(date) {

}

export function diffInDays(date1, date2) {

}

export function diffInMonths(date1, date2) {

}

export function diffInYears(date1, date2) {

}

export function isLeapYear(year) {

}
