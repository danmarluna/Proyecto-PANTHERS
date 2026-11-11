const beneficios = document.querySelectorAll(".beneficio");

let beneficioActual = 0;
let intervaloBeneficios;

function mostrarBeneficio(indice) {
    beneficios.forEach(function(beneficio, posicion) {
        if (posicion === indice) {
            beneficio.classList.remove("hidden");
            beneficio.classList.add("flex");
        } else {
            beneficio.classList.remove("flex");
            beneficio.classList.add("hidden");
        }
    });
}

function iniciarCarrusel() {
    if (beneficios.length === 0) return;
    clearInterval(intervaloBeneficios);
    if (window.innerWidth > 1024) {
        beneficios.forEach(function(beneficio) {
            beneficio.classList.remove("hidden");
            beneficio.classList.add("flex");
        });
        return;
    }
    mostrarBeneficio(beneficioActual);
    intervaloBeneficios = setInterval(function() {
        beneficioActual++;
        if (beneficioActual >= beneficios.length) {
            beneficioActual = 0;
        }
        mostrarBeneficio(beneficioActual);
    }, 3000);
}

iniciarCarrusel();
window.addEventListener("resize", iniciarCarrusel);

const carrusel = document.getElementById("carruselCategorias");
const flechaIzquierda = document.getElementById("flechaIzquierda");
const flechaDerecha = document.getElementById("flechaDerecha");
if (carrusel && flechaIzquierda && flechaDerecha) {
    function actualizarFlechas() {
        const posicionActual = carrusel.scrollLeft;
        const anchoVisible = carrusel.clientWidth;
        const anchoTotal = carrusel.scrollWidth;
        flechaIzquierda.classList.toggle(
            "hidden",
            posicionActual <= 2
        );
        flechaDerecha.classList.toggle(
            "hidden",
            posicionActual + anchoVisible >= anchoTotal - 2
        );
    }
    flechaDerecha.addEventListener("click", function() {
        carrusel.scrollBy({
            left: carrusel.clientWidth * 0.8,
            behavior: "smooth"
        });
    });
    flechaIzquierda.addEventListener("click", function() {
        carrusel.scrollBy({
            left: -carrusel.clientWidth * 0.8,
            behavior: "smooth"
        });
    });
    carrusel.addEventListener("scroll", actualizarFlechas);
    window.addEventListener("resize", actualizarFlechas);
    window.addEventListener("load", actualizarFlechas);
    actualizarFlechas();
}
