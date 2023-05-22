class Transaction {
    constructor () {
        this.balance = 0;
    };

    deposit(add) {
        return this.balance += add;
    };

    withdraw(minus) {
        return this.balance -= minus;
    };
}

module.exports = Transaction