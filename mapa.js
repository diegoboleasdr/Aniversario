/* ================================================== */
/* NUESTRO MAPA DE RECUERDOS                          */
/* ================================================== */

(() => {

  "use strict";


  /* ================================================== */
  /* LUGARES                                            */
  /* ================================================== */

  const LUGARES = [

    {
      nombre: "Metropolitano",
      lat: 40.43623,
      lng: -3.59948,
      foto: "fotos/IMG-20260108-WA0045.jpg",
      frase:
        "Patinando juntos, riéndonos de todo y, sorprendentemente, sin caerme."
    },

    {
      nombre: "Puy du Fou",
      lat: 39.83515,
      lng: -4.09252,
      foto: "fotos/433fe314-7186-4d3f-8067-7765e6741d4f.jpg",
      frase:
        "Un lugar nuevo y otro recuerdo que ya es nuestro."
    },

    {
      nombre: "Hita",
      lat: 40.82480,
      lng: -3.04960,
      foto: "fotos/IMG-20260705-WA0044.jpg",
      frase:
        "Un día de verano, un paisaje precioso y nosotros dos."
    },

    {
      nombre: "Brihuega",
      lat: 40.75708,
      lng: -2.87029,
      foto: "fotos/IMG-20260630-WA0004.jpg",
      frase:
        "Fuimos a pasar el día y acabé demostrando quién era el mejor pescando."
    },

    {
      nombre: "Parque de las Castillas",
      lat: 40.68893,
      lng: -3.37172,
      foto: "fotos/IMG-20260809-WA0005.jpg",
      frase:
        "Donde vivimos los dos y donde pasan muchos de esos momentos que no necesitan una foto para ser importantes.",
      casa: true
    }

  ];


  /* ================================================== */
  /* CARGAR LEAFLET                                     */
  /* ================================================== */

  function cargarLeaflet() {

    return new Promise(
      (
        resolve,
        reject
      ) => {

        if (window.L) {

          resolve();

          return;

        }


        if (!document.querySelector("#leafletCSS")) {

          const enlace =
            document.createElement(
              "link"
            );

          enlace.id =
            "leafletCSS";

          enlace.rel =
            "stylesheet";

          enlace.href =
            "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";

          document.head.appendChild(
            enlace
          );

        }


        const scriptExistente =
          document.querySelector(
            "#leafletJS"
          );


        if (scriptExistente) {

          scriptExistente.addEventListener(
            "load",
            resolve,
            {
              once: true
            }
          );

          scriptExistente.addEventListener(
            "error",
            reject,
            {
              once: true
            }
          );

          return;

        }


        const script =
          document.createElement(
            "script"
          );

        script.id =
          "leafletJS";

        script.src =
          "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

        script.onload =
          resolve;

        script.onerror =
          reject;

        document.head.appendChild(
          script
        );

      }
    );

  }


  /* ================================================== */
  /* EVITAR PROBLEMAS CON TEXTO EN HTML                 */
  /* ================================================== */

  function escaparHTML(
    texto
  ) {

    return String(
      texto
    )
      .replaceAll(
        "&",
        "&amp;"
      )
      .replaceAll(
        "<",
        "&lt;"
      )
      .replaceAll(
        ">",
        "&gt;"
      )
      .replaceAll(
        '"',
        "&quot;"
      )
      .replaceAll(
        "'",
        "&#039;"
      );

  }


  /* ================================================== */
  /* TARJETA DEL LUGAR                                  */
  /* ================================================== */

  function crearPopup(
    lugar
  ) {

    const nombre =
      escaparHTML(
        lugar.nombre
      );

    const frase =
      escaparHTML(
        lugar.frase
      );

    const foto =
      escaparHTML(
        lugar.foto
      );


    return `
      <article class="tarjeta-lugar-mapa">

        <img
          src="${foto}"
          alt="Recuerdo en ${nombre}"
          loading="lazy"
        >

        <div class="tarjeta-lugar-contenido">

          <span class="tarjeta-lugar-etiqueta">
            NUESTRO MAPA
          </span>

          <h3>
            ${nombre}
          </h3>

          <p>
            ${frase}
          </p>

        </div>

      </article>
    `;

  }


  /* ================================================== */
  /* MARCADOR PERSONALIZADO                             */
  /* ================================================== */

  function crearIcono(
    lugar
  ) {

    const contenido =
      lugar.casa
        ? "♥"
        : "●";


    const clase =
      lugar.casa
        ? "marcador-recuerdo casa"
        : "marcador-recuerdo";


    return L.divIcon(
      {

        className:
          "",

        html:
          `
            <div class="${clase}">
              <span class="punto-mapa">
                ${contenido}
              </span>
            </div>
          `,

        iconSize:
          [
            34,
            34
          ],

        iconAnchor:
          [
            17,
            17
          ],

        popupAnchor:
          [
            0,
            -18
          ]

      }
    );

  }


  /* ================================================== */
  /* CREAR MAPA                                         */
  /* ================================================== */

  function iniciarMapa() {

    const contenedor =
      document.querySelector(
        "#mapaRecuerdos"
      );


    if (
      !contenedor
      ||
      contenedor.dataset.iniciado
    ) {

      return;

    }


    contenedor.dataset.iniciado =
      "true";


    const mapa =
      L.map(
        contenedor,
        {

          zoomControl:
            true,

          scrollWheelZoom:
            false,

          attributionControl:
            true

        }
      );


    /* ================================================== */
    /* MAPA BASE - OPENSTREETMAP                          */
    /* ================================================== */

    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {

        maxZoom:
          19,

        attribution:
          "&copy; OpenStreetMap"

      }
    ).addTo(
      mapa
    );


    /* ================================================== */
    /* MARCADORES                                         */
    /* ================================================== */

    const limites =
      [];


    LUGARES.forEach(
      (
        lugar
      ) => {

        const posicion =
          [
            lugar.lat,
            lugar.lng
          ];


        limites.push(
          posicion
        );


        const marcador =
          L.marker(
            posicion,
            {

              icon:
                crearIcono(
                  lugar
                ),

              title:
                lugar.nombre,

              keyboard:
                true

            }
          );


        marcador
          .addTo(
            mapa
          )
          .bindPopup(
            crearPopup(
              lugar
            ),
            {

              maxWidth:
                320,

              minWidth:
                230,

              closeButton:
                true,

              autoPanPadding:
                [
                  30,
                  30
                ]

            }
          );

      }
    );


    /* ================================================== */
    /* MOSTRAR TODOS LOS LUGARES AL ABRIR                 */
    /* ================================================== */

    mapa.fitBounds(
      limites,
      {

        padding:
          [
            55,
            55
          ],

        maxZoom:
          9

      }
    );


    /* ================================================== */
    /* RUTA VISUAL                                       */
    /* ================================================== */

    const ruta =
      [
        [
          40.68893,
          -3.37172
        ],
        [
          40.43623,
          -3.59948
        ],
        [
          39.83515,
          -4.09252
        ],
        [
          40.68893,
          -3.37172
        ],
        [
          40.82480,
          -3.04960
        ],
        [
          40.75708,
          -2.87029
        ]
      ];


    L.polyline(
      ruta,
      {

        color:
          "#63d9c7",

        weight:
          2,

        opacity:
          0.38,

        dashArray:
          "6 10",

        lineCap:
          "round"

      }
    ).addTo(
      mapa
    );


    /* ================================================== */
    /* CORREGIR TAMAÑO                                   */
    /* ================================================== */

    setTimeout(
      () => {

        mapa.invalidateSize();

      },
      150
    );

  }


  /* ================================================== */
  /* ERROR DE CONEXIÓN                                  */
  /* ================================================== */

  function mostrarError() {

    const contenedor =
      document.querySelector(
        "#mapaRecuerdos"
      );


    if (!contenedor) {

      return;

    }


    contenedor.innerHTML =
      `
        <div class="mapa-error">

          <div>

            <strong>
              El mapa no ha podido cargarse.
            </strong>

            Necesita conexión a Internet para mostrar
            el mapa real de nuestros recuerdos.

          </div>

        </div>
      `;

  }


  /* ================================================== */
  /* INICIO                                             */
  /* ================================================== */

  function prepararMapa() {

    const contenedor =
      document.querySelector(
        "#mapaRecuerdos"
      );


    if (!contenedor) {

      return;

    }


    cargarLeaflet()
      .then(
        iniciarMapa
      )
      .catch(
        mostrarError
      );

  }


  if (
    document.readyState
    ===
    "loading"
  ) {

    document.addEventListener(
      "DOMContentLoaded",
      prepararMapa
    );

  }
  else {

    prepararMapa();

  }

})();