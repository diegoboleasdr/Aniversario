/* ================================================== */
/* FECHA */
/* ================================================== */

const fechaInicio = new Date(
  2025,
  9,
  10,
  0,
  0,
  0
);


/* ================================================== */
/* COLORES */
/* ================================================== */

const COLORES = [
  "#007f86",
  "#008f96",
  "#009fa7",
  "#00aeb6",
  "#12bdc4",
  "#2ccbd0",
  "#49d6da",
  "#6ee0e2",
  "#91e8e9",
  "#b5f0ef"
];


/* ================================================== */
/* ELEMENTOS */
/* ================================================== */

const escena =
  document.getElementById("escena");

const fondo =
  document.getElementById("corazonesFondo");

const sanValentin =
  document.getElementById("sanValentin");

const semilla =
  document.getElementById("semilla");

const suelo =
  document.getElementById("suelo");

const arbol =
  document.getElementById("arbol");

const copa =
  document.getElementById("copa");

const mensaje =
  document.getElementById("mensaje");

const tituloMensaje =
  document.getElementById("tituloMensaje");

const frase1 =
  document.getElementById("frase1");

const frase2 =
  document.getElementById("frase2");

const firma =
  document.getElementById("firma");

const zonaContador =
  document.getElementById("zonaContador");

const contador =
  document.getElementById("contador");

const botonGaleria =
  document.getElementById("botonGaleria");

/* ================================================== */
/* RANDOM ESTABLE */
/* ================================================== */

function crearRandom(semillaInicial) {

  let semilla = semillaInicial;

  return function () {

    semilla |= 0;

    semilla =
      semilla +
      0x6D2B79F5 | 0;

    let t = semilla;

    t =
      Math.imul(
        t ^ t >>> 15,
        t | 1
      );

    t ^=
      t +
      Math.imul(
        t ^ t >>> 7,
        t | 61
      );

    return (
      (
        t ^ t >>> 14
      ) >>> 0
    ) / 4294967296;
  };
}


/* ================================================== */
/* UTILIDADES */
/* ================================================== */

function esperar(ms) {

  return new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms
      )
  );
}


function entre(
  random,
  min,
  max
) {

  return (
    min +
    random() *
    (
      max -
      min
    )
  );
}


/* ================================================== */
/* BÉZIER */
/* ================================================== */

function bezier(
  p0,
  p1,
  p2,
  p3,
  t
) {

  const mt =
    1 - t;

  return {

    x:

      mt * mt * mt *
      p0.x

      +

      3 *
      mt * mt *
      t *
      p1.x

      +

      3 *
      mt *
      t * t *
      p2.x

      +

      t * t * t *
      p3.x,


    y:

      mt * mt * mt *
      p0.y

      +

      3 *
      mt * mt *
      t *
      p1.y

      +

      3 *
      mt *
      t * t *
      p2.y

      +

      t * t * t *
      p3.y
  };
}


/* ================================================== */
/* FORMA DEL CORAZÓN DEL ÁRBOL */
/* ================================================== */

function crearFormaCorazon() {

  const segmentos = [

    [
      { x: 50, y: 98 },
      { x: 43, y: 84 },
      { x: 13, y: 76 },
      { x: 6, y: 49 }
    ],

    [
      { x: 6, y: 49 },
      { x: 1, y: 21 },
      { x: 16, y: 4 },
      { x: 34, y: 6 }
    ],

    [
      { x: 34, y: 6 },
      { x: 43, y: 7 },
      { x: 48, y: 13 },
      { x: 50, y: 21 }
    ],

    [
      { x: 50, y: 21 },
      { x: 53, y: 13 },
      { x: 58, y: 7 },
      { x: 67, y: 6 }
    ],

    [
      { x: 67, y: 6 },
      { x: 85, y: 4 },
      { x: 100, y: 21 },
      { x: 94, y: 49 }
    ],

    [
      { x: 94, y: 49 },
      { x: 87, y: 76 },
      { x: 57, y: 84 },
      { x: 50, y: 98 }
    ]

  ];


  const puntos = [];


  segmentos.forEach(
    segmento => {

      for (
        let i = 0;
        i < 34;
        i++
      ) {

        puntos.push(

          bezier(
            segmento[0],
            segmento[1],
            segmento[2],
            segmento[3],
            i / 34
          )

        );

      }

    }
  );


  return puntos;
}


