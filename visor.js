/* ================================================== */
/* VISOR A PANTALLA COMPLETA */
/* ================================================== */


/*
  Este JS funciona encima de galeria.js.
  No modifica los recuerdos ni los textos.
*/


/* ================================================== */
/* CREAR VISOR */
/* ================================================== */

const visorPantallaCompleta =
  document.createElement(
    "div"
  );


visorPantallaCompleta.className =
  "visor-recuerdos";


visorPantallaCompleta.setAttribute(
  "aria-hidden",
  "true"
);


visorPantallaCompleta.innerHTML = `

  <div class="visor-recuerdos-fondo"></div>


  <button
    class="visor-recuerdos-cerrar"
    type="button"
    aria-label="Cerrar"
    title="Cerrar"
  >
    ×
  </button>


  <button
    class="visor-recuerdos-flecha visor-recuerdos-anterior"
    type="button"
    aria-label="Recuerdo anterior"
    title="Anterior"
  >
    ‹
  </button>


  <div
    class="visor-recuerdos-contenido"
    role="dialog"
    aria-modal="true"
  >

    <div
      class="visor-recuerdos-media"
    ></div>


    <div
      class="visor-recuerdos-info"
    >

      <p
        class="visor-recuerdos-contador"
      ></p>

      <h3
        class="visor-recuerdos-titulo"
      ></h3>

      <p
        class="visor-recuerdos-fecha"
      ></p>

    </div>

  </div>


  <button
    class="visor-recuerdos-flecha visor-recuerdos-siguiente"
    type="button"
    aria-label="Recuerdo siguiente"
    title="Siguiente"
  >
    ›
  </button>

`;


document.body.appendChild(
  visorPantallaCompleta
);


/* ================================================== */
/* ELEMENTOS */
/* ================================================== */

const visorFondo =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-fondo"
  );


const visorCerrar =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-cerrar"
  );


const visorAnterior =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-anterior"
  );


const visorSiguiente =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-siguiente"
  );


const visorMedia =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-media"
  );


const visorInfo =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-info"
  );


const visorContador =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-contador"
  );


const visorTitulo =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-titulo"
  );


const visorFecha =
  visorPantallaCompleta.querySelector(
    ".visor-recuerdos-fecha"
  );


/* ================================================== */
/* VARIABLES */
/* ================================================== */

const recuerdosDelVisor =
  [];


let indiceActualVisor =
  -1;


let inicioSwipeX =
  null;


let ultimoElementoActivo =
  null;


/* ================================================== */
/* SABER QUÉ FOTO ES */
/* ================================================== */

function obtenerNombreArchivo(
  media
) {

  const ruta =
    media.getAttribute(
      "src"
    )
    ||
    "";


  return decodeURIComponent(

    ruta
      .split("/")
      .pop()

  );

}


/* ================================================== */
/* PREPARAR FOTOS Y VÍDEOS */
/* ================================================== */

document
  .querySelectorAll(
    ".media-contenedor"
  )
  .forEach(

    contenedor => {

      const media =
        contenedor.querySelector(
          "img, video"
        );


      if (
        !media
      ) {

        return;

      }


      const archivo =
        obtenerNombreArchivo(
          media
        );


      const recuerdo =
        recuerdos.find(

          item =>
            item.archivo ===
            archivo

        );


      if (
        !recuerdo
      ) {

        return;

      }


      /*
        Guardamos los recuerdos
        exactamente en el orden
        en el que aparecen en la web.
      */

      const indice =
        recuerdosDelVisor.length;


      recuerdosDelVisor.push(
        recuerdo
      );


      contenedor.classList.add(
        "tiene-visor"
      );


      /* ================================================== */
      /* FOTO: CLIC DIRECTO */
      /* ================================================== */

      if (
        media.tagName ===
        "IMG"
      ) {

        media.classList.add(
          "foto-ampliable"
        );


        media.tabIndex =
          0;


        media.setAttribute(
          "role",
          "button"
        );


        media.setAttribute(
          "aria-label",
          "Abrir foto a pantalla completa"
        );


        media.addEventListener(

          "click",

          () => {

            abrirVisor(
              indice
            );

          }

        );


        /*
          También con Enter
          o espacio.
        */

        media.addEventListener(

          "keydown",

          evento => {

            if (
              evento.key === "Enter"
              ||
              evento.key === " "
            ) {

              evento.preventDefault();


              abrirVisor(
                indice
              );

            }

          }

        );

      }


      /* ================================================== */
      /* BOTÓN DE AMPLIAR */
      /* ================================================== */

      const botonAmpliar =
        document.createElement(
          "button"
        );


      botonAmpliar.type =
        "button";


      botonAmpliar.className =
        "boton-abrir-visor";


      botonAmpliar.setAttribute(
        "aria-label",
        "Abrir a pantalla completa"
      );


      botonAmpliar.title =
        "Ver a pantalla completa";


      botonAmpliar.textContent =
        "⤢";


      botonAmpliar.addEventListener(

        "click",

        evento => {

          evento.preventDefault();

          evento.stopPropagation();


          abrirVisor(
            indice
          );

        }

      );


      contenedor.appendChild(
        botonAmpliar
      );

    }

  );


