let inventario = {
    productos: [

    ]
};

function agregarProducto(nombre, precio, cantidad) {
    let producto = new Object()
     producto.nombre = nombre;
     producto.precio = precio;
     producto.cantidad = cantidad;
     inventario.productos.push(producto);

    };

agregarProducto("huevos", 700, 20)


function listarProductos() {
    for (let i = 0; i < inventario.productos.length; i++){
    console.log(inventario.productos[i]);
    }
}


function  totalProductos(){

    for (let i = 0; i < inventario.productos.length; i++){

    console.log(`el precio total del producto ${inventario.productos[i].nombre}, es de ${(inventario.productos[i].precio)*(inventario.productos[i].cantidad)}`);

    }
}

console.log(totalProductos());
console.log(listarProductos());



