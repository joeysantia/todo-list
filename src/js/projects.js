/* eslint-disable */

import { DOM } from "./dom.js";
import { eventListeners } from "./event-listeners.js";

export const projects = (function () {
  function addProject() {
    const form = DOM.elementCreator("form", DOM.section, "", {
      class: "project-form",
    });
    form.addEventListener("submit", eventListeners.projectSubmit);

    const legendContainer = DOM.elementCreator("div", form, "", {
      class: "legend",
    });

    const legend = DOM.elementCreator("legend", legendContainer, "Add Project");

    const deleteButton = DOM.elementCreator("img", legendContainer, "", {
      src: "../src/images/delete.png",
    });
    deleteButton.addEventListener("click", eventListeners.deleteProjectForm);

    const projectTitleContainer = DOM.elementCreator("div", form);

    const projectTitleLabel = DOM.elementCreator(
      "label",
      projectTitleContainer,
      "Project Name",
      {
        for: "projectTitle",
      }
    );

    const projectTitleInput = DOM.elementCreator(
      "input",
      projectTitleContainer,
      "",
      {
        name: "projectTitle",
        id: "projectTitle",
        type: "text",
      }
    );

    const projectButton = DOM.elementCreator("button", form, "Create Project");
  }

  function displayProjects() {
    while (DOM.projectButtons.firstChild) {
      DOM.projectButtons.removeChild(DOM.projectButtons.lastChild);
    }

    const projectContainer = DOM.elementCreator("div", DOM.projectButtons);

    const heading = DOM.elementCreator("h4", projectContainer, "Projects");

    const img = DOM.elementCreator("img", projectContainer, "", {
      id: "add-project-button",
      src: "../src/images/plus.png",
      alt: "add",
    });
    img.addEventListener("click", projects.addProject);

    let projectArray = JSON.parse(localStorage.getItem("projectArray"));

    for (let i = 2; i < projectArray.length; i++) {
      //starting at 2 so that it skips over "Inbox" and "Today"
      const newProjectContainer = DOM.elementCreator(
        "div",
        DOM.projectButtons,
        "",
        {
          class: `${projectArray[i]}`,
        }
      );

      const leftContainer = DOM.elementCreator("div", newProjectContainer, "", {
        class: "left-container",
      });

      const projectBullet = DOM.elementCreator("img", leftContainer, "", {
        src: "../src/images/bullet.png",
        class: `${projectArray[i]}`,
      });
      projectBullet.addEventListener("click", eventListeners.projectTab);

      const projectTitle = DOM.elementCreator(
        "h5",
        leftContainer,
        `${projectArray[i]}`,
        {
          class: `${projectArray[i]}`,
        }
      );
      projectTitle.addEventListener("click", eventListeners.projectTab);

      const deleteButton = DOM.elementCreator("img", newProjectContainer, "", {
        class: `delete-button ${projectArray[i]}`,
        src: "../src/images/delete.png",
      });
      deleteButton.addEventListener("click", eventListeners.deleteProject);
    }
  }

  return {
    addProject,
    displayProjects,
  };
})();
