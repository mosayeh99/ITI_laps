export class Account {
    Acc_no: number;
    Balance: number;
    debitAmount:() => number;
    creditAmount:() => number;
    getBalance():number {
        return this.Balance;
    }
}

export interface iAccount {
    Date_of_opening: string,
    addCustomer():string,
    removeCustomer():string,
}

export class Current_Account extends Account implements  iAccount {
    constructor(public Date_of_opening: string, public Interest_rate : number ) {
        super();
    }
    addCustomer(): string{
        return "Customer Added";
    };
    removeCustomer(): string{
        return "Customer Removed";
    }
}

export class Saving_Account extends Account implements  iAccount {
    constructor(public Date_of_opening: string, public Min_Balance : number ) {
        super();
    }
    addCustomer(): string{
        return "Customer Added";
    };
    removeCustomer(): string{
        return "Customer Removed";
    }
}