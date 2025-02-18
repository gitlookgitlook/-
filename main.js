let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let taskContent = taskInput.value;
  taskList.push(taskContent);

  taskInput.value = "";
  taskInput.focus();

  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `
            <div class="task">
            <div>${taskList[i]}</div> 
            <div><button>✅ Check</button> <button>🗑️ Delete</button></div>
            </div>
            `;
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}
