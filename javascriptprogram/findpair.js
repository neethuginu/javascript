

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

  //var arr=[1,2,3,4,5]            
  var arr=[1,2,3,4,6]
var low=0;
var upp=arr.length-1;
var element=6;

while(low<upp)]{
   let total=arr[low]+arr[upp];
   if(total>element){
      upp=upp-1
   }
   else if(total<element){
      low=low+1
   }
   else if(total==element){
      console.log("pairs are"arr[low],arr[upp]);
   }
}
    

