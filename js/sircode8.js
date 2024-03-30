

// let raj = new Promise(
//     function(hai,what)

//     {
//         let runs=100;
//         if(runs<105)
//         {
//             hai('successed')
//         }
//         else
//         {
//             what('failed');
//         }
//     }

//     )
//     console.log(raj);





//      raj.then(function(dataa)
//     {
//         console.log(dataa);
//     });
        


//     raj.catch(function(dataa)
//     {
    
//         console.log(dataa);
//     }
//     );
















    
//         //ajax call with promise
    

        let btn=document.getElementById('butn');
        let dataele=document.getElementById('content')
    
      btn.addEventListener('click',getdata)


        function getdata()
        {
       
          let p=new Promise(function(resolve,reject)
          {
            let xhr=new XMLHttpRequest()
            xhr.open('get','test.txt',true)
            xhr.send();
          xhr.onload=function(){
    
           if(xhr.status==200){
          resolve(xhr.responseText);
          }else
        reject('no data found')
      }
          })
          
          p.then(function(dataa){
    
            console.log(dataa);
            dataele.innerHTML=dataa
    
            
            });
            
    

      

        p.catch(function(dataa){
        
            console.log(dataa);
    
            dataele.innerHTML=dataa
    
            });
        };
    
       getdata();














// me own traing


      //  function submit()
      //  {
      //   fetch('test.txt').then(p=>p.text()).then(abc=>chinna.innerHTML=abc)

      //  }
    















    
//        //Async and Await:
    
      // function test(){
      //      //x= 5+7;
      //      console.log ('inside function');
      //     // return x;
      //  }                                
      //  test();
    

    
//       console.log(res);
//     console.log('outside function')
//        res.then(function(data){
//           console.log(data)
//        });
    






    
    
//        async function test(){
//         let reslt=await fetch('test.txt');
//        // console.log(reslt)
//        let finalres=reslt.text();
//        console.log(finalres)
//         // reslt.then(function(respon){
//         //  respon.text().then(function(data){
//         //   console.log(data);
    
//         //  });
    
//         //})
//        };
//      test();









     //me own trying



     
// async function n(){
//       let a=await fetch('test.txt1')
//       let b=a.text();
//       console.log(b)
// }
// n()
    








//      //temperal strings:
    
//      var r='raj';
//      var k='kumar';
    
//       console.log({r},{k})
    
//      console.log('full name of rk is'+r+k)