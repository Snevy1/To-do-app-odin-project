import currentTask from "./currentTask";
let todoTaskContainer = document.querySelector(".current__tasks");

export const controlTasks = () => {
  if (todoTaskContainer.innerHTML === "") {
    currentTask();
  } else {
    todoTaskContainer.innerHTML = "";
    currentTask();
  }
};
