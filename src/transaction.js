class Transaction {
    constructor () {
        this.balance = 0
    };

    deposit(add) {
        return this.balance += add
    }
}

module.exports = Transaction