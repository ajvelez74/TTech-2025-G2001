
// Lista que contiene la información de los elementos que
// se mostrarán en el carrusel de la página principal.

const elementos_carrusel = [
    {
        nombre: "Introducción a la Programación",
        descripcion: "Antes de empezar a utilizar un lenguajes de programación, es imporante que aprendas a resolver problemas y a pensar como un programador. Este curso te ayudará a desarrollar esas habilidades fundamentales.",
        imagen: "images/ban101.png"
    },
    {
        nombre: "Fundamentos en Python",
        descripcion: "Python es un lenguaje de programación versátil y fácil de aprender. Este curso te enseñará los fundamentos de Python, desde la sintaxis básica hasta conceptos más avanzados.",
        imagen: "images/ban103.png"
    },
]

// Lista que contiene la información de las categorías de 
// productos y servicios que se mostraran en la página 
// principal.
const lista_categorias = [
    {
        codigo: "101",
        nombre: "Desarrollo Web",
        descripcion: "Cursos sobre tecnologías para el desarrollo web",
        imagen: "images/desarrolloweb.png"
    },
    {
        codigo: "102",
        nombre: "Lenguajes de Programación",
        descripcion: "Cursos de programación en diferentes lenguajes",
        imagen: "images/lenguajes.jpg"
    },
    {
        codigo: "103",
        nombre: "Bases de Datos",
        descripcion: "Cursos sobre bases de datos y SQL",
        imagen: "images/db.jpeg"
    },
    {
        codigo: "104",
        nombre: "Metodología de Desarrollo",
        descripcion: "Cursos sobre metodologías ágiles y de desarrollo de software",
        imagen: "images/metodologias.jpeg"
    }
];