const formaCorazon =
  crearFormaCorazon();


/* ================================================== */
/* COMPROBAR SI UN PUNTO ESTÁ DENTRO */
/* ================================================== */

function dentroCorazon(
  x,
  y
) {

  let dentro = false;


  for (
    let i = 0,
    j = formaCorazon.length - 1;

    i < formaCorazon.length;

    j = i++
  ) {

    const xi =
      formaCorazon[i].x;

    const yi =
      formaCorazon[i].y;

    const xj =
      formaCorazon[j].x;

    const yj =
      formaCorazon[j].y;


    const intersecta =

      (
        (yi > y) !==
        (yj > y)
      )

      &&

      (
        x <
        (
          (
            xj - xi
          )

          *

          (
            y - yi
          )
        )

        /

        (
          yj - yi
        )

        +

        xi
      );


    if (
      intersecta
    ) {

      dentro =
        !dentro;

    }

  }


  return dentro;
}


/* ================================================== */
/* CREAR CORAZÓN DEL ÁRBOL */
/* ================================================== */

function crearHoja(
  x,
  y,
  random,
  borde = false
) {

  const hoja =
    document.createElement(
      "span"
    );


  hoja.className =
    "hoja";


  hoja.textContent =
    "♥";


  /* Pequeña irregularidad */

  const variacion =
    borde
      ? 0.55
      : 1.45;


  x +=
    entre(
      random,
      -variacion,
      variacion
    );


  y +=
    entre(
      random,
      -variacion,
      variacion
    );


  hoja.style.left =
    x + "%";


  hoja.style.top =
    y + "%";


  /* ================================================== */
  /* TAMAÑO */
  /* ================================================== */

  const anchoCopa =
    Math.max(
      220,
      copa.clientWidth
    );


  const escala =
    anchoCopa /
    300;


  let tamaño =
    entre(
      random,
      6.2,
      10.5
    );


  if (
    random() > 0.84
  ) {

    tamaño =
      entre(
        random,
        10.5,
        14.5
      );

  }


  if (
    borde
  ) {

    tamaño *=
      entre(
        random,
        1.03,
        1.16
      );

  }


  hoja.style.fontSize =
    (
      tamaño *
      escala
    )
    +
    "px";


  /* ================================================== */
  /* COLOR */
  /* ================================================== */

  hoja.style.setProperty(

    "--color",

    COLORES[
    Math.floor(
      random() *
      COLORES.length
    )
    ]

  );


  /* ================================================== */
  /* ROTACIÓN */
  /* ================================================== */

  hoja.style.setProperty(

    "--rotacion",

    entre(
      random,
      -24,
      24
    )
    +
    "deg"

  );


  /* ================================================== */
  /* OPACIDAD */
  /* ================================================== */

  hoja.style.setProperty(

    "--opacidad",

    entre(
      random,
      0.82,
      1
    ).toFixed(2)

  );


  /* ================================================== */
  /* APARICIÓN DESDE LAS RAMAS */
  /* ================================================== */

  const inicioX =

    (
      50 -
      x
    )

    *

    entre(
      random,
      0.22,
      0.55
    );


  const inicioY =

    (
      72 -
      y
    )

    *

    entre(
      random,
      0.25,
      0.58
    );


  hoja.style.setProperty(
    "--inicio-x",
    inicioX + "px"
  );


  hoja.style.setProperty(
    "--inicio-y",
    inicioY + "px"
  );


  const retrasoVertical =

    (
      y /
      100
    )

    *
    0.20;


  hoja.style.setProperty(

    "--delay",

    (
      entre(
        random,
        0,
        0.72
      )

      -

      retrasoVertical

    ).toFixed(3)
    +
    "s"

  );


  /* ================================================== */
  /* MOVIMIENTO FINAL */
  /* ================================================== */

  hoja.style.setProperty(

    "--duracion",

    entre(
      random,
      1.8,
      3.8
    ).toFixed(2)
    +
    "s"

  );


  hoja.style.setProperty(

    "--retraso",

    entre(
      random,
      -3.8,
      0
    ).toFixed(2)
    +
    "s"

  );


  hoja.style.setProperty(

    "--mover-x",

    entre(
      random,
      -2.6,
      2.6
    ).toFixed(2)
    +
    "px"

  );


  copa.appendChild(
    hoja
  );
}


