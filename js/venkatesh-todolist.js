document.addEventListener('DOMContentLoaded', function () {

    let newtaskinput = document.getElementById('newtask');
    let taskList = document.getElementById('newlist');
    let searchinput = document.getElementById('search-bar');

    // Load tasks from localStorage on page load
    loadTasks();

    newtaskinput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && newtaskinput.value.trim() !== "") {
            addTask(newtaskinput.value.trim());
            newtaskinput.value = "";
        }
    });

    searchinput.addEventListener('input', function () 
    {
        searchTask(searchinput.value.trim().toLowerCase());
    });


    function addTask(tasktext) {
        let li = document.createElement('li');
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        let h1 = document.createElement('h3');
        h1.textContent = tasktext;
        let delbtn = document.createElement('button');
        delbtn.textContent = 'Delete';
        delbtn.className = 'delbutton';
        delbtn.addEventListener('click', function () {
            li.remove();
            saveTasks(); // Fix the function name here
        });
        li.appendChild(checkbox);
        li.appendChild(h1);
        li.appendChild(delbtn);
        taskList.appendChild(li);

        saveTasks(); // Fix the function name here
    }



    function searchTask(query) 
    {
        let tasks = document.querySelectorAll('#newlist li');

        tasks.forEach(task =>
             {
            let tasktext = task.querySelector('h3').textContent.toLowerCase();
             
            if (tasktext.includes(query)) {
                task.style.display = 'block';
            } else {
                task.style.display = 'none';
            }
        });
    }





    function saveTasks() {
        const tasks = [];
        document.querySelectorAll('#newlist li h3').forEach(task => {
            tasks.push(task.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function loadTasks() {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            const tasks = JSON.parse(storedTasks);
            tasks.forEach(taskText => {
                addTask(taskText);
            });
        }
    }
});