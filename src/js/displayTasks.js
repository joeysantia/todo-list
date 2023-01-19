import { elementCreator } from "./dom";
import normalizeDate from "./normalizeDate";
import { deleteTask } from "./taskForm";
import { tabShifter } from "./sidebar";
import DOM from "./dom";
import editTask from "./editTask";

export default function displayTasks() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    tabShifter;

    let projectTasks = taskArray
      .filter((task) => {
        //edit this logic so that all tasks for today and all tasks for inbox appear
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
      const taskContainer = elementCreator("div", DOM.section, "", {
        class: `task ${projectTasks[i].title}`,
      });

    
      const topRow = elementCreator("div", taskContainer);

      const leftBox = elementCreator("div", topRow);

      const checkbox = elementCreator("input", leftBox, "", {
        type: "checkbox",
        class: `${projectTasks[i].title}`,
      });
      checkbox.addEventListener("click", deleteTask);

      const taskTitle = elementCreator(
        "h3",
        leftBox,
        projectTasks[i].title
      );

      const rightBox = elementCreator("div", topRow, "", {
        class: "task-button",
      });

      const editButton = elementCreator("img", rightBox, "", {
        class: `edit-button`,
        //setting this custom attribute may be trouble - check back if bugs
        key: `${projectTasks[i].title}`,
        src: "./../src/images/edit.png",
      });
      editButton.addEventListener("click", editTask);

      const deleteButton = elementCreator("img", rightBox, "", {
        class: `delete-button`,
        key: `${projectTasks[i].title}`,
        src: "./../src/images/delete.png",
      });
      deleteButton.addEventListener("click", deleteTask);

      const bottomRow = elementCreator("div", taskContainer);
      const date = elementCreator(
        "p",
        bottomRow,

        normalizeDate(projectTasks[i].dueDate)
      );

      const priority = elementCreator(
        "p",
        bottomRow,
        `Priority: ${projectTasks[i].priority}`,
        {
          class: `priority-${projectTasks[i].priority}`,
        }
      );

      if (!DOM.getAddTaskButton()) {
        const addTaskButtonContainer = elementCreator("div", DOM.main, "", {
          class: "add-task-button main-add-task-button",
        });
        addTaskButtonContainer.addEventListener("click", createTaskForm);
        
        const addTaskButtonImage = elementCreator(
            "img",
            addTaskButtonContainer,
            "",
            {
              src: "./../src/images/plus.png",
              alt: "add",
            }
          );
  
          const addTaskButtonHeader = elementCreator(
            "h4",
            addTaskButtonContainer,
            "Add Task"
          );
        }
      }
    }