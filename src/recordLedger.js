/*eslint no-undef: "error"*/

class RecordLedger {
    constructor (transaction, date) {
        this.transaction = transaction;
        this.date = date;
        this.ledger = [];
    }

    recordDepositTransaction(amount) {
        this.amount = amount;
        const date = this.date.getDate();
        const add = this.transaction.deposit(amount);
        this.ledger.push(
            {
                Date: date, 
                Debit: null, 
                Deposit: this.amount, 
                Balance: add
            });
    }

    recordWithdrawTransaction(amount) {
        this.amount = amount;
        const date = this.date.getDate();
        const minus = this.transaction.withdraw(amount);
        this.ledger.push( 
            {
                Date: date, 
                Debit: this.amount, 
                Deposit: null, 
                Balance: minus
            });
    }

    printLedger() {
        const headers = 'Date || Debit || Deposit || Balance\n';
        const sortedLedger = this.ledger.sort((a, b) => new Date(b.Date) - new Date(a.Date));
        const ledgerRows = sortedLedger.map(
            item => `${item.Date} || ${item.Debit || ''} || ${item.Deposit || ''} || ${item.Balance}`
        );
        return `${headers}${ledgerRows.join('\n')}`;
    }
}
    
module.exports = RecordLedger

