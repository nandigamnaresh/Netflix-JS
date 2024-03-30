// 1.if 

// var a=10;
// if(a>=10)
// {
//     document.write("Hello World")
// }






// 2.if else

// var a=prompt("enter a number")
// if(a>=10)
// {
//     document.write("Hello World")
// }
// else
// {
//     document.write("Not Elizible ")
// }




// 3.ternary operator

// var a=prompt("enter number")
// var message=""
// a>=18 ?
// message="hello":message="not";
// document.write(message)




// 5.switch case

// var a=prompt("Enter today date")
var a;
var myd=new Date().getDay();
document.write(myd)



switch(myd)
{
    case 1:
        a="hiiii";
        break;
    case 2:
        document.write("monday")
        break;
    case 3:
        document.write("tuesday")
        break;
    case 4:
        document.write("wednessday")
        break;
    case "5":
        document.write("thursday")
        break;
    case "6":
        document.write("friday")
        break;
    case "7":
        document.write("sat")
        break;
}
document.write(myd)



