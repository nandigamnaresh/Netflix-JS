



function raj(hai,bye){
    let res= fetch('dummy.txt')
    // console.log (res);
    //let nextres= res.text()
   // console.log (nextres);


   
   res.then(function(dataa)
   {
        dataa.text().then(function(data)
        {
        console.log(data)
        })
    })
    //console.log ('inside');
   //console.log('inside 2');

  }
raj()





//   console.log(p)