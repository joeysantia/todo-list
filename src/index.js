import "./style.css";
import { storage } from "./js/storage";
import  displayTasks  from "./js/displayTasks";
import  displayProjects  from "./js/displayProjects";
import { initializeApp } from "firebase/app";
import { getFirebaseConfig } from "../firebase-config";
import './js/nav'


window.onload = () => {
  const app = initializeApp(getFirebaseConfig())
  storage();
  displayTasks();
  displayProjects();
  console.log('does this even work')
};