/* ================================================== */
/* CREAR COPA DEL ÁRBOL */
/* ================================================== */

function crearCopa() {

  copa.innerHTML =
    "";


  const random =
    crearRandom(
      10102025
    );


  /*
    Corazones del interior.
    Bastantes para tapar parcialmente
    las ramas.
  */

  const corazonesInterior =
    600;


  let creados =
    0;


  while (
    creados <
    corazonesInterior
  ) {

    const x =
      entre(
        random,
        4,
        96
      );


    const y =
      entre(
        random,
        4,
        98
      );


    if (
      dentroCorazon(
        x,
        y
      )
    ) {

      crearHoja(
        x,
        y,
        random,
        false
      );


      creados++;

    }

  }


  /*
    Corazones específicos del borde
    para mantener la forma ♥.
  */

  const corazonesBorde =
    105;


  for (
    let i = 0;
    i < corazonesBorde;
    i++
  ) {

    const indice =

      Math.floor(

        (
          i /
          corazonesBorde
        )

        *

        formaCorazon.length

      );


    const punto =
      formaCorazon[
      indice
      ];


    crearHoja(
      punto.x,
      punto.y,
      random,
      true
    );

  }

}


/* ================================================== */
/* CORAZONES FIJOS DE ARRIBA Y ABAJO */
/* ================================================== */

function crearCorazonAmbiente(
  x,
  y,
  tamaño,
  random
) {

  const corazon =
    document.createElement(
      "span"
    );


  corazon.className =
    "corazon-ambiente";


  corazon.textContent =
    "♥";


  corazon.style.left =
    x + "%";


  corazon.style.top =
    y + "%";


  const escala =
    Math.max(
      0.75,
      Math.min(
        1.7,
        escena.clientWidth /
        1250
      )
    );


  corazon.style.fontSize =
    (
      tamaño *
      escala
    )
    +
    "px";


  corazon.style.setProperty(

    "--color",

    COLORES[
    Math.floor(
      random() *
      COLORES.length
    )
    ]

  );


  corazon.style.setProperty(

    "--opacidad",

    entre(
      random,
      0.68,
      1
    ).toFixed(2)

  );


  corazon.style.setProperty(

    "--rotacion",

    entre(
      random,
      -20,
      20
    )
    +
    "deg"

  );


  corazon.style.setProperty(

    "--duracion",

    entre(
      random,
      2.2,
      4.8
    ).toFixed(2)
    +
    "s"

  );


  corazon.style.setProperty(

    "--retraso",

    entre(
      random,
      -4,
      0
    ).toFixed(2)
    +
    "s"

  );


  corazon.style.setProperty(

    "--movimiento-x",

    entre(
      random,
      -6,
      6
    ).toFixed(2)
    +
    "px"

  );


  corazon.style.setProperty(

    "--movimiento-y",

    entre(
      random,
      -5,
      6
    ).toFixed(2)
    +
    "px"

  );


  fondo.appendChild(
    corazon
  );
}


/* ================================================== */
/* DISTRIBUCIÓN AMBIENTAL */
/* ================================================== */

function crearFondo() {

  fondo.innerHTML =
    "";


  const random =
    crearRandom(
      7772025
    );


  /* ARRIBA */

  for (
    let i = 0;
    i < 30;
    i++
  ) {

    crearCorazonAmbiente(

      entre(
        random,
        25,
        74
      ),

      entre(
        random,
        -2,
        16
      ),

      entre(
        random,
        6,
        17
      ),

      random

    );

  }


  /* ABAJO */

  for (
    let i = 0;
    i < 27;
    i++
  ) {

    crearCorazonAmbiente(

      entre(
        random,
        25,
        74
      ),

      entre(
        random,
        85,
        99
      ),

      entre(
        random,
        6,
        18
      ),

      random

    );

  }

}


