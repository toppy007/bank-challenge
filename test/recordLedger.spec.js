const Transaction = require('../src/transaction')
const RecordLedger = require('../src/recordLedger')
const DateTime = require('../src/dateTime');


describe('RecordLedger', () => {
    it('adds and returns deposit and balance', () => {
        const transaction = new Transaction;
        const date = new DateTime();
        const ledger = new RecordLedger(transaction, date)

        ledger.recordDepositTransaction(100)

        expect(ledger.printLedger()).toEqual ("Date || Debit || Deposit || Balance\n22-4-2023 ||  || 100 || 100")
        });

    it('Debits and returns withdrawal and balance', () => {
        const transaction = new Transaction;
        const date = new DateTime();
        const ledger = new RecordLedger(transaction, date)

        ledger.recordDepositTransaction(50)

        expect(ledger.printLedger()).toEqual ("Date || Debit || Deposit || Balance\n22-4-2023 ||  || 50 || 50")
        });
    });

describe('RecordLedger', () => {
    it('returns a sorted ledger by date', () => {
        const mockedLedger = [
            { Date: '2023-04-22', Debit: null, Deposit: 100, Balance: 100 },
            { Date: '2023-04-20', Debit: 50, Deposit: null, Balance: 50 },
            { Date: '2023-04-23', Debit: 50, Deposit: null, Balance: 50 }
        ];
    
        const ledger = new RecordLedger();
        ledger.ledger = mockedLedger;

        expect(ledger.printLedger()).toEqual('Date || Debit || Deposit || Balance\n2023-04-23 || 50 ||  || 50\n2023-04-22 ||  || 100 || 100\n2023-04-20 || 50 ||  || 50');
        });
    });