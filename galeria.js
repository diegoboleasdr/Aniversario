/* ================================================== */
/* ARCHIVOS DE NUESTRA GALERÍA */
/* ================================================== */

const ARCHIVOS = [
  "IMG-20250830-WA0027.jpg",
  "IMG-20251004-WA0005.jpg",
  "IMG-20251004-WA0003.jpg",
  "IMG-20251004-WA0002.jpg",
  "IMG-20251101-WA0072.jpg",
  "IMG-20251101-WA0068.jpg",
  "IMG-20251101-WA0027.jpg",
  "IMG-20251108-WA0111.jpg",
  "IMG-20251108-WA0110.jpg",
  "IMG-20251108-WA0107.jpg",
  "IMG-20251108-WA0063.jpg",
  "IMG-20251108-WA0062.jpg",
  "IMG-20251108-WA0061.jpg",
  "IMG-20251108-WA0060.jpg",
  "IMG-20251108-WA0039.jpg",
  "IMG-20251110-WA0042.jpg",
  "IMG-20251122-WA0016.jpg",
  "IMG-20251122-WA0015.jpg",
  "IMG-20251122-WA0009.jpg",
  "IMG-20251130-WA0030.jpg",
  "IMG-20251130-WA0012.jpg",
  "IMG-20251207-WA0007.jpg",
  "IMG-20251219-WA0042.jpg",
  "IMG-20251219-WA0061.jpg",
  "IMG-20251221-WA0009.jpg",
  "IMG-20251221-WA0021.jpg",
  "IMG-20260108-WA0045.jpg",
  "Screenshot_2026-02-08-15-16-49-854_com.zhiliaoapp.musically.jpg",
  "VID-20260215-WA0003.mp4",
  "IMG-20260317-WA0011.jpg",
  "IMG-20260322-WA0029.jpg",
  "IMG-20260322-WA0030.jpg",
  "Screenshot_2026-03-27-22-22-26-639_com.bereal.ft-edit.jpg",
  "IMG-20260328-WA0059.jpg",
  "IMG-20260328-WA0061.jpg",
  "IMG-20260328-WA0062.jpg",
  "VID_20260510_114019_097.mp4",
  "IMG-20260510-WA0097.jpg",
  "IMG_20260530_105256.jpg",
  "IMG-20260530-WA0004.jpg",
  "IMG-20260612-WA0011.jpg",
  "433fe314-7186-4d3f-8067-7765e6741d4f.jpg",
  "IMG-20260616-WA0035.jpg",
  "IMG-20260621-WA0060.jpg",
  "IMG-20260623-WA0028.jpg",
  "IMG-20260630-WA0004.jpg",
  "IMG-20260630-WA0015.jpg",
  "IMG-20260630-WA0014.jpg",
  "IMG-20260630-WA0021.jpg",
  "IMG-20260630-WA0039.jpg",
  "IMG-20260702-WA0006.jpg",
  "IMG-20260705-WA0005.jpg",
  "IMG-20260705-WA0043.jpg",
  "IMG-20260705-WA0044.jpg",
  "IMG-20260705-WA0068.jpg",
  "Screenshot_2026-07-07-22-04-52-953_com.zhiliaoapp.musically-edit.jpg",
  "IMG-20260716-WA0004.jpg",
  "IMG-20260716-WA0003.jpg",
  "IMG-20260716-WA0007.jpg",
  "IMG-20260716-WA0016.jpg",
  "IMG-20260720-WA0034.jpg",
  "IMG-20260809-WA0005.jpg",
  "IMG-20260809-WA0011.jpg",
  "IMG-20260809-WA0022.jpg",
  "IMG_20260811_125618.jpg",
  "IMG-20260814-WA0002.jpg",
  "IMG-20260814-WA0008.jpg",
  "IMG-20260814-WA0009.jpg",
  "IMG-20260814-WA0010.jpg",
  "IMG-20260814-WA0017.jpg"
];


/* ================================================== */
/* FECHAS CORREGIDAS */
/* ================================================== */

const FECHAS_ESPECIALES = {

  "IMG-20251004-WA0005.jpg":
    "2025-10-03",

  "IMG-20251004-WA0003.jpg":
    "2025-10-10",

  "IMG-20251004-WA0002.jpg":
    "2025-10-10",

  "433fe314-7186-4d3f-8067-7765e6741d4f.jpg":
    "2026-06-15"

};


/* ================================================== */
/* FOTOS GRACIOSAS */
/* ================================================== */

const OBRAS_GRACIOSAS = new Set([

  8,
  9,
  11,
  12,
  13,
  14,

  20,
  22,
  24,
  25,
  28,

  41,
  45,
  47,
  49,
  51,
  53,

  56,
  58,
  59,

  64,
  65,
  66

]);


/* ================================================== */
/* AJUSTES INDIVIDUALES */
/* ================================================== */

const AJUSTES_FOTOS = {

  /* OBRA 33 */

  33: {

    rotacion: -90,

    escala: 0.95,

    x: 0,

    y: 0

  }

};


