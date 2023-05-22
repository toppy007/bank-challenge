const Transaction = require('../src/transaction')
const RecordLedger = require('../src/recordLedger')
const DateTime = require('../src/dateTime');


describe('RecordLedger', () => {
    it('adds and returns deposit and balance', () => {
        const transaction = new Transaction;
        const date = new DateTime();
        const ledger = new RecordLedger(transaction, date)

        ledger.recordDepositTransaction(100)

        expect(ledger.printLedger()).toEqual ([{ Date: '22-4-2023', Debit: null, Deposit: 100, Amount: 100 }])
        });

    it('Debits and returns withdrawal and balance', () => {
        const transaction = new Transaction;
        const date = new DateTime();
        const ledger = new RecordLedger(transaction, date)

        ledger.recordDepositTransaction(50)

        expect(ledger.printLedger()).toEqual ([{ Date: '22-4-2023', Debit: null, Deposit: 50, Amount: 50 }])
        });
    });