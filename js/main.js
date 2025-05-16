"use strict";
//query.selector
const taskList = document.querySelector(".js_task-list");
const inputTaskFilter = document.querySelector(".js-text-task-filter");
const buscarBtn = document.querySelector(".js-btn-filter");
const agregarBtn = document.querySelector(".js-btn-add");
const inputTaskAdd = document.querySelector(".js-text-task-add");

// DATOS
/* let tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
]; */

const GITHUB_USER = "nelicah";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

let tasks = [];

//FUNCIONES

/* for (const task of tasks) {
  // pintar la tarea en la lista
  taskList.innerHTML += `<li><input id="${task.id}" value="${task.completed}" type="checkbox" class="checkBox" name="checkList"/>${task.name}</li>`
 } */

function getUser() {
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      tasks = data.results;

      for (const task of tasks) {
        console.log(task);

        // pintar la tarea en la lista
        if (task.completed === true) {
          taskList.innerHTML += `<li class="tachado"><input id="${task.id}" type="checkbox" class="checkBox" name="checkList" checked/>${task.name}</li>`;
        } else {
          taskList.innerHTML += `<li><input id="${task.id}" type="checkbox" class="checkBox" name="checkList"/>${task.name}</li>`;
        }
      }

      //EVENTOS
      const checkBoxes = document.querySelectorAll(".checkBox");

      checkBoxes.forEach((checkBox) => {
        checkBox.addEventListener("click", handleClick);
      });

      const totalTasksList = tasks.length;
      const renderTaskCompleted = tasks.completed; // 16/05;
      const renderTaskToDo = tasks.completed;

      const mensageBox = document.querySelector(".js-mensageBox");
      const renderResults = (mensageBox) => {
        mensageBox.innerHTML = `Tienes ${totalTasksList} tareas. ${renderTaskCompleted} completadas y ${renderTaskToDo} por realizar.`;
      };
      renderResults(mensageBox);
      console.log(renderTasksList);

      console.log("se va a producir el evento");
    });
  console.log("se ha producido el fetch");
}
getUser();

function handleClick(ev) {
  const isCompleted = ev.currentTarget.checked; // valor booleano de check

  const actualTask = ev.currentTarget.parentNode; // muestra el actual li

  if (isCompleted === true) {
    actualTask.classList.add("tachado");
  } else {
    actualTask.classList.remove("tachado");
  }
}

//LO QUE EJECUTA LA PÁGINA
