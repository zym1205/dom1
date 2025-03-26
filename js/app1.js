const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const statusElement = document.getElementById('status');
const sortByNameBtn = document.getElementById('sortByName');
const sortByDateBtn = document.getElementById('sortByDate');
let tasks = [
    {
        text:"ffff4", createdAt: new Date(2025, 1, 14),
    },{
        
        text:"7767764", createdAt: new Date(2025, 1, 16),
    }
];
function update() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.className = 'task-text';
        span.textContent = task.text;
        const dateSpan = document.createElement('span');
        dateSpan.className = 'task-date';
        dateSpan.textContent = "("+ task.createdAt.toLocaleDateString() + ")";
        li.appendChild(span);
        li.appendChild(dataSpan);
        taskList.appendChild(li);
    })
    statusElement.innerHTML = `当前总任务数: ${tasks.length} `;
}
function addTask() {
   if(!taskInput.value) {
    alert('Please enter a task');
    return;
   }
   const newtask = {
    text: taskInput.value,
    createdAt: new Date(),
   };
   tasks.push(newtask);
   taskInput.value = '';
   update()
}
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
    if(event.key === 'Enter') {
        addTask();
    }
})
function sortTasksByName() {
    tasks.sort((a, b) => a.text.localeCompare(b.text));
    update();
}
function sortTasksByDate() {
    tasks.sort((a, b) => a.createdAt - b.createdAt);
    update();
}

sortByNameBtn.addEventListener('click', sortTasksByName);
sortByDateBtn.addEventListener('click', sortTasksByDate);
update();