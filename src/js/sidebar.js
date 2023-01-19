import DOM, { elementCreator } from './dom';
import displayTasks from './displayTasks';
import { projectSubmit, deleteProjectForm } from './projects'

DOM.inboxButton.addEventListener("click", () => {
    console.log(DOM.inboxButton)
    tabShifter();
    inboxTab();
    displayTasks();
  });

DOM.addProjectButton.addEventListener("click", () => addProject());

function tabShifter() {
    while (DOM.section.firstChild) {
      DOM.section.removeChild(DOM.section.lastChild);
    }
  }

  function inboxTab() {
    DOM.mainHeading.textContent = "Inbox";
  }

function addProject() { 
    const form = elementCreator("form", DOM.section, "", {
      class: "project-form",
    });
    form.addEventListener("submit", projectSubmit);

    const legendContainer = elementCreator("div", form, "", {
      class: "legend",
    });

    const legend = elementCreator("legend", legendContainer, "Add Project");

    const deleteButton = elementCreator("img", legendContainer, "", {
      src: "./../src/images/delete.png",
    });
    deleteButton.addEventListener("click", deleteProjectForm);

    const projectTitleContainer = elementCreator("div", form);

    const projectTitleLabel = elementCreator(
      "label",
      projectTitleContainer,
      "Project Name",
      {
        for: "projectTitle",
      }
    );

    const projectTitleInput = elementCreator(
      "input",
      projectTitleContainer,
      "",
      {
        name: "projectTitle",
        id: "projectTitle",
        type: "text",
      }
    );

    const projectButton = elementCreator("button", form, "Create Project");
  }

  function projectTab(title) { 
    console.log(title)
    DOM.mainHeading.textContent = title;
    tabShifter();
    displayTasks();
  }

  export {
    projectTab, 
    tabShifter,
    inboxTab,
    addProject
  }

  