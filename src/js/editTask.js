/* eslint-disable */

import format from "date-fns/format";
import { fromUnixTime } from "date-fns/fp";
import DOM, { elementCreator } from "./dom.js";
import { tabShifter } from "./sidebar.js";
import displayTasks from "./displayTasks.js";

/**
 * 
 * when done removing project
 * tasks
 */

  function removePopup() {
    DOM.section.removeChild(DOM.getPopup());
  }

  export default function editTask() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const givenTask = taskArray.find((task) => {
      console.log(this.attributes[1].nodeValue)
      return this.attributes[1].nodeValue === task.title

    }
    );

    const editForm = elementCreator("form", DOM.section, "", {
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
      displayTasks();
    });

    const legendContainer = elementCreator("div", editForm, "", {
      class: "legend",
    });

    const legend = elementCreator(
      "legend",
      legendContainer,
      "Edit Task/View Details"
    );

    const deleteButton = elementCreator("img", legendContainer, "", {
      src: "./../src/images/delete.png",
    });
    deleteButton.addEventListener("click", () => removePopup());

    const titleContainer = elementCreator("div", editForm);

    const titleLabel = elementCreator("label", titleContainer, "Title", {
      for: "title",
    });

    const titleInput = elementCreator("input", titleContainer, ``, {
      type: "text",
      name: "title",
      id: "title",
      required: "required",
      value: `${givenTask.title}`,
    });

    const projectContainer = elementCreator("div", editForm);

    const projectLabel = elementCreator(
      "label",
      projectContainer,
      "Project",
      {
        for: "project",
      }
    );

    const projectSelect = elementCreator("select", projectContainer, "", {
      name: "project",
      id: "project",
      required: "required",
      value: `${givenTask.project}`,
    });

    for (let i = 0; i < projectArray.length; i++) {
      let option = elementCreator(
        "option",
        projectSelect,
        `${projectArray[i]}`,
        {
          value: `${projectArray[i]}`,
        }
      );
    }
    const descriptionContainer = elementCreator("div", editForm);

    const descriptionLabel = elementCreator(
      "label",
      descriptionContainer,
      "Description/Notes",
      {
        for: "description",
      }
    );

    //.value does not generate the task's description in the textarea box, so I included it as textContent as well
    const descriptionInput = elementCreator(
      "textarea",
      descriptionContainer,
      `${givenTask.description}`,
      {
        name: "description",
        id: "description",
        value: `${givenTask.description}`,
      }
    );

    const priorityContainer = elementCreator("div", editForm);

    const priorityLabel = elementCreator(
      "label",
      priorityContainer,
      "Priority",
      {
        for: "priority",
      }
    );

    const prioritySelect = elementCreator("select", priorityContainer, "", {
      name: "priority",
      id: "priority",
      required: "required",
      value: `${givenTask.priority}`,
    });

    const optionOne = elementCreator(
      "option",
      prioritySelect,
      "1 (most important)",
      {
        value: 1,
      }
    );

    const optionTwo = elementCreator("option", prioritySelect, "2", {
      value: 2,
    });

    const optionThree = elementCreator("option", prioritySelect, "3", {
      value: 3,
    });

    const optionFour = elementCreator("option", prioritySelect, "4", {
      value: 4,
    });

    const optionFive = elementCreator("option", prioritySelect, "5", {
      value: 5,
    });

    const dueDateContainer = elementCreator("div", editForm);

    const dueDateLabel = elementCreator(
      "label",
      dueDateContainer,
      "Due Date",
      {
        for: "due-date",
      }
    );

    const dueDateInput = elementCreator("input", dueDateContainer, "", {
      type: "date",
      name: "due-date",
      id: "due-date",
      required: "required",
      value: `${givenTask.dueDate}`,
    });

    dueDateInput.valueAsDate = new Date();

    const submitButton = elementCreator("button", editForm, "Update Task");
  }
