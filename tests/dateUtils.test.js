import {
    getDayOfTheWeek,
    diffInDays,
    diffInMonths,
    diffInYears,
    isLeapYear
} from '../src/dateUtils';

describe('Date Utilities', () => {

    // getDayOfTheWeek function test
    describe('getDayOfTheWeek', () => {
        it('should return correct day of the week for a valid date', () => {
            expect(getDayOfTheWeek(new Date(2024, 0, 21))).toBe("Sunday");  // Month is 0-indexed
            expect(getDayOfTheWeek(new Date(2024, 0, 22))).toBe("Monday");
            expect(getDayOfTheWeek(new Date(2024, 0, 23))).toBe("Tuesday");
            expect(getDayOfTheWeek(new Date(2024, 0, 24))).toBe("Wednesday");
            expect(getDayOfTheWeek(new Date(2024, 0, 25))).toBe("Thursday");
            expect(getDayOfTheWeek(new Date(2024, 0, 26))).toBe("Friday");
            expect(getDayOfTheWeek(new Date(2024, 0, 27))).toBe("Saturday");
        });

        it('should return undefined for an invalid date input', () => {
            console.error = jest.fn(); // Mock console.error to avoid output in tests
            expect(getDayOfTheWeek("not a date")).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("getDayOfTheWeek: Input must be a valid Date object.");
            console.error.mockRestore(); // Restore console.error
        });
    });


    // diffInDays function test
    describe('diffInDays', () => {
        it('should return the difference in days between two dates', () => {
            expect(diffInDays(new Date(2024, 2, 21), new Date(2023, 2, 22))).toBe(365);
            expect(diffInDays(new Date(2025, 3, 21), new Date(2010, 1, 1))).toBe(5557);
            expect(diffInDays(new Date(2001, 3, 21), new Date(2010, 1, 1))).toBe(3208);
            expect(diffInDays(new Date(2010, 1, 1), new Date(2010, 1, 1))).toBe(0);
        });

        it('should return undefined if inputs are invalid date objects', () => {
            console.error = jest.fn();
            expect(diffInDays("not a date", "not a date")).toBeUndefined();
            expect(diffInDays("not a date", new Date(2020, 10, 25))).toBeUndefined();
            expect(diffInDays(new Date(2020, 10, 25), "not a date")).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("diffInDays: Both inputs must be valid Date objects.");
            console.error.mockRestore();
        });
    });

    // diffInMonths function test
    describe('diffInMonths', () => {
        it('should return the difference in months between two dates', () => {
            expect(diffInMonths(new Date(2024, 2, 21), new Date(2023, 2, 22))).toBe(-12);
            expect(diffInMonths(new Date(2025, 3, 21), new Date(2010, 1, 1))).toBe(-182);
            expect(diffInMonths(new Date(2001, 3, 21), new Date(2010, 1, 1))).toBe(106);
        });

        it('should return undefined if inputs are invalid date objects', () => {
            console.error = jest.fn();
            expect(diffInMonths("not a date", "not a date")).toBeUndefined();
            expect(diffInMonths("not a date", new Date(2020, 10, 25))).toBeUndefined();
            expect(diffInMonths(new Date(2020, 10, 25), "not a date")).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("diffInMonths: Both inputs must be valid Date objects.");
            console.error.mockRestore();
        });
    });

    // diffInYears function test
    describe('diffInYears', () => {
        it('should return the difference in years between two dates', () => {
            expect(diffInYears(new Date(2024, 2, 21), new Date(2023, 2, 22))).toBe(-1);
            expect(diffInYears(new Date(2025, 3, 21), new Date(2010, 1, 1))).toBe(-15);
            expect(diffInYears(new Date(2001, 3, 21), new Date(2010, 1, 1))).toBe(9);
        });

        it('should return undefined if inputs are invalid date objects', () => {
            console.error = jest.fn();
            expect(diffInYears("not a date", "not a date")).toBeUndefined();
            expect(diffInYears("not a date", new Date(2020, 10, 25))).toBeUndefined();
            expect(diffInYears(new Date(2020, 10, 25), "not a date")).toBeUndefined();
            expect(console.error).toHaveBeenCalledWith("diffInYears: Both inputs must be valid Date objects.");
            console.error.mockRestore();
        });
    });


});