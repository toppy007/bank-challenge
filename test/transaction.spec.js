const Transaction = require('../src/transaction')

describe('Transaction', () => {
    it('adds and returns deposit', () => {
        const transaction = new Transaction;
        transaction.deposit(100)
        expect(transaction.deposit(100)).toEqual (200)
        });
    });

