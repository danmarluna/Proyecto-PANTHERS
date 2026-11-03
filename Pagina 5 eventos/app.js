const personajes = {
    "John Marston": {
        nombre: "John Marston",
        juego: "Red Dead Redemption",
        descripcion: "Un antiguo miembro de la banda de Dutch van der Linde que busca dejar atrás su pasado y proteger a su familia.",
        imagen: "https://preview.redd.it/john-marston-is-more-badass-than-arthur-morgan-v0-omgwgy3zm8hh1.jpg?width=640&crop=smart&auto=webp&s=535ef3eed8ef3ed9c7460397acdba914d9ba2831",

        edad: "38 años",
        ocupacion: "Ex-forajido, ranchero y pistolero",
        afiliacion: "Antigua banda de Van der Linde",
        informacion: "John Marston es el protagonista de Red Dead Redemption. Después de abandonar su vida como forajido, intenta vivir tranquilamente con su esposa Abigail y su hijo Jack. Sin embargo, agentes del gobierno lo obligan a perseguir a antiguos miembros de su antigua banda."
    },

    "Dutch van der Linde": {
        nombre: "Dutch van der Linde",
        juego: "Red Dead Redemption",
        descripcion: "Líder de la banda de Van der Linde, carismático y revolucionario, cuya visión comienza a deteriorarse con el paso del tiempo.",
        imagen: "https://img.asmedia.epimg.net/resizer/v2/4ZCNJE4RRJKJ5DFRZPN6PKM2ZY.jpg?auth=1711dcbb3ae96520f33f9e0e87125e0029e6dd9a945e4f0b862a782bcf718605&width=1200&height=1200&smart=true",

        edad: "Aproximadamente 50 años",
        ocupacion: "Forajido y líder de banda",
        afiliacion: "Banda de Van der Linde",
        informacion: "Dutch es el líder de la banda de Van der Linde y una figura fundamental en la historia de ambos juegos. Su deseo de vivir fuera de las leyes y de mantener la libertad de su grupo entra progresivamente en conflicto con la realidad del mundo que los rodea."
    },

    "Edgar Ross": {
        nombre: "Edgar Ross",
        juego: "Red Dead Redemption",
        descripcion: "Agente de la Agencia Nacional de Detectives que persigue a antiguos miembros de la banda de Van der Linde.",
        imagen: "https://preview.redd.it/edgar-ross-is-the-4th-best-written-character-of-the-series-v0-eh009cs19p7f1.jpeg?width=640&crop=smart&auto=webp&s=dddc257153a745edbdec27a32ef917bd81ecf609",

        edad: "Adulto",
        ocupacion: "Agente gubernamental",
        afiliacion: "Agencia Nacional de Detectives",
        informacion: "Edgar Ross es uno de los principales representantes del gobierno en Red Dead Redemption. Utiliza a John Marston para localizar a antiguos miembros de la banda de Van der Linde."
    },

    "Bill Williamson": {
        nombre: "Bill Williamson",
        juego: "Red Dead Redemption",
        descripcion: "Antiguo miembro de la banda de Dutch, conocido por su carácter agresivo y su relación con John Marston.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjYDADnJhe5HsFEV0c9LGlzMiFqvB7y6WV5vKge3zqcmZgeVFGI2ZiaGk&s=10",

        edad: "Aproximadamente 35 años",
        ocupacion: "Forajido",
        afiliacion: "Banda de Van der Linde",
        informacion: "Bill Williamson fue miembro de la banda de Van der Linde junto a John Marston. Después de la disolución de la banda, Bill continúa viviendo como forajido y termina enfrentándose nuevamente con John."
    },

    "Javier Escuella": {
        nombre: "Javier Escuella",
        juego: "Red Dead Redemption",
        descripcion: "Pistolero mexicano y antiguo miembro de la banda de Van der Linde.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT23-HLzwLwUO5pzaU6YKcln5c8NDTclWQuTEKYkHGCOtBJh8rdwjNY_rU&s=10",

        edad: "Adulto",
        ocupacion: "Forajido y pistolero",
        afiliacion: "Banda de Van der Linde",
        informacion: "Javier Escuella es un pistolero mexicano que formó parte de la banda de Dutch. Mantiene una relación cercana con varios miembros de la banda y posteriormente se convierte en uno de los objetivos de John."
    },

    "Jack Marston": {
        nombre: "Jack Marston",
        juego: "Red Dead Redemption",
        descripcion: "Hijo de John y Abigail Marston, cuya historia continúa después de los acontecimientos de la vida de sus padres.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLoK-ykuitZFpuALISD5Jde6whqNZ4yRW66nGGx4BYEA&s=10",

        edad: "Varía según el momento de la historia",
        ocupacion: "Ranchero y posteriormente pistolero",
        afiliacion: "Familia Marston",
        informacion: "Jack Marston es el hijo de John y Abigail. Su historia representa una nueva generación que crece después del final de la era de los forajidos."
    },

    "Arthur Morgan": {
        nombre: "Arthur Morgan",
        juego: "Red Dead Redemption 2",
        descripcion: "Miembro veterano de la banda de Van der Linde y uno de sus principales pistoleros.",
        imagen: "https://wow.fan/cdn/shop/files/arthur-morgan-gamer-adult-blacktee-1.jpg?v=1750350819&width=1445",

        edad: "36 años",
        ocupacion: "Forajido y pistolero",
        afiliacion: "Banda de Van der Linde",
        informacion: "Arthur Morgan es el protagonista de Red Dead Redemption 2. Es uno de los miembros más importantes de la banda de Dutch y ha estado a su lado durante muchos años. A lo largo de la historia comienza a cuestionar las decisiones de Dutch y su propia vida como forajido."
    },

    "Hosea Matthews": {
        nombre: "Hosea Matthews",
        juego: "Red Dead Redemption 2",
        descripcion: "Uno de los fundadores de la banda de Van der Linde y una de las personas más cercanas a Dutch.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NHKi9gacF6DmYEX0hAZUuTum61i7kuDGOm_TWXW2eA&s=10",

        edad: "Aproximadamente 55 años",
        ocupacion: "Forajido, estafador y estratega",
        afiliacion: "Banda de Van der Linde",
        informacion: "Hosea es uno de los miembros fundadores de la banda y funciona como una figura de consejo para Dutch. A diferencia de otros miembros, suele intentar evitar la violencia innecesaria y buscar soluciones mediante engaños y estrategias."
    },

    "Micah Bell": {
        nombre: "Micah Bell",
        juego: "Red Dead Redemption 2",
        descripcion: "Un pistolero violento que se une a la banda de Van der Linde y mantiene una relación conflictiva con Arthur.",
        imagen: "https://image.api.playstation.com/cdn/EP1004/CUSA08519_00/n5Io5Af7Lrj1zpeIyEBfNUPmuz9wQF3S.png",

        edad: "Adulto",
        ocupacion: "Forajido y pistolero",
        afiliacion: "Banda de Van der Linde",
        informacion: "Micah Bell es uno de los miembros más conflictivos de la banda. Su personalidad violenta y sus decisiones provocan constantes enfrentamientos con Arthur Morgan."
    },

    "Sadie Adler": {
        nombre: "Sadie Adler",
        juego: "Red Dead Redemption 2",
        descripcion: "Una mujer que, después de sufrir una tragedia, se convierte en una hábil pistolera y cazarrecompensas.",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSE7DbXHyJZRBbepD_9hu9xG0ifGLxWZdEqJ_ISPGwkA&s=10",

        edad: "Adulta",
        ocupacion: "Cazarrecompensas y pistolera",
        afiliacion: "Banda de Van der Linde",

        informacion: "Sadie Adler comienza su historia enfrentándose a una tragedia personal. Después de unirse al grupo de Dutch, desarrolla rápidamente sus habilidades como combatiente y posteriormente se convierte en cazarrecompensas."
    },

    "Charles Smith": {
        nombre: "Charles Smith",
        juego: "Red Dead Redemption 2",
        descripcion: "Un miembro de la banda conocido por sus habilidades de combate, caza y rastreo.",
        imagen: "https://pbs.twimg.com/profile_images/1306678681427902471/u8xC7ZkW_400x400.jpg",

        edad: "Adulto",
        ocupacion: "Cazador y luchador",
        afiliacion: "Banda de Van der Linde",

        informacion: "Charles Smith es uno de los miembros más habilidosos de la banda. Destaca por sus conocimientos de supervivencia, caza y combate, además de mostrar una fuerte lealtad hacia Arthur."
    }
};

