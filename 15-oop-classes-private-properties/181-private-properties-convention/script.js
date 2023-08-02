class Wallet {
    constructor() {
        this._balance = 0;
        this._transactions = [];
    }

    deposit(amount) {
        this._processDeposit(amount);
        this._balance += amount;
    }

    _processDeposit(amount) {
        console.log(`Depositing ${amount}`);
        this._transactions.push({
            type: 'deposit',
            amount
        });
    }

    withdraw(amount) {
        this._processWithdraw(amount);
        if(amount > this._balance){
            console.log('Not enough funds');
            return;
        }
        this._balance -= amount;
    }

    _processWithdraw(amount) {
        console.log(`Withdrawing ${amount}`);
        this._transactions.push({
            type: 'withdraw',
            amount
        });
    }

    get balance() {
        return this._balance;
    }

    get transactions() {
        return this._transactions;
    }
};

const wallet = new Wallet();
wallet.deposit(3000);
wallet.withdraw(100);
// wallet.withdraw(10000);
console.log(wallet.balance);
console.log(wallet.transactions);