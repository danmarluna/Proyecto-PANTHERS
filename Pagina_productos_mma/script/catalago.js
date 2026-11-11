const nombresCategorias = {
    guante_box: "Guantes de boxeo",
    guante_mma: "Guantes de MMA",
    espinilleras: "Espinilleras",
    costal: "Costales",
    bucal: "Protector Bucal",
    careta: "Caretas",
    muay_thai: "Muay Thai",
    wrestling: "Wrestling"
};

const parametros = new URLSearchParams(window.location.search);

const filtroCategoria = document.getElementById("filtroCategoria");
const ordenProductos = document.getElementById("ordenProductos");
const contenedor = document.getElementById("contenedorProductos");
const titulo = document.getElementById("tituloCategoria");
const contador = document.getElementById("contadorProductos");
const mensajeVacio = document.getElementById("mensajeVacio");

if (
    filtroCategoria &&
    ordenProductos &&
    contenedor &&
    titulo &&
    contador &&
    mensajeVacio &&
    typeof productos !== "undefined"
) {

    const categoriaURL = parametros.get("categoria");
    const categoriaInicial =
        categoriaURL === "todos" ||
        Object.hasOwn(nombresCategorias, categoriaURL)
            ? categoriaURL
            : "todos";
    filtroCategoria.value = categoriaInicial;
    function mostrarProductos() {
        const categoria = filtroCategoria.value;
        const orden = ordenProductos.value;
        let lista = [...productos];
        if (categoria !== "todos") {
            lista = lista.filter(
                producto => producto.categoria === categoria
            );
        }
        if (orden === "precio-asc") {
            lista.sort((a, b) => a.precio - b.precio);
        } else if (orden === "precio-desc") {
            lista.sort((a, b) => b.precio - a.precio);
        } else if (orden === "nombre") {
            lista.sort((a, b) =>
                a.nombre.localeCompare(b.nombre, "es")
            );
        } else {
            lista.sort((a, b) =>
                Number(b.destacado) - Number(a.destacado)
            );
        }
        titulo.textContent =
            categoria === "todos"
                ? "Todos los productos"
                : nombresCategorias[categoria];
        contador.textContent =
            `${lista.length} ${lista.length === 1 ? "producto" : "productos"}`;
        contenedor.replaceChildren();
        mensajeVacio.hidden = lista.length !== 0;
        lista.forEach(producto => {
            const tarjeta = document.createElement("article");
            tarjeta.className = "min-w-0";
            const imagenContenedor = document.createElement("div");
            imagenContenedor.className =
                "relative aspect-[4/5] overflow-hidden bg-[#e8e8e8]";
            const imagen = document.createElement("img");
            imagen.src = producto.imagen;
            imagen.alt = producto.nombre;
            imagen.loading = "lazy";
            imagen.className = "h-full w-full object-cover";
            imagen.addEventListener("error", () => {
                imagen.alt = `${producto.nombre} — imagen no disponible`;
                imagen.removeAttribute("src");
            }, { once: true });
            imagenContenedor.appendChild(imagen);
            const info = document.createElement("div");
            info.className = "pt-[15px]";
            const categoriaTexto = document.createElement("p");
            categoriaTexto.className =
                "mb-2 text-[10px] uppercase tracking-[1px] opacity-70";
            categoriaTexto.textContent =
                nombresCategorias[producto.categoria] || producto.categoria;
            const nombre = document.createElement("h2");
            nombre.className =
                "m-0 text-sm font-semibold leading-[1.5] max-[700px]:text-xs";
            nombre.textContent = producto.nombre;
            const precio = document.createElement("p");
            precio.className =
                "my-[9px] mb-[15px] text-[13px] font-medium max-[700px]:text-xs";
            precio.textContent = producto.precio.toLocaleString("es-MX", {
                style: "currency",
                currency: "MXN"
            });
            const enlace = document.createElement("a");
            enlace.className =
                "inline-flex items-center gap-2 border-b border-panther-black pb-1 text-[11px] text-panther-black no-underline transition-opacity hover:opacity-60";
            enlace.href = `detalle-producto.html?id=${producto.id}`;
            enlace.textContent = "Ver producto →";
            info.append(categoriaTexto, nombre, precio, enlace);
            tarjeta.append(imagenContenedor, info);
            contenedor.appendChild(tarjeta);
        });
    }
    filtroCategoria.addEventListener("change", () => {
        const categoria = filtroCategoria.value;
        const nuevaURL = new URL(window.location.href);
        if (categoria === "todos") {
            nuevaURL.searchParams.delete("categoria");
        } else {
            nuevaURL.searchParams.set("categoria", categoria);
        }
        window.history.replaceState({}, "", nuevaURL);
        mostrarProductos();
    });
    ordenProductos.addEventListener("change", mostrarProductos);
    mostrarProductos();
}