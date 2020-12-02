console.log(
    "hello"
)
var name="neethu";
var age=25;
console.log("hai"+name+"you are"+age+"years old")
var num1=20;
var num2=30;
num1=num1+num2;
num2=num1-num2;
num1=num1-num2;
console.log('num1,num2')
temp=num1;
num1=num2;
num2=temp;
console.log(num1,num2)
//relation, < > <=,> =,== for comparing values
var num=10;//integer
var avg=50.5//float
var name="luminar"//string
var name=tru;//boolean
//int float=>number type ayirikkum
var num=18;
var age="18";
cosole.log(num==age);//false
//in js == is used for content comparson
//strict matching
console.log(num===age);//false
console.log(10<20);//true
