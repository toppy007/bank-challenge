const Transaction = require('../src/balanceUpdate')
const RecordLedger = require('../src/recordLedger')
const DateTime = require('../src/dateTime');


describe('RecordLedger', () => {
    it('adds and returns deposit and balance', () => {
      const transaction = new Transaction();
      const date = new DateTime();
      const ledger = new RecordLedger(transaction, date);
      
      ledger.recordDepositTransaction(100);

      const result = date.getDate();

      expect(ledger.printLedger()).toEqual(`date || credit || debit || balance\n${result} || 100.00 ||  || 100.00`);
    });

    it('Debits and returns withdrawal and balance', () => {
        const transaction = new Transaction;
        const date = new DateTime();
        const ledger = new RecordLedger(transaction, date)

        ledger.recordWithdrawTransaction(50)

        const result = date.getDate();

        expect(ledger.printLedger()).toEqual (`date || credit || debit || balance\n${result} ||  || 50.00 || -50.00`)
        });
    });

describe('RecordLedger', () => {
    it('returns a sorted ledger by date', () => {
        const mockedLedger = [
            { date: '2023-04-22', credit: null, debit: '100.00', balance: '100.00' },
            { date: '2023-04-20', credit: '50.00', debit: null, balance: '50.00' },
            { date: '2023-04-23', credit: '50.00', debit: null, balance: '50.00' }
        ];
    
        const ledger = new RecordLedger();
        ledger.ledger = mockedLedger;

        expect(ledger.printLedger()).toEqual('date || credit || debit || balance\n2023-04-23 || 50.00 ||  || 50.00\n2023-04-22 ||  || 100.00 || 100.00\n2023-04-20 || 50.00 ||  || 50.00');
        });
    });