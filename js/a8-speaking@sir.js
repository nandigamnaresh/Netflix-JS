

let num1=[11,32,15,45,10];
num1.forEach((currentnumber,index)=>
{
    console.log(`num1 at index ${index},${currentnumber}`)
})


//JOIN


var names=["naresh","venkatesh","hemanth","sravya","gopi"];
var naresh = document.getElementById('example');
var output = names.map(data=>`<li>${data}</li>`)
naresh.innerHTML=output.join('')




// num1 at index 0,11

// num1 at index 1,32

// num1 at index 2,15

// num1 at index 3,45

// num1 at index 4,10