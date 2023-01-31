import Transaction from "./transaction.js";
import Balance from "./balance.js";
import chalk from 'chalk';
class Account {
    #name;
    #balance;
    #transactionHistory;
    constructor(name, balance = 0){
        this.#name=name;
        this.#balance = new Balance(balance);
        this.#transactionHistory =[];
    }
    getName () {
        return this.#name;
    }
    getBalance() {
        return this.#balance.getBalance();
    }
    // setBalance(amount) {
    //     return this.#balance.setBalance(amount);
    // }
    deposit(transaction) {
        if (!(transaction instanceof Transaction)) {
            throw new Error("Invalid transaction object");
        }
        this.#balance.deposit(transaction);
        this.#transactionHistory.push(transaction);
        } 
            
    withdraw(transaction) {
        if (!(transaction instanceof Transaction)) {
          throw new Error("Invalid transaction object");
        }
        this.#balance.withdraw(transaction);
        this.#transactionHistory.push(transaction);
      }
      
    getTransactionHistory() {
           return this.#transactionHistory;
        }

    printStatement() {
    console.log("date           || credit || debit  || balance");
    let currentBalance = this.#balance.getBalance();
    this.#transactionHistory.sort((a, b) => {return new Date(b.getDate()) - new Date(a.getDate());})
    const transactions = this.#transactionHistory.map(transaction => {
        currentBalance += transaction.getDeposit();
        currentBalance -= transaction.getWithdrawal();
    let date = transaction.getDate().padEnd(15, ' ');
    let credit = chalk.green(transaction.getDeposit().toString().padEnd(7, ' '));
    let debit = chalk.red(transaction.getWithdrawal().toString().padEnd(7, ' '));
    let balance = currentBalance >= 0 ? chalk.green(currentBalance.toString().padEnd(7, ' ')) : chalk.red(currentBalance.toString().padEnd(7, ' '));
    return `${date}|| ${credit}|| ${debit}|| ${balance}`;
    });
         console.log(transactions.join('\n'));
        } 
}
export default Account;
