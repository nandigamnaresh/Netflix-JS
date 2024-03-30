// // first five characters in a string...

// const s1 = "gfu hiefuef";
// const s2 = s1.slice(0,5);
// console.log(s2);




// //length and uppercase  of a string... 
// const s3 = "huik bhjik"
// console.log(s3.length);
// console.log(s3);
// console.log(s3.toUpperCase());

// // lowercase and trim method... 
// const s4 = "     JKFLDL   GLJVEORG";
// console.log(s4);
// console.log(s4.toLowerCase());
// console.log(s4.trim());

// //replace word in string... 
// const s5 = "The sun rises in the west";
// console.log(s5);
// console.log(s5.replace("west", "east"))

// //parseInt... 
// console.log(parseInt("30", 10));
// console.log(parseInt("20 pravallika 10 years old"));
// console.log(parseInt("30 40 20"));
// console.log(parseInt("she was 20"));
// console.log(parseInt("0x10", 16));
// console.log(parseInt("10", 8));
// console.log(parseInt("20.45"));

// //parseFloat...
// console.log(parseFloat("20"));
// console.log(parseFloat("10 years old"));
// console.log(parseFloat("30 40 20"));
// console.log(parseFloat("she was 20"));
// console.log(parseFloat("20.652"));

// //Arrow function... 
// let arrow = "";
// arrow = () => {
//     return "Arrow Function";
// }
// console.log(arrow());

// //normal function... 
// arrow = function () {
//     return "normal function";
// }
// console.log(arrow());

// //filter method... 
// function isPositive(value) {
//     return value > 0;
// }
// const filter = [12, 0, -3, 5, -190]
// const filter1=filter.map(isPositive);
// console.log(filter1);

// //map method...
// function mapped(item) {
//     return item * 10;
// }





// const maps = [3, 12, 66, 8, 30];
// const newMap = maps.map(mapped);
// console.log(newMap);

// //callback functions... 
// function sum(a,b){
//     return a + b;
// }
// function display(addition){
//     console.log(addition);
// }

// let result = sum(10,5);
// display(result)

// //Arrays... 
// const persons = ["Raju", "Ravi", "Ram"];
// console.log(persons);
// console.log(persons[1]);
// persons.push("Rajesh","Ramesh");
// console.log(persons);
// console.log(persons);
// console.log(persons.pop());
// console.log(persons);
// persons.unshift("Ramesh","Rahul");
// console.log(persons);
// persons.shift();
// console.log(persons);
// console.log(persons.at(3));
// console.log(persons.join("$"));
// const persons2 = ["Ramya", "Rani"]
// const array = persons.concat(persons2);
// console.log(array);

// let arr = array.slice(2,5);
// console.log(arr);

// array.splice(1,2,"Reshma");
// console.log(array);

// console.log(array.reverse());

// console.log(array.sort());



// //Objects... 
// let person = {
//     name : "Priya",
//     age : 46,
//     city : "Bengaluru"
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);
// console.log(person);
// person.eyecolor = "blue";
// console.log(person);
// person.role = "manager";
// console.log(person);
// delete person.eyecolor;
// console.log(person);
// person.age = 35;
// console.log(person);
// person.city = "Hyderabad"
// console.log(person);


// //Strings... 
// let str1 = "Hello world!";
// let str2 = "welcome!";
// let str = (str1 + " " + str2);
// console.log(str);
// console.log(str.length);
// console.log(str1.charAt(3));
// console.log(str.at(15));
// console.log(str[0]);
// let str3 = "apple, banana, kiwi";
// console.log(str3.slice(5, 13));
// let str4 = str3.substring(10);
// console.log(str4);
// console.log(str3.toLocaleUpperCase());
// console.log(str3.toLowerCase());
// console.log(str1.concat(" " + str2));
// const str5 = "      pravallika      "
// console.log(str5);
// console.log(str5.trim());
// // console.log(str5.trimStart());
// console.log(str2.padStart(10,"-"));
// console.log(str2.padEnd(10,"-"));
// console.log(str2.repeat(3));
// console.log(str3.replace("banana","mango"));

//operators... 
// Assignment operators... 
// let x = 20;
// console.log(x += 5); //25
// console.log(x -= 5); //20
// console.log(x *= 5); //100
// console.log(x /= 5); //20
// console.log(x %= 5); //0

//logical operators... 
// let a = 10;
// let b = 5;

// console.log(a>=10 && b<10); //true
// console.log(a==5 || b<5); //false
// console.log(a==b); //false

// //ternary operators... 
// a>b ? console.log("true") : console.log("false"); //true
// a<b ? console.log("true") : console.log("false"); //false

//increment and decrement... 
// console.log(b++); //5
// console.log(b); //6
// console.log(++b);//7
// console.log(b); //7
// console.log(a--); //10
// console.log(a); //9
// console.log(--a); //8
// console.log(a); //8

// //Array destructuring... 

// let colors = ["pink", "red", "yellow", "blue", "violet", "green"];
// // let[color1, color2, color3] = colors;
// let[color1,color2,color3,color4,...params] = colors
// console.log(color2); //red
// console.log(color1); //pink
// console.log(params); //["blue", "violet", "green"]





// //array destruturing with functions... 
// function calculate(a,b){
//     let add = a + b;
//     let sub = a - b;
//     let multi = a * b;
//     let division = a / b;
//     let mod = a % b;

//     return [add,sub, multi,division,mod];
// }
// let[add,sub, multi,division,mod] = calculate(7, 3);
// console.log(add); //10
// console.log(sub); //4
// console.log(multi); //21
// console.log(division); //2.33333333
// console.log(mod); //1