//123 ------->321
var num=123;
var res=""
{
    var digit=num%10;
    console.log(digit)
    res=res+String(digit)//res
    num=Math.floor(num/10);
}
console.log(res)
// 123 
//1**3+2**3+3**3=1+27+8=36
var inp=2;
var i=1;

var total=0;
var sum=0;
while(i<=inp){
    total=total*10+inp;
    sum=sum+total;
    1++;
}
console.log(sum)
