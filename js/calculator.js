
function add()
{
    var b=Number(document.getElementById('one').value);
    var c=Number(document.getElementById('two').value);
    document.getElementById('total').innerHTML="TOTAL="+(b+c)
}
function sub()
{
    var b=Number(document.getElementById('one').value);
    var c=Number(document.getElementById('two').value);
    document.getElementById('total').innerHTML="TOTAL="+(b-c)
}

function mul()
{
    var b=Number(document.getElementById('one').value);
    var c=Number(document.getElementById('two').value);
    document.getElementById('total').innerHTML= "TOTAL="+b*c;
}

function div()
{
    var b=Number(document.getElementById('one').value);
    var c=Number(document.getElementById('two').value);
    document.getElementById('total').innerHTML="TOTAL="+b/c;
}