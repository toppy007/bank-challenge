const RecordLedger = require('../src/recordLedger')
const DateTime = require('../src/dateTime');
const BalanceUpdate = require('../src/balanceUpdate');


describe('RecordLedger', () => {
    it('adds and returns deposit and balance', () => {
      const balanceUpdate = new BalanceUpdate();
      const date = new DateTime();
      const ledger = new RecordLedger(balanceUpdate);
      
      ledger.updateLedger(100);

      const result = date.getDate();

      expect(ledger.printLedger()).toEqual(`date || credit || debit || balance\n${result} || 100.00 ||  || 100.00`);
    });

    it('Debits and returns withdrawal and balance', () => {
        const balanceUpdate = new BalanceUpdate;
        const date = new DateTime();
        const ledger = new RecordLedger(balanceUpdate)

        ledger.updateLedger(-50)

        const result = date.getDate();

        expect(ledger.printLedger()).toEqual (`date || credit || debit || balance\n${result} ||  || 50.00 || -50.00`)
        });
    });

describe('RecordLedger', () => {
    it('returns a sorted ledger by date', () => {
        const mockedLedger = [
            {"credit": "100.00", "date": "22/05/2023", "debit": null},
            {"credit": "100.00", "date": "23/05/2023", "debit": null},
            {"credit": "100.00", "date": "24/05/2023", "debit": null},
        ];
    
        const ledger = new RecordLedger();
        ledger.ledger = mockedLedger;

        expect(ledger.printLedger()).toEqual('date || credit || debit || balance\n24/05/2023 || 100.00 ||  || 100.00\n23/05/2023 || 100.00 ||  || 200.00\n22/05/2023 || 100.00 ||  || 300.00');
        });
    });