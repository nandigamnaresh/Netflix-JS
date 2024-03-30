


// for (var j = 10; j >= 0; j--) {     //10 true 10 (update are 9)
//     console.log(j);  //10 9 8 ... 1 0
// }


// for (var i = 0; i <= 20; i = i + 2) {
//     console.log(i);//1 2 ... 19 20
// }


// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i);//1 2 ... 19 20
// }


// for (var x = 0; x<0; x++) {
//     console.log(x);//
// }













// //iterate over array

// var arr = [90, 78, 67, 83, 100];//5

// for (var num = 0; num < arr.length; num++) {
//   //  console.log(arr);//90 78 67 78 100

//     if (arr[num] == 67) {
//        console.log('found');
//         break;
//        // console.log('found');
//     }else{
//         console.log('not found')
//     }
//     // for() {

//     // }
// }










// // infinite loop
// // for(var i = 0; i >= 0; i++){}

// // while loops
// //syntax
// // while(condition) {
// //block of code
// // }


// var z = 10;
// while (z >= 0) {
//     console.log(z);
//     z--;
// }


// var arr=[2,5,8,6]
// var i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i++
// }







// // infinite loop

// // do while
// // do {
// //block of code
// // } while(condition)

// var y = 1;
// do {
//     console.log(y);
//     y=y+2

// } while (y < 10);



// // infinite loop

// var a = 10;
// do {
//     console.log(a);//10 9..........................................not running why man
//     a--;
// } while (a < 10);










// // statement

// // break: it will terminate loop/ switch
// // continue: it terminate current loop and continue



// var arr=[5,24,19,8,12]
// for (var i = 0; i < arr.length; i++) {
//     ;//90 78 67 78 100

//     if (arr[i] == 8) {
//         console.log('found');
//         console.log(arr[i])
        
//     }
//     else {
//         console.log('not found');

//     }
    
// }






// console.log('BREAK');
//90 78 98 89 100




// var arr=[60,78,5,25,36]
// for (var i = 0; i < arr.length; i++) {

//     if (arr[i] === 78) {
//         console.log('found');
//         break;
//     }
//     else {
//       console.log("Not found")

//     }
// }










// // continue
// // continue: it terminate current loop and continue
// console.log('CONTINUE');





// var arr=[60,78,5,25,36]
// for (var i = 0; i < arr.length; i++) 
// {

//     if (arr[i] === 25)
//     {
//         console.log('found');
//         console.log(arr.indexOf(25))
        
    
//     }

//     continue;
//     // console.log(arr[i])


// }








//me trying  another example

// for(var i=1;i<=10;i++)
// {
//     if(i==7)
//     {
//         continue;
//     }
//     document.write(i)
// }


// for(var i=1;i<=10;i++)
// {
//     if(i==7)
//     {
//         break;
//     }
//     document.write(i)
// }










// //iterate over strings

// var count = 0;
// var str = 'Hi, hellol';

// for (var i = 0; i < str.length; i++) {
//     // console.log(str[i]);
//     if (str[i] == 'l')
//     {
//         count++;//2
        
        
//         console.log(i);
//     }
// }

// console.log(count) 









// var count = 0;
// var str = 'Hi, hellol';
// for (var i = 0; i < str.length; i++) {

//     if (str[i] == 'l') {
//         console.log(i);
//         count++;
//         break;
//         console.log(i);   //no use 
//     }

//     continue;    // i think  no use
// }
// console.log(count)










// // <!-- [90, 89, 78, 100, 99, 56, 56, 89] -->
// // <!-- How do you find the missing number in a given integer array of 1 to 100

// var numbers=[90, 89, 78, 100, 99, 56, 89];
// var missnum = prompt('enter num');
// // var missingnum=[];

// // var arraynum=[]
// for (i=0;i<=numbers.length;i++){
//     // console.log(i);
//    if(missnum==numbers[i]){
//     console.log('found');
//     break;
//    }
//    else
//    {
//     console.log("not found")
//    }

    
    
//                                                               //    }else{
//                                                               //     console.log('not found');
//                                                               //     // break;
//                                                              //    }

