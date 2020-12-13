var employees=[
    [100,"ajay","developer",2500],
    [100,"ajay","developer",2500],
    [100,"ajay","developer",2500],
    [100,"ajay","developer",2500],
    [100,"ajay","developer",2500]
]
for(let element of employees){
    console.log(employees)
}
//print only name
for(let emp of employess){
    console.log(emp[1])
}

//fond total salary
var total=0;
for(let emp of employess){
    total+=emp[3]
}
console.log(total)