/* eslint-disable */

import DOM, { elementCreator } from "./dom.js";
import { addProject, projectTab } from "./sidebar.js";
import { deleteProject } from "./projects.js";

export default function displayProjects() {
    while (DOM.projectButtons.firstChild) {
      DOM.projectButtons.removeChild(DOM.projectButtons.lastChild);
    }

    const projectContainer = elementCreator("div", DOM.projectButtons);

    const heading = elementCreator("h4", projectContainer, "Projects");

    const img = elementCreator("img", projectContainer, "", {
      id: "add-project-button",
      src: "./../src/images/plus.png",
      alt: "add",
    });
    img.addEventListener("click", () => addProject());

    let projectArray = JSON.parse(localStorage.getItem("projectArray"));

    for (let i = 2; i < projectArray.length; i++) {
      //starting at 2 so that it skips over "Inbox" and "Today"
      const newProjectContainer = elementCreator(
        "div",
        DOM.projectButtons,
        "",
        {
          class: `${projectArray[i]}`,
        }
      );

      const leftContainer = elementCreator("div", newProjectContainer, "", {
        class: "left-container",
      });

      const projectBullet = elementCreator("img", leftContainer, "", {
        src: "./../src/images/bullet.png",
        class: `${projectArray[i]}`,
      });
      projectBullet.addEventListener("click", () => projectTab(projectBullet.classList.value));

      const projectTitle = elementCreator(
        "h5",
        leftContainer,
        `${projectArray[i]}`,
        {
          class: `${projectArray[i]}`,
        }
      );
      projectTitle.addEventListener("click", () => projectTab(projectTitle.classList.value));

      const deleteButton = elementCreator("img", newProjectContainer, "", {
        class: `delete-button ${projectArray[i]}`,
        src: "./../src/images/delete.png",
      });
      deleteButton.addEventListener("click", () => deleteProject(projectTitle.classList.value));
    }
  }