import chalk from 'chalk';
export default class Printer {
    static printStatement(trans) { 
        let statement = [];
        console.log("date           || credit || debit  || balance");
        for (let i = trans.length - 1; i >= 0; i--) {
            let date = trans[i].getDate().padEnd(15, ' ');
            let credit = trans[i].getDeposit() !== 0 ? trans[i].getDeposit().toFixed(2).padEnd(7, ' ') : "       ";
            let debit = trans[i].getWithdrawal() !== 0 ? trans[i].getWithdrawal().toFixed(2).padEnd(7, ' ') : "       ";
            let balance = trans[i].getBalance().toFixed(2).toString().padEnd(7, ' ');;
        statement.push(`${date}|| ${chalk.green(credit)}|| ${chalk.red(debit)}|| ${balance >= 0 ? chalk.green(balance) : chalk.red(balance)}`); 
        }
    console.log(statement.join('\n'));
}
}