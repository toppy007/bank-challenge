class RecordLedger {
    constructor (transaction) {
        this.transaction = transaction
        this.ledger = []
    }

    recordDepositTransaction(amount) {
        this.amount = amount
        const add = this.transaction.deposit(amount)
        this.ledger.push(`Deposit ${this.amount} || Balance ${add}`)
    } 

    recordWithdrawTransaction(amount) {
        this.amount = amount
        const minus = this.transaction.withdraw(amount)
        this.ledger.push(`Withdraw ${this.amount} || Balance ${minus}`)
    } 

    printLedger() {
        return this.ledger
    } 
}
    
module.exports = RecordLedger
    
const Transaction = require('./transaction');

const transaction = new Transaction();
const ledger = new RecordLedger(transaction);

ledger.recordDepositTransaction(100);
ledger.recordWithdrawTransaction(50);
console.log(ledger.printLedger());