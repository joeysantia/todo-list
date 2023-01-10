export const DOM = (function () {
  const section = document.querySelector("section");
  const mainHeading = document.querySelector("h2");
  const inboxButton = document.querySelector(".inbox-button");
  const projectButtons = document.querySelector(".projects");
  const homeButtons = document.querySelectorAll(".home-button");
  const addButtons = document.querySelectorAll(".add-task-button");
  const addProjectButton = document.querySelector("#add-project-button");

  function taskForm() {
    return document.querySelector(".task-form");
  }

  function taskDueDate() {
    return document.querySelector("#due-date");
  }
  function taskTitle() {
    return document.querySelector("#title");
  }
  function taskDescription() {
    return document.querySelector("#description");
  }

  function taskPriority() {
    return document.querySelector("#priority");
  }

  function taskDueDate() {
    return document.querySelector("#due-date");
  }

  function addTaskButton() {
    return document.querySelector(".main-add-task-button");
  }

  function projectTitle() {
    return document.querySelector("#projectTitle");
  }

  function projectForm() {
    return document.querySelector(".project-form");
  }

  function popup() {
    return document.querySelector(".popup")
  }

  function elementCreator(childElement, parentElement, text, attributes) {
    let element = document.createElement(childElement);

    if (text) {
      element.textContent = text;
    }

    if (attributes) {
      for (let i = 0; i < Object.keys(attributes).length; i++) {
        element.setAttribute(
          `${Object.keys(attributes)[i]}`,
          `${Object.values(attributes)[i]}`
        );
      }
    }
    parentElement.appendChild(element);

    return element;
  }

  return {
    section,
    mainHeading,
    homeButtons,
    inboxButton,
    addButtons,
    addProjectButton,
    projectButtons,
    taskForm,
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority,
    elementCreator,
    addTaskButton,
    projectTitle,
    projectForm,
    popup,
  };
})();
