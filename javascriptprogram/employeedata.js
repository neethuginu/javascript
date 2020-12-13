var employee=[
    [1000,"emp1","deve",1981,1989],
    [1001,"emp2","deve",1991,2012],
    [1002,"emp3","hr",1985,1987],
    [1003,"emp4","executive",2000,2012]
]
//print all employees name in uppercase

for(let emp of employee){

    console.log(emp[1].toUpperCase());
}
//print all employe details all are develpoe
for(let emp of employee){
    if(emp[2]=="deve"){
        console.log(emp)
       
       
    }
    
}

//print all employe details who are working in 1980
for(let emp of employee){

    if(emp[3]>1979&&emp[4]<1990)
    {
        console.log(emp)
    }
}
//print employe detials awho exper>9
for(let emp of employee){
    if(emp[4]-emp[3]>=9){
        console.log(emp)

    }
}