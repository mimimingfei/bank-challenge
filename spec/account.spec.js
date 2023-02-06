import Account from "../src/account.js"
import Transaction from "../src/transaction.js"
import Balance from "../src/balance.js";
describe('Account', () => {
    let testAccount,testAccount2;
    let testTransaction1,testTransaction2,testTransaction3,testTransaction4;
    beforeEach(() => {
        testAccount = new Account("Linda",0);
        testAccount2 = new Account("Linda",20000);
        testTransaction1 = new Transaction("06/06/2019",1000,0);
        testTransaction2 = new Transaction("08/03/2022",0,5000);
        testTransaction3 = new Transaction("04/08/2023",5000,0);
        testTransaction4 = new Transaction("05/03/2022",0,100);
    });
    afterEach(()=>{
        testAccount=undefined;
        testAccount2= undefined;
        testTransaction1,testTransaction2,testTransaction3,testTransaction4 = undefined;
    }) 

    it('Test 1 getName() should return name of account holder',()=>{
        expect(testAccount.getName()).toEqual("Linda");
    })

    it("Test 2 should initialize with a balance of 0", () => {
        expect(testAccount.getBalance()).toEqual(0);
      });

    it('Test 3 Instantiate an account with correct balance',()=>{   
        expect(testAccount2.getBalance()).toEqual(20000);
    })
   
    it("Test 4 should throw an error if an invalid transaction object is passed", () => {
        const invalidTransaction = {};
        expect(() => testAccount.addTransaction(invalidTransaction)).toThrowError("Invalid transaction object");
      });
    
    it("Test 5 should throw an error if balance < withdrawal", () => {
        expect(() => testAccount.addTransaction(testTransaction2)).toThrowError("Withdrawal amount exceeds current balance");
      });
      
    it('Test 6 should add transaction and update the balance when addTransaction() is called', () => {
        testAccount.addTransaction(testTransaction1);
        testAccount.addTransaction(testTransaction4);
        expect(testAccount.getBalance()).toEqual(900); 
        expect(testAccount.getTransactionHistory().length).toEqual(2);
      });

    it("Test 7 should return an empty transaction history if no transactions have been made", () => {
        expect(testAccount.getTransactionHistory().length).toEqual(0);
      });
    
    it("Test 8 should print the statement correctly when printStatement() is called", () => {
      let transaction1 = new Transaction("10/01/2012", 1000.00, 0)
      let transaction2 = new Transaction("13/01/2012", 2000.00, 0)
      let transaction3 = new Transaction("14/01/2012", 0, 500.00)
      testAccount.addTransaction(transaction1);
      testAccount.addTransaction(transaction2);
      testAccount.addTransaction(transaction3);  
      let spy = spyOn(console, 'log');
      testAccount.printStatement();
      expect(spy).toHaveBeenCalledWith('date           || credit || debit  || balance');
      expect(spy).toHaveBeenCalledWith(expectedOutput);
});

    
});
    

