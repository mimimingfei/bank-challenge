import Transaction from './Transaction.js';
export default class Balance {
    #balance;

    constructor(balance =0) {
      this.#balance = balance;
    }
  
    deposit(transaction) {
      return this.#balance += transaction.getDeposit();
    } 
    withdraw(transaction) {
        if (transaction.getWithdrawal()> this.#balance) {
          throw new Error("Withdrawal amount exceeds current balance");
        }
          return this.#balance -= transaction.getWithdrawal();
      }
  
    getBalance() {
      return this.#balance;
    }
  //   setBalance(amount) {
  //     if (typeof amount == 'number'&& amount >= 0 ) {
  //     this.#balance = amount;
  //   }
  //  }
  }