/* ================================================== */
/* LLUVIA DE CORAZONES POR TODA LA PÁGINA */
/* ================================================== */

function crearCorazonLluvia() {

  const corazon =
    document.createElement(
      "span"
    );


  corazon.className =
    "corazon-lluvia";


  corazon.textContent =
    "♥";


  /*
    AHORA HAY 3 ZONAS QUE SE SOLAPAN.

    IZQUIERDA  -> 0% a 32%
    CENTRO     -> 22% a 78%
    DERECHA    -> 68% a 100%

    De esta manera NO quedan
    franjas vacías entre ellas.
  */

  const azar =
    Math.random();


  let posicionX;
  let tamaño;
  let opacidad;


  /* ================================================== */
  /* ZONA IZQUIERDA */
  /* ================================================== */

  if (
    azar < 0.35
  ) {

    posicionX =
      Math.random() *
      32;


    tamaño =
      4 +
      Math.random() * 8;


    opacidad =
      0.38 +
      Math.random() * 0.48;

  }


  /* ================================================== */
  /* ZONA DERECHA */
  /* ================================================== */

  else if (
    azar < 0.70
  ) {

    posicionX =
      68 +
      Math.random() * 32;


    tamaño =
      4 +
      Math.random() * 8;


    opacidad =
      0.38 +
      Math.random() * 0.48;

  }


  /* ================================================== */
  /* ZONA CENTRAL */
  /* ================================================== */

  else {

    /*
      Esta zona se solapa con
      izquierda y derecha.

      Por eso desaparecen
      esos huecos verticales.
    */

    posicionX =
      22 +
      Math.random() * 56;


    /*
      Más pequeños para que no
      molesten sobre texto y árbol.
    */

    tamaño =
      3 +
      Math.random() * 6;


    /*
      Más transparentes en el centro.
    */

    opacidad =
      0.18 +
      Math.random() * 0.38;

  }


  /* ================================================== */
  /* POSICIÓN */
  /* ================================================== */

  corazon.style.left =
    posicionX + "%";


  /* ================================================== */
  /* TAMAÑO */
  /* ================================================== */

  corazon.style.fontSize =
    tamaño + "px";


  /* ================================================== */
  /* COLOR */
  /* ================================================== */

  corazon.style.setProperty(

    "--color",

    COLORES[
    Math.floor(
      Math.random() *
      COLORES.length
    )
    ]

  );


  /* ================================================== */
  /* OPACIDAD */
  /* ================================================== */

  corazon.style.setProperty(

    "--opacidad",

    opacidad.toFixed(2)

  );


  /* ================================================== */
  /* VELOCIDAD */
  /* ================================================== */

  const tiempo =
    8 +
    Math.random() * 8;


  corazon.style.setProperty(

    "--tiempo",

    tiempo + "s"

  );


  /* ================================================== */
  /* DESPLAZAMIENTO LATERAL */
  /* ================================================== */

  corazon.style.setProperty(

    "--desvio",

    (
      -40 +
      Math.random() * 80
    )
    +
    "px"

  );


  /* ================================================== */
  /* AÑADIR */
  /* ================================================== */

  fondo.appendChild(
    corazon
  );


  /* ================================================== */
  /* ELIMINAR CUANDO TERMINE */
  /* ================================================== */

  setTimeout(

    () => {

      corazon.remove();

    },

    tiempo * 1000 +
    600

  );

}


/* ================================================== */
/* CONTADOR */
/* ================================================== */

function actualizarContador() {

  const ahora =
    new Date();


  let diferencia =
    ahora -
    fechaInicio;


  if (
    diferencia < 0
  ) {

    diferencia =
      0;

  }


  const total =
    Math.floor(
      diferencia /
      1000
    );


  const dias =
    Math.floor(
      total /
      86400
    );


  const horas =
    Math.floor(

      (
        total %
        86400
      )

      /

      3600

    );


  const minutos =
    Math.floor(

      (
        total %
        3600
      )

      /

      60

    );


  const segundos =
    total %
    60;


  contador.textContent =

    `${dias} días ` +
    `${horas} horas ` +
    `${minutos} minutos ` +
    `${segundos} segundos`;

}


