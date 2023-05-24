const BalanceUpdate = require('../src/balanceUpdate')

describe('BalanceUpdate', () => {
    it('adds and returns latest balance', () => {
        const balanceUpdate = new BalanceUpdate;
        balanceUpdate.format(100)
        expect(balanceUpdate.format(100)).toEqual ({"credit": "100.00", "date": "24/05/2023", "debit": null})
        });
    });