/* ================================================== */
/* TEXTOS PERSONALIZADOS */
/* ================================================== */

const TEXTOS_PERSONALIZADOS = {


  "IMG-20250830-WA0027.jpg": {

    titulo:
      "Antes de que existiera un «nosotros»",

    texto:
      "Todavía no éramos pareja, pero ya empezábamos a compartir momentos que, sin saberlo, iban a convertirse en el principio de nuestra historia."

  },


  "IMG-20251004-WA0005.jpg": {

    titulo:
      "El beso que lo cambió todo",

    texto:
      "3 de octubre de 2025. El día de nuestro primer beso, uno de esos momentos que parecen pequeños hasta que, con el tiempo, te das cuenta de que lo cambiaron todo."

  },


  "IMG-20251004-WA0003.jpg": {

    titulo:
      "El día que empezó nuestra historia",

    texto:
      "10 de octubre de 2025. El día en que te pedí salir conmigo y dejamos de ser dos personas que se estaban conociendo para convertirnos, por fin, en nosotros."

  },


  "IMG-20251004-WA0002.jpg": {

    titulo:
      "Nuestro 10 · 10",

    texto:
      "Otra foto de aquel 10 de octubre que desde entonces dejó de ser una fecha cualquiera. El comienzo oficial de todo lo que vino después."

  },


  "IMG-20251101-WA0072.jpg": {

    titulo:
      "Atletiiiii, primer partido juntos",

    texto:
      "Entre camisetas, gente y emoción alrededor, lo mejor del momento era compartirlo contigo (y que gano el atleti claro ajajajaja)."

  },


  "IMG-20251101-WA0068.jpg": {

    titulo:
      "Un día rojiblanco",

    texto:
      "Una de esas fotos que guardan mucho más que una tarde en la grada: guardan la emoción de vivir algo juntos."

  },


  "IMG-20251101-WA0027.jpg": {

    titulo:
      "Halloween",

    texto:
      "Disfrazados, juntos y con toda la noche por delante. Una foto que conserva ese instante en el que todo parecía especial simplemente porque estábamos juntos."

  },


  "IMG-20251108-WA0111.jpg": {

    titulo:
      "La perspectiva no ayudaba",

    texto:
      "No todas las fotos tenían que ser bonitas. Algunas estaban destinadas, desde el primer segundo, a hacernos reír cada vez que volviéramos a verlas."

  },


  "IMG-20251108-WA0110.jpg": {

    titulo:
      "Y aun así hicimos otra",

    texto:
      "La primera no era suficientemente absurda, así que tocó repetir. Y, por supuesto, quedó todavía mejor."

  },


  "IMG-20251108-WA0107.jpg": {

    titulo:
      "Un beso y una sonrisa",

    texto:
      "Un momento sencillo, un beso en la mejilla y una sonrisa que dice mucho más de lo que podría decir cualquier texto."

  },


  "IMG-20251108-WA0063.jpg": {

    titulo:
      "Elegancia: cancelada",

    texto:
      "Bastó un filtro para que cualquier intento de salir normales desapareciera por completo. Y probablemente por eso la foto nos gusta más."

  },


  "IMG-20251108-WA0062.jpg": {

    titulo:
      "Demasiado guapos para ser verdad",

    texto:
      "Gafas imposibles, una sonrisa exagerada y cero intención de tomarnos la foto en serio. Exactamente como tenía que ser."

  },


  "IMG-20251108-WA0061.jpg": {

    titulo:
      "Un look difícil de superar",

    texto:
      "Duro la verdad, tremenda melena que me pusiste "

  },


  "IMG-20251108-WA0060.jpg": {

    titulo:
      "El filtro ganó esta vez",

    texto:
      "Una de esas fotos que no necesitan contexto: basta mirarla para recordar que juntos podemos convertir cualquier tontería en un momento."

  },


  "IMG-20251108-WA0039.jpg": {

    titulo:
      "Cerquita de ti",

    texto:
      "Una foto en blanco y negro, un abrazo frente al espejo y esa sensación tan sencilla de estar exactamente donde quiero estar(temazo de quevedo por cierto)."

  },


  "IMG-20251110-WA0042.jpg": {

    titulo:
      "Primer mes juntos",

    texto:
      "Un ramo, un cuadro y tu sonrisa. Me acuerdo cuando viste las flores que te emocionaste y eso para mi ya es mi felicidad."

  },


  "IMG-20251122-WA0016.jpg": {

    titulo:
      "Sócrates",

    texto:
      "Luces, ambiente de invierno y un pequeño pingüino que terminó siendo nuestro sócrates. Me daba verguenza llevarlo en la cabeza "

  },


  "IMG-20251122-WA0015.jpg": {

    titulo:
      "Entre luces de Navidad",

    texto:
      "Un recuerdo de esas fechas en las que todo está lleno de luces y decoración, pero mi parte favorita de la foto sigues siendo tú."

  },


  "IMG-20251122-WA0009.jpg": {

    titulo:
      "El pequeño protagonista",

    texto:
      "A veces un detalle pequeño termina trayendo de vuelta un día entero. Sócrates se quedó con su propio rincón en nuestros recuerdos."

  },


  "IMG-20251130-WA0030.jpg": {

    titulo:
      "El filtro tenía otros planes",

    texto:
      "Nosotros solo queríamos una foto. El filtro, en cambio, decidió convertirla en algo imposible de mirar sin reírse."

  },


  "IMG-20251130-WA0012.jpg": {

    titulo:
      "Canis",

    texto:
      "Gafas de sol, pantalones cagaos y unas risas que no se podian aguantar. Por eso funciona tan bien."

  },


  "IMG-20251207-WA0007.jpg": {

    titulo:
      "Ser normales estaba descartado",

    texto:
      "Una foto espontánea, dos caras imposibles y la prueba de que juntos siempre encontramos alguna forma de hacer el tonto."

  },


  "IMG-20251219-WA0042.jpg": {

    titulo:
      "Mi cumpleee",

    texto:
      "Uno de los cumpleaños mas bonitos de mi vida y todo por estar a tu lado."

  },


  "IMG-20251219-WA0061.jpg": {

    titulo:
      "Demasiado glamour",

    texto:
      "Entre gafas, ropa elegante y una pose que se fue completamente de las manos, nació otra obra maestra para la sala de las tonterías."

  },


  "IMG-20251221-WA0009.jpg": {

    titulo:
      "Una foto perfectamente imperfecta",

    texto:
      "Ángulos imposibles, caras exageradas y ninguna preocupación por salir bien. Justamente por eso merece estar aquí."

  },


  "IMG-20251221-WA0021.jpg": {

    titulo:
      "Un corazón hecho por nosotros",

    texto:
      "Un gesto pequeño y sencillo que resume bastante bien lo que estaba creciendo entre los dos."

  },


  "IMG-20260108-WA0045.jpg": {

    titulo:
      "Patinaje en el metropolitano",

    texto:
      "Uno de esos dias que volveria a repetir mil veces. Patinando en el campo del atleti y riendonos de todo lo que pasaba (no me cai asi que mejor)"

  },


  "Screenshot_2026-02-08-15-16-49-854_com.zhiliaoapp.musically.jpg": {

    titulo:
      "Hasta tus caras raras las guardo",

    texto:
      "Porque quererte también significa conservar esas capturas que probablemente tú habrías borrado, pero que a mí me hacen sonreír."

  },


  "VID-20260215-WA0003.mp4": {

    titulo:
      "Un recuerdo que necesitaba movimiento",

    texto:
      "Carnaval en casa y unos tremendos disfraces que nos quedaron increibles."

  },


  "IMG-20260317-WA0011.jpg": {

    titulo:
      "Tres fotones",

    texto:
      "Besos, gestos y caras distintas reunidas en una sola imagen. Tres pequeños instantes que juntos cuentan mucho más."

  },


  "IMG-20260322-WA0029.jpg": {

    titulo:
      "El amor de mi vida haciendo lo que mas le gusta",

    texto:
      "Naturaleza, agua y un paseo a caballo. En este recuerdo no estuve contigo pero seguro que lo disfrutaste mucho y eso me hace feliz."

  },


  "IMG-20260322-WA0030.jpg": {

    titulo:
      "En la hípicaaa",

    texto:
      "La verdad que un fotón orgullosisimo de ti y de lo que haces. Me encanta verte feliz y disfrutar de lo que te gusta."

  },


  "Screenshot_2026-03-27-22-22-26-639_com.bereal.ft-edit.jpg": {

    titulo:
      "Pleniiii",

    texto:
      "Un gorro amarillo enorme, un dia de cine y una foto que me encanta."

  },


  "IMG-20260328-WA0059.jpg": {

    titulo:
      "El gorro se llevó la foto",

    texto:
      "Hay fotos en las que una sonrisa destaca. En esta, el gorro decidió competir por ser el protagonista. Es de mis fotos favoritas tuyas amor me pareces preciosa."

  },


  "IMG-20260328-WA0061.jpg": {

    titulo:
      "sillon de masaje",

    texto:
      ""

  },


  "IMG-20260328-WA0062.jpg": {

    titulo:
      "Yo",

    texto:
      "Foto sacada el mismo dia por el amor de mi vida"

  },


  "VID_20260510_114019_097.mp4": {

    titulo:
      "Un momento para pedir un deseo 67676767676767",

    texto:
      "Tarta, velas y nosotros alrededor. Hay recuerdos que merecen quedarse en movimiento porque una foto no sería suficiente para guardar todo el momento. 67 porcierto"

  },


  "IMG-20260510-WA0097.jpg": {

    titulo:
      "Fiestaaa",

    texto:
      "Una de esas noches en las que disfrutamos siempre gracias a quevedo ajajja"

  },


  "IMG_20260530_105256.jpg": {

    titulo:
      "Cochee",

    texto:
      "No todos los recuerdos nacen de un gran plan. A veces basta un viaje en coche, estar juntos y hacer una foto sin pensarlo demasiado."

  },


  "IMG-20260530-WA0004.jpg": {

    titulo:
      "Comunión",

    texto:
      "Comunion. Un dia especial que termino en tu casa de cumpleee"

  },


  "IMG-20260612-WA0011.jpg": {

    titulo:
      "Estrella por un día",

    texto:
      "Las gafas, la pose y la actitud hicieron todo el trabajo. Era imposible que esta foto acabara en una sala seria."

  },


  "433fe314-7186-4d3f-8067-7765e6741d4f.jpg": {

    titulo:
      "Puy du Fou",

    texto:
      "Un lugar nuevo, una foto juntos y otra pequeña marca en el mapa de todo lo que hemos ido viviendo."

  },


  "IMG-20260616-WA0035.jpg": {

    titulo:
      "Un poco de sol, mucho de nosotros y Toledoo",

    texto:
      "Una foto de cerca, espontánea y luminosa. De esas que no necesitan una ocasión especial para acabar siendo importantes."

  },


  "IMG-20260621-WA0060.jpg": {

    titulo:
      "La holiiii",

    texto:
      "Gafas, pintura por todas partes y dos caras que dejan claro que aquel día acabamos bastante más coloridos de lo que empezamos."

  },


  "IMG-20260623-WA0028.jpg": {

    titulo:
      "Una foto muy nuestra en el gym",

    texto:
      "Sin filtros raros ni grandes escenarios: simplemente nosotros, mirando a cámara y guardando otro día juntos."

  },


  "IMG-20260630-WA0004.jpg": {

    titulo:
      "Briguegaaa",

    texto:
      "Una cascada, naturaleza por todas partes y nosotros en medio. De esas fotos en las que el lugar es precioso, pero el recuerdo lo hace todavía mejor."

  },


  "IMG-20260630-WA0015.jpg": {

    titulo:
      "Beber agua, pero con espectáculo",

    texto:
      "Era solo una botella de agua, pero contigo hasta lo más normal puede terminar convertido en una escena digna de recuerdo."

  },


  "IMG-20260630-WA0014.jpg": {

    titulo:
      "Pesca en briguega ",

    texto:
      "Agua, truchas y un momento tranquilo juntos. Os gane a todos pescando 5 im the best "

  },


  "IMG-20260630-WA0021.jpg": {

    titulo:
      "La lengua volvió a aparecer",

    texto:
      "Teníamos un paisaje precioso alrededor, pero posar de forma normal seguía sin entrar en nuestros planes."

  },


  "IMG-20260630-WA0039.jpg": {

    titulo:
      "Briguega",

    texto:
      "Sonrisas y otra de esas pequeñas paradas que terminan formando parte del viaje."

  },


  "IMG-20260702-WA0006.jpg": {

    titulo:
      "Spa, pero a nuestra manera",

    texto:
      "Mascarillas de colores, caras imposibles y la confirmación de que hasta un momento de relax podía terminar en desastre fotográfico."

  },


  "IMG-20260705-WA0005.jpg": {

    titulo:
      "Preparandonos para hita",

    texto:
      "No hacía falta nada especial: estar juntos, un espejo delante y las ganas de guardar un momento más."

  },


  "IMG-20260705-WA0043.jpg": {

    titulo:
      "El paisaje podía esperar",

    texto:
      "Había un fondo precioso, sí. Pero claramente lo importante era sacar la lengua a cámara."

  },


  "IMG-20260705-WA0044.jpg": {

    titulo:
      "Hita",

    texto:
      "Una dia especial, un paisaje abierto y una sonrisa compartida. Un recuerdo que huele a verano."

  },


  "IMG-20260705-WA0068.jpg": {

    titulo:
      "Hita",

    texto:
      "Cada lugar nuevo fue sumando una foto, una anécdota y un pedacito más a nuestra historia."

  },


  "Screenshot_2026-07-07-22-04-52-953_com.zhiliaoapp.musically-edit.jpg": {

    titulo:
      "Nuestra versión más perruna",

    texto:
      "Orejas, hocico y una sonrisa enorme. No hacía falta mucho más para conseguir otra foto que nos hiciera gracia."

  },


  "IMG-20260716-WA0004.jpg": {

    titulo:
      "Una sonrisa entre planes",

    texto:
      "De esas fotos que luego terminan recordándote mucho más de aquel día de lo que esperabas."

  },


  "IMG-20260716-WA0003.jpg": {

    titulo:
      "El sombrero eligió a su dueño",

    texto:
      "No sé si el sombrero te quedaba bien o si simplemente lo llevabas con demasiada seguridad, pero la foto tenía que sobrevivir."

  },


  "IMG-20260716-WA0007.jpg": {

    titulo:
      "El helado tenía prioridad",

    texto:
      "Hay momentos románticos y luego están los realmente importantes: conseguir una buena cucharada antes de que alguien te la quite."

  },


  "IMG-20260716-WA0016.jpg": {

    titulo:
      "Cineee",

    texto:
      "Miniosss peliculon "

  },


  "IMG-20260720-WA0034.jpg": {

    titulo:
      "Mundiallll",

    texto:
      "Los dos juntos, una bandera entre las manos y una noche que terminó convertida en otro capítulo de nuestra historia. y.... oh Ferrán oh Ferrán"

  },


  "IMG-20260809-WA0005.jpg": {

    titulo:
      "Las castillasss",

    texto:
      "Había ruido, gente y muchas cosas alrededor, pero en la foto seguimos siendo nosotros dos en nuestro pequeño mundo."

  },


  "IMG-20260809-WA0011.jpg": {

    titulo:
      "Fiestaassssss",

    texto:
      "Luces, ambiente y los dos juntos. Una foto que no solo recuerda cómo íbamos, sino también dónde estábamos y cómo se sentía aquella noche."

  },


  "IMG-20260809-WA0022.jpg": {

    titulo:
      "La invitada que robó la foto",

    texto:
      "Íbamos a guardar otro recuerdo y apareció una pequeña protagonista de cuatro patas dispuesta a llevarse toda la atención."

  },


  "IMG_20260811_125618.jpg": {

    titulo:
      "Posar normal era demasiado fácil",

    texto:
      "Una cámara delante y, como casi siempre, la oportunidad perfecta para hacer cualquier cosa menos una foto seria."

  },


  "IMG-20260814-WA0002.jpg": {

    titulo:
      "Un beso por sorpresa",

    texto:
      "Un beso en la mejilla, una reacción totalmente espontánea y una de esas fotos que son bonitas precisamente porque nadie las preparó."

  },


  "IMG-20260814-WA0008.jpg": {

    titulo:
      "Dragónnnn",

    texto:
      "La tela y la luz transformaron por completo el lugar. Una foto distinta, casi como si durante unos segundos hubiéramos entrado en otro escenario."

  },


  "IMG-20260814-WA0009.jpg": {

    titulo:
      "Dragónnnn",

    texto:
      "El mismo rincón, otra perspectiva y una foto que conserva ese ambiente tan raro y especial del momento."

  },


  "IMG-20260814-WA0010.jpg": {

    titulo:
      "Dragónnnn",

    texto:
      "Recuerdos de aquel robo tan grande. "

  },


  "IMG-20260814-WA0017.jpg": {

    titulo:
      "Hasta aquí llega la galería… por ahora",

    texto:
      "El último recuerdo que había llegado cuando empece esta galería. No es el final de nuestra historia; solo el punto desde el que todavía nos queda muchísimo por vivir."

  }

};


