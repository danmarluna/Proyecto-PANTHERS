const productos = [
    {
        id: 1,
        nombre: "Protector Moldeable",
        categoria: "bucal",
        precio: 300,
        imagen: "../assets/imagenes/bucal/protector-gen.jpeg",
        destacado: false
    },
    {
        id: 2,
        nombre: "Protector Personalizable",
        categoria: "bucal",
        precio: 1400,
        imagen: "../assets/imagenes/bucal/protector-medida.jpg",
        destacado: true
    },
    {
        id: 3,
        nombre: "Careta Cleto Reyes",
        categoria: "careta",
        precio: 870,
        imagen: "../assets/imagenes/careta/careta-cleto.jpeg",
        destacado: true
    },
    {
        id: 4,
        nombre: "Careta ROX",
        categoria: "careta",
        precio: 460,
        imagen: "../assets/imagenes/careta/careta-blanca.jpeg",
        destacado: false
    },
    {
        id: 5,
        nombre: "Costal 100LB",
        categoria: "costal",
        precio: 870,
        imagen: "../assets/imagenes/costal/costal-pesado.jpeg",
        destacado: false
    },
    {
        id: 6,
        nombre: "Bucal transparente",
        categoria: "bucal",
        precio: 280,
        imagen: "../assets/imagenes/bucal/protector-trans.jpg",
        destacado: false
    },
    {
        id: 7,
        nombre: "Espinillera Rigida",
        categoria: "espinilleras",
        precio: 1890,
        imagen: "../assets/imagenes/espinilleras/espinillera-rigida.webp",
        destacado: true
    },
    {
        id: 8,
        nombre: "Careta Yooka",
        categoria: "careta",
        precio: 360,
        imagen: "../assets/imagenes/careta/careta-negra.jpeg",
        destacado: false
    },
    {
        id: 9,
        nombre: "Costal Gota",
        categoria: "costal",
        precio: 825,
        imagen: "../assets/imagenes/costal/costal-gota.jpg",
        destacado: true
    },
    {
        id: 10,
        nombre: "Bucal de Bulls",
        categoria: "bucal",
        precio: 560,
        imagen: "../assets/imagenes/bucal/protector-bull.jpeg",
        destacado: true
    },
    {
        id: 11,
        nombre: "Espinillera Muay Thai Rox",
        categoria: "espinilleras",
        precio: 650,
        imagen: "../assets/imagenes/espinilleras/espinillera-rigida-rox.jpeg",
        destacado: false
    },
    {
        id: 12,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 13,
        nombre: "Bucal a medida",
        categoria: "bucal",
        precio: 870,
        imagen: "../assets/imagenes/bucal/protector-perso.jpg",
        destacado: true
    },
    {
        id: 14,
        nombre: "Espinillera MMA",
        categoria: "espinilleras",
        precio: 670,
        imagen: "../assets/imagenes/espinilleras/espinillera-leone.jpeg",
        destacado: false
    },
    {
        id: 15,
        nombre: "Careta generica",
        categoria: "careta",
        precio: 410,
        imagen: "../assets/imagenes/careta/careta-pelea.jpg",
        destacado: false
    },
    {
        id: 16,
        nombre: "Combo Careta",
        categoria: "careta",
        precio: 1100,
        imagen: "../assets/imagenes/careta/combo-careta.jpg",
        destacado: false
    },
    {
        id: 17,
        nombre: "Guante Boxeo Premiun",
        categoria: "guante_box",
        precio: 2100,
        imagen: "../assets/imagenes/guante-box/guante-premiun.jpg.webp",
        destacado: true
    },
    {
        id: 18,
        nombre: "Costal Upper",
        categoria: "costal",
        precio: 990,
        imagen: "../assets/imagenes/costal/costal-upper.jpeg",
        destacado: false
    },
    {
        id: 19,
        nombre: "Guante MMA",
        categoria: "guante_mma",
        precio: 680,
        imagen: "../assets/imagenes/guante-mma/guante-mma.jpeg",
        destacado: false
    },
    {
        id: 20,
        nombre: "Costal Everlast",
        categoria: "costal",
        precio: 980,
        imagen: "../assets/imagenes/costal/costal-everlast.jpeg",
        destacado: true
    },
    {
        id: 21,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 22,
        nombre: "Guante MMA Sparring",
        categoria: "guante_mma",
        precio: 970,
        imagen: "../assets/imagenes/guante-mma/guante-mma-sparring.jpeg",
        destacado: false
    },
    {
        id: 23,
        nombre: "Guante Boxeo Calavera",
        categoria: "guante_box",
        precio: 1990,
        imagen: "../assets/imagenes/guante-box/guante-calavera.jpeg",
        destacado: false
    },
    {
        id: 24,
        nombre: "Costal Banana",
        categoria: "costal",
        precio: 730,
        imagen: "../assets/imagenes/costal/costal-banana.jpeg",
        destacado: false
    },
    {
        id: 25,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 26,
        nombre: "Guante Venum Sparring",
        categoria: "guante_mma",
        precio: 2450,
        imagen: "../assets/imagenes/guante-mma/guante-mma-premiun.jpeg",
        destacado: true
    },
    {
        id: 27,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 28,
        nombre: "Espinillera MMA Rox",
        categoria: "espinilleras",
        precio: 745,
        imagen: "../assets/imagenes/espinilleras/espinillera-rox.jpeg",
        destacado: false
    },
    {
        id: 29,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 30,
        nombre: "Espinillera Venum Premium",
        categoria: "espinilleras",
        precio: 1450,
        imagen: "../assets/imagenes/espinilleras/espinillera-venum.jpeg",
        destacado: false
    },
    {
        id: 31,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 32,
        nombre: "Guante Boxeo Cleto Reyes",
        categoria: "guante_box",
        precio: 1560,
        imagen: "../assets/imagenes/guante-box/guante-cleto.jpeg",
        destacado: true
    },
    {
        id: 33,
        nombre: "Guante MMA Cleto Reyes",
        categoria: "guante_mma",
        precio: 2110,
        imagen: "../assets/imagenes/guante-mma/guante-mma-cleto.jpeg",
        destacado: true
    },
    {
        id: 34,
        nombre: "Guante Boxeo Oni",
        categoria: "guante_box",
        precio: 1670,
        imagen: "../assets/imagenes/guante-box/guante-oni.jpeg",
        destacado: false
    },
    {
        id: 35,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 36,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 37,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 38,
        nombre: "Guante MMA Sparring Leone",
        categoria: "guante_mma",
        precio: 890,
        imagen: "../assets/imagenes/guante-mma/guante-mma-leone.jpeg",
        destacado: false
    },
    {
        id: 39,
        nombre: "Cuerda para saltar",
        categoria: "accesorios",
        precio: 299,
        imagen: "img/productos/cuerda.jpg",
        destacado: false
    },
    {
        id: 40,
        nombre: "Guante Boxeo Hirola",
        categoria: "guante_box",
        precio: 680,
        imagen: "../assets/imagenes/guante-box/guante-hirola.jpeg",
        destacado: false
    },
];