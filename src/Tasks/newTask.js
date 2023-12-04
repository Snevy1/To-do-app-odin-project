import currentTask from "./currentTask";

function newTask(title, description, priority, dueDate) {
  /* name = name;
  priority = priority;
  day = day;
  date = date; */

  function Task() {
    console.log(title);

    let taskContainer = document.querySelector(".current__tasks");
    let form = document.getElementById("form");
    form.innerHTML = "";
    taskContainer.innerHTML += `<article>
      <h2>${title}</h2>
      <button>Description</button>
      <h2>dueDate</h2>
    </article>`;
  }

  return { Task };
}

export default newTask;
