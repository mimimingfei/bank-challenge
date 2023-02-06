import Transaction from "../src/transaction.js";
import Balance from "../src/balance.js";

describe('Balance',()=>{
    let depositTransaction, withdrawTransaction;
    let testBalance;
    beforeEach(()=>{
    testBalance = new Balance(0);
    depositTransaction = new Transaction("02/01/2023",1000, 0);
    withdrawTransaction = new Transaction("04/01/2023",0, 500);
    })
    
    afterEach(()=>{
    const testBalance = undefined;
    })

    it('Test 1 initialize with a balance of 0',()=>{
        expect(testBalance.getBalance()).toEqual(0);
    })
    it("Test 2 should throw an error if an invalid transaction object is passed", () => {
        let invalidTransaction = {};
        expect(() => testBalance.deposit(invalidTransaction)).toThrowError();
      });
    it('Test 3 Transaction deposit adds to balance when deposit() is called',()=>{
        expect(testBalance.deposit(depositTransaction)).toEqual(1000);
    })
    it('Test 4 should throw an error when intended withdrawal > balance', ()=>{
        expect(()=>testBalance.withdraw(withdrawTransaction).toThrowError("Withdrawal amount exceeds current balance"))
    })
    it("Test 5 Transaction withdrawal deducted from balance when withdraw() is called",()=>{
        const testBalance2 = new Balance(1000);
        expect(testBalance2.withdraw(withdrawTransaction)).toEqual(500);
    })
    it('Test 6 getBalance() returns correct balance', ()=>{
        const testBalance2 = new Balance(1000);
        testBalance2.deposit(depositTransaction);
        testBalance2.withdraw(withdrawTransaction);
        expect(testBalance2.getBalance()).toEqual(1500);
    })
    it('Test 7 balanceHistory stores balance after each transaction',()=>{
        const testBalance2 = new Balance(1000);
        testBalance2.deposit(depositTransaction);
        testBalance2.withdraw(withdrawTransaction);
        expect(testBalance2.getBalanceHistory()).toEqual([2000,1500]);
    })
});