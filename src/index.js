import "./style.css";
import eventListeners from "./js/event-listeners";
import { storage } from "./js/storage";
import { tasks } from "./js/tasks";
import { projects } from "./js/projects";
window.onload = function () {
  storage();
  tasks.displayTasks();
  projects.displayProjects();
};
