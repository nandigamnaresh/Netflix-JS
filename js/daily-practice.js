// 1.increment

// var x=10;
// document.write(x++) .....   not increament

// o/p=10


// var x=10;
// document.write(++x).......increament

// o/p=11






// 2.decrement

// var x=10;
// document.write(x--).......not decrement

// o/p=10


// var x=10;
// document.write(--x)......decrement
// o/p=9








// Think Big 

// var x=10;
// document.write(x++)
// document.write(++x)
// document.write(x--)
// document.write(--x)

// o/p=10121210









// 3.arithmetic


// 3-1 arithmetic

// a=10
// b=15
// document.write(a+b)

// o/p=25






// 3-2 subtraction

// a=20
// b=20
// document.write(a-b)

// o/p=0






// 3-3 multi

// a=10
// b=30
// document.write(a*b)

// o/p=300






// 3.4  division


// a=50
// b=20
// document.write(a/b)


// o/p=2.5





// 4.event

// 4.1 onclick


// function naresh()
// {
//     document.write("Welcome to my world")
//     document.getElementById("naresh").innerHTML
// }






// 4.2 onload


// function naresh(){
//     alert("Please Wait ")
// }


// 4.3 onmouseover


// function Nandigam(){
//     document.write("Ok its worked ")
// }





// 4.4 mouseout


// function chinna(){
//     document.write("some thing is fishy")
// }







// 4.5 onsubmit

// function hello(){
//     document.write("succesfully login")
// }






// 4.6 keypresss

// function myfunction(){
//     alert("ok ok")
// }








// 4.7  keyup

// function naresh(){
//     document.getElementById("a").innerHTML="hello"
// }




// 5.dom /////////html page




// 6. ternary operator.........only conditional operator which take a three operand
// exa: var a=expressin1 ? expressision2:expression3;



// var a=7;
// var b=5;
// c=(a<b)?a:b;
// document.write(c)




// a=10;
// b=25;
// c=40;
// d=(a>b)&& (a>c)?a:     (b>c)?b:       c;
// document.write(d)

// o/p=40  biggest number







// 7.if statements

// a=25;
// if(a<=30)
// {
//     document.write("ok ok")
// }

// o/p=ok ok









// a=30
// if(a>45)
// {
//     document.write("ok Ok")
// }
// else
// {
//     document.write("Not ok")
// }

// o/p=Not ok






// 8.destructering array..........



// var a=5;
// var b=6;
// var c=15
// [a,b] = [b,a]
// document.write(a,b)




// 9.Foreach ..............


// var movies = ["LEO","EEGA","RRR","KGF","PuSHPA"]
// movies.forEach((movies) =>{
//     document.write(movies)
// })








//10. Map()


// var values=[2,4,6,8,10]
// var numbers = values.map((naresh) =>{
//     return naresh*2
// })
// document.write(numbers)









// 3 rd day


// 1.set timeout

// setTimeout(naresh,4000)
// function naresh(){
//     document.write("Hello Naresh")
// }


// setTimeout(() => {
//     document.write("Welcome to Hyderabad")
// }, 3000);


// setTimeout(function(naresh){
//     alert("Naresh"+naresh)
// },4000,"Dont waste your time");








// 2.setInterval


// var a=0;
//  setInterval(chinna,3000);

// function chinna(){
//     alert("called" +a)
//     a++;
    
// }




// var b=1
// var a=setInterval(naresh,3000)
// function naresh(){
//     alert("called0"+b)
//     b++
//     if(b>5){
//         clearInterval(a)
//     }
// }










// 3.try and catch


// console.log("Naresh")
// console.log("Venkatesh")
// console.log(Phani)
// console.log("Satya")
// console.log("Bhanu")




// try{
//     console.log("Naresh")
//     console.log("Venkatesh")
//     console.log("Phani")
//     console.log(satya)
//     console.log("Bhanu")
// }

// catch(chinna)
// {
//     console.log(chinna.name)
//     console.log("Some errors")
//     console.log("Not Excuted")
// }
// console.log("Bloody Sweet")







// 4.spread operator


// var naresh= [2,1,4,3];
// var[alluarjun,vijay,srk,ichakka] = naresh;
// document.write(vijay)




