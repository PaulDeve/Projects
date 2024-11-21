const preguntaElemento = document.getElementById('pregunta');
const opcionesElemento = document.getElementById('opciones');
const puntuacionElemento = document.getElementById('puntuacion');

function cargarPregunta() {
  const preguntaActualObj = preguntas[preguntaActual];
  preguntaElemento.textContent = preguntaActualObj.pregunta;

  opcionesElemento.innerHTML = '';

  preguntaActualObj.opciones.forEach(opcion => {
    const boton = document.createElement('button');
    boton.textContent = opcion;
    boton.addEventListener('click', () => evaluarRespuesta(opcion));
    opcionesElemento.appendChild(boton);
  });
}

function evaluarRespuesta(respuesta) {
  const preguntaActualObj = preguntas[preguntaActual];

  if (respuesta === preguntaActualObj.respuesta) {
    puntuacion++;
  }

  puntuacionElemento.textContent = puntuacion;
}

function siguientePregunta() {
  preguntaActual++;
  
  if (preguntaActual < preguntas.length) {
    cargarPregunta();
  } else {
    alert('Fin del juego. Tu puntuación final es: ' + puntuacion);
    reiniciarJuego();
  }
}

function reiniciarJuego() {
  preguntaActual = 0;
  puntuacion = 0;
  puntuacionElemento.textContent = puntuacion;
  cargarPregunta();
}

cargarPregunta();