/* ================================================== */
/* MOSTRAR FOTO / VÍDEO */
/* ================================================== */

function mostrarRecuerdo(
  indice
) {

  if (
    recuerdosDelVisor.length ===
    0
  ) {

    return;

  }


  /* VOLVER DEL PRIMERO AL ÚLTIMO */

  if (
    indice < 0
  ) {

    indice =
      recuerdosDelVisor.length
      -
      1;

  }


  /* DEL ÚLTIMO AL PRIMERO */

  if (
    indice >=
    recuerdosDelVisor.length
  ) {

    indice =
      0;

  }


  indiceActualVisor =
    indice;


  const recuerdo =
    recuerdosDelVisor[
    indiceActualVisor
    ];


  const esVideo =
    recuerdo.archivo
      .toLowerCase()
      .endsWith(
        ".mp4"
      );


  /* ================================================== */
  /* PARAR VÍDEO ANTERIOR */
  /* ================================================== */

  const videoAnterior =
    visorMedia.querySelector(
      "video"
    );


  if (
    videoAnterior
  ) {

    videoAnterior.pause();

  }


  visorMedia.innerHTML =
    "";


  let mediaGrande;


  /* ================================================== */
  /* VÍDEO */
  /* ================================================== */

  if (
    esVideo
  ) {

    mediaGrande =
      document.createElement(
        "video"
      );


    mediaGrande.controls =
      true;


    mediaGrande.autoplay =
      true;


    mediaGrande.playsInline =
      true;


    mediaGrande.preload =
      "metadata";

  }


  /* ================================================== */
  /* FOTO */
  /* ================================================== */

  else {

    mediaGrande =
      document.createElement(
        "img"
      );


    mediaGrande.alt =
      TEXTOS_PERSONALIZADOS[
        recuerdo.archivo
      ]?.titulo
      ||
      "Recuerdo ampliado";

  }


  mediaGrande.src =
    "fotos/"
    +
    recuerdo.archivo;


  /* ================================================== */
  /* CONSERVAR AJUSTES DE FOTOS */
  /* ================================================== */

  /*
    Esto hace que, por ejemplo,
    la foto que teníamos girada
    siga saliendo corregida.
  */

  mediaGrande.addEventListener(

    "load",

    () => {

      aplicarAjustesMedia(
        mediaGrande,
        recuerdo
      );

    }

  );


  mediaGrande.addEventListener(

    "loadedmetadata",

    () => {

      aplicarAjustesMedia(
        mediaGrande,
        recuerdo
      );

    }

  );


  aplicarAjustesMedia(
    mediaGrande,
    recuerdo
  );


  visorMedia.appendChild(
    mediaGrande
  );


  /* ================================================== */
  /* CONTADOR */
  /* ================================================== */

  visorContador.textContent =
    `${indiceActualVisor + 1} / ${recuerdosDelVisor.length}`;


  /* ================================================== */
  /* TEXTO DEL VISOR */
  /* ================================================== */

  const esGraciosa =
    OBRAS_GRACIOSAS.has(
      recuerdo.numero
    );


  /*
    Las graciosas siguen sin tener
    título ni fecha.
  */

  if (
    esGraciosa
  ) {

    visorInfo.classList.add(
      "solo-contador"
    );


    visorTitulo.textContent =
      "";


    visorFecha.textContent =
      "";

  }


  else {

    visorInfo.classList.remove(
      "solo-contador"
    );


    const personalizado =
      TEXTOS_PERSONALIZADOS[
      recuerdo.archivo
      ];


    visorTitulo.textContent =
      personalizado?.titulo
      ||
      "Un recuerdo nuestro";


    visorFecha.textContent =
      fechaBonita(
        recuerdo.fecha
      );

  }

}


