/* ================================================== */
/* MÚSICA DE NUESTRA WEB                              */
/* ================================================== */

(() => {

    "use strict";


    /* ================================================== */
    /* CONFIGURACIÓN                                     */
    /* ================================================== */

    const RUTA_CANCION =
        "musica/La_Promesa.mp3";


    const CLAVE_ESTADO =
        "aniversario_musica_estado";


    const CLAVE_TIEMPO =
        "aniversario_musica_tiempo";


    const CLAVE_VOLUMEN =
        "aniversario_musica_volumen";


    /* ================================================== */
    /* CREAR AUDIO                                       */
    /* ================================================== */

    const audio =
        document.createElement(
            "audio"
        );


    audio.src =
        RUTA_CANCION;


    audio.preload =
        "metadata";


    audio.loop =
        true;


    audio.volume =
        obtenerVolumenGuardado();


    document.body.appendChild(
        audio
    );


    /* ================================================== */
    /* CREAR BOTÓN                                       */
    /* ================================================== */

    const boton =
        document.createElement(
            "button"
        );


    boton.type =
        "button";


    boton.className =
        "boton-musica";


    boton.setAttribute(
        "aria-label",
        "Activar o pausar la música"
    );


    boton.innerHTML =
        `
      <span class="icono-musica">
        ♪
      </span>

      <span class="texto-musica">

        <span class="texto-musica-principal">
          La Promesa
        </span>

        <span class="texto-musica-secundario">
          La Promesa · Melendi
        </span>

      </span>
    `;


    document.body.appendChild(
        boton
    );


    /* ================================================== */
    /* FUNCIONES DE ESTADO                               */
    /* ================================================== */

    function estaGuardadoComoReproduciendo() {

        try {

            return (
                sessionStorage.getItem(
                    CLAVE_ESTADO
                )
                ===
                "reproduciendo"
            );

        }
        catch {

            return false;

        }

    }


    function guardarEstado(
        reproduciendo
    ) {

        try {

            sessionStorage.setItem(
                CLAVE_ESTADO,
                reproduciendo
                    ? "reproduciendo"
                    : "pausado"
            );

        }
        catch {

            /* Si sessionStorage no funciona,
               simplemente seguimos sin guardar. */

        }

    }


    function guardarTiempo() {

        try {

            sessionStorage.setItem(
                CLAVE_TIEMPO,
                String(
                    audio.currentTime || 0
                )
            );

        }
        catch {

            /* Sin guardado */

        }

    }


    function recuperarTiempo() {

        try {

            const tiempo =
                Number(
                    sessionStorage.getItem(
                        CLAVE_TIEMPO
                    )
                );


            if (
                Number.isFinite(
                    tiempo
                )
                &&
                tiempo > 0
            ) {

                return tiempo;

            }

        }
        catch {

            /* Sin guardado */

        }


        return 0;

    }


    function obtenerVolumenGuardado() {

        try {

            const volumenGuardado =
                sessionStorage.getItem(
                    CLAVE_VOLUMEN
                );


            /* Si todavía no hay ningún volumen guardado */
            if (
                volumenGuardado === null
            ) {

                return 0.45;

            }


            const volumen =
                Number(
                    volumenGuardado
                );


            if (
                Number.isFinite(
                    volumen
                )
                &&
                volumen >= 0
                &&
                volumen <= 1
            ) {

                return volumen;

            }

        }
        catch {

            /* Si falla el almacenamiento,
               usamos el volumen normal */

        }


        return 0.35;

    }


    /* ================================================== */
    /* ACTUALIZAR BOTÓN                                  */
    /* ================================================== */

    function actualizarBoton() {

        const icono =
            boton.querySelector(
                ".icono-musica"
            );


        const texto =
            boton.querySelector(
                ".texto-musica-principal"
            );


        if (
            !audio.paused
        ) {

            boton.classList.add(
                "reproduciendo"
            );


            icono.textContent =
                "♫";


            texto.textContent =
                "Música sonando";

        }
        else {

            boton.classList.remove(
                "reproduciendo"
            );


            icono.textContent =
                "♪";


            texto.textContent =
                "Nuestra canción";

        }

    }


    /* ================================================== */
    /* REPRODUCIR                                        */
    /* ================================================== */

    async function reproducir() {

        try {

            await audio.play();


            guardarEstado(
                true
            );


            actualizarBoton();

        }
        catch {

            guardarEstado(
                false
            );


            actualizarBoton();

        }

    }


    /* ================================================== */
    /* PAUSAR                                            */
    /* ================================================== */

    function pausar() {

        audio.pause();


        guardarTiempo();


        guardarEstado(
            false
        );


        actualizarBoton();

    }


    /* ================================================== */
    /* CLICK EN EL BOTÓN                                 */
    /* ================================================== */

    boton.addEventListener(
        "click",
        () => {

            if (
                audio.paused
            ) {

                reproducir();

            }
            else {

                pausar();

            }

        }
    );


    /* ================================================== */
    /* RECUPERAR SEGUNDO DE LA CANCIÓN                   */
    /* ================================================== */

    audio.addEventListener(
        "loadedmetadata",
        () => {

            const tiempoGuardado =
                recuperarTiempo();


            if (
                tiempoGuardado > 0
                &&
                tiempoGuardado < audio.duration
            ) {

                audio.currentTime =
                    tiempoGuardado;

            }


            actualizarBoton();

        }
    );


    /* ================================================== */
    /* GUARDAR EL TIEMPO MIENTRAS SUENA                  */
    /* ================================================== */

    let ultimoSegundoGuardado =
        0;


    audio.addEventListener(
        "timeupdate",
        () => {

            const segundoActual =
                Math.floor(
                    audio.currentTime
                );


            if (
                segundoActual
                !==
                ultimoSegundoGuardado
            ) {

                ultimoSegundoGuardado =
                    segundoActual;


                guardarTiempo();

            }

        }
    );


    /* ================================================== */
    /* AL SALIR DE LA PÁGINA                             */
    /* ================================================== */

    window.addEventListener(
        "pagehide",
        () => {

            guardarTiempo();


            guardarEstado(
                !audio.paused
            );

        }
    );


    /* ================================================== */
    /* INTENTAR CONTINUAR ENTRE PÁGINAS                  */
    /* ================================================== */

    if (
        estaGuardadoComoReproduciendo()
    ) {

        audio.addEventListener(
            "canplay",
            () => {

                reproducir();

            },
            {
                once: true
            }
        );

    }


    /* ================================================== */
    /* ESTADO INICIAL                                    */
    /* ================================================== */

    actualizarBoton();

})();