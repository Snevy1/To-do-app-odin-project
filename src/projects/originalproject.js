const appData = () => {
  let todoappContainer = document.querySelector(".todoapp__container");

  todoappContainer.innerHTML += `<article class="todo__data">
          <article>
            <h2>Home</h2>
          </article>
          <article>
            <h2>Today</h2>
          </article>
          <article>
            <h2>Week</h2>
          </article>
          <article>
            <h2>Projects</h2>
            <div>
              <h2>Restaurant</h2>
            </div>
            <div>
              <h2>Learn Js</h2>
            </div>
            <div>
              <button class="add-btn" id="project-btn">+Add project</button>
            </div>
          </article>
        </article>`;
};

export default appData;
