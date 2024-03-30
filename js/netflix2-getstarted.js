function next()
{
    var number=document.getElementById('mail').value;
    var pass1=document.getElementById('pass').value;



    

    if(number.length!==10)
    {
        document.getElementById('mail').style.border="6px solid red";
        document.getElementById('warning').innerHTML="Please enter valid email or Number";
        return false;
    }
    document.getElementById('aaa').innerHTML="Your Mail or Number is:" +number;






    if(pass1==null || pass1=='' || pass1.length<8)
    {
        document.getElementById('pass').style.border="3px solid red";
        document.getElementById('mail').style.border="6px solid yellow";
        document.getElementById('warning').innerHTML="";
        document.getElementById('warningg').innerHTML="Ok Valid Number";
        document.getElementById('warning1').innerHTML="Minimum 8 character";
        return false;
    }
    

    // document.getElementById('bbb').innerHTML="Your Password is"+pass1;
    
    alert("Your Number is :"+ number +" AND "+ "Your password:"+pass1);

    document.location.href="netflix-congratulation2.html"
}

function signup()
{
    document.location.href="netflix1-signup.html";
}
