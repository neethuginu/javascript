var low=10;
var upp=50;
var sum=0;
var flag;
for(let i=low;i<=upp;i++){
      flag=1;
     for(j=2;j<=i/2;j++){
     if(i%j==0){
         flag=0;
         break;
        
      } 
     }
     if(flag==1){
         sum=sum+i;
     }
     }    
  

    console.log(sum);
    return 0;