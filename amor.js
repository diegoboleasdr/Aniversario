/* ================================================== */
/* 12 COSAS QUE AMO DE TI */
/* ================================================== */


(() => {


  /* ================================================== */
  /* INICIAR */
  /* ================================================== */

  function iniciarTarjetasAmor() {


    const contenedor =
      document.getElementById(
        "contenedorTarjetasAmor"
      );


    const contador =
      document.getElementById(
        "contadorAmor"
      );


    const mensajeFinal =
      document.getElementById(
        "mensajeFinalAmor"
      );


    /*
      Si por algún motivo no encuentra
      los elementos, paramos aquí.
    */

    if (
      !contenedor
      ||
      !contador
      ||
      !mensajeFinal
    ) {

      return;

    }



    /* ================================================== */
    /* TARJETAS */
    /* ================================================== */

    const tarjetas =
      contenedor.querySelectorAll(
        ".tarjeta-amor"
      );


    let tarjetasDescubiertas =
      0;



    /* ================================================== */
    /* ABRIR TARJETA */
    /* ================================================== */

    function abrirTarjeta(
      tarjeta
    ) {


      /*
        Si ya está abierta,
        no hacemos nada.
      */

      if (
        tarjeta.classList.contains(
          "abierta"
        )
      ) {

        return;

      }



      /* ================================================== */
      /* AÑADIR CLASE */
      /* ================================================== */

      tarjeta.classList.add(
        "abierta"
      );



      /*
        También aplicamos el giro
        directamente para asegurarnos
        de que se vea aunque hubiera
        algún problema con el selector CSS.
      */

      const interior =
        tarjeta.querySelector(
          ".tarjeta-amor-interior"
        );


      if (
        interior
      ) {

        interior.style.transform =
          "rotateY(180deg)";

      }



      /* ================================================== */
      /* CONTADOR */
      /* ================================================== */

      tarjetasDescubiertas++;


      contador.textContent =
        tarjetasDescubiertas;



      /* ================================================== */
      /* TARJETA 12 */
      /* ================================================== */

      if (
        tarjeta.classList.contains(
          "especial"
        )
      ) {

        crearExplosionCorazones(
          tarjeta
        );

      }



      /* ================================================== */
      /* LAS 12 ABIERTAS */
      /* ================================================== */

      if (
        tarjetasDescubiertas ===
        tarjetas.length
      ) {

        setTimeout(

          () => {

            mensajeFinal.classList.add(
              "visible"
            );

          },

          500

        );

      }


    }



    /* ================================================== */
    /* CLIC */
    /* ================================================== */

    contenedor.addEventListener(

      "click",

      evento => {


        const tarjeta =
          evento.target.closest(
            ".tarjeta-amor"
          );


        if (
          !tarjeta
          ||
          !contenedor.contains(
            tarjeta
          )
        ) {

          return;

        }


        abrirTarjeta(
          tarjeta
        );


      }

    );



    /* ================================================== */
    /* ENTER / ESPACIO */
    /* ================================================== */

    contenedor.addEventListener(

      "keydown",

      evento => {


        if (
          evento.key !== "Enter"
          &&
          evento.key !== " "
        ) {

          return;

        }


        const tarjeta =
          evento.target.closest(
            ".tarjeta-amor"
          );


        if (
          !tarjeta
        ) {

          return;

        }


        evento.preventDefault();


        abrirTarjeta(
          tarjeta
        );


      }

    );



    /* ================================================== */
    /* EXPLOSIÓN DE CORAZONES */
    /* ================================================== */

    function crearExplosionCorazones(
      tarjeta
    ) {


      const posicion =
        tarjeta.getBoundingClientRect();


      const centroX =

        posicion.left

        +

        posicion.width / 2;


      const centroY =

        posicion.top

        +

        posicion.height / 2;



      /* 22 CORAZONES */

      for (
        let i = 0;
        i < 22;
        i++
      ) {


        const corazon =
          document.createElement(
            "span"
          );


        corazon.className =
          "corazon-explosion";


        corazon.textContent =
          "♥";



        /* POSICIÓN */

        corazon.style.left =
          `${centroX}px`;


        corazon.style.top =
          `${centroY}px`;



        /* DIRECCIÓN */

        const angulo =

          Math.random()

          *

          Math.PI

          *

          2;



        const distancia =

          90

          +

          Math.random()

          *

          170;



        const x =

          Math.cos(
            angulo
          )

          *

          distancia;



        const y =

          Math.sin(
            angulo
          )

          *

          distancia;



        corazon.style.setProperty(

          "--x",

          `${x}px`

        );


        corazon.style.setProperty(

          "--y",

          `${y}px`

        );



        /* ROTACIÓN */

        corazon.style.setProperty(

          "--rotacion",

          `${
            -100
            +
            Math.random()
            *
            200
          }deg`

        );



        /* TAMAÑO */

        corazon.style.fontSize =

          `${
            13
            +
            Math.random()
            *
            20
          }px`;



        /* AÑADIR */

        document.body.appendChild(
          corazon
        );



        /* BORRAR */

        setTimeout(

          () => {

            corazon.remove();

          },

          1600

        );


      }


    }


  }



  /* ================================================== */
  /* ESPERAR A QUE EL HTML ESTÉ LISTO */
  /* ================================================== */

  if (
    document.readyState ===
    "loading"
  ) {

    document.addEventListener(

      "DOMContentLoaded",

      iniciarTarjetasAmor

    );

  }


  else {

    iniciarTarjetasAmor();

  }


})();