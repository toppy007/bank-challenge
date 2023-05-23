class DateTime {
    constructor() {
      this.date = new Date();
    }
  
    getDate() {
        const day = this.date.getDate();
        const month = this.date.getMonth();
        const year = this.date.getFullYear();
        return `${day}-${month}-${year}`;
    }
}

module.exports = DateTime