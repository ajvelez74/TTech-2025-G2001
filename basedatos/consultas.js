

function obtenerProductosServicios(categoria = "") {
    /*
    let lista_filtrada = [];
    for (let int i = 0; i < lista_cursos.length; i++) {
        if (lista_cursos[i].codigo_categoria === categoria) {
            lista_filtrada.push(lista_cursos[i]);
        } 
    }
    return lista_filtrada;
    */

    if (categoria === null || categoria == "") {
        return lista_cursos;
    } else {
        let lista_filtrada = lista_cursos.filter(curso => curso.codigo_categoria === categoria);
        return lista_filtrada;
    }
}


// Función de devuelve la información de una producto o servicio dado su código.
function obtenerProductoServicioPorCodigo(codigo) {
    /*
    for (let index = 0; lista_cursos < lista_cursos.length; index++) {
        if( lista_cursos[index].codigo === codigo ) {
            return lista_cursos[index];
        }
    }
    return null;
    */
    return lista_cursos.find(curso => curso.codigo === codigo);
}

//
// Funciones relacionadas con el carrito de compras
// 
function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    let costoTotal = 0;

    carrito = obtenerCarrito();

    carrito.forEach((elemento, posicion) => {
        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>${elemento.precio}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark" 
                        onclick="eliminarProductoServicio('${posicion}')" >
                        <i class="fa fa-times"></i>
                    </a>
                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });
    let etiqueta_total = document.getElementById("etiqueta_total");
    // etiqueta_total.innerText = carrito.reduce((total, elemento) => total + elemento.precio, 0).toFixed(2);
    etiqueta_total.innerText = costoTotal.toFixed(2);
}

function obtenerCarrito() {
    let carrito = [];
    const str = localStorage.getItem("carrito");
    if (str) {
        carrito = JSON.parse(str);
    }
    return carrito; 
}

function agregarProductoServicio(producto, mostrar = true) {
    let carrito = obtenerCarrito();
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    if (mostrar === true) {
        mostrarCarrito();
    }
}

function eliminarProductoServicio(posicion) {
    let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}

function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
}




