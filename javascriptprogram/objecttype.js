var student={
    rol:100,
    name:"neethu",
    course:"bba",
    total:150
}
//print student name
console.log(student["name"]/console.log(student.name))
//duplicate keys are not allowed(using dupliacte key values are over write

//duplicate values are allowed
//checking for a a specific key
console.log("course" in student)
console.log("gender" in student)
//adding a new key value in pairs into object
student["gender"]="male"
console.log(student)
//adding 50more total
student["total"]+=50
console.log(student)
