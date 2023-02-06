import Printer from '../src/printer.js';
import Account from '../src/account.js';
import Transaction from '../src/transaction.js';

it("should print statement when printStatement() is called", () => {
    let Spy = spyOn(Printer, 'printStatement')
    Printer.printStatement()
    expect(Spy).toHaveBeenCalledTimes(1);
})