import DOM from './dom'
import displayTasks from './displayTasks'
import createTaskForm from './createTaskForm'
import { tabShifter } from './sidebar'

DOM.homeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tabShifter();
      todayTab();
      displayTasks();
      console.log('importing fixes it')
    });
  });

  DOM.addButtons.forEach((button) => {
    button.addEventListener("click", () => createTaskForm());
  });

  export default function todayTab() {
    DOM.mainHeading.textContent = "Today";
  }