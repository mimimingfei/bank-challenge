import Transaction from "./transaction.js";
import Balance from "./balance.js";
import chalk from 'chalk';
class Account {
    #name;
    #balance;
    #transactionHistory;
    constructor(name, balance = 0) {
        this.#name = name;
        this.#balance = new Balance(balance);
        this.#transactionHistory = [];  
    }
    getName() {
        return this.#name;
    }

    addTransaction(transaction) {
        if (!(transaction instanceof Transaction)) {
            throw new Error("Invalid transaction object");
        }
        this.#transactionHistory.push(transaction);
        transaction.getDeposit()> transaction.getWithdrawal() ? this.#balance.deposit(transaction) : this.#balance.withdraw(transaction);
        return this.#balance.getBalance();
    }

    getBalance() {
        return this.#balance.getBalance();
    }

    getTransactionHistory() { 
        return this.#transactionHistory;
    }

    printStatement(transaction) { 
        let statement = [];
        console.log("date           || credit || debit  || balance");
        for (let i = 0; i < this.#transactionHistory.length; i++) {
            let transaction = this.#transactionHistory[i];
            let date = transaction.getDate().padEnd(15, ' ');
            let credit = transaction.getDeposit() !== 0 ? transaction.getDeposit().toFixed(2).padEnd(7, ' ') : "       ";
            let debit = transaction.getWithdrawal() !== 0 ? transaction.getWithdrawal().toFixed(2).padEnd(7, ' ') : "       ";
            let balanceHistory = this.#balance.getBalanceHistory();
            let balance = balanceHistory[i].toFixed(2).toString().padEnd(7, ' ');;
        statement.push(`${date}|| ${chalk.green(credit)}|| ${chalk.red(debit)}|| ${balance >= 0 ? chalk.green(balance) : chalk.red(balance)}`); 
        }
        console.log(statement.reverse().join('\n'));
}
}
export default Account;
// let testAccount = new Account('lon',0)
// let transaction1 = new Transaction("10/01/2012", 1000.00, 0)
// let transaction2 = new Transaction("13/01/2012", 2000.00, 0)
// let transaction3 = new Transaction("14/01/2012", 0, 500.00)
// testAccount.addTransaction(transaction1);
// testAccount.addTransaction(transaction2);
// testAccount.addTransaction(transaction3);
// testAccount.printStatement()