/* ================================================== */
/* ELEMENTOS */
/* ================================================== */

const contenedorGaleria =
  document.getElementById(
    "galeriaCronologica"
  );


const FECHA_RELACION =
  new Date(
    2025,
    9,
    10
  );


/* ================================================== */
/* EXTRAER FECHA */
/* ================================================== */

function extraerFecha(nombre) {

  if (
    FECHAS_ESPECIALES[nombre]
  ) {

    const partes =
      FECHAS_ESPECIALES[
        nombre
      ].split("-");


    return new Date(

      Number(
        partes[0]
      ),

      Number(
        partes[1]
      ) - 1,

      Number(
        partes[2]
      )

    );

  }


  let coincidencia =
    nombre.match(
      /(?:IMG|VID)[-_](\d{4})(\d{2})(\d{2})/
    );


  if (
    coincidencia
  ) {

    return new Date(

      Number(
        coincidencia[1]
      ),

      Number(
        coincidencia[2]
      ) - 1,

      Number(
        coincidencia[3]
      )

    );

  }


  coincidencia =
    nombre.match(
      /Screenshot_(\d{4})-(\d{2})-(\d{2})/
    );


  if (
    coincidencia
  ) {

    return new Date(

      Number(
        coincidencia[1]
      ),

      Number(
        coincidencia[2]
      ) - 1,

      Number(
        coincidencia[3]
      )

    );

  }


  return null;

}