//    trying


// function calculate(a,b){
//     let add = a + b;
//     let sub = a - b;
//     let multi = a * b;
//     let division = a / b;
//     let mod = a % b;
//     document.write(sub + "<br>")
//     document.write(add)
//     return [add,sub, multi,division,mod];
    
// }

// calculate(80,30)=[add,sub,multi,division,mod]








// 5.rest operator

// function naresh(a,b,...chinna)
// {
//     document.write(chinna);
// }
// naresh(8,9,2,3,4)





// 6. let and var


// var using.........no error.because var is function level scope


// function naresh(){
//     for(var i=0;i<10;i++)
//     console.log(i)
// console.log(i)
// }
// naresh()


// let using............error.because  let is block level scope

// function naresh(){
//     for(let i=0;i<10;i++)
//     console.log(i)
// console.log(i)
// }
// naresh()








// var hi=10;..........var
// hi=15;
// document.write(hi)



// const hi=10;.........const
// hi=15;
// console.log(hi)



// let hi=10;.........let
// hi=15;
// document.write(hi)







// 7.scopes


// global scope

// var a=60;
// function naresh()
// {
//     a+=30
//     document.write(a)
// }
// naresh()
// a+=10
// document.write(a)





//  local scope


// function hi()
// {
//     var b=30
//     document.write(b)
// }
// hi()
// b+=40;
// document.write(b)











// 1.biggest and smallest in array


// var a=[10,2,34,1,4]
// var b=(a[0]>a[1]) && (a[0]>a[2])&&(a[0]>[3])&&(a[0]>a[4])?a[0]: (a[1]>a[2])&&(a[1]>a[3])&&(a[1]>a[4])?a[1]: (a[2]>a[3])&&(a[2]>a[4])?a[2]:(a[3]>a[4])?a[3]:a[4];
// document.write(b)




// var a=[10,2,34,1,4]
// var b=(a[0]<a[1]) && (a[0]<a[2])&&(a[0]<[3])&&(a[0]<a[4])?a[0]: (a[1]<a[2])&&(a[1]<a[3])&&(a[1]<a[4])?a[1]: (a[2]<a[3])&&(a[2]<a[4])?a[2]:(a[3]<a[4])?a[3]:a[4];
// document.write(b)






// 2.reverse array



var a=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
var i=0;
var j=a.length-1;
var b;
while(i<j)
{
    b=a[i];            //b=1           2  
    a[i]=a[j];         //a[i]=15       14
    a[j]=b;            //a[j]=1        2
    i++;               //2             3
    j--;               //13            12
}
document.write(a.toString())







// 3. print the how many duplicate number

// var naresh=[1,2,3,4,5,2,3,1]
// for(var i=0;i<naresh.length-1;i++)            //0 true 1   1 true 2    2 true 3     3 true 4    4 true 5  5 
// {
//     for(var j=i+1;j<naresh.length;j++)        //1 true 2   2 true 3   3 true 4   4 true 5   5 true 6 
//     {
//         if(naresh[i]==naresh[j])           
//         {
//             console.log("duplicate number") 
//         }
        
//     }
// }







//4.  missing number


// var naresh=[1,3,4,2,6];                              //   5
// var a=naresh.length+1;                               //   6
// var total=(a*(a+1))/2;                               //   42/2=21        

// for (var i=0;i<naresh.length;i++)                    //   0 true  1 
// { 
//     total=total-naresh[i]                            //   total=21-1    =21-3    =21-4    =21-2    =21-6 
//  }                                                   //         =20     =18      =17      =19      =15    
// document.write("missing number"+total);              //      







// 5.string reverse.........wrong


// var chinna="naresh"
// for(j=5;j>=chinna.length;j--)
// {
//     console.log(chinna[j])
// }




// naresh=chinna.charAt()
// document.write(naresh)
// for(var i=a.charAt(-1))



// var i=0;
// var j=a.length-1;
// var b;
// while(i<j)
// {
//     b=a[i];
//     a[i]=a[j];
//     a[j]=b;
//     i++;
//     j--;
// }
// document.write(a)















































