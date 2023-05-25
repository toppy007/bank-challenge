const BalanceUpdate = require('../src/balanceUpdate')
const DateTime = require('../src/dateTime');

describe('BalanceUpdate', () => {
    it('adds and returns latest balance', () => {
        const balanceUpdate = new BalanceUpdate;
        balanceUpdate.format(100)
        const date = new DateTime();
        const result = date.getDate();
        expect(balanceUpdate.format(100)).toEqual ({"credit": "100.00", "date": result, "debit": null})
        });
    });
