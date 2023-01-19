import DOM, { elementCreator } from "./dom";
import { deleteTaskForm, taskSubmit } from "./taskForm";

export default function createTaskForm() { 
    const form = elementCreator("form", DOM.section, "", {
      class: "task-form",
    });
    form.addEventListener("submit", (e) => taskSubmit(e));

    const legendContainer = elementCreator("div", form, "", {
      class: "legend",
    });

    const legend = elementCreator("legend", legendContainer, "Add Task");

    const deleteButton = elementCreator("img", legendContainer, "", {
      src: "./../src/images/delete.png",
      class: 'delete-button'
    });
    deleteButton.addEventListener("click", () => deleteTaskForm());

    const titleContainer = elementCreator("div", form);

    const titleLabel = elementCreator("label", titleContainer, "Title", {
      for: "title",
    });

    const titleInput = elementCreator("input", titleContainer, "", {
      type: "text",
      name: "title",
      id: "title",
      required: "required",
    });

    const descriptionContainer = elementCreator("div", form);

    const descriptionLabel = elementCreator(
      "label",
      descriptionContainer,
      "Description",
      {
        for: "label",
      }
    );

    const descriptionInput = elementCreator(
      "textarea",
      descriptionContainer,
      "",
      {
        name: "description",
        id: "description",
      }
    );

    const priorityContainer = elementCreator("div", form);

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

    if (DOM.mainHeading.textContent !== "Today") {
      const dueDateContainer = elementCreator("div", form);

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
      });
      dueDateInput.valueAsDate = new Date();
    }
    const submitButton = elementCreator("button", form, "Add Task");
  }