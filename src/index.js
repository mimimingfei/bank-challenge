import Account from './Account.js';
import Printer from './Printer.js';
import Transaction from './Transaction.js';


const testAccount = new Account(0);
testAccount.addTransaction(new Transaction("10/01/2012",1000,0));
testAccount.addTransaction(new Transaction("13/01/2012", 2000, 0));
testAccount.addTransaction(new Transaction("14/01/2012", 0, 500));
Printer.printStatement(testAccount.getTransactionHistory());