const selector = document.querySelector("#personajes");
const boton = document.querySelector(".select__personaje");
const resultado = document.querySelector(".resultado__personajes");

boton.addEventListener("click", () => {
    const personajeSeleccionado = selector.value;
    const personaje = personajes[personajeSeleccionado];


    resultado.innerHTML = `
        <article class="carta__personaje">
            <img 
                src="${personaje.imagen}" 
                alt="Imagen de ${personaje.nombre}"
            >
            <div class="contenido__personaje">
                <h2>${personaje.nombre}</h2>
                <h3>${personaje.juego}</h3>
                <p>
                    ${personaje.descripcion}
                </p>
                <span class="doble__click">
                    Haz doble clic para ver información adicional
                </span>
                <div class="informacion__adicional">
                    <p>
                        <strong>Edad:</strong>
                        ${personaje.edad}
                    </p>
                    <p>
                        <strong>Ocupación:</strong>
                        ${personaje.ocupacion}
                    </p>
                    <p>
                        <strong>Afiliación:</strong>
                        ${personaje.afiliacion}
                    </p>
                    <p>
                        ${personaje.informacion}
                    </p>
                </div>
            </div>
        </article
    `;

    const carta = resultado.querySelector(".carta__personaje");

    carta.addEventListener("dblclick", () => {
        carta.classList.toggle("mostrar__informacion");
    });
});