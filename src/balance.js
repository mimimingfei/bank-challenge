import Transaction from './Transaction.js';
export default class Balance {
  #balance;
  #balanceHistory;
  constructor(balance = 0) {
    this.#balance = balance;
    this.#balanceHistory = [];
  }

  deposit(transaction) {
    this.#balance += transaction.getDeposit();
    this.#balanceHistory.push(this.#balance);
    return this.#balance;
  }
  withdraw(transaction) {
    if (transaction.getWithdrawal() > this.#balance) {
      throw new Error("Withdrawal amount exceeds current balance");
    }
    this.#balance -= transaction.getWithdrawal();
    this.#balanceHistory.push(this.#balance);
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }

  getBalanceHistory() {
    return this.#balanceHistory;
  }

}