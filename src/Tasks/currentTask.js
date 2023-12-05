//import newTask from "./newTask";
import { taskForm } from "./taskForm";
import { tasksData } from "./tasksData";

const currentTask = () => {
  let todoTaskContainer = document.querySelector(".current__tasks");

  tasksData.map((task) => {
    return (todoTaskContainer.innerHTML += `           <article>
             <h2>${task.Title}</h2>
             <p>${task.Description}</p>
             <p>${task.Priority}</p>
             <p>${task.dueDate}</p>
             <button class="delete__task" id = ${task.id}>Delete Task</button>
           </article>`);
  });

  todoTaskContainer.innerHTML += `<button id="task-btn">Add Task
  </button>`;
  let btn = document.querySelector("#task-btn");
  btn.addEventListener("click", function () {
    let addTask = taskForm();
    addTask.form();
  });

  let del__btn = document.querySelector(".delete__task");

  del__btn.addEventListener("click", function (e) {
    let targetArticle = e.target.id;
    console.log(targetArticle);
  });
};

/*           `<article>
            <h2>Wash Clothes</h2>
          </article>
          <article>
            <h2>Learn React</h2>
          </article>
          <article>
                    <button class="add-btn" id="task-btn">+Add task</button>

          </article>`; */

export default currentTask;
