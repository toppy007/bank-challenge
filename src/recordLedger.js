class RecordLedger {
    constructor() {
        this.update = update
        this.ledger = [];
    }

    updateLedger(amount) {
        this.ledger.push(this.update.format(amount));
    }

    calculateBalance(ledger) {
        let balance = 0;
        return ledger.map((item) => {
            balance += parseFloat(item.credit) || -parseFloat(item.debit);
            return { ...item, balance: balance.toFixed(2) };
        });
    }
    
    printLedger() {
        const headers = 'date || credit || debit || balance\n';
        const sortedLedger = this.ledger.sort((a, b) => new Date(b.date) - new Date(a.date));
        const updatedLedger = this.calculateBalance(sortedLedger);
        
        const ledgerRows = updatedLedger.map((item) => {
            return `${item.date} || ${item.credit || ''} || ${item.debit || ''} || ${item.balance}`;
        });
        
        return `${headers}${ledgerRows.join('\n')}`;
    }
}
    
module.exports = RecordLedger

const BalanceUpdate = require('./balanceUpdate');

const update = new BalanceUpdate();
const ledger = new RecordLedger(update);

ledger.updateLedger(1000);
ledger.updateLedger(-500);
ledger.updateLedger(1000);

console.log(ledger.printLedger());