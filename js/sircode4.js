// console.log(window);



// var x = 20;
// console.log(window.x)




// function add() {
//     console.log(20 + 20);
// }

//     add();





// window.alert('hello');
// window = {
//     x: 20, 
//     add: function () {

//     },
// }


// window.document.getElementById()
// window.document.write()






// console.log(window.innerHeight);
// console.log(window.innerWidth);




// window has pre-defined objects
// Screen Object: contains information about user's screen

// console.log(screen.width);
// console.log(window.screen.height);
// console.log(screen.availWidth);//gives width after removing external browser scrollbar
// console.log(screen.availHeight);//gives height after removing external browser scrollbar
// console.log(screen.colorDepth);






// Location object
// console.log(window.location.href);//url
// console.log(window.hostname);//domain name
// console.log(window.location.pathname);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.replace(url));






// history Object
// window.history.back();
// window.history.forward();
// navigation object

// console.log(window.navigator.appCodeName);
// console.log(window.navigator.appName);
// console.log(navigator.appVersion);
// console.log(navigator.cookieEnabled);
// console.log(navigator.platform);
// console.log(navigator.geolocation);
// console.log(navigator.language);
// console.log(navigator.product);
// console.log(navigator.connection);

// console.log(window.location);
// console.log(window.navigator);








//Timings Events


// window.setTimeout(function () {
//     alert('hello');
// }, 4000);







// var x=7;
// window.setTimeout(function(){
//   if(x==5){
//     alert('raj')
//   }else if(x==7){
//      alert('kumar')
//   }
// },5000)








// window.setTimeout(add, 4000);

// 1000ms = 1 sec


// window.setInterval(function ()
// {
//      alert('haiiiii'); //it executes after every 5 seconds
// }, 5000);





// Storages
//to store data




// sessionStorage.setItem('firstname', 'alex');

                                                                                 //me trying.... console.log(sessionStorage.getItem('firstname'))

// //to retrieve data
// document.getElementById('display').innerHTML = sessionStorage.getItem('firstname');

// sessionStorage.clear();









// Local Storage
// localStorage.setItem('lastName', 'joe');
                                                     //document.getElementById("display").innerHTML=localStorage.getItem("lastName")
// console.log(localStorage.getItem('lastName'));
// localStorage.clear();








// // JSON
// // parse(), stringify()

// var raju={
//     "name":"shravs",
//     "age":25,
//     "vilolage":"hyderabad"
// }
// console.log(raju)




//receiveing data
// var obj = JSON.parse('{"name": "john","age": 30,"city": "pune"}');
// console.log(obj);

// var a=JSON.parse('{"name":"naresh","age":21,"clg":"rvr"}')
// console.log(a)





// var kumar=JSON.stringify(raju);
// console.log(kumar);









// var arr = JSON.parse('["Ford", "Audi", "Kwid"]');
// console.log(arr);



// //sending data

// var person = 
// {
//     name: 'alex',
//     age: 25
// }
// console.log(JSON.stringify(person))
// console.log(person);





// var arrVal = [89, 89, 78, 100,];
// console.log(arrVal)
// console.log(JSON.stringify(arrVal));






// // practice timing events in js setTimeInterval(), setTimeout()

// var x=7;
// for (var i=0;i<x;i++){
//     setTimeout(function(){
//      console.log('thereforenol');
//     },4000)
//     setInterval(function(){
//         console.log('rajkumar')
//      },3000)
   
// }





// for(var i=0;i<3;i++){
//   setInterval(function(){
//      console.log('kushi')
//   },3000)
// }

// var raj =JSON.parse('{"rajkumar":"kushi"}');
// console.log(raj);

// var raj ={rajkumar:'kushi'};
// console.log(JSON.stringify(raj));






    
// // fetch the index.html part of the url of the current page using bom
// console.log(window.location.href);

// //  -->