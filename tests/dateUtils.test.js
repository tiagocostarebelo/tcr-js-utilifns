import {
    getDayOfTheWeek,
    diffInDays,
    diffInMonths,
    diffInYears,
    isLeapYear
} from '../src/dateUtils';

describe('Date Utilities', () => {

    describe('getDayOfTheWeek', () => {
        test('should return correct day of the week for a valid date', () => {
            const date = new Date("2025-03-07");
            expect(getDayOfTheWeek(date)).toBe("Friday");
        })
    })

})