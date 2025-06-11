class bank{
    constructor(accountNum, Balance, Name){
        this.accountNum = accountNum;
        this.Balance = Balance;
        this.Name = Name;
    }
    deposit(amount){
        this.Balance = this.Balance + amount;
        console.log(`deposited ${amount} into account ${this.accountNum}`);
    }
    withdraw(withdrawAmount){
        if(this.balance > withdrawAmount){
            this.balance = this.Balance - amount;
        }
        else{
            console.log("insufficient ammount");
        }

    }
    checkBalance(){
        return this.Balance;
    }
}
let Abank = new bank("123123",3000,"sree");
Abank.deposit(500);
console.log(Abank);
let updatedbalance = Abank.checkBalance();
console.log(updatedbalance);
Abank.withdraw(100);

Abank.withdraw(1000);
console.log(Abank);