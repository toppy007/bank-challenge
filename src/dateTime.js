class DateTime {
    constructor() {
      this.date = new Date();
    }
  
    getDate() {
        const day = this.date.getDate().toString().padStart(2, '0');
        const month = (this.date.getMonth() + 1).toString().padStart(2, '0');
        const year = this.date.getFullYear();
        return `${day}/${month}/${year}`;
    }
}

module.exports = DateTime