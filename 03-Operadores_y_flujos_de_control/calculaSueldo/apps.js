const empleado = { bruto: 14500, hjos: 2, pagas: 14 };

// primero calcular la retencion del empleado

let reten;

if ( empleado.bruto < 12000 ) {
    reten = 0;
} else if (empleado.bruto >= 12000  && empleado.bruto < 24000) {
    reten = 8;
} else if ( empleado.bruto >= 24000 && empleado.bruto < 34000) {
    reten = 16;
} else {
    reten = 30;
}
console.log("Se le retiene un ", reten, "%, anual");

if ( empleado.hjos > 0 && reten > 0) {
    reten = reten - 2;
}
console.log("Si tienes hijos la retención es del: ", reten, "%");

// segundo calcular cuanto se le retiene o el sueldo en que se queda

const retenTotal = reten / 100;
const sueldoReten = empleado.bruto * retenTotal;
console.log(sueldoReten);

retenAnual = empleado.bruto - sueldoReten;
console.log( "El sueldo anual neto es de: ",  retenAnual, "€");


// Tercero calcular el neto mensual


const netoMensual = retenAnual > 0 ? retenAnual / 14 : retenAnual / 12;
console.log("Su sueldo mensual con retenciones es de : ", netoMensual, "€");
