import DOM from "./dom";
import displayProjects from "./displayProjects";

function deleteProject(input) {
    console.log(input)
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    const givenProject = projectArray.find((project) =>
      project === input
    );

    projectArray.splice(projectArray.indexOf(givenProject), 1);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
    displayProjects();
  }

  function deleteProjectForm() {
    DOM.section.removeChild(DOM.getProjectForm());
  }

  function projectSubmit(e) {
    e.preventDefault();
    let projectArray = JSON.parse(localStorage.getItem("projectArray"));
    projectArray.push(`${DOM.getProjectTitle().value}`);
    localStorage.setItem("projectArray", JSON.stringify(projectArray));
    deleteProjectForm();
    displayProjects();
  }

  export {
    deleteProject,
    deleteProjectForm,
    projectSubmit,
  }