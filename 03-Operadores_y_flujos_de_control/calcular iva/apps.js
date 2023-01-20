const product = { count: 3, price: 12.55, type: "ropa"};

const precioNeto = product.count > 0 ? product.count * product.price : 0;

function calcularIva(product) {
    const ivaGeneral = 0.21;
    const ivaAlimentacion = 0.1;
    const ivaLibro = 0.04;
    let valorIva;
    
    if (product.type === "alimentacion") {
        return product.price * ivaAlimentacion;
    } else if(product.type === "libro") {
        return product.price * ivaLibro;
    } else {
        return product.price * ivaGeneral;
    }
    return valorIva * product.count;
}


function precioTotal(product) {
    return precioNeto + calcularIva(product);
}

console.log((precioNeto).toFixed(2));

console.log(calcularIva(product).toFixed(2)); 

console.log(precioTotal(product).toFixed(2));