/* ================================================== */
/* FECHA BONITA */
/* ================================================== */

function fechaBonita(fecha) {

  if (
    !fecha
  ) {

    return "";

  }


  return new Intl.DateTimeFormat(

    "es-ES",

    {

      day:
        "2-digit",

      month:
        "long",

      year:
        "numeric"

    }

  ).format(
    fecha
  );

}


/* ================================================== */
/* NOMBRE DEL MES */
/* ================================================== */

function nombreMes(fecha) {

  const texto =
    new Intl.DateTimeFormat(

      "es-ES",

      {

        month:
          "long",

        year:
          "numeric"

      }

    ).format(
      fecha
    );


  return (

    texto.charAt(0).toUpperCase()

    +

    texto.slice(1)

  );

}


/* ================================================== */
/* CLAVE DEL MES */
/* ================================================== */

function claveMes(fecha) {

  return (

    fecha.getFullYear()

    +

    "-"

    +

    String(
      fecha.getMonth() + 1
    ).padStart(
      2,
      "0"
    )

  );

}


/* ================================================== */
/* PREPARAR LOS RECUERDOS */
/* ================================================== */

const recuerdos =
  ARCHIVOS.map(

    (
      archivo,
      indice
    ) => ({

      archivo,

      fecha:
        extraerFecha(
          archivo
        ),

      numero:
        indice + 1

    })

  );


