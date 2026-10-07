const app = document.getElementById("app");

const parametros = new URLSearchParams(window.location.search);
const esSorpresa = parametros.get("sorpresa");


if (esSorpresa !== "1") {

    // PANTALLA PRINCIPAL

    app.innerHTML = `
        <main class="inicio">

            <div class="decoracion">
                ✦ ✧ ✦
            </div>

            <h1>
                Hay algo especial para ti...
            </h1>

            <p>
                Presiona el corazón ❤️
            </p>

            <button id="corazon" class="corazon">
                ❤️
            </button>

        </main>
    `;


    const corazon = document.getElementById("corazon");


    corazon.addEventListener("click", function () {

        window.open("index.html?sorpresa=1", "_blank");

    });


} else {

    app.innerHTML = `
        <main class="pagina-sorpresa">

            <div class="decoracion-sorpresa">
                💕 ✨ ❤️ ✨ 💕
            </div>

            <div class="tarjeta">

                <img
                    src="imagen.png"
                    alt="Imagen especial"
                    class="imagen"
                >

                <div class="mensaje">

                    <h2>
                        TE QUIERO MUCHO, MOSQUITO ❤️
                    </h2>

                

                    <p>
                        Espero que estés teniendo un lindo día ✨
                    </p>

                </div>

            </div>

        </main>
    `;
}