/* eslint-disable */

import { projects } from "./displayProjects.js";
import { tasks } from "./taskForm.js";

export function storage() {
  if (!localStorage.getItem("taskArray")) {
    let taskArray = [];
    localStorage.setItem("taskArray", JSON.stringify(taskArray));
  }

  if (!localStorage.getItem("projectArray")) {
    let projectArray = ["Inbox", "Today"];
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
  }
}
