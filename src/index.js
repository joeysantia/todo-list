import "./style.css";
import eventListeners from "./js/event-listeners";
import { storage } from "./js/storage";
import { tasks } from "./js/tasks";
import { projects } from "./js/projects";
import bullet from './images/bullet.png'
import checkMark from './images/check-mark.png'
import deleteImage from './images/delete.png'
import edit from './images/edit.png'
import home from './images/home.png'
import inbox from './images/inbox.png'
import plus from './images/plus.png'
import today from './images/today.png'

window.onload = function () {
  storage();
  tasks.displayTasks();
  projects.displayProjects();
};
