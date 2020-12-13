var employee={
    eid:100,
    name:"neethu",
    desig:"cre",
    salary:25000
}
//print name of employee
console.log(employee["name"])
//check for gender key)
console.log("gender" in employee)
//add 500 rs salary
employee["salary"]+=5000
//print all key value 
for(let k in employee)
{
    console.log(k,",",employee[k])
}