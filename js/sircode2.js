




//get element by id

// function getName()
// {
//     var n = document.getElementById('name').value;
//      console.log(n);

//     if (n.trim() == '') 
//     {
//         document.getElementById('name-error').innerHTML = 'Please enter name';
//     } 
//     else if (n.length <= 3) 
//     {
//       document.getElementById('name-error').innerHTML = 'Add more characters';
//     }
//      document.getElementById('display').textContent = n;
//     //  document.getElementById('display').innerHTML = n;          //just write sit no use
// }









//     //getelement by className



    // var list = document.getElementsByClassName('item');
    // console.log(list);//treat like an array
    // console.log(list.length)


    // var listArray = [];
    // for (var i = 0; i < list.length; i++) {
    //     console.log(list[i].innerHTML);
    //     listArray.push(list[i].innerHTML);
    // }

    // console.log(listArray);

    // for (var j = 0; j < listArray.length; j++) {
    //     if ('html'.toLowerCase() === listArray[j].toLowerCase()) {
    //         console.log('item found');
    //     }
    // }







    
//     //get element by tagname



    // var liItems = document.getElementsByTagName('li');
    // console.log(liItems);//treat like an array






//     //Query Selectors (css selector)
//     //query selector selects the first



    // document.querySelector("#example").innerHTML = 'Hello';
    // document.querySelector("ul li").innerHTML = 'World';










//     //query selector selects the all
    // var items = document.querySelectorAll(".example");
    // console.log(items);//treat like an array

    // for (var z = 0; z < items.length; z++)
    // {
    //     items[z].innerHTML = 'World';
    // }




    // var item = document.querySelectorAll("li");
    // console.log(item);//treat like an array







//     // restructuring of object

//     // Create a node(html element)


    // var element = document.createElement('div');
    // // console.log(element);
    // element.innerHTML = 'DOM';
    // document.body.appendChild(element);



    


    // me own trying..........

    // var a=document.createElement('div');
    // var b=document.createElement("h1");
    // b.innerHTML="Nandigam Naresh";

    // a.appendChild(b);
    // console.log(a);
    // document.body.appendChild(a);
    
    

    






//     //  update DOM node

    // var newItem = document.createElement('li');
    // newItem.innerHTML = 'ReactJs';
    // document.querySelector('ul').appendChild(newItem);



    // var newInput = document.createElement('input');
    // newInput.type = 'text';
    // newInput.placeholder='please press';
    // document.body.appendChild(newInput);










//     //delete node


    // var e = document.querySelector('li:first-child');
    // e.remove();
    





//     //adding styles

    // document.body.style.color = "white";
    // document.body.style.backgroundColor = "red";
    // document.body.style.fontSize = '40px';
    // document.body.style.fontFamily = "arial";

    // document.getElementById('display').style.fontSize = "50px ";
    // document.getElementById('disply-block').style.display = "block";



//me trying own

    // var a=document.createElement("h1")
    // a.innerHTML="Nandigam Naresh"
    // a.style.color="red"
    // document.body.appendChild(a)


// }



// // Accordian

// //insertBefore() in js
// //children property in js
// // class List: addClass, removeClass, toggleClass








// <!-- task
// Using DOM selectors: create a list in html: ask user any item from list display 'item' found. Add styling through js -->
// function getnames ()
// {
//     var n = document.getElementById('names').value;
//     console.log(n);
    
//     if(n.trim()=='')
//     {
//         document.getElementById('disp').innerHTML='pls enter name'
//     }
//     else if(n.trim().length<=3)
//     {
//         document.getElementById('disp').innerHTML='add more char'
//     }
//     else
//     {
//       document.getElementById('disp').innerHTML="well done"
//     }
  


//     document.getElementById('displa').innerHTML=n







    
//  var names=document.getElementsByClassName('names');
//  console.log(names);

// var newnames=[]; 

//  for (var i = 0; i < names.length; i++) {
//    console.log(names[i].innerHTML);
//     newnames.push(names[i].innerHTML);
//  }

 
//   for(var j=0;j<newnames.length;j++){
   
//      if('rohit'.toLowerCase()==newnames[j].toLowerCase()){
//         console.log('found');
//      }else{
//         console.log('not found');
//      }     
//   }
//  }

//       if('rohit'===(newnames[1])){
//         console.log('batsmen found');
      
//   }else{
//     console.log('not found');
// }
// }

 
//     } 
// for (var j = 0; j < newnames.length; j++)  {
    
// }
// //

