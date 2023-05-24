const Transaction = require('../src/balanceUpdate')

describe('Transaction', () => {
    it('adds and returns latest balance', () => {
        const transaction = new Transaction;
        transaction.deposit(100)
        expect(transaction.deposit(100)).toEqual ("200.00")
        });
    });
