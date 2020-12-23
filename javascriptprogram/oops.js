//oops
// class-collection of object
//object-relworld enitytl
class Person{
    //name,age,gender
    //set,print
    constructor(name,age,gender)=>{
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    printPerson=()=>{
        console.log(this.name+this.age+this.gender)

    }
}
    var obj=new Person()//created object
    obj.setPerson("ajay",25,"male")
    obj.printPerson()