/* ================================================== */
/* ABRIR */
/* ================================================== */

function abrirVisor(
  indice
) {

  ultimoElementoActivo =
    document.activeElement;


  mostrarRecuerdo(
    indice
  );


  visorPantallaCompleta.classList.add(
    "abierto"
  );


  visorPantallaCompleta.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.classList.add(
    "visor-abierto"
  );


  visorCerrar.focus();

}


/* ================================================== */
/* CERRAR */
/* ================================================== */

function cerrarVisor() {

  const video =
    visorMedia.querySelector(
      "video"
    );


  if (
    video
  ) {

    video.pause();

  }


  visorPantallaCompleta.classList.remove(
    "abierto"
  );


  visorPantallaCompleta.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "visor-abierto"
  );


  visorMedia.innerHTML =
    "";


  indiceActualVisor =
    -1;


  /*
    Volvemos a enfocar la foto
    desde la que se abrió.
  */

  if (
    ultimoElementoActivo
    &&
    typeof ultimoElementoActivo.focus ===
    "function"
  ) {

    ultimoElementoActivo.focus();

  }

}


/* ================================================== */
/* CAMBIAR FOTO */
/* ================================================== */

function cambiarRecuerdo(
  cantidad
) {

  if (
    indiceActualVisor ===
    -1
  ) {

    return;

  }


  mostrarRecuerdo(

    indiceActualVisor
    +
    cantidad

  );

}


/* ================================================== */
/* BOTONES */
/* ================================================== */

visorCerrar.addEventListener(

  "click",

  cerrarVisor

);


visorFondo.addEventListener(

  "click",

  cerrarVisor

);


visorAnterior.addEventListener(

  "click",

  () => {

    cambiarRecuerdo(
      -1
    );

  }

);


visorSiguiente.addEventListener(

  "click",

  () => {

    cambiarRecuerdo(
      1
    );

  }

);


/* ================================================== */
/* TECLADO */
/* ================================================== */

document.addEventListener(

  "keydown",

  evento => {

    if (
      !visorPantallaCompleta.classList.contains(
        "abierto"
      )
    ) {

      return;

    }


    /* ESC = CERRAR */

    if (
      evento.key ===
      "Escape"
    ) {

      cerrarVisor();

    }


    /* FLECHA IZQUIERDA */

    else if (
      evento.key ===
      "ArrowLeft"
    ) {

      cambiarRecuerdo(
        -1
      );

    }


    /* FLECHA DERECHA */

    else if (
      evento.key ===
      "ArrowRight"
    ) {

      cambiarRecuerdo(
        1
      );

    }

  }

);


/* ================================================== */
/* DESLIZAR EN MÓVIL */
/* ================================================== */

visorPantallaCompleta.addEventListener(

  "touchstart",

  evento => {

    inicioSwipeX =
      evento.changedTouches[0]
        .clientX;

  },

  {
    passive:
      true
  }

);


visorPantallaCompleta.addEventListener(

  "touchend",

  evento => {

    if (
      inicioSwipeX ===
      null
    ) {

      return;

    }


    const finSwipeX =
      evento.changedTouches[0]
        .clientX;


    const distancia =
      finSwipeX
      -
      inicioSwipeX;


    /*
      Si desliza más de 55 píxeles
      cambiamos de recuerdo.
    */

    if (
      Math.abs(
        distancia
      ) > 55
    ) {

      /* DESLIZAR A LA DERECHA */

      if (
        distancia > 0
      ) {

        cambiarRecuerdo(
          -1
        );

      }


      /* DESLIZAR A LA IZQUIERDA */

      else {

        cambiarRecuerdo(
          1
        );

      }

    }


    inicioSwipeX =
      null;

  },

  {
    passive:
      true
  }

);