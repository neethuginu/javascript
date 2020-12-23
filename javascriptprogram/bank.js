//bank account
class Bank{
    static bankName=()=>{
        console.log("sbkbank")
    }
    createAccount=(acno,name,minimumbal)=>{
    this.acno=acno;
    this.name=name;
    this.minimubal;
    
}
deposit=(amount)=>{
    this.minimumbal+=amountconsole.log("your acno"+this.acno+"has been credited with amount"+amount+"avl bal"+this.minimumbal)
}
withdrawal=(amount)=>{
    if(amount>yjis.minimumbal){
        console.log("insufient fund")
    }
    else{
        this.minimumbal-=amount;
        console.log("your bal"+this.minumbal)
    }

    balEnq=()=>{
        console.log("your aval bal is"+this.minimumbal)
    }
}
var obj=new Bank()
obj.createAccount(100,"neethu",5000)
obj.deposit(10000)
obj.withdrawal(50000)
Bank.bankName()