actualizarContador();


setInterval(
  actualizarContador,
  1000
);


/* ================================================== */
/* ESTADOS DEL ÁRBOL */
/* ================================================== */

function limpiarEstadosArbol() {

  arbol.classList.remove(

    "arbol-oculto",
    "arbol-creciendo",
    "arbol-hojas",
    "arbol-final"

  );

}


function ocultarArbol() {

  limpiarEstadosArbol();


  arbol.classList.add(
    "arbol-oculto"
  );

}


function crecerArbol() {

  limpiarEstadosArbol();


  arbol.classList.add(
    "arbol-creciendo"
  );

}


function sacarHojas() {

  limpiarEstadosArbol();


  arbol.classList.add(
    "arbol-hojas"
  );

}


function terminarArbol() {

  limpiarEstadosArbol();


  arbol.classList.add(
    "arbol-final"
  );

}


/* ================================================== */
/* EFECTO DE ESCRITURA */
/* ================================================== */

async function escribir(
  elemento,
  texto,
  velocidad
) {

  elemento.textContent =
    "";


  elemento.classList.add(
    "escribiendo"
  );


  for (
    const letra
    of texto
  ) {

    elemento.textContent +=
      letra;


    await esperar(
      velocidad
    );

  }


  elemento.classList.remove(
    "escribiendo"
  );

}


/* ================================================== */
/* CORAZONES QUE SE DESPRENDEN DEL ÁRBOL */
/* ================================================== */

function soltarCorazon() {

  const hojas =
    copa.querySelectorAll(
      ".hoja"
    );


  if (
    hojas.length === 0
  ) {

    return;

  }


  const hoja =

    hojas[
    Math.floor(
      Math.random() *
      hojas.length
    )
    ];


  const rectHoja =
    hoja.getBoundingClientRect();


  const rectEscena =
    escena.getBoundingClientRect();


  const petalo =
    document.createElement(
      "span"
    );


  petalo.className =
    "petalo-volador";


  petalo.textContent =
    "♥";


  petalo.style.left =

    (
      rectHoja.left -
      rectEscena.left
    )
    +
    "px";


  petalo.style.top =

    (
      rectHoja.top -
      rectEscena.top
    )
    +
    "px";


  const estiloHoja =
    getComputedStyle(
      hoja
    );


  petalo.style.color =
    estiloHoja.color;


  petalo.style.fontSize =
    estiloHoja.fontSize;


  /*
    Salen principalmente
    hacia la izquierda.
  */

  petalo.style.setProperty(

    "--destino-x",

    (
      -70 -
      Math.random() * 180
    )
    +
    "px"

  );


  petalo.style.setProperty(

    "--destino-y",

    (
      20 +
      Math.random() * 120
    )
    +
    "px"

  );


  petalo.style.setProperty(

    "--tiempo",

    (
      1.5 +
      Math.random() * 1.8
    )
    +
    "s"

  );


  escena.appendChild(
    petalo
  );


  setTimeout(

    () => {

      petalo.remove();

    },

    3500

  );

}


/* ================================================== */
/* TEXTO FINAL */
/* ================================================== */

async function mostrarMensaje() {

  mensaje.classList.add(
    "visible"
  );


  /*
    Mientras aparece el mensaje
    se desprenden corazones.
  */

  const lluvia =
    setInterval(
      soltarCorazon,
      210
    );


  await escribir(

    tituloMensaje,

    "Para el amor de mi vida:",

    31

  );


  await esperar(
    150
  );


  await escribir(

    frase1,

    "Si pudiera elegir un lugar seguro,\nsería a tu lado.",

    27

  );


  await esperar(
    160
  );


  await escribir(

    frase2,

    "Cuanto más tiempo estoy contigo\nmás te amo.",

    27

  );


  await esperar(
    130
  );


  await escribir(

    firma,

    "TE AMO CHAT ❤️ ",

    35

  );


  clearInterval(
    lluvia
  );

}


