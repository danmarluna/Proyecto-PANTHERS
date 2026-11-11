const API_URL = "https://www.unedl.edu.mx/test/login.php";

const formLogin = document.getElementById("formLogin");
const usuarioInput = document.getElementById("usuario");
const contrasenaInput = document.getElementById("contrasena");

const btnIngresar = document.getElementById("btnIngresar");
const textoBoton = document.getElementById("textoBoton");
const mensaje = document.getElementById("mensaje");

function mostrarMensaje(texto, tipo = "error") {
    mensaje.textContent = texto;
    mensaje.className = `rounded-lg px-4 py-3 text-sm ${
        tipo === "exito"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
    }`;
}

function ocultarMensaje() {
    mensaje.textContent = "";
    mensaje.className = "hidden rounded-lg px-4 py-3 text-sm";
}

async function iniciarSesion(usuario, contrasena) {
    btnIngresar.disabled = true;
    textoBoton.textContent = "VALIDANDO...";
    ocultarMensaje();
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usuario: usuario,
                contrasena: contrasena
            })
        });
        const resultado = await respuesta.json();
        if (!respuesta.ok || resultado.ok !== true) {
            throw new Error(
                resultado.mensaje || "Usuario o contraseña incorrectos."
            );
        }
        if (!resultado.data || !resultado.data.usuario) {
            throw new Error(
                "La respuesta no contiene los datos del usuario."
            );
        }
        mostrarPerfil(
            resultado.data.usuario,
            resultado.mensaje
        );
    } catch (error) {
        console.error("Error de inicio de sesión:", error);
        mostrarMensaje(
            error.message || "No fue posible conectar con el servidor."
        );
    } finally {
        btnIngresar.disabled = false;
        textoBoton.textContent = "INICIAR SESIÓN";
    }
}

function mostrarPerfil(usuario, mensajeServidor) {
    document.getElementById("loginPanel").classList.add("hidden");
    document.getElementById("perfilPanel").classList.remove("hidden");
    document.getElementById("fotoPerfil").src =
        usuario.foto || "https://placehold.co/150";
    document.getElementById("nombrePerfil").textContent =
        usuario.nombre || "Usuario";
    document.getElementById("rolPerfil").textContent =
        usuario.rol || "Sin rol";
    document.getElementById("idPerfil").textContent =
        usuario.id ?? "—";
    document.getElementById("usuarioPerfil").textContent =
        usuario.usuario || "—";
    document.getElementById("correoPerfil").textContent =
        usuario.correo || "—";
    document.getElementById("departamentoPerfil").textContent =
        usuario.departamento || "—";
    document.getElementById("mensajeServidor").textContent =
        mensajeServidor || "Autenticación correcta.";
    const permisos = Array.isArray(usuario.permisos)
        ? usuario.permisos
        : [];
    const contenedorPermisos =
        document.getElementById("permisosPerfil");
    contenedorPermisos.replaceChildren();
    if (permisos.length === 0) {
        const etiqueta = document.createElement("span");
        etiqueta.className = "text-sm text-gray-400";
        etiqueta.textContent = "Sin permisos asignados";
        contenedorPermisos.appendChild(etiqueta);
    } else {
        permisos.forEach(permiso => {
            const etiqueta = document.createElement("span");
            etiqueta.className =
                "rounded-full bg-gray-200 px-3 py-1.5 text-xs font-bold text-black";
            etiqueta.textContent = permiso;
            contenedorPermisos.appendChild(etiqueta);
        });
    }
}

formLogin.addEventListener("submit", function(evento) {
    evento.preventDefault();
    iniciarSesion(
        usuarioInput.value.trim(),
        contrasenaInput.value
    );
});
document.getElementById("btnMostrar").addEventListener("click", function() {
    const mostrar = contrasenaInput.type === "password";
    contrasenaInput.type = mostrar ? "text" : "password";
    this.textContent = mostrar ? "Ocultar" : "Mostrar";
});
document.getElementById("btnVolver").addEventListener("click", function() {
    document.getElementById("perfilPanel").classList.add("hidden");
    document.getElementById("loginPanel").classList.remove("hidden");
    formLogin.reset();
    ocultarMensaje();
    usuarioInput.focus();
});