const DateTime = require('../src/dateTime');

describe('DateTime', () => {
    it('getDate returns the formatted date string', () => {
        const date = new DateTime();
        const result = date.getDate();
        expect(result).toMatch(/^\d{1,2}-\d{1,2}-\d{4}$/);
        });
    });