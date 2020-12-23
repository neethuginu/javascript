// rol,name,course,total
//initialize
//print
class student{
    constructor(rol,name,course,total){
    this.rol=rol;
    this.name=name;
    this.course=course;
    this.total=total;

}
printStudent=()=>{

    console.log("name="+this.name);
    console.log("rol="+this.rol);
    console.log("course="+this.course);
}
}
var obj=new student(100,"akhil","mca",140)
var obj1=new student(101,"nkhill","bca",240)
var obj2=new student(102,"ail","mca",840)
var obj3=new student(103,"agl","ma",640)
var obj4=new student(104,"al","ba",940)
var students=[]
students.push(obj)
students.push(obj1)
students.push(obj2)
students.push(obj3)
students.push(obj4)
students.forEach(obj=>console.log(obj.name))
students.filter(obj=>obj.course=='mca').forEach(obj=>console.log(obj.name))
 var total=students.map(obj=>obj.total).reduce((total1,total2)=>total1>total2?total1:total2)
console.log(total)