/* ================================================== */
/* ORDENAR CRONOLÓGICAMENTE */
/* ================================================== */

recuerdos.sort(

  (a, b) => {

    if (
      !a.fecha
      ||
      !b.fecha
    ) {

      return 0;

    }


    return (
      a.fecha -
      b.fecha
    );

  }

);


/* ================================================== */
/* AJUSTES DE LAS FOTOS */
/* ================================================== */

function aplicarAjustesMedia(
  media,
  recuerdo
) {

  const ajustes =
    AJUSTES_FOTOS[
      recuerdo.numero
    ];


  if (
    !ajustes
  ) {

    return;

  }


  const rotacion =
    ajustes.rotacion ?? 0;


  const escala =
    ajustes.escala ?? 1;


  const x =
    ajustes.x ?? 0;


  const y =
    ajustes.y ?? 0;


  /*
    Si la foto está girada 90 grados,
    dejamos espacio para que no
    se corte dentro del marco.
  */

  if (
    Math.abs(
      rotacion
    ) % 180 === 90
  ) {

    media.style.width =
      "auto";


    media.style.height =
      "82%";


    media.style.maxWidth =
      "none";


    media.style.objectFit =
      "contain";

  }


  media.style.transform =

    `translate(${x}px, ${y}px)
     rotate(${rotacion}deg)
     scale(${escala})`;


  media.style.transformOrigin =
    "center center";


  media.style.transition =
    "transform 0.35s ease";

}


