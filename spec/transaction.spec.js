import Transaction from "../src/transaction.js";

describe('Transaction',()=>{
    let testTransaction;
    afterEach(()=>{
        testTransaction = undefined;
    })
    
    it("Test 1: should throw error when deposit amount is not a number",()=>{
        const testTransaction = new Transaction("01/02/2023","100",0,);
        expect(() => {testTransaction.getDeposit()}).toThrowError(Error,"Input deposit should be a positive number");
    })
    it('Test 2: should throw error when deposit < 0',()=>{
        const testTransaction = new Transaction("01/02/2023",-100,0,);
        expect(() => {testTransaction.getDeposit()}).toThrowError(Error,"Input deposit should be a positive number");
    })
    it('Test 3: Deposit adds when getDeposit() is called',()=>{
        const testTransaction = new Transaction("02/02/2023",1000,0);
        expect(testTransaction.getDeposit()).toEqual(1000);
    })
    it("Test 4: should throw error when withdraw amount is not a number",()=>{
        const testTransaction = new Transaction("03/02/2023",0,"100");
        expect(() => {testTransaction.getWithdrawal()}).toThrowError(Error,"Input withdrawal should be a positive number");
    })    
    it("Test 5: Withdrawal is deducted when getWithdrawal() is called",()=>{
        const testTransaction = new Transaction("10/02/2023", 0,1000);
        expect(testTransaction.getWithdrawal()).toEqual(1000);
    })
    it('Test 6: should throw error when date format is not DD/MM/YYYY',()=>{
        const testTransaction = new Transaction("222@#$8822",0,0)
        expect(() => testTransaction.getDate()).toThrowError(Error,'Invalid date format. Expected format: DD/MM/YYYY');
    })
    it('Test 7: getDate() should return date format DD/MM/YYYY',()=>{
        const testTransaction = new Transaction("24/10/2023",0,0);
        expect(testTransaction.getDate()).toBe("24/10/2023");
    })
})
