
// 1.normal function............................function

// function area(length,width,height)
// {
//     // var a=0;
//    var a=length * width + height;
//    return a;     

// }
// document.write(area(10,30,40))







// 2.arraow function............................function

// var area=(a,b)=>
// {return a*b};
// document.write(area(10,20))

// const area=(a,b)=>{return a*b} ;document.write(area(10,40))..........................one line code






// 3.call back function.................................function


function abc( length, width, callback)
{
    var area=0;
    area=length * width;
    callback(area);

}

function xyz(area)
{
    document.write(area);

}

abc(20,10,xyz)