/* ================================================== */
/* CREAR FOTO O VÍDEO */
/* ================================================== */

function crearMedia(recuerdo) {

  const contenedor =
    document.createElement(
      "div"
    );


  contenedor.className =
    "media-contenedor";


  const esVideo =
    recuerdo.archivo
      .toLowerCase()
      .endsWith(
        ".mp4"
      );


  let media;


  /* ================================================== */
  /* VÍDEO */
/* ================================================== */

  if (
    esVideo
  ) {

    media =
      document.createElement(
        "video"
      );


    media.controls =
      true;


    media.preload =
      "metadata";


    media.playsInline =
      true;

  }


  /* ================================================== */
  /* FOTO */
/* ================================================== */

  else {

    media =
      document.createElement(
        "img"
      );


    media.loading =
      "lazy";


    media.alt =
      `Recuerdo ${recuerdo.numero}`;

  }


  media.src =
    "fotos/"
    +
    recuerdo.archivo;


  /* ================================================== */
  /* APLICAMOS CORRECCIONES */
/* ================================================== */

  media.addEventListener(

    "load",

    () => {

      aplicarAjustesMedia(
        media,
        recuerdo
      );

    }

  );


  media.addEventListener(

    "loadedmetadata",

    () => {

      aplicarAjustesMedia(
        media,
        recuerdo
      );

    }

  );


  /*
    También lo aplicamos directamente
    por si la imagen está en caché.
  */

  aplicarAjustesMedia(
    media,
    recuerdo
  );


  /* ================================================== */
  /* ERROR */
/* ================================================== */

  media.addEventListener(

    "error",

    () => {

      contenedor.innerHTML =
        "";


      const error =
        document.createElement(
          "div"
        );


      error.className =
        "error-media";


      error.textContent =
        "No se ha encontrado: "
        +
        recuerdo.archivo;


      contenedor.appendChild(
        error
      );

    }

  );


  contenedor.appendChild(
    media
  );


  return contenedor;

}


/* ================================================== */
/* CREAR FICHA */
/* ================================================== */

function crearFicha(
  recuerdo,
  esAntes,
  esGraciosa = false
) {

  const ficha =
    document.createElement(
      "div"
    );


  ficha.className =
    "ficha";


  /* ================================================== */
  /* PARTE SUPERIOR */
/* ================================================== */

  const superior =
    document.createElement(
      "div"
    );


  superior.className =
    "ficha-superior";


  const numero =
    document.createElement(
      "span"
    );


  numero.className =
    "numero-obra";


  numero.textContent =

    "OBRA "

    +

    String(
      recuerdo.numeroGaleria
    ).padStart(
      2,
      "0"
    );


  const fecha =
    document.createElement(
      "span"
    );


  fecha.className =
    "fecha-obra";


  fecha.textContent =
    fechaBonita(
      recuerdo.fecha
    );


  superior.appendChild(
    numero
  );


  superior.appendChild(
    fecha
  );


  const personalizado =
    TEXTOS_PERSONALIZADOS[
      recuerdo.archivo
    ];


  /* ================================================== */
  /* TÍTULO */
/* ================================================== */

  const titulo =
    document.createElement(
      "h3"
    );


  titulo.className =
    "nombre-obra";


  if (
    personalizado?.titulo
  ) {

    titulo.textContent =
      personalizado.titulo;

  }

  else if (
    esGraciosa
  ) {

    titulo.textContent =
      "Nuestro lado más tonto";

  }

  else if (
    esAntes
  ) {

    titulo.textContent =
      "Cuando todo empezaba";

  }

  else {

    titulo.textContent =
      "Un recuerdo nuestro";

  }


  /* ================================================== */
  /* DESCRIPCIÓN */
/* ================================================== */

  const descripcion =
    document.createElement(
      "p"
    );


  descripcion.className =
    "descripcion-obra";


  if (
    personalizado?.texto
  ) {

    descripcion.textContent =
      personalizado.texto;

  }

  else if (
    esGraciosa
  ) {

    descripcion.textContent =
      "Porque nuestra historia también está llena de tonterías, risas y momentos que solo nosotros entendemos.";

  }

  else if (
    esAntes
  ) {

    descripcion.textContent =
      "De cuando todavía nos estábamos conociendo.";

  }

  else {

    descripcion.textContent =
      "Otro pequeño momento de nuestra historia.";

  }


  ficha.appendChild(
    superior
  );


  ficha.appendChild(
    titulo
  );


  ficha.appendChild(
    descripcion
  );


  return ficha;

}


