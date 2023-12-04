import newTask from "./newTask";
import { taskForm } from "./taskForm";

const currentTask = () => {
  let todoappContainer = document.querySelector(".todoapp__container");

  todoappContainer.innerHTML += `<article class="current__tasks">
          <article>
            <h2>Wash Clothes</h2>
          </article>
          <article>
            <h2>Learn React</h2>
          </article>
          <article>
                    <button class="add-btn" id="task-btn">+Add task</button>

          </article>

        </article>`;
  let btn = document.querySelector("#task-btn");
  btn.addEventListener("click", function () {
    let addTask = taskForm();
    addTask.form();
  });
};

export default currentTask;
