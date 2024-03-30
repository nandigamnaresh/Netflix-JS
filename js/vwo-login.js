function login() {
    var number = document.getElementById('number').value;
    var password = document.getElementById('pass').value;

    // var b=number+password;
    // console.log(b)

    if (number.length !== 10) {
        alert("Please enter ten number")
        document.getElementById('alert').innerHTML = "Not valid";
        return false;
    }
    if (password.length <= 8) {
        alert("Minimum eight character")
        document.getElementById('alert1').innerHTML = "Not valid";
        return false;
    }
}




function naresh() {
    var number = document.getElementById('number').value;
    var password = document.getElementById('pass').value;

    if (number.length !== 10) {
        document.getElementById('alert').innerHTML = "Not valid";
    }
    if (number.length == 10) {
        document.getElementById('alert').innerHTML = "ok valid";
    }

}
function naresh1() {
    var number = document.getElementById('number').value;
    var password = document.getElementById('pass').value;
    if (number.length == 10) {
        document.getElementById('alert').innerHTML = "";

    }
    if (password.length <= 8) {
        document.getElementById('alert1').innerHTML = "Not valid";
    }
    if (password.length >= 8) {
        document.getElementById('alert1').innerHTML = "Ok valid";
    }


}


function creaQR()
{
    var first = document.getElementById('number').value;
    var second = document.getElementById('pass').value;
    var number= "NUMBER:" +first+ "\n"+ "PASSWORD:" +second;


    
    var gene = document.getElementById('abc');
    var qr = qrcode(0, 'M');
    qr.addData(number);
    qr.make();
    gene.innerHTML = qr.createImgTag();

}






// function generateQRCode() {
//     var inputText = document.getElementById("number").value;
//     var qrcodeDiv = document.getElementById("xyz");
//     var qr = qrcode(0, 'M');
//     qr.addData(inputText);
//     qr.make();
//     qrcodeDiv.innerHTML = qr.createImgTag();
// }



