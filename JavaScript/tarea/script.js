const addBtn = document.getElementById("btn-task");
const list = document.getElementById("list");
const input = document.getElementById("task");

addBtn.addEventListener("click", addTask);

function addTask(){
    const li = document.createElement("li");
    const p = document.createElement("p")
    p.textContent = input.value;
    li.appendChild(p);
    list.appendChild(li);

    input.value = "";
    
}