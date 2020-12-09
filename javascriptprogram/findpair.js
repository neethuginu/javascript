

 // var arr=[1,2,3,4,6]//6(2,4) 7(3,4)(6,1)
 var arr=[1,2,3,4,5,6]
 var num=10;
var sum=0;

 for(let i=0;i<arr.length;i++)
 {
    for(let j=i+1;j<arr.length;j++)
    {
       sum=arr[i]+arr[j];
           if(num==sum) 
           
       {
          console.log(arr[i],arr[j]);
         break;
       
      }
    }
}

              
    

