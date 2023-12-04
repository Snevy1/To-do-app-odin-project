import newTask from "./newTask";

function taskForm() {
  const form = () => {
    let taskContainer = document.querySelector(".current__tasks");
    taskContainer.innerHTML += `<div id="form">

      <form>
      <input type="text" placeholder="Enter Title"  id = "title">
      <input type="text" placeholder="Description"  id = "description">
      <input type="text" placeholder="Priority"  id = "priority">
      <input type="text" placeholder="dueDate"  id = "dueDate">
      </form>
      <button class="submit-btn" id="submit-btn">Submit</button>
      
      
      </div>`;
    let submit_task_btn = document.querySelector("#submit-btn");

    submit_task_btn.addEventListener("click", function () {
      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const priority = document.getElementById("priority").value;
      const dueDate = document.getElementById("dueDate").value;
      newTask(title, description, priority, dueDate).Task();
    });
  };

  return { form };
}

export { taskForm };
