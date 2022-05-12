/* eslint-disable */

import format from "date-fns/format";
import { DOM } from "./dom.js";
import { projects } from "./projects.js";
import { tasks } from "./tasks.js";

export const eventListeners = (function () {
  function tabShifter() {
    while (DOM.section.firstChild) {
      DOM.section.removeChild(DOM.section.lastChild);
    }
  }

  function todayTab() {
    DOM.mainHeading.textContent = "Today";
  }

  function inboxTab() {
    DOM.mainHeading.textContent = "Inbox";
  }

  function projectTab() {
    DOM.mainHeading.textContent = `${this.classList}`;
    tabShifter();
    tasks.displayTasks();
  }

  function removePopup() {
    DOM.section.removeChild(DOM.popup());
  }

  function taskSubmit(e) {
    e.preventDefault();
    let newTask;
    if (DOM.taskDueDate()) {
      newTask = tasks.taskFactory(
        DOM.taskTitle().value,
        DOM.taskDescription().value,
        DOM.taskPriority().value,
        DOM.taskDueDate().value
      );
    } else {
      newTask = tasks.taskFactory(
        DOM.taskTitle().value,
        DOM.taskDescription().value,
        DOM.taskPriority().value,
        format(new Date(), "yyyy-LL-dd")
      );
    }
    tasks.addTaskToStorage(newTask);
    tabShifter();
    tasks.displayTasks();
  }

  function projectSubmit(e) {
    e.preventDefault();
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    projectArray.push(`${DOM.projectTitle().value}`);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
    deleteProjectForm();
    projects.displayProjects();
  }

  function editTask() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const givenTask = taskArray.find((task) =>
      this.classList.contains(task.title)
    );

    const editForm = DOM.elementCreator("form", DOM.section, "", {
      class: "popup",
    });
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();

      (givenTask.title = titleInput.value),
        (givenTask.project = projectSelect.value),
        (givenTask.description = descriptionInput.description || ""),
        (givenTask.priority = prioritySelect.value),
        (givenTask.dueDate = dueDateInput.value);

      localStorage.setItem("taskArray", JSON.stringify(taskArray));
      DOM.section.removeChild(editForm);
      tabShifter();
      tasks.displayTasks();
    });

    const legendContainer = DOM.elementCreator("div", editForm, "", {
      class: "legend",
    });

    const legend = DOM.elementCreator(
      "legend",
      legendContainer,
      "Edit Task/View Details"
    );

    const deleteButton = DOM.elementCreator("img", legendContainer, "", {
      src: "./../src/images/delete.png",
    });
    deleteButton.addEventListener("click", removePopup);

    const titleContainer = DOM.elementCreator("div", editForm);

    const titleLabel = DOM.elementCreator("label", titleContainer, "Title", {
      for: "title",
    });

    const titleInput = DOM.elementCreator("input", titleContainer, ``, {
      type: "text",
      name: "title",
      id: "title",
      required: "required",
      value: `${givenTask.title}`,
    });

    const projectContainer = DOM.elementCreator("div", editForm);

    const projectLabel = DOM.elementCreator(
      "label",
      projectContainer,
      "Project",
      {
        for: "project",
      }
    );

    const projectSelect = DOM.elementCreator("select", projectContainer, "", {
      name: "project",
      id: "project",
      required: "required",
      value: `${givenTask.project}`,
    });

    for (let i = 0; i < projectArray.length; i++) {
      let option = DOM.elementCreator(
        "option",
        projectSelect,
        `${projectArray[i]}`,
        {
          value: `${projectArray[i]}`,
        }
      );
    }
    const descriptionContainer = DOM.elementCreator("div", editForm);

    const descriptionLabel = DOM.elementCreator(
      "label",
      descriptionContainer,
      "Description/Notes",
      {
        for: "description",
      }
    );

    //.value does not generate the task's description in the textarea box, so I included it as textContent as well
    const descriptionInput = DOM.elementCreator(
      "textarea",
      descriptionContainer,
      `${givenTask.description}`,
      {
        name: "description",
        id: "description",
        value: `${givenTask.description}`,
      }
    );

    const priorityContainer = DOM.elementCreator("div", editForm);

    const priorityLabel = DOM.elementCreator(
      "label",
      priorityContainer,
      "Priority",
      {
        for: "priority",
      }
    );

    const prioritySelect = DOM.elementCreator("select", priorityContainer, "", {
      name: "priority",
      id: "priority",
      required: "required",
      value: `${givenTask.priority}`,
    });

    const optionOne = DOM.elementCreator(
      "option",
      prioritySelect,
      "1 (most important)",
      {
        value: 1,
      }
    );

    const optionTwo = DOM.elementCreator("option", prioritySelect, "2", {
      value: 2,
    });

    const optionThree = DOM.elementCreator("option", prioritySelect, "3", {
      value: 3,
    });

    const optionFour = DOM.elementCreator("option", prioritySelect, "4", {
      value: 4,
    });

    const optionFive = DOM.elementCreator("option", prioritySelect, "5", {
      value: 5,
    });

    const dueDateContainer = DOM.elementCreator("div", editForm);

    const dueDateLabel = DOM.elementCreator(
      "label",
      dueDateContainer,
      "Due Date",
      {
        for: "due-date",
      }
    );

    const dueDateInput = DOM.elementCreator("input", dueDateContainer, "", {
      type: "date",
      name: "due-date",
      id: "due-date",
      required: "required",
      value: `${givenTask.dueDate}`,
    });

    dueDateInput.valueAsDate = new Date();

    const submitButton = DOM.elementCreator("button", editForm, "Update Task");
  }

  function deleteTask() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    const givenTask = taskArray.find((task) =>
      this.classList.contains(task.title)
    );

    taskArray.splice(taskArray.indexOf(givenTask) - 1, 1);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    tabShifter();
    tasks.displayTasks();
  }

  function deleteTaskForm() {
    DOM.section.removeChild(DOM.taskForm());
  }

  function deleteProject() {
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const givenProject = projectArray.find((project) =>
      this.classList.contains(project)
    );

    projectArray.splice(projectArray.indexOf(givenProject), 1);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
    projects.displayProjects();
  }

  function deleteProjectForm() {
    DOM.section.removeChild(DOM.projectForm());
  }

  DOM.inboxButton.addEventListener("click", (e) => {
    tabShifter();
    inboxTab();
    tasks.displayTasks();
  });

  DOM.homeButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      tabShifter();
      todayTab();
      tasks.displayTasks();
    });
  });

  DOM.addButtons.forEach((button) => {
    button.addEventListener("click", tasks.taskForm);
  });

  DOM.addProjectButton.addEventListener("click", projects.addProject);

  return {
    tabShifter,
    inboxTab,
    taskSubmit,
    projectSubmit,
    editTask,
    deleteTask,
    deleteTaskForm,
    deleteProject,
    deleteProjectForm,
    projectTab,
  };
})();
