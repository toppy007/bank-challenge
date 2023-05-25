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
        const updatedLedger = this.calculateBalance(this.ledger);
        const sortedLedger = updatedLedger.sort((b, a) => new Date(b.date) - new Date(a.date)).reverse();
        
        const ledgerRows = sortedLedger.map((item) => {
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
ledger.updateLedger(2000);
ledger.updateLedger(-500);

console.log(ledger.printLedger());