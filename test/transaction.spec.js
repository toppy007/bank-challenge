const Transaction = require('../src/transaction')

describe('Transaction', () => {
    it('adds and returns latest balance', () => {
        const transaction = new Transaction;
        transaction.deposit(100)
        expect(transaction.deposit(100)).toEqual (200)
        });
    });

describe('Transaction', () => {
    it('debits and returns latest balance', () => {
        const transaction = new Transaction;
        transaction.deposit(100)
        expect(transaction.withdraw(100)).toEqual (0)
        });
    });