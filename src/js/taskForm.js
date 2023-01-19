
import DOM, { elementCreator } from "./dom.js";
import format from "date-fns/format";
import { tabShifter } from "./sidebar.js";
import displayTasks from "./displayTasks.js";
import { dateFormat } from "./normalizeDate.js";
import editTask from './editTask'

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

  function taskSubmit(e) { 
    e.preventDefault();
    let newTask;
    if (DOM.getTaskDueDate()) {
      newTask = taskFactory(
        DOM.getTaskTitle().value,
        DOM.getTaskDescription().value,
        DOM.getTaskPriority().value,
        DOM.getTaskDueDate().value
      );
    } else {
      newTask = taskFactory(
        DOM.getTaskTitle().value,
        DOM.getTaskDescription().value,
        DOM.getTaskPriority().value,
        format(new Date(), "yyyy-LL-dd")
      );
    }
    addTaskToStorage(newTask);
    tabShifter();
    displayTasks();
  }

  function addTaskToStorage(task) {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    taskArray.push(task);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }

  function deleteTaskForm() {
    DOM.section.removeChild(DOM.getTaskForm());
  }

  function deleteTask() {
    let taskArray = JSON.parse(localStorage.getItem("taskArray"));
    const givenTask = taskArray.find((task) =>
      this.classList.contains(task.title)
    );

    taskArray.splice(taskArray.indexOf(givenTask) - 1, 1);
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
    tabShifter();
    displayTasks();
  }   

  export {
    taskFactory,
    //createTaskForm,
    addTaskToStorage,
    deleteTask,
    deleteTaskForm,
    taskSubmit
  };
