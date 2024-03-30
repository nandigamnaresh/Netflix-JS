
function submit()
{
    var number=document.getElementById('a').value;
    var pass1=document.getElementById('a1').value;



    if(number.length!==10)
    {
        document.getElementById('a').style.border="6px solid red";
        document.getElementById('warning').innerHTML="Please enter valid email or Number";
        return false;
    }
    document.getElementById('aaa').innerHTML="Your Mail or Number is:" +number;



    if(pass1==null || pass1=='' || pass1.length<8)
    {
        document.getElementById('a1').style.border="3px solid red";
        document.getElementById('a').style.border="6px solid yellow";
        document.getElementById('warning').innerHTML="";
        document.getElementById('warningg').innerHTML="Ok Valid Number";
        document.getElementById('warning1').innerHTML="Minimum 8 character";
        return false;
    }
    

    // document.getElementById('bbb').innerHTML="Your Password is"+pass1;
    
    alert("Your Number is :"+ number +" AND "+ "Your password:"+pass1);

    document.location.href="netflix-congratulation2.html"
}






