class BankAccount{

    accountNumber 
    ownerName  
    balance 
   

    constructor(account, owner, balc){
    
        this.accountNumber  = account
        this.ownerName      = owner
        this.balance        = balc
        
        console.log(`Account Information: \n Account Number: ${this.accountNumber} \n Owner Name: ${this.ownerName} \n Balance: ${this.balance}`);
    
    }

  

    deposit(amount){
      this.balance += amount;
    }

    withdraw(amount){
        if(this.balance < 1500){
            console.log("Insufficient funds");
        }else{
            this.balance -= amount;
        }

       
        
    }

    getBalance(){
        if(this.balance >= 1500){
            return this.balance;
        }else{
            return this.withdraw();
        }
        
    }

    displayAccountInfo(){
        console.log (`Updated Account Information: \n Account Number: ${this.accountNumber} \n Owner Name: ${this.ownerName} \n Balance: ${this.balance}`);
    }

}



const acc1 = new BankAccount(1001, "Ashraful Haque", 1500);


console.log('\n');

// Deposit and Withdraw 
console.log("Deposit: 300");
acc1.deposit(300);

console.log("Withdraw: 500");
acc1.withdraw(500);

acc1.getBalance();

console.log('\n');

acc1.displayAccountInfo();

console.log('\n');



const acc2 = new BankAccount(1002, "Monirul Haque", 1200);

console.log('\n');

// Deposit and Withdraw 
console.log("Deposit: 400");
acc2.deposit(400);

console.log("Withdraw: 600");
acc2.withdraw(600);

acc2.getBalance();

console.log('\n');

acc2.displayAccountInfo();


