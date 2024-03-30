// this keyword
// alone


// var x = this;
// console.log(x);



// var obj = {
//     name: 'alina',
//     last: this.name + 'joe',            //this is referring to obj
//     fullName: function () {
//         console.log(this.name);          //this is referring to obj
//     }
// }







// name ="naresh",
// b=this.name+ "nandigam",
// console.log(b)






// function add() {
//     console.log(this);//window
// }

// add();










//Prototype (ES5)
// object function constructor


// function University(name, last, age, dept) 
// {
//     this.firstName = name;
//     this.lastName = last;
//     this.age = age;
//     this.dept = dept;
// }

// var studentOne = new University('alex', 'joe', 20, 'ece');//object instantiation
// console.log(studentOne);

// var studentTwo = new University('alina', 'jen', 22, 'cse');
// console.log(studentTwo);






// // prototype is allowing to add new prop & method
//  University.prototype.nationality = 'Indian';

//  console.log(studentOne.nationality);

// //adding a property to a particular object
// studentTwo.maritalStatus = false;

// console.log(studentTwo);
















// var str = 'hello';
// var str = new String('hello');//

// var num = 20;
// var num = new Number(20);//

// var arr = new Array([90, 89, 10]);

// var bool = new Boolean(true);


// class & objects (ES6)
//template for js objects
// class University {
//     flag = true;          //property of university;

//     constructor(name, age, dept)
//      {              //special method to intialized values 
//                     //this is referring to University
//         this.name = name;
//         this.age = age;
//         this.dept = dept;
//     }

//     display(a) 
//     {
//         console.log(this.name + ' ' + this.age + ' ' + a + ' ' + this.flag);
//     }
// }

// var stuOne = new University('alex', 30, 'ece');//object instantiation
// console.log(stuOne);


// stuOne.display('hello');
// stuOne.flag = false;


// var stuTwo = new University('harry', 30, 'cse');
// console.log(stuTwo);
// stuTwo.display('hi');





// es6-> let, const

//parent class
// class Shape {
//     constructor(id) {
//         this.id = id;
//     }
// }


//Circle -> child/dervied class

// class Circle extends Shape 
// {
//     constructor(id, radius) {
//         super(id);                        //call's parent constrcutor
//         this.radius = radius;
//     }

//     circumference() {
//         console.log(Math.PI);
//         console.log(Math);
//         console.log(Math.floor(2 * Math.PI * this.radius));
//     }
// }

// var c = new Circle(1, 5);//id, radius
// c.circumference();


// class Triangle extends Shape {
//     constructor(id, type) {
//         super(id);
//         this.type = type;
//     }

//     type_of_traingle() {
//         console.log(this.type);
//     }
// }


// var t = new Triangle(3, 'right-angled');//id, type of triangle
// t.type_of_traingle();

// t.circumference();//both child classes can't access each other's data








// Abstraction
// class Abtract {
//     constructor(text) {
//         this._text = text;
//     }


//     doSomething() {
//         throw new Error('You have to implement something');
//     }
// }


// class Der extends Abtract {
//     constructor(text) {
//         super(text)
//     }

//     doSomething() {
//         console.log('Method implemented');
//     }
// }

// var b = new Der('hello');
// b.doSomething();

// For prototypal
// //create a University constructor function
// //name, age, marks, city, create one method inside it
// //5 students want to enroll
// //display their data  in UI 
// //task on class
// //create a class Car: city(),specialFeature()
// //name, brand, color, manufacture
// //create a class Book: type_of_book()
// //no. of pages, type of pages, author
// //create a class Animal: walk(), eat(), climb()
// //gender, name, disease
// //task on inheritance
// //Inheritance: parent electronics (methods: name, version, company name)
// child class(laptop, ipad, mobile, tablet)
// // class child {
// // configuration()
// //price()
// // }   
// -->




//task on class:-
// class car{
//     constructor(name,age,marks,city) {
//            this.name=name;
//            this.age=age;
//            this.marks=marks;
//            this.city=city;
//            if(name == 'raju'){
//             console.log('found');
//         }else {
//             console.log('not exist')
//         }
    
//     }
    
// }

// var carone = new car ('raju',30,75,'hyderabad');
// console.log(carone);










// function handleRequest() {
//     var xhttp = new XMLHttpRequest;

//     xhttp.onreadystatechange = function ()
//      {
//         if (xhttp.status == 201 && this.readyState == 4)
//         {
//             document.getElementById('loading').style.display = 'none'
//             console.log('post created');
//         }
//         else 
//         {
//             document.getElementById('loading').style.display = 'block'
//         }
//     }

//     // Data which will be sent to server
//     var obj = {
//         userId: 1,
//         id: 101,
//         title: 'Post request',
//         body: 'making apost request'
//     }

//     //making a post request
//     xhttp.open('POST', 'https://jsonplaceholder.typicode.com/posts/', true);
//     xhttp.setRequestHeader("Content-type", "application/json; charset=UTF-8");
//     xhttp.send(JSON.stringify(obj));
   
// }