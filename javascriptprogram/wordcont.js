var text="this is this is java"
//step1 split the string

var words=text.split("")

//[this,is,this,is,java]
obj={}
//key|value
for(let word of words){
    if(word in obj){
        obj[word]+=1

    }
    else{
        obj[word]=1

    }
}
console.log(obj)