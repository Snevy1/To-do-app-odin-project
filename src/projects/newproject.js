const newProject = () => {
  let todoappContainer = document.querySelector(".todoapp__container");

  todoappContainer.innerHTML += `<article class="current__projects">
          <article>
            <h2>Wash Clothes</h2>
          </article>
          <article>
            <h2>Learn React</h2>
          </article>
          <article>
            <h2>+Add task</h2>
          </article>
        </article>`;
};

export default newProject;