/* ================================================== */
/* ANIMACIÓN COMPLETA */
/* ================================================== */

async function iniciarAnimacion() {

  /* ================================================== */
  /* ESTADO INICIAL */
  /* ================================================== */

  botonGaleria.classList.remove(
    "visible"
  );

  ocultarArbol();


  arbol.classList.remove(
    "arbol-derecha"
  );


  mensaje.classList.remove(
    "visible"
  );


  zonaContador.classList.remove(
    "visible"
  );


  sanValentin.classList.remove(
    "visible"
  );


  semilla.classList.remove(
    "aparece",
    "cae"
  );


  suelo.classList.remove(
    "corta",
    "completa"
  );


  await esperar(
    300
  );


  /* ================================================== */
  /* 365 DÍAS CONTIGO */
  /* ================================================== */

  sanValentin.classList.add(
    "visible"
  );


  await esperar(
    650
  );


  sanValentin.classList.remove(
    "visible"
  );


  await esperar(
    130
  );


  /* ================================================== */
  /* SEMILLA */
  /* ================================================== */

  semilla.classList.add(
    "aparece"
  );


  await esperar(
    190
  );


  /* ================================================== */
  /* LÍNEA CORTA */
  /* ================================================== */

  suelo.classList.add(
    "corta"
  );


  await esperar(
    190
  );


  /* ================================================== */
  /* SEMILLA CAE + LÍNEA COMPLETA */
  /* ================================================== */

  suelo.classList.remove(
    "corta"
  );


  suelo.classList.add(
    "completa"
  );


  semilla.classList.add(
    "cae"
  );


  await esperar(
    390
  );


  semilla.style.opacity =
    "0";


  /* ================================================== */
  /* CRECE EL ÁRBOL */
  /* ================================================== */

  crecerArbol();


  await esperar(
    720
  );


  /* ================================================== */
  /* APARECEN LOS CORAZONES */
  /* ================================================== */

  sacarHojas();


  await esperar(
    1350
  );


  /* ================================================== */
  /* ÁRBOL TERMINADO */
  /* ================================================== */

  terminarArbol();


  await esperar(
    260
  );


  /* ================================================== */
  /* APARECE CONTADOR */
  /* ================================================== */

  zonaContador.classList.add(
    "visible"
  );


  await esperar(
    330
  );


  /* ================================================== */
  /* ÁRBOL SE MUEVE A LA DERECHA */
  /* ================================================== */

  arbol.classList.add(
    "arbol-derecha"
  );


  await esperar(
    720
  );


  /* ================================================== */
  /* APARECE MENSAJE */
  /* ================================================== */

  await mostrarMensaje();

/*
  Esperamos un poquito después
  de terminar de escribir.
*/


  await esperar(
    500
  );

  /*
  APARECE EL BOTÓN DE LA GALERÍA
*/
  botonGaleria.classList.add(
    "visible"
  );
  /*
    FIN DE LA ANIMACIÓN.

    No vuelve a empezar.
  */

}


/* ================================================== */
/* CREAR TODO */
/* ================================================== */

crearCopa();

crearFondo();

iniciarAnimacion();


/* ================================================== */
/* ADAPTACIÓN AL CAMBIAR TAMAÑO */
/* ================================================== */

let temporizadorResize;


window.addEventListener(

  "resize",

  () => {

    clearTimeout(
      temporizadorResize
    );


    temporizadorResize =
      setTimeout(

        () => {

          crearCopa();


          if (
            arbol.classList.contains(
              "arbol-final"
            )
          ) {

            terminarArbol();

          }

        },

        180

      );

  }

);


/* ================================================== */
/* LLUVIA CONTINUA */
/* ================================================== */

/*
  Bastantes corazones,
  pero sin crear una cantidad absurda.

  Gracias al solapamiento de las zonas
  no quedan franjas vacías.
*/

setInterval(

  () => {

    crearCorazonLluvia();
    crearCorazonLluvia();
    crearCorazonLluvia();
    crearCorazonLluvia();

  },

  110

);