/* ================================================== */
/* CREAR OBRA */
/* ================================================== */

function crearObra(
  recuerdo,
  posicion,
  esAntes = false,
  esGraciosa = false
) {

  const obra =
    document.createElement(
      "article"
    );


  obra.className =
    "obra";


  /* Algunas obras más grandes */

  if (
    posicion % 7 === 0
  ) {

    obra.classList.add(
      "destacada"
    );

  }


  /* Fotos de la sala graciosa */

  if (
    esGraciosa
  ) {

    obra.classList.add(
      "obra-graciosa"
    );

  }


  /* ================================================== */
  /* MARCO */
  /* ================================================== */

  const marco =
    document.createElement(
      "div"
    );


  marco.className =
    "marco";


  /*
    Alternamos automáticamente
    entre seis marcos diferentes.
  */

  const tipoMarco =

    (
      (
        recuerdo.numero - 1
      )
      %
      6
    )

    +
    1;


  marco.classList.add(
    "marco-" + tipoMarco
  );


  /* ================================================== */
  /* PASPARTÚ */
  /* ================================================== */

  const paspartu =
    document.createElement(
      "div"
    );


  paspartu.className =
    "paspartu";


  paspartu.appendChild(

    crearMedia(
      recuerdo
    )

  );


  marco.appendChild(
    paspartu
  );


  obra.appendChild(
    marco
  );


  /*
    Las fotos graciosas se muestran
    solamente como fotos/Polaroids.

    No llevan número, fecha,
    título ni descripción.
  */

  if (
    !esGraciosa
  ) {

    obra.appendChild(

      crearFicha(
        recuerdo,
        esAntes,
        false
      )

    );

  }


  return obra;

}


/* ================================================== */
/* CREAR SALA NORMAL */
/* ================================================== */

function crearSala(
  titulo,
  subtitulo,
  recuerdosSala,
  capitulo,
  esAntes = false
) {

  const sala =
    document.createElement(
      "section"
    );


  sala.className =
    "sala";


  /* ================================================== */
  /* CABECERA */
  /* ================================================== */

  const cabecera =
    document.createElement(
      "header"
    );


  cabecera.className =
    "cabecera-sala";


  const pequeño =
    document.createElement(
      "p"
    );


  pequeño.className =
    "capitulo";


  pequeño.textContent =
    capitulo;


  const h2 =
    document.createElement(
      "h2"
    );


  h2.className =
    "titulo-sala";


  h2.textContent =
    titulo;


  const descripcion =
    document.createElement(
      "p"
    );


  descripcion.className =
    "subtitulo-sala";


  descripcion.textContent =
    subtitulo;


  cabecera.appendChild(
    pequeño
  );


  cabecera.appendChild(
    h2
  );


  cabecera.appendChild(
    descripcion
  );


  sala.appendChild(
    cabecera
  );


  /* ================================================== */
  /* PARED DE CUADROS */
  /* ================================================== */

  const pared =
    document.createElement(
      "div"
    );


  pared.className =
    "pared-obras";


  recuerdosSala.forEach(

    (
      recuerdo,
      indice
    ) => {

      pared.appendChild(

        crearObra(
          recuerdo,
          indice,
          esAntes,
          false
        )

      );

    }

  );


  sala.appendChild(
    pared
  );


  return sala;

}


/* ================================================== */
/* SALA GRACIOSA */
/* ================================================== */

