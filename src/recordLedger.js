class RecordLedger {
    constructor() {
        this.update = update
        this.ledger = [];
    }

    recordTransaction(transaction) {
        this.ledger.push(this.update.format(transaction));
    }
    
    printLedger() {
        const headers = 'date || credit || debit || balance\n';
        const sortedLedger = this.ledger.sort((a, b) => new Date(b.date) - new Date(a.date));
        let balance = 0;
        
        const ledgerRows = sortedLedger.map((item) => {
            balance += parseFloat(item.credit) || -parseFloat(item.debit);
            return `${item.date} || ${item.credit || ''} || ${item.debit || ''} || ${balance.toFixed(2)}`;
        });
        
        return `${headers}${ledgerRows.join('\n')}`;
    }
}
    
module.exports = RecordLedger

const BalanceUpdate = require('./balanceUpdate');

const update = new BalanceUpdate();
const ledger = new RecordLedger(update);

ledger.recordTransaction(1000);

console.log(ledger.printLedger());