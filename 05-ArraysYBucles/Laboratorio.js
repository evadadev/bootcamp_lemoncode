const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
];
   // Mostrar y listar todos los productos del carrito.

function imprimir(producto) {
    console.log("-------");
    for (propiedad in producto){
        console.log(propiedad + ": " + producto[propiedad]);
    }
}

// for (i = 0; i < carrito.length; i++) {
//     imprimir(carrito[i]);
// }


   // eliminar el producto con id 54657 del carrito.
 let elimina;
 for (i = 0; i < carrito.length; i++) {
    if (carrito[i].id == 54657) {
        elimina = i;
    }
 }
carrito.splice(elimina, 1);
for (producto of carrito) {
    imprimir(producto);
}

   // calcular el total del carrito (el coste de la linea es precio*cantidad)
function total () {
    let total = 0;
    for (i = 0; i < carrito.length; i++) {
        total = total + (carrito[i].price * carrito[i].count);
    }
    return total;
}
console.log("El precio total es: " + total());

   // filtrar por los productos que sean premium

let listaPremium1 = [];
for (producto of carrito) {
    if (producto.premium === true) {
        listaPremium1.push(producto);
    }
}

console.log(listaPremium1);

   // si todos los productos son premium mostrar un sms "Pedido sin gastos de envio" si no "Este pedido tiene gastos de envio"
let esPremium = true;
for (producto of carrito) {
    if (producto.premium == false) {
        esPremium = false;
    }
}

if (esPremium === false) {
    console.log("Este pedido tiene gastos de envio " );
} else {
    console.log( "Pedido sin gastos de envio ");
}
// mostrar el carrito en un html básico





// aplicar un descuento del 5% si la compra es mayor de 100 €
let totalCarrito = total();

    if (totalCarrito > 100) {
        const discount = totalCarrito * 0.05;
        totalCarrito = totalCarrito - discount;
    }
    console.log(totalCarrito);

