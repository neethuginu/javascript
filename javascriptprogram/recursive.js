var pattern="ABABBC"
//find first recursive caharcter
obj={}
    for(let char of pattern){
        if(char in obj){
            console.log("first recusive"+char)
            break
        }
        else{
            obj[char]=1;
        }
    
}