function crearSalaGraciosa(
  recuerdosGraciosos
) {

  const sala =
    document.createElement(
      "section"
    );


  sala.className =
    "sala sala-graciosa";


  /* ================================================== */
  /* CABECERA */
  /* ================================================== */

  const cabecera =
    document.createElement(
      "header"
    );


  cabecera.className =
    "cabecera-sala";


  const pequeño =
    document.createElement(
      "p"
    );


  pequeño.className =
    "capitulo";


  pequeño.textContent =
    "SALA ESPECIAL";


  const titulo =
    document.createElement(
      "h2"
    );


  titulo.className =
    "titulo-sala";


  titulo.textContent =
    "Nuestro lado más tonto";


  cabecera.appendChild(
    pequeño
  );


  cabecera.appendChild(
    titulo
  );


  sala.appendChild(
    cabecera
  );


  /* ================================================== */
  /* PARED */
  /* ================================================== */

  const pared =
    document.createElement(
      "div"
    );


  pared.className =
    "pared-obras pared-graciosa";


  recuerdosGraciosos.forEach(

    (
      recuerdo,
      indice
    ) => {

      pared.appendChild(

        crearObra(
          recuerdo,
          indice,
          false,
          true
        )

      );

    }

  );


  sala.appendChild(
    pared
  );


  return sala;

}


/* ================================================== */
/* HITO 10 · 10 · 2025 */
/* ================================================== */

function crearHito() {

  const hito =
    document.createElement(
      "section"
    );


  hito.className =
    "hito";


  hito.innerHTML = `

    <div class="hito-contenido">

      <span class="hito-corazon">
        ♥
      </span>

      <p class="hito-fecha">
        10 · 10 · 2025
      </p>

      <h2>
        Y entonces empezó lo nuestro.
      </h2>

      <p>
        El día en el que dejamos de estar
        simplemente conociéndonos y comenzó
        oficialmente nuestra historia.
      </p>

    </div>

  `;


  return hito;

}


/* ================================================== */
/* SEPARAR FOTOS GRACIOSAS */
/* ================================================== */

const recuerdosGraciosos =
  recuerdos.filter(

    recuerdo =>

      OBRAS_GRACIOSAS.has(
        recuerdo.numero
      )

  );


/* ================================================== */
/* RECUERDOS PRINCIPALES */
/* ================================================== */

const recuerdosPrincipales =
  recuerdos.filter(

    recuerdo =>

      !OBRAS_GRACIOSAS.has(
        recuerdo.numero
      )

  );


/* ================================================== */
/* NUMERAR LAS OBRAS PRINCIPALES EN ORDEN */
/* ================================================== */

recuerdosPrincipales.forEach(

  (
    recuerdo,
    indice
  ) => {

    recuerdo.numeroGaleria =
      indice + 1;

  }

);


/* ================================================== */
/* ANTES DE SER PAREJA */
/* ================================================== */

const antesDeNosotros =
  recuerdosPrincipales.filter(

    recuerdo =>

      recuerdo.fecha

      &&

      recuerdo.fecha <
      FECHA_RELACION

  );


/* ================================================== */
/* DESDE EL 10 · 10 · 2025 */
/* ================================================== */

const nuestraRelacion =
  recuerdosPrincipales.filter(

    recuerdo =>

      recuerdo.fecha

      &&

      recuerdo.fecha >=
      FECHA_RELACION

  );


/* ================================================== */
/* PRÓLOGO */
/* ================================================== */

contenedorGaleria.appendChild(

  crearSala(

    "Antes de nosotros",

    "Cuando todavía estábamos empezando a hablar y conociéndonos poco a poco, sin saber todo lo que vendría después.",

    antesDeNosotros,

    "PRÓLOGO",

    true

  )

);


/* ================================================== */
/* 10 · 10 · 2025 */
/* ================================================== */

contenedorGaleria.appendChild(

  crearHito()

);


/* ================================================== */
/* AGRUPAR POR MESES */
/* ================================================== */

const meses =
  new Map();


nuestraRelacion.forEach(

  recuerdo => {

    const clave =
      claveMes(
        recuerdo.fecha
      );


    if (
      !meses.has(
        clave
      )
    ) {

      meses.set(
        clave,
        []
      );

    }


    meses.get(
      clave
    ).push(
      recuerdo
    );

  }

);


/* ================================================== */
/* CREAR CAPÍTULOS */
/* ================================================== */

let numeroCapitulo =
  1;


meses.forEach(

  recuerdosMes => {

    const fecha =
      recuerdosMes[0].fecha;


    const titulo =
      nombreMes(
        fecha
      );


    let subtitulo =
      "Un capítulo más de nuestra historia.";


    /* Octubre 2025 */

    if (

      fecha.getFullYear() === 2025

      &&

      fecha.getMonth() === 9

    ) {

      subtitulo =
        "El mes en el que empezó oficialmente lo nuestro.";

    }


    contenedorGaleria.appendChild(

      crearSala(

        titulo,

        subtitulo,

        recuerdosMes,

        "CAPÍTULO "

        +

        String(
          numeroCapitulo
        ).padStart(
          2,
          "0"
        ),

        false

      )

    );


    numeroCapitulo++;

  }

);


/* ================================================== */
/* SALA ESPECIAL AL FINAL */
/* ================================================== */

if (
  recuerdosGraciosos.length > 0
) {

  contenedorGaleria.appendChild(

    crearSalaGraciosa(
      recuerdosGraciosos
    )

  );

}