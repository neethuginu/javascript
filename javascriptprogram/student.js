var employees=[
    [100,"ajay","bca",140],
    [101,"popeye","bca",150],
    [102,"ginu","bba",250],
    [103,"neethu","mba",170]
  
]
//print all student name in uppercase
for(let stud of student){
    console.log(stud[1].toUpperCase());
}

//fing number of bba student
var count=0;
for(let stud of student){

    if(stud[2]="bba"){
        count+=1;
    }
}
//print details of student who have highest total
for(let stud of student){
    
}

//sum of total group bca
var total=0;
for(let stud of student){
    if(stu[2]=="bca"){
        total+=stud[3]
    }
}
console.log("total group"+total)