# Bank

This challenge helps you practice your OO design skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## Specification

### Requirements

* You should be able to interact with your code via the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, credit or debit amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date       || credit  || debit  || balance
14/01/2012 ||         || 500.00 || 2500.00
13/01/2012 || 2000.00 ||        || 3000.00
10/01/2012 || 1000.00 ||        || 1000.00
```


#### Standard
- [ ] Meets the spec
- [ ] Developed test-first
- [ ] Passes tests and code is clean and well formatted
- [ ] Encapsulates adding and storing Transactions in a class
- [ ] Encapsulates Statement formatting in a class
- [ ] Encapsulates Transaction data in a class

---------------------------------------------------------------------
domain model
------------------------------------------------------------------------------------------------------------------
Object             |               Property                  |               Message          |    Output
------------------------------------------------------------------------------------------------------------------
Account            |  Name@String                            | getName()                      |@String              
                   |  Balance@Integer                        | getBalance()                   |@Integer
                   |  transactionHistory@Array[Transaction]  | getTransactionHistory()        |@Array
                                                             | deposit()                      |@Integer
                                                             | withdraw()                     |@Integer
------------------------------------------------------------------------------------------------------------------
Transaction        |  Deposit@Integer                        |getDeposit()                    |@String
                   |  Withdraw@Integer                       |getWithdrawal()                 |@String
                   |  Date@object                            |getDate()                       |@object
------------------------------------------------------------------------------------------------------------------
Balance            |  Balance@Integer                        |deposit()                       |@Integer
                   |                                         |withdraw()                      |@Integer
------------------------------------------------------------------------------------------------------------------
printStatement


#### Extended
- [ ] Can you format the console output?  Credited values should be GREEN and debited values should be RED.  The balance should be GREEN if positive and RED if negative

You may find this link useful [Output to the command line using NodeJS](https://nodejs.dev/en/learn/output-to-the-command-line-using-nodejs/) - check the formatting section (and this links out to a GitHub doc on the [ANSI color codes](https://gist.github.com/iamnewton/8754917))
