/* ================================================== */
/* MINI JUEGO - ¿CUÁNTO SABES DE NOSOTROS?            */
/* ================================================== */

(() => {

  "use strict";


  /* ================================================== */
  /* PREGUNTAS                                         */
  /* ================================================== */

  const PREGUNTAS = [

    {
      pregunta:
        "¿Dónde fue nuestro primer beso?",

      respuestas: [
        "Oasiz",
        "Parque Corredor",
        "Parque Grillo"
      ],

      correcta:
        2
    },

    {
      pregunta:
        "¿Cuándo fue la primera vez que te regalé flores?",

      respuestas: [
        "A los 6 meses",
        "En tu cumple",
        "En nuestro primer mes"
      ],

      correcta:
        2
    },

    {
      pregunta:
        "¿Qué día quedamos por primera vez para sacar a Blacky?",

      respuestas: [
        "31/08/2025",
        "10/10/2025",
        "11/09/2025"
      ],

      correcta:
        0
    },

    {
      pregunta:
        "¿Qué imagen salía después de la pregunta de si querías ser mi novia en la aplicación?",

      respuestas: [
        "Romeo Santos",
        "Quevedo",
        "Nosotros"
      ],

      correcta:
        1
    },

    {
      pregunta:
        "¿Quién es nuestro jugador favorito ahora mismo?",

      respuestas: [
        "Baena",
        "Pubill",
        "Llorente"
      ],

      correcta:
        1
    }

  ];


  /* ================================================== */
  /* ELEMENTOS                                         */
  /* ================================================== */

  const seccion =
    document.querySelector(
      "#juegoNosotros"
    );


  if (!seccion) {

    return;

  }


  const numeroPregunta =
    seccion.querySelector(
      "#numeroPreguntaJuego"
    );


  const preguntaTexto =
    seccion.querySelector(
      "#preguntaJuego"
    );


  const respuestasContenedor =
    seccion.querySelector(
      "#respuestasJuego"
    );


  const mensaje =
    seccion.querySelector(
      "#mensajeJuego"
    );


  const botonSiguiente =
    seccion.querySelector(
      "#botonSiguienteJuego"
    );


  const barra =
    seccion.querySelector(
      "#barraJuegoInterior"
    );


  const zonaPreguntas =
    seccion.querySelector(
      "#zonaPreguntasJuego"
    );


  const finalJuego =
    seccion.querySelector(
      "#finalJuego"
    );


  const puntuacionFinal =
    seccion.querySelector(
      "#puntuacionFinalJuego"
    );


  /* ================================================== */
  /* ESTADO                                            */
  /* ================================================== */

  let indiceActual =
    0;


  let aciertos =
    0;


  let respondida =
    false;


  /* ================================================== */
  /* MOSTRAR PREGUNTA                                  */
  /* ================================================== */

  function mostrarPregunta() {

    respondida =
      false;


    botonSiguiente.classList.remove(
      "visible"
    );


    mensaje.textContent =
      "";


    mensaje.className =
      "mensaje-juego";


    const preguntaActual =
      PREGUNTAS[
        indiceActual
      ];


    numeroPregunta.textContent =
      `Pregunta ${indiceActual + 1} de ${PREGUNTAS.length}`;


    preguntaTexto.textContent =
      preguntaActual.pregunta;


    respuestasContenedor.innerHTML =
      "";


    preguntaActual.respuestas.forEach(
      (
        respuesta,
        indice
      ) => {

        const boton =
          document.createElement(
            "button"
          );


        boton.type =
          "button";


        boton.className =
          "respuesta-juego";


        boton.textContent =
          `${String.fromCharCode(65 + indice)}. ${respuesta}`;


        boton.addEventListener(
          "click",
          () => {

            comprobarRespuesta(
              indice,
              boton
            );

          }
        );


        respuestasContenedor.appendChild(
          boton
        );

      }
    );


    const progreso =
      (
        indiceActual
        /
        PREGUNTAS.length
      )
      *
      100;


    barra.style.width =
      `${progreso}%`;

  }


  /* ================================================== */
  /* COMPROBAR RESPUESTA                               */
  /* ================================================== */

  function comprobarRespuesta(
    indiceElegido,
    botonElegido
  ) {

    if (respondida) {

      return;

    }


    respondida =
      true;


    const preguntaActual =
      PREGUNTAS[
        indiceActual
      ];


    const botones =
      [
        ...respuestasContenedor.querySelectorAll(
          ".respuesta-juego"
        )
      ];


    botones.forEach(
      (
        boton
      ) => {

        boton.disabled =
          true;

      }
    );


    if (
      indiceElegido
      ===
      preguntaActual.correcta
    ) {

      aciertos++;


      botonElegido.classList.add(
        "correcta"
      );


      mensaje.textContent =
        "Correctoooo ❤️";


      mensaje.classList.add(
        "acierto"
      );

    }
    else {

      botonElegido.classList.add(
        "incorrecta"
      );


      botones[
        preguntaActual.correcta
      ].classList.add(
        "correcta"
      );


      mensaje.textContent =
        "Mmm… eso no era 😭";


      mensaje.classList.add(
        "fallo"
      );

    }


    botonSiguiente.classList.add(
      "visible"
    );


    barra.style.width =
      `${((indiceActual + 1) / PREGUNTAS.length) * 100}%`;

  }


  /* ================================================== */
  /* SIGUIENTE                                         */
  /* ================================================== */

  botonSiguiente.addEventListener(
    "click",
    () => {

      indiceActual++;


      if (
        indiceActual
        <
        PREGUNTAS.length
      ) {

        mostrarPregunta();

      }
      else {

        mostrarFinal();

      }

    }
  );


  /* ================================================== */
  /* FINAL                                             */
  /* ================================================== */

  function mostrarFinal() {

    zonaPreguntas.style.display =
      "none";


    finalJuego.classList.add(
      "visible"
    );


    puntuacionFinal.textContent =
      `${aciertos} de ${PREGUNTAS.length} acertadas`;


    barra.style.width =
      "100%";

  }


  /* ================================================== */
  /* INICIO                                            */
  /* ================================================== */

  mostrarPregunta();

})();