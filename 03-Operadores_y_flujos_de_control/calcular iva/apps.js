const product = { count: 3, price: 12.55, type: "ropa"};

const precio = product.count > 0 ? product.count * product.price : 0;
console.log(precio, "€");

const ivaGeneral = 0.21;
const ivaAlimentacion = 0.1;
const ivaLibro = 0.04;

let valorIva;

switch (product.type) {
    case "alimentacion":
        valorIva = product.price * ivaAlimentacion;
        break;
    case "libro": 
        valorIva = product.price * ivaLibro;
        break;
    default:
        valorIva = product.price * ivaGeneral;
        break;
}
console.log("Del cuál el iva que le corresponde por cada producto es de: ", valorIva, "€");   

        
if(product.type === "alimentacion") {
    valorIva = product.price * ivaAlimentacion;
} else if (product.type === "libro") {
    valorIva = product.price * ivaLibro;
} else {
    valorIva = product.price * ivaGeneral;
}
console.log("Del cuál el iva que le corresponde por cada producto es de: ", valorIva, "€");   
