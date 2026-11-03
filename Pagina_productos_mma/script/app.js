const beneficios = document.querySelectorAll(".beneficio");

let beneficioActual = 0;
let intervaloBeneficios;

function mostrarBeneficio(indice) {
    beneficios.forEach(function(beneficio) {
        beneficio.classList.remove("activo");
    });
    beneficios[indice].classList.add("activo");
}

function iniciarCarrusel(){
    if(window.innerWidth > 1024){
        clearInterval(intervaloBeneficios);
        beneficios.forEach(function(beneficio){
            beneficio.classList.remove("activo");
        });
        return;
    }
    mostrarBeneficio(beneficioActual);
    clearInterval(intervaloBeneficios);
    intervaloBeneficios = setInterval(function() {
        beneficioActual++;
        if(beneficioActual >= beneficios.length) {
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

function actualizarFlechas() {
    const posicionActual = carrusel.scrollLeft;
    const anchoVisible = carrusel.clientWidth;
    const anchoTotal = carrusel.scrollWidth;
    flechaIzquierda.classList.toggle(
        "oculta",
        posicionActual <= 2
    );
    flechaDerecha.classList.toggle(
        "oculta",
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