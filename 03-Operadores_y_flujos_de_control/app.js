const booking = {
    count: 5,
    price: 127.95
}

const total = booking.count * booking.price;
console.log("El total de su reserva es: ", total + "€");

const discount = total > 500 ? total * 0.2 : 0;

if (total > 500 && discount > 0) {
    const discounted = total - discount;
    console.log("Total con descuemto del 20%:", discounted + "€");
}
///////

const booking1 = {
    count: 3,
    price: 127.95
}

const booking2 = {
    count: 5,
    price: 112.95
}

const igualdad = booking1 === booking2;
console.log("Sí son iguales", igualdad);

const numeroDeNoches = booking1.count + booking2.count;
console.log("La suma de las noches es de: ", numeroDeNoches);

// const numeroDeNoches = booking1.count > booking2.count 
//     ? booking1.count 
//     : booking2.count
// console.log("Booking1 estareá más noches:", numeroDeNoches)

booking1.count > booking2.count 
    ? console.log("Booking1 estareá más noches:", booking1.count) 
    : console.log("Booking2 estará más noches:", booking2.count);

booking1.count++;
console.log("Ahora estará:", booking1.count + " noches");


const total1 = booking1.count * booking1.price;
const discount1 = total1 > 500 ? total1 * 0.2 : 0;

const discounted1 = total1 - discount1;

const total2 = booking2.count * booking2.price;   
const discount2 = total2 > 500 ? total2 * 0.2 : 0;
    
const discounted2 = total2 - discount2;

const diferencia = discounted1 - discounted2;
console.log("La diferecia entre las dos reservas es de: ", diferencia + "€");

const precioMayor = discounted1 > discounted2 ? console.log ("Booking1 es mayaor que Booking2", discounted1) : console.log("Booking2 es mayor que Booking1", discounted2);

if (booking1.count * booking1.price > 500) {
    console.log("Booking1 Obtiene descuento");
}

if (booking2.count * booking2.price > 500) {
    console.log("Booking2 Obtiene descuento");
}

console.log("Total con descuento Booking1", discounted1 + "€");
console.log("Total con descuento Booking2", discounted2 + "€");

console.log("Total de las dos reservas es:", discounted1 + discounted2 + "€");
