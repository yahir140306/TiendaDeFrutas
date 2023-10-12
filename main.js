let previousTitle = document.title

window.addEventListener('blur', () => {
    previousTitle = document.title
    document.title = "Super Ofertas ...!!!"
})

window.addEventListener('focus', () => {
    previousTitle = document.title
    document.title = "Fruteria Don Tino"
})

// retulizar componentes

let productos = [];

fetch("./productosFrutas.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = `
            <div class="card">
                <img class="producto-imagen card-img-top" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="producto-detalles card-body">
                    <h3 class="producto-titulo card-title">${producto.titulo}</h3>
                    <p class="producto-precio card-text">$${producto.precio}</p>
                    <button class="producto-agregar btn btn-primary" id="${producto.id}">Agregar</button>
            </div>
        </div>
        <br>
        `;

        contenedorProductos.append(div);
    })

    //actualizarBotonesAgregar();
}
