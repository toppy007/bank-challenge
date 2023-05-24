const DateTime = require('./dateTime');

class BalanceUpdate {
    constructor() {
        this.date = new DateTime;
    }
    
    format(amount) {
        const formattedAmount = parseFloat(amount).toFixed(2);
        return {
            date: this.date.getDate(),
            credit: formattedAmount >= 0 ? formattedAmount : null,
            debit: formattedAmount < 0 ? Math.abs(formattedAmount).toFixed(2) : null,
        };
    }
}

module.exports = BalanceUpdate