const Transaction = require('../src/transaction')
const RecordLedger = require('../src/recordLedger')

describe('RecordLedger', () => {
    it('adds and returns deposit and balance', () => {
        const transaction = new Transaction;
        const ledger = new RecordLedger(transaction)

        ledger.recordDepositTransaction(100)

        expect(ledger.printLedger()).toEqual (["Deposit 100 || Balance 100"])
        });
    });