// Lista que contiene la información de los cursos que se
// mostrarán en la página de productos.
const lista_cursos = [
    {
        codigo: "1011", nombre: "Curso de HTML", descripcion: "Aprende los conceptos básicos de HTML.",
        codigo_categoria: "101", imagen: "images/cur1011.jpg", precio: 29.99, duracion: "4 semanas", clasificacion: 4,
        contenido: ["Introducción a HTML", "Estructura de un documento HTML", "Etiquetas y atributos", "Listas y tablas", "Formularios"]
    },
    {
        codigo: "1012", nombre: "Curso de CSS", descripcion: "Aprende a personilzar tus páginas web con CSS.",
        codigo_categoria: "101", imagen: "images/cur1012.png", precio: 29.99, duracion: "4 semanas", clasificacion: 4,
        contenido: ["Introducción a CSS", "Selectores y propiedades", "Colores y fuentes", "Diseño de cajas", "Flexbox y Grid"]
    },

    {
        codigo: "1020", nombre: "Curso de Introducción a la Programación", descripcion: "Aprende a resolver problemas para luego implementarlos en un lenguaje de programación.",
        codigo_categoria: "102", imagen: "images/cur1020.png", precio: 39.99, duracion: "6 semanas", clasificacion: 5,
        contenido: ["Introducción a la programación", "Resolviendo problemas", "Funciones", "Toma de decisiones", "procesos repetitivos", "Gestión de la información"]
    },
    {
        codigo: "1021", nombre: "Curso de JavaScript", descripcion: "Domina JavaScript para el desarrollo web interactivo.",
        codigo_categoria: "102", imagen: "images/cur1021.png", precio: 39.99, duracion: "6 semanas", clasificacion: 3,
        contenido: ["Introducción a JavaScript", "Sintaxis y operadores", "Estructuras de control", "Funciones y eventos", "Manipulación del DOM"]
    },
    {
        codigo: "1022", nombre: "Curso de Python para Principiantes", descripcion: "Introducción a la programación con Python.",
        codigo_categoria: "102", imagen: "images/cur1022.png", precio: 29.99, duracion: "5 semanas", clasificacion: 3,
        contenido: ["Introducción a Python", "Sintaxis básica", "Estructuras de control", "Funciones y módulos", "Manejo de errores"]
    },

    {
        codigo: "1030", nombre: "Curso de Diseño de Bases de Datos Relacionales", descripcion: "Aprende los fundamentos del diseño de bases de datos relacionales.",
        codigo_categoria: "103", imagen: "images/cur1030.jpeg", precio: 19.99, duracion: "3 semanas", clasificacion: 3,
        contenido: ["Introducción a bases de datos", "Modelo entidad-relación", "Normalización", "Diseño de tablas", "Consultas SQL básicas"]
    },
    {
        codigo: "1031", nombre: "Curso de SQL Básico", descripcion: "Aprende los fundamentos de bases de datos y SQL estándar.",
        catcodigo_categoriaegoria: "103", imagen: "images/cur1031.jpg", precio: 34.99, duracion: "3 semanas", clasificacion: 3,
        contenido: ["Introducción a SQL", "Consultas SELECT", "Filtrado de datos", "Ordenación y agrupación", "Funciones de agregación"]
    },
    {
        codigo: "1032", nombre: "Curso de MySQL", descripcion: "Aprende a diseñar, implementar y gestionar bases de datos en MySQL.",
        codigo_categoria: "103", imagen: "images/cur1032.png", precio: 59.99, duracion: "6 semanas", clasificacion: 4,
        contenido: ["Introducción a MySQL", "Instalación y configuración", "Consultas avanzadas", "Gestión de usuarios y permisos", "Optimización de consultas"]
    },
    {
        codigo: "1033", nombre: "Curso de PostgreSQL", descripcion: "Aprende a diseñar, implementar y gestionar bases de datos en PostgreSQL.",
        codigo_categoria: "103", imagen: "images/cur1033.png", precio: 59.99, duracion: "6 semanas", clasificacion: 4,
        contenido: ["Introducción a PostgreSQL", "Instalación y configuración", "Consultas avanzadas", "Gestión de usuarios y permisos", "Optimización de consultas"]
    },
    {
        codigo: "1034", nombre: "Curso de MongoDB", descripcion: "Aprende sobre bases de datos NoSQL y gestionar bases de datos en MongoDB.",
        codigo_categoria: "103", imagen: "images/cur1034.jpeg", precio: 59.99, duracion: "3 semanas", clasificacion: 4,
        contenido: ["Introducción a MongoDB", "Instalación y configuración", "Consultas básicas", "Gestión de colecciones y documentos", "Indexación y rendimiento"]
    },

    {
        codigo: "1041", nombre: "Curso de Scrum", descripcion: "Aprende sobre la metodología ágil Scrum para el desarrollo de software.",
        codigo_categoria: "104", imagen: "images/cur1041.png", precio: 59.99, duracion: "4 semanas", clasificacion: 4,
        contenido: ["Introducción a Scrum", "Roles en Scrum", "Eventos de Scrum", "Artefactos de Scrum", "Implementación de Scrum"]
    },

    {
        codigo: "9010", nombre: "Curso de HTML y CSS", descripcion: "Aprende a crear páginas web con HTML y CSS.",
        codigo_categoria: "101", imagen: "images/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5,
        contenido: ["Curso de HTML", "Curso de CSS"]
    },
    {
        codigo: "9020", nombre: "Curso de HTML, CSS y JavaScript", descripcion: "Aprende a crear páginas web con HTML y CSS.",
        codigo_categoria: "101", imagen: "images/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5,
        contenido: ["Curso de HTML", "Curso de CSS", "Curso de JavaScript"]
    },
    {
        codigo: "9010", nombre: "Introducción a la Programación e Implementación en JavaScript", descripcion: "Aprende resolver problemas para luego implementarlos en JavaScript.",
        codigo_categoria: "102", imagen: "images/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5,
        contenido: ["Curso de Introducción a la Programación", "Curso de JavaScript"]
    },
    {
        codigo: "9020", nombre: "Introducción a la Programación e Implementación en Python", descripcion: "Aprende resolver problemas para luego implementarlos en Python.",
        codigo_categoria: "102", imagen: "images/cur101.jpg", precio: 49.99, duracion: "7 semanas", clasificacion: 5,
        contenido: ["Curso de Introducción a la Programación", "Curso de Python"]
    },
];


// Lista que representa el carrito de compras del usuario.  
let carrito = [];