// }













//................................................. small

// var nums=[];
// for(var j=1;j<=100; j++){
//      nums.push(j);
//     console.log(j);
// }
//   console.log(nums);

//  nums.splice(52,1);
                                                 //  console.log(b)
                                                 //  console.log(nums)


//  for (var k=0;k<nums.length-1;k++)
//  {

                                               // console.log(nums[k+1])                   // 53 not printed
                                                // console.log(nums[k]+1)                        //54 not printed
    //  if(nums[k]+1 !=nums[k+1])              //      53!=54
    //  {
    //     var missingnum=nums[k]+1;
    //     console.log(missingnum)
    //  }


 //}


//  var nums=[];
// for(var j=1;j<=10; j++){
//      nums.push(j);
//     console.log(j);
// }
//   console.log(nums);

//  nums.splice(5,1);
//  console.log(nums)






// var nums=[1,2,3,4,5,7,8,9,10]
//  for (var k=0;k<nums.length-1;k++)
// {
//   console.log(nums[k]+1)
//   if(nums[k]+1 !=nums[k+1])            
//      {
//         var missingnum=nums[k]+1;
//         console.log(missingnum)
//      }
//  }








 

//.......................................dowt

//  var num=[1,2,4,5,7,9];

//  var missingnum=[];

//  for(i=0;i<=num.length;i++){
//     missingnum.push(num[i]);
    
//  }
//  console.log(missingnum);







// // How do you find the duplicate number on a given integer array?  ( sort array, nesting of loops)




// var arr=[65,34,45,65,24,25,65,33,47]
//  for(var i=0;i<arr.length;i++ )
//   {
//     // console.log(arr[i])
//     for (var j=i+1;j<arr.length;j++)
//     {
//         // console.log(arr[j])
//        if(arr[i]==arr[j])
//        {
//             console.log(arr[i]);
//        }
//     }
//  }


















// // How do you find the largest and smallest number in an unsorted integer array? (sort the array)



// // How do you find all pairs of an integer array whose sum is equal to a given number?

// // How do you find duplicate numbers in an array if it contains multiple duplicates?





// var array = [1, 2, 3, 4, 5, 1, 3];
// var existnum=4;
// newarray=[];
// for(var i=0;i<array.length;i++){

//     if(array[i]==existnum){

//         console.log('position of searching number is' + ' ' + (i));
    
//     } 
//     console.log(array.sort());

// for(var i=0;i<array.length;i++)
// {
//     for (var j=i+1;j<array.length;j++)
//     {

//     if(array[i]==array[j]){
//         console.log(array[i]);

//         // console.log(array[i])   //position of multiple items 1 & 3 is 0,3 )
//     }
// }
// }
// }













//   function click(operation){

//     var result;
//     var num1=document.getElementById('input1').value;
//     var num2=document.getElementById('input2').value;

//     switch(operation)
//     {
    
//     case 'plus()':
//       result=num1+num2;
//       document.getElementById('result').innerHTML=result;
//       break;
//     case 'minus()':
//         result=num1-num2;
//         document.getElementById('result').innerHTML=result;
//         break;
//     }
//     console.log(result);

//   }
  
// click();







// function naresh()
// {
//   var a;
//   var b=document.getElementById("in1").value;
//   var c=document.getElementById("in2").value;

//   switch(chinna)
//   {
//     case "d":
//       a=b+c;
//       document.getElementById("a").innerHTML=a;
//       break;
//     case "e":
//       a=b-c;
//       document.getElementById("a").innerHTML=a
//       break;
//   }
//   document.write(a)
// }
// naresh()




function click(operation){

   var result;
   var num1=document.getElementById('input1')
   var num1=document.getElementById('input2');

   switch(operation)
   {
   
   case 'plus()':
     result=  num1+num2;
     document.getElementById('result').innerHTML=result;
     break;
  case 'minus()':
     result=  num1-num2;
     document.getElementById('result').innerHTML=result;
     break;
     console.log(result);
   }
   console.log(result);
 }

click();





