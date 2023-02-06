import Transaction from "./transaction.js";
class Account {
    #balance;
    #transactionHistory;
    constructor(balance = 0) {
        this.#balance = balance;
        this.#transactionHistory = [];  
    }
    addTransaction(transaction) {
        if (transaction.getWithdrawal() > this.#balance) {
            throw new Error("Withdrawal amount exceeds current balance");
          }
        this.#balance += transaction.getDeposit();
        this.#balance -= transaction.getWithdrawal();
        transaction.setBalance(this.#balance);
        this.#transactionHistory.push(transaction);
    }

    getBalance() {
        return this.#balance;
    }

    getTransactionHistory() { 
        return this.#transactionHistory;
    }
    
}
export default Account;

