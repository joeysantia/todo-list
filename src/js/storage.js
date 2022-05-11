/* eslint-disable */

import { projects } from "./projects.js";
import { tasks } from "./tasks.js";

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
