import Account from "../src/account.js"
import Transaction from "../src/transaction.js"
describe('Account', () => {
  let testAccount, testAccount2;
  let testTransaction1, testTransaction2;
  beforeEach(() => {
    testAccount = new Account(0);
    testAccount2 = new Account(20000);
    testTransaction1 = new Transaction("06/06/2019", 1000, 0);
    testTransaction2 = new Transaction("05/03/2022", 0, 100);
  });
  afterEach(() => {
    testAccount = undefined;
    testAccount2 = undefined;
    testTransaction1, testTransaction2 = undefined;
  })

  it("Test 1 should initialize with a balance of 0", () => {
    expect(testAccount.getBalance()).toEqual(0);
  });

  it('Test 2 Instantiate an account with correct balance', () => {
    expect(testAccount2.getBalance()).toEqual(20000);
  })

  it("Test 3 should throw an error if an invalid transaction object is passed", () => {
    const invalidTransaction = {};
    expect(() => testAccount.addTransaction(invalidTransaction)).toThrowError();
  });

  it('Test 4 should throw an error if money to be withdrawn > account balance ', () => {
    expect(() => testAccount.addTransaction(testTransaction2)).toThrowError("Withdrawal amount exceeds current balance");
  })

  it('Test 5 should add transaction and update the balance when addTransaction() is called', () => {
    testAccount.addTransaction(testTransaction1);
    testAccount.addTransaction(testTransaction2);
    expect(testAccount.getBalance()).toEqual(900);
    expect(testAccount.getTransactionHistory().length).toEqual(2);
  });

  it("Test 6 should return an empty transaction history if no transactions have been made", () => {
    expect(testAccount.getTransactionHistory().length).toEqual(0);
  });

});


