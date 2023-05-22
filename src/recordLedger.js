class RecordLedger {
    constructor (transaction, date) {
        this.transaction = transaction
        this.date = date
        this.ledger = []
    }

    recordDepositTransaction(amount) {
        this.amount = amount
        const date = this.date.getDate()
        const add = this.transaction.deposit(amount)
        this.ledger.push(
            {
                Date: date, 
                Debit: null, 
                Deposit: add, 
                Amount: this.amount
            });
    } 

    recordWithdrawTransaction(amount) {
        this.amount = amount
        const date = this.date.getDate()
        const minus = this.transaction.withdraw(amount)
        this.ledger.push( 
            {
                Date: date, 
                Debit: minus, 
                Deposit: null, 
                Amount: this.amount
            });
    } 

    printLedger() {
        const headers = 'Date || Debit || Deposit || Amount\n';
        const ledgerRows = this.ledger.map(
          item => `${item.Date} || ${item.Debit || ''} || ${item.Deposit || ''} || ${item.Amount}`
        );
        return `${headers}${ledgerRows.join('\n')}`;
    }
}
    
module.exports = RecordLedger
    
const Transaction = require('./transaction');
const DateTime = require('./dateTime')

const transaction = new Transaction();
const date = new DateTime
const ledger = new RecordLedger(transaction, date);

ledger.recordDepositTransaction(1000);
ledger.recordWithdrawTransaction(500);
ledger.recordDepositTransaction(100);
ledger.recordWithdrawTransaction(50);
console.log(ledger.printLedger());