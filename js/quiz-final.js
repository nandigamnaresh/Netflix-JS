// function checkRadioButton()
// {
//     var radioButtons = document.getElementsByTagName("input");
//     var isChecked = false;
//     if (!isChecked) 
//     {
//         alert("Please select a radio button before submitting.");
//     } 
// }




function next() {
    var radioButtons = document.getElementsByTagName("input");
    var isChecked = false;

    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            isChecked = true;
            break;   
        }
    }

    if (!isChecked) 
    {
        alert("Please select a radio button before submitting.");
    } 
}


document.getElementsByClassName('container')[0].style.display = "block";

function next(id) 
{
    document.getElementsByClassName('container')[id-1].style.display = "none";
    document.getElementsByClassName('container')[id].style.display = "block";
}
function prev(id)
{
    document.getElementsByClassName('container')[id-1].style.display = "block";
    document.getElementsByClassName('container')[id].style.display = "none";
}










// document.getElementsByClassName('container')[0].style.display = "block";

// function next(id) 
// {
//     document.getElementsByClassName('container')[id-1].style.display = "none";
//     document.getElementsByClassName('container')[id].style.display = "block";
// }
// function prev(id)
// {
//     document.getElementsByClassName('container')[id-1].style.display = "block";
//     document.getElementsByClassName('container')[id].style.display = "none";
// }




function result() {
    var score = 0;
    if (document.getElementById('correct1').checked) {
        score++;
    }
    if (document.getElementById('correct2').checked) {
        score++;
    }
    if (document.getElementById('correct3').checked) {
        score++;
    }
    if (document.getElementById('correct4').checked) {
        score++;
    }
    if (document.getElementById('correct5').checked) {
        score++;
    }
    if (document.getElementById('correct6').checked) {
        score++;
    }
    if (document.getElementById('correct7').checked) {
        score++;
    }
    if (document.getElementById('correct8').checked) {
        score++;
    }
    if (document.getElementById('correct9').checked) {
        score++;
    }
    if (document.getElementById('correct10').checked) {
        score++;
    }

    alert("your score is: "+ score);
    document.write("YOUR SCORE :"+ score)
}
alert("your"+score)



