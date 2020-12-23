//map()
//filter()
//reduce
//sort()

var arr=[10,11,12,13,2,5]
//square
var squ=arr.map(num=>num**2)
console.log(squ)

var cub=arr.map(num=>num**3)
console.log(cub)



var names=["sachin","sewag","dravid"]

//print all in uppercase
var name=names.map(na=>na.toUpperCase())
console.log(name)
//print all names starting"s"

var sname=names.filter(na=>na[0]=='s')
console.log(sname)
//print s using uper




//var mname=names.filter(na=>na[0]=='s').map(na=>na.toUpperCase())
//console.log(mnames)
//external iteratio
//next internal iteration

var arr=[10,11,12,13,13]
arr.forEach(num=>console.log(num))

//sort

var arr=[10,11,12,13,14,15]
var srted=arr.sort((no1,no2)=>no2-no1)
console.log(srted)