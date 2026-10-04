/* ================================================== */
/* CARTA FINAL                                        */
/* ================================================== */

(() => {

  "use strict";


  /* ================================================== */
  /* ELEMENTOS                                         */
  /* ================================================== */

  const seccion =
    document.querySelector(
      "#cartaFinal"
    );


  if (!seccion) {

    return;

  }


  const sobre =
    seccion.querySelector(
      "#sobreCarta"
    );


  const zonaSobre =
    seccion.querySelector(
      ".zona-sobre"
    );


  if (
    !sobre
    ||
    !zonaSobre
  ) {

    return;

  }


  /* ================================================== */
  /* ESTADO                                            */
  /* ================================================== */

  let abierta =
    false;


  /* ================================================== */
  /* ABRIR CARTA                                       */
  /* ================================================== */

  function abrirCarta() {

    if (abierta) {

      return;

    }


    abierta =
      true;


    seccion.classList.add(
      "abierta"
    );


    sobre.setAttribute(
      "aria-expanded",
      "true"
    );


    crearCorazones();

  }


  /* ================================================== */
  /* CORAZONES                                         */
  /* ================================================== */

  function crearCorazones() {

    const cantidad =
      14;


    for (
      let i = 0;
      i < cantidad;
      i++
    ) {

      const corazon =
        document.createElement(
          "span"
        );


      corazon.className =
        "corazon-carta-flotante";


      corazon.textContent =
        "♥";


      const izquierda =
        30
        +
        Math.random()
        *
        40;


      const arriba =
        52
        +
        Math.random()
        *
        12;


      corazon.style.left =
        `${izquierda}%`;


      corazon.style.top =
        `${arriba}%`;


      corazon.style.animationDelay =
        `${Math.random() * 400}ms`;


      corazon.style.fontSize =
        `${14 + Math.random() * 14}px`;


      zonaSobre.appendChild(
        corazon
      );


      setTimeout(
        () => {

          corazon.remove();

        },
        3000
      );

    }

  }


  /* ================================================== */
  /* CLICK                                             */
  /* ================================================== */

  sobre.addEventListener(
    "click",
    abrirCarta
  );


  /* ================================================== */
  /* TECLADO                                           */
  /* ================================================== */

  sobre.addEventListener(
    "keydown",
    (
      evento
    ) => {

      if (
        evento.key
        ===
        "Enter"
        ||
        evento.key
        ===
        " "
      ) {

        evento.preventDefault();


        abrirCarta();

      }

    }
  );

})();