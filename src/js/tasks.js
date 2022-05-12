/* eslint-disable */

import { dateFormat } from "./date-format.js";
import { DOM } from "./dom.js";
import { eventListeners } from "./event-listeners.js";

export const tasks = (function () {
  function taskFactory(title, description, priority, dueDate) {
    let project = DOM.mainHeading.textContent;

    return {
      title,
      description,
      priority,
      dueDate,
      project: project,
    };
  }

  function addTaskToStorage(task) {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    taskArray.push(task);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }

  function taskForm() {
    const form = DOM.elementCreator("form", DOM.section, "", {
      class: "task-form",
    });
    form.addEventListener("submit", eventListeners.taskSubmit);

    const legendContainer = DOM.elementCreator("div", form, "", {
      class: "legend",
    });

    const legend = DOM.elementCreator("legend", legendContainer, "Add Task");

    const deleteButton = DOM.elementCreator("img", legendContainer, "", {
      src: "./../src/images/delete.png",
    });
    deleteButton.addEventListener("click", eventListeners.deleteTaskForm);

    const titleContainer = DOM.elementCreator("div", form);

    const titleLabel = DOM.elementCreator("label", titleContainer, "Title", {
      for: "title",
    });

    const titleInput = DOM.elementCreator("input", titleContainer, "", {
      type: "text",
      name: "title",
      id: "title",
      required: "required",
    });

    const descriptionContainer = DOM.elementCreator("div", form);

    const descriptionLabel = DOM.elementCreator(
      "label",
      descriptionContainer,
      "Description",
      {
        for: "label",
      }
    );

    const descriptionInput = DOM.elementCreator(
      "textarea",
      descriptionContainer,
      "",
      {
        name: "description",
        id: "description",
      }
    );

    const priorityContainer = DOM.elementCreator("div", form);

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

    if (DOM.mainHeading.textContent !== "Today") {
      const dueDateContainer = DOM.elementCreator("div", form);

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
      });
      dueDateInput.valueAsDate = new Date();
    }
    const submitButton = DOM.elementCreator("button", form, "Add Task");
  }

  function displayTasks() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    eventListeners.tabShifter;

    let projectTasks = taskArray
      .filter((task) => {
        return task.project === DOM.mainHeading.textContent;
      })
      .sort((a, b) => {
        if (a.dueDate < b.dueDate) return -1;
        if (b.dueDate < a.dueDate) return 1;
        if (a.priority < b.priority) return -1;
        if (b.priority < a.priority) return 1;
        return 0;
      });

    for (let i = 0; i < projectTasks.length; i++) {
      const taskContainer = DOM.elementCreator("div", DOM.section, "", {
        class: `task ${projectTasks[i].title}`,
      });

      const topRow = DOM.elementCreator("div", taskContainer);

      const leftBox = DOM.elementCreator("div", topRow);

      const checkbox = DOM.elementCreator("input", leftBox, "", {
        type: "checkbox",
        class: `${projectTasks[i].title}`,
      });
      checkbox.addEventListener("click", eventListeners.deleteTask);

      const taskTitle = DOM.elementCreator(
        "h3",
        leftBox,
        projectTasks[i].title
      );

      const rightBox = DOM.elementCreator("div", topRow, "", {
        class: "task-button",
      });

      const editButton = DOM.elementCreator("img", rightBox, "", {
        class: `edit-button ${projectTasks[i].title}`,
        src: "./../src/images/edit.png",
      });
      editButton.addEventListener("click", eventListeners.editTask);

      const deleteButton = DOM.elementCreator("img", rightBox, "", {
        class: `delete-button ${projectTasks[i].title}`,
        src: "./../src/images/delete.png",
      });
      deleteButton.addEventListener("click", eventListeners.deleteTask);

      const bottomRow = DOM.elementCreator("div", taskContainer);
      const date = DOM.elementCreator(
        "p",
        bottomRow,
        dateFormat.dateNormalizer(projectTasks[i].dueDate)
      );

      const priority = DOM.elementCreator(
        "p",
        bottomRow,
        `Priority: ${projectTasks[i].priority}`,
        {
          class: `priority-${projectTasks[i].priority}`,
        }
      );

      if (!DOM.addTaskButton()) {
        const addTaskButtonContainer = DOM.elementCreator("div", DOM.main, "", {
          class: "add-task-button main-add-task-button",
        });
        addTaskButtonContainer.addEventListener("click", taskForm);

        const addTaskButtonImage = DOM.elementCreator(
          "img",
          addTaskButtonContainer,
          "",
          {
            src: "./../src/images/plus.png",
            alt: "add",
          }
        );

        const addTaskButtonHeader = DOM.elementCreator(
          "h4",
          addTaskButtonContainer,
          "Add Task"
        );
      }
    }
  }

  return {
    taskFactory,
    taskForm,
    addTaskToStorage,
    displayTasks,
  };
})();
