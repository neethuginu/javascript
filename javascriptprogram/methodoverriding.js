//method overriding
class Parent{
    phone=()=>{
        console.log("have nokia 1530")
    }
}

//iphone12
class child extends Parent{
    phone=()=>{
        super()
        console.log("have iphone12")
    }
}
var ch=new Child()
ch.phone()