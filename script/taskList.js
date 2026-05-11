//Modo oscuro
const botonTema = document.querySelector("#botonTema");

botonTema.addEventListener("click", function() {
    // toggle añade la clase si no está, y la quita si ya está
    document.body.classList.toggle("temaClaro");

     if(document.body.classList.contains("temaClaro")){
        botonTema.innerText="Modo Oscuro";
    }else{
        botonTema.innerText="Modo Claro";
    }
});

const btnMostrar = document.querySelector('.append-list');
const contenedorInput = document.getElementById('contenedor-input');
const btnGuardar = document.getElementById('btn-guardar');
const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');

// Mostrar el input al hacer clic
btnMostrar.addEventListener('click', () => {
  contenedorInput.style.display = 'block'; // Mostramos el div
});

btnGuardar.addEventListener('click', () => {
  const texto = inputTarea.value;

  if (texto !== "") {
    // Crear el elemento de la lista
    const nuevaLi = document.createElement('li');
    nuevaLi.textContent = texto;
    nuevaLi.classList.add("tarea-estilo");
    
    // Añadirlo a la lista
    listaTareas.appendChild(nuevaLi);
    
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = "X"; 
    btnEliminar.classList.add('btn-borrar'); 

    // Eliminar tarea

    btnEliminar.onclick = function() {
        nuevaLi.remove();
    };

    //Meter el botón dentro del li
    nuevaLi.appendChild(btnEliminar);

    //Meter todo el li en la lista ul
    listaTareas.appendChild(nuevaLi);

    // Limpiar y ocultar de nuevo
    inputTarea.value = "";
    contenedorInput.style.display = 'none';
  } else {
    alert("¡Escribe algo primero!");
  }
});