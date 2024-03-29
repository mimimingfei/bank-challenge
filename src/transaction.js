import balanced from "balanced-match";

export default class Transaction {
  #date;
  #deposit;
  #withdrawal;
  #balance;
  constructor(date, deposit, withdrawal) {
    this.#date = date;
    this.#deposit = deposit;
    this.#withdrawal = withdrawal;
    this.#balance = 0;
  }

  getDeposit = () => {
    if (typeof this.#deposit !== 'number' || this.#deposit < 0) {
      throw new Error("Input deposit should be a positive number");
    }
    return this.#deposit;
  };

  getWithdrawal() {
    if (typeof this.#withdrawal !== 'number' || this.#withdrawal < 0) {
      throw new Error("Input withdrawal should be a positive number");
    }
    return this.#withdrawal;
  }

  getDate() {
    const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
    if (!dateRegex.test(this.#date)) {
      throw new Error("Invalid date format. Expected format: DD/MM/YYYY");
    }
    return this.#date;
  }

  setBalance(balance) {
    this.#balance = balance;
  }

  getBalance() {
    return this.#balance;
  }
}