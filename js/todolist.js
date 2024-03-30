

var list =document.querySelector(".section ul")
var searchinput = document.getElementById('search-bar');


var formm = document.forms['addform']
// console.log(formm)
formm.addEventListener(
    "submit",function(e)
    {
        e.preventDefault()
        var value1 = document.querySelector('#addform input[type=text]').value;
        var li = document.createElement('li');
        var hobbyname = document.createElement('span');
        var dltbtn = document.createElement('span');

        li.appendChild(hobbyname);
        li.appendChild(dltbtn);

        list.appendChild(li)
        hobbyname.innerHTML = value1;
        dltbtn.innerHTML = "delete";
        hobbyname.classList.add("name");
        dltbtn.classList.add("delete")

        

        savedata();

    

    }
    
    
)



searchinput.addEventListener('input', function () 
{
    searchTask(searchinput.value.trim().toLowerCase());
});








var hideform = document.querySelector('#addform input[type=checkbox]')
hideform.addEventListener(
    'click',function(){
        if (list.style.display == "none"){
            list.style.display = "block"
        }
        
        else
        {
            list.style.display = "none"
        }
    
    }
)







list.addEventListener(
    "click",function(e){
        if(e.target.className == "delete")
        {
            var li = e.target.parentElement
            list.removeChild(li)
            savedata()
        }
        else
        {
           var li = e.target.parentElement.remove();
            savedata()
        }
    
        
    }
)




function savedata()
{
    localStorage.setItem('data',list.innerHTML)
}

function showtask()
{
    list.innerHTML=localStorage.getItem("data")
}

showtask()











function searchTask(query) 
    {
        let tasks = document.querySelectorAll('.section ul li');

        tasks.forEach(task =>
             {
            let tasktext = task.querySelector('span').textContent.toLowerCase();
            console.log(tasktext)
             
            if (tasktext.includes(query)) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }



