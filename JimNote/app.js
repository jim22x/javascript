// Obtenemos el elemento con el id "input-box" y lo almacenamos en la variable inputBox
const inputBox = document.getElementById("input-box");

// Obtenemos el elemento con el id "list-container" y lo almacenamos en la variable listContainer
const listContainer = document.getElementById("list-container");

// Función para agregar una tarea
function addTask(){
  // Verificamos si el valor del input está vacío
  if(inputBox.value === ''){
    alert("Your must write something!");
  }
  else{
    // Creamos un nuevo elemento li
    let li = document.createElement("li");
    // Asignamos el valor del input al contenido HTML del li
    li.innerHTML = inputBox.value;
    // Agregamos el li al contenedor de la lista
    listContainer.appendChild(li);

    // Creamos un nuevo elemento span
    let span = document.createElement("span");
    // Asignamos el valor Unicode para la 'x' al contenido HTML del span
    span.innerHTML = "\u00d7";
    // Agregamos el span como hijo del li
    li.appendChild(span);
  }

  // Limpiamos el valor del input
  inputBox.value = "";
  // Llamamos a la función para guardar los datos
  saveData();
}

// Agregamos un evento al contenedor de la lista para marcar o eliminar tareas
listContainer.addEventListener("click",function(e)
{
  // Verificamos si el elemento clickeado es un li
  if(e.target.tagName === "LI"){
    // Alternamos la clase "checked" en el li
    e.target.classList.toggle("checked");
    // Llamamos a la función para guardar los datos
    saveData();
  }
  // Verificamos si el elemento clickeado es un span
  else if(e.target.tagName==="SPAN"){
    // Removemos el elemento padre del span (el li)
    e.target.parentElement.remove();
    // Llamamos a la función para guardar los datos
    saveData();
  }
},false);

//Editar texto

listContainer.parentElement.addEventListener( "dblclick", function( e ) {
  alert("hola");

}, false );

// Función para guardar los datos en localStorage
function saveData(){
  // Guardamos el contenido HTML del contenedor de la lista en localStorage con la clave "data"
  localStorage.setItem("data",listContainer.innerHTML);
}

// Función para mostrar las tareas guardadas en localStorage al cargar la página
function showTask(){
  // Asignamos el contenido HTML almacenado en localStorage al contenedor de la lista
  listContainer.innerHTML = localStorage.getItem("data");
}

// Llamamos a la función showTask al cargar la página para mostrar las tareas guardadas
showTask();
