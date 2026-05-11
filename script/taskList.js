const btnMostrar = document.querySelector('.append-list');
const contenedorInput = document.getElementById('contenedor-input');
const btnGuardar = document.getElementById('btn-guardar');
const inputTarea = document.getElementById('nueva-tarea');
const listaTareas = document.getElementById('lista-tareas');

// 1. Mostrar el input al hacer clic
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
    btnEliminar.textContent = "X"; // O puedes poner "Eliminar"
    btnEliminar.classList.add('btn-borrar'); // Le damos una clase para darle estilo

    // 4. LA LÓGICA PARA ELIMINAR:
    // Le decimos al botón: "Cuando te hagan click, borra a tu padre (el li)"
    btnEliminar.onclick = function() {
        nuevaLi.remove();
    };

    // 5. Meter el botón dentro del li
    nuevaLi.appendChild(btnEliminar);

    // 6. Finalmente, meter todo el li en la lista ul
    listaTareas.appendChild(nuevaLi);

    // Limpiar y ocultar de nuevo
    inputTarea.value = "";
    contenedorInput.style.display = 'none';
  } else {
    alert("¡Escribe algo primero!");
  }
});