'use strict';
//query.selector
const taskList = document.querySelector ('.js_task-list');
const inputTaskFilter =document.querySelector('.js-text-task-filter');
const buscarBtn = document.querySelector ('.js-btn-filter');
const agregarBtn = document.querySelector ('.js-btn-add');
const inputTaskAdd = document.querySelector('.js-text-task-add');

// DATOS
const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

//FUNCIONES

for (const task of tasks) {
  // pintar la tarea en la lista
  taskList.innerHTML += `<li><input id="${task.id}" value="${task.completed}" type="checkbox" class="checkBox" name="checkList"/>${task.name}</li>`
 }
const checkBoxes = document.querySelectorAll('.checkBox');

function handleClick (ev) {
  
  const isCompleted = ev.currentTarget.checked; // valor booleano de check

  const actualTask = ev.currentTarget.parentNode;// muestra el actual li

  if (isCompleted === true) {
    actualTask.classList.add('tachado');
  } else {
    actualTask.classList.remove('tachado');
  };

};


//EVENTOS
checkBoxes.forEach(checkBox => {
  checkBox.addEventListener('click', handleClick);
});


//LO QUE EJECUTA LA PÁGINA