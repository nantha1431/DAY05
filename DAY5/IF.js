 //IIFE function
       //Print odd numbers in an array
       var arr_1=[1,24,45,68,75,99,101,100,204,401];
        (function(){
            var res=[];
            for(i=0;i<arr_1.length;i++)
            {
                (arr_1[i]%2!==0)?res.push(arr_1[i]):"";
            }
            console.log("Array of Odd Numbers: "+res);
        })(arr_1);

       //Convert all the strings to title caps in a string array

       var arr_2=["hello world","zen class","guvi geeks","road map","deepika"];
        (function(){
            var res=[];
            for(y in arr_2)
            {
                arr_2[y]=arr_2[y].split(" ").map((element)=>(element[0].toUpperCase()+element.substr(1).toLowerCase()));
                res.push(arr_2[y].join(" "));
            }
            console.log(res);
        })(arr_2);

       //Sum of all numbers in an array
        var arr_3=[1,2,-3,4,5,6,7,0,-1,5];
        (function(){
            let res=0;
            for(z of arr_3)
            {
                res+=z;
            }
            console.log("Sum of all numbers in array: "+res);

        })(arr_3);

       //Return all the prime numbers in an array
       var arr_4=[-2,-14,0,1,2,3,4,9,12,24,11,17,19,147];
        (function(){
            var res=[];
         arr_4.forEach(element => {
            var flag=false;
            if(element<0 || element==0 || element==1)
        {
          flag=true;
        }
        else
        {
            for(i=element-1;i>=2;i--)
            {
              if(element%i==0)
              {
                flag=true;
                break;
              }  
            }
        }
        flag==false? res.push(element):"";
         }); 
         console.log("Array of Prime Numbers: "+res);
        })(arr_4);

        
       //Return all the palindromes in an array
       var arr_5=["Madam","Deepika","Welcome","Refer","Civic","Hello","level","racecar"];
        (function(){
       var res=[];
       arr_5.forEach(element => {
         element.toLowerCase()==element.toLowerCase().split("").reverse().join("")?res.push(element):""; 
         });
         console.log("Array of Palindromes: "+res);
        })(arr_5);

       //Return median of two sorted arrays of the same size.

       var arr_6=[1,12,15,26,38];
       var arr_7=[2,13,17,30,45];
       (function(){
        var res=arr_6.concat(arr_7).sort(function(a,b){
        return a-b;
       });
        var final=(res[(res.length/2)-1]+res[(res.length/2)])/2;
        console.log("Median of two sorted arrays of the same size: "+final);
        })(arr_6,arr_7);

        //Remove duplicates from an array

        var arr_8=[1,0,1,0,2,34,45,54,34,2,-1,4,-1,1,34];

        (function(){
           for(i=0;i<arr_8.length;i++)
           {
            for(j=i+1;j<arr_8.length;j++)
            {
                if(arr_8[i]==arr_8[j])
                {
                     arr_8[j]="";
                }
            }
           }
           var res=arr_8.filter((element)=>element!=="");
           console.log(res);
        })(arr_8);

        //Rotate an array by k times
         
       var arr_9=[1,2,3,4,5],k=3;
        (function(){
            var len=arr_9.length;
            for(i=0;i<k;i++)
            {
                arr_9=arr_9.slice(len-1).concat(arr_9.slice(0,len-1));
            }    
            console.log(arr_9);         
        })(arr_9,k);