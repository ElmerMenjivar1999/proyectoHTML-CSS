// 1. Pedimos el nombre al usuario con una ventana emergente
window.onload = function() {
    const contenedor = document.getElementById('usuario-container');
    const display = document.getElementById('nombre-display');
    const btnSalir = document.getElementById('btn-salir');

    // Intentamos obtener el nombre guardado
    let nombre = localStorage.getItem('nombreAstronauta');

    // Si no hay nombre, lo pedimos
    if (!nombre) {
        nombre = prompt("¡Bienvenido al observatorio! ¿Cuál es tu nombre de astronauta?");
        
        if (nombre && nombre.trim() !== "") {
            localStorage.setItem('nombreAstronauta', nombre);
        }
    }


    if (nombre) {
        display.innerText = nombre;
        contenedor.style.display = "block"; // Mostramos la barrita "Nombre | Salir"
    }

    // Función para Salir
    btnSalir.addEventListener('click', function(e) {
        e.preventDefault();
        
        localStorage.removeItem('nombreAstronauta'); // Borramos el dato específico

        
        alert("Cerrando bitácora...");
        location.reload();
    });
};

//Datos curiosos
const datos = [
    "En el espacio no hay sonido porque no hay aire.",
    "Un día en Venus es más largo que un año en la Tierra.",
    "Las huellas de los astronautas en la Luna durarán millones de años.",
    "Existen estrellas de neutrones tan densas que una cucharadita pesaría billones de toneladas.",
    "El Sol es tan grande que dentro de él cabrían un millón de Tierras.",
    "Hay una nube de alcohol en el espacio que mide 463 mil millones de kilómetros."
  ];

  function mostrarDato() {
    const elementoTexto = document.getElementById("texto-curioso");
    const indiceAleatorio = Math.floor(Math.random() * datos.length);
    
    // Añadimos un pequeño efecto
    elementoTexto.style.opacity = 0;
    
    setTimeout(() => {
      elementoTexto.innerText = datos[indiceAleatorio];
      elementoTexto.style.opacity = 1;
    }, 200);
}

//Boton de likes
const botonesLike = document.querySelectorAll('.like-btn');

botonesLike.forEach(boton => {
    boton.addEventListener('click', function() {
        // Ponemos o quitamos la clase del color rojo
        this.classList.toggle('corazon-activo');
        
        // Cambiamos el símbolo para que parezca "relleno"
        if (this.classList.contains('corazon-activo')) {
            this.innerText = "❤️"; // Corazón lleno
        } else {
            this.innerText = "♡"; // Corazón vacío original
        }
    });
});
//Boton suscribirse
document.getElementById('btn-suscribir').addEventListener('click', function(e) {
    const emailInput = document.getElementById('email-usuario');
    const mensaje = document.getElementById('mensaje-correo');
    const email = emailInput.value;
    e.preventDefault();
    if (email.includes('@') && email.includes('.')) {
        // Si es correcto

        mensaje.innerText = "¡Preparando el despegue! Revisa tu bandeja de entrada en " + email;
        mensaje.style.color = "#00ffcc"; 
        emailInput.value = ""; 
        
        //this.disabled = true;

    } else {
        mensaje.innerText = "Error en la trayectoria. Introduce un email válido.";
        mensaje.style.color = "#ff4d4d"; // Rojo alerta
    }
});

