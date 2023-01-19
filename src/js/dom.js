
  const DOM = (() => {

  
  
  const section = document.querySelector("section");
  const mainHeading = document.querySelector("h2");
  const loginButton = document.querySelector('.login-button')
  const inboxButton = document.querySelector(".inbox-button");
  const projectButtons = document.querySelector(".projects");
  const homeButtons = document.querySelectorAll(".home-button");
  const addButtons = document.querySelectorAll(".add-task-button");
  const addProjectButton = document.querySelector("#add-project-button");

  const getTaskForm = () => {
    return document.querySelector(".task-form");
  }

  const getTaskDueDate = () => {
    return document.querySelector("#due-date");
  }
  const getTaskTitle = () => {
    return document.querySelector("#title");
  }
  const getTaskDescription = () => {
    return document.querySelector("#description");
  }

  const getTaskPriority = () => {
    return document.querySelector("#priority");
  }

  const getAddTaskButton = () => {
    return document.querySelector(".main-add-task-button");
  }

  const getProjectTitle = () => {
    return document.querySelector("#projectTitle");
  }

  const getProjectForm = () => {
    return document.querySelector(".project-form");
  }

  const getPopup = () => {
    return document.querySelector(".popup")
  }

  return {
    section,
    mainHeading,
    homeButtons,
    loginButton,
    inboxButton,
    addButtons,
    addProjectButton,
    projectButtons,
    getTaskForm,
    getTaskTitle,
    getTaskDescription,
    getTaskDueDate,
    getTaskPriority,
    getAddTaskButton,
    getProjectTitle,
    getProjectForm,
    getPopup,
  };
  })()

  export default DOM;

  export function elementCreator(childElement, parentElement, text, attributes) {
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
