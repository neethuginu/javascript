//polymorphism
//many forms(more than one form)
//method overloading
//method overiding
class Maths{
    add=()=>{
        console.log("no arg method")
    }
    add=(no1)=>{
        console.log("inside singlearg method")
    }
    add=(no1,no2)=>{
        console.log("inside two arg method")
    }
}
//same method name and idferent argumeny
//will excute last implimented moethod
var math=new