let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];

addButton.addEventListener("click", addTask);

function addTask() {
  let task = {
    taskContent: taskInput.value,
    isComplete: false,
    id: randomIDGenerate(),
  };
  taskList.push(task);

  taskInput.value = "";
  taskInput.focus();

  console.log(taskList);
  render();
}

function render() {
  let resultHTML = "";
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete == true) {
      resultHTML += `
            <div class="task task-bg-gray">
              <div class="task-done">${taskList[i].taskContent}</div> 
              <div>
              <button onclick="toggleComplete('${taskList[i].id}')">
                <i class="fa-solid fa-rotate-left"></i>
              </button> 
              <button onclick="deleteTask('${taskList[i].id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
              </div>
            </div>
            `;
    } else {
      resultHTML += `
            <div class="task">
              <div>
                ${taskList[i].taskContent}
              </div> 
            <div>
              <button onclick="toggleComplete('${taskList[i].id}')">
                <i class="fa-solid fa-check"></i>
              </button> 
              <button onclick="deleteTask('${taskList[i].id}')">
                <i class="fa-solid fa-trash"></i>
              </button>
              </div>
            </div>
            `;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  console.log("id:", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      // 루프(for, while 등)를 중단하고 빠져나올 때 사용
      // 해당 루프만 종료하고 그 다음 코드는 계속 실행됨
      break; // =! return
    }
  }
  render();
  // console.log(taskList);
}

// 랜덤 ID 생성함수 (task id 사용)
function randomIDGenerate() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function deleteTask(id) {
  console.log("할일 삭제 ");
  // filter를 사용하여 해당 id를 제외한 새로운 배열 생성
  taskList = taskList.filter((task) => task.id !== id);
  render();
}
