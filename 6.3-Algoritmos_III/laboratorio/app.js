const WORK_HOURS = [
  "08:00 - 09:00",
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "13:00 - 14:00",
  "15:00 - 16:00",
  "16:00 - 17:00"
];

const myTeam = [
  {
    name: "María",
    availability: new Array(8).fill(true)
  },
  {
    name: "Pedro",
    availability: new Array(8).fill(true)
  },
  {
    name: "Esther",
    availability: new Array(8).fill(true)
  },
  {
    name: "Marcos",
    availability: new Array(8).fill(true)
  },
];

const disponibilidadAlearotiria = (arr) => {
    for (let empleado of arr) {
        let size = empleado.availability.length;
        for (let i = 0; i < size; i++) {
            empleado.availability[i] = Math.round(Math.random()) < 0.5;
        }
    }
} 
disponibilidadAlearotiria(myTeam);


const pintaDisponibiblidad = arr => {
    for (let empleado of arr) {
        console.log("Disponibilidad " + empleado.name);
        for (let i = 0; i < WORK_HOURS.length; i++) {
            let disponible = empleado.availability[i] === true ? "Sí" : "No";
            console.log(WORK_HOURS[i] + " " + disponible);
        }
    }
}
pintaDisponibiblidad(myTeam);

const compruebaDisponibilidad = arr => {
    let size = WORK_HOURS.length;
    let hayDisponibilidad = true;
    for (let i = 0; i < size; i++) {
        for (let empleado of arr) {
            if (empleado.availability[i] === false) {
                hayDisponibilidad = false;
            }
        }
        if (hayDisponibilidad === true) {
            console.log("Hueco encontrado de: " + WORK_HOURS[i]);
            break;
        }
    }
    
    if(hayDisponibilidad === false) {
        console.log("No hay disponibilidad");
    }
}
compruebaDisponibilidad(myTeam);

console.log("--------------");
console.log("--------------");
console.log("CALCULADORA DE CAMBIO");
console.log("--------------");
console.log("--------------");


const BILLETES = [200, 100, 50, 20, 10, 5];
const MONEDAS = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
const billetesDisponbles = [1, 3, 5, 3, 0, 8];
const monedasDisponibles = [1, 0, 20, 12, 2, 10, 87, 43];

const importe = () => document.getElementById("my-input").value;
const entrega = () => document.getElementById("my-input2").value;

const operacion = () => {
    let devolución = importe() - entrega(); 
    const restoMonedas = getBillletes(devolución);
    getMonedas(restoMonedas);
    console.log("RESULTADO " + devolución + "€");
}
document.getElementById("btn").addEventListener("click", operacion);

const getBillletes = n => {
    let result = n;
    for (let i = 0; i < BILLETES.length; i++) {
        if (result > BILLETES[i]) {
            let numBilletes = Math.floor(result / BILLETES[i]);
            if (numBilletes <= billetesDisponbles[i]) {
                result -= (numBilletes * BILLETES[i]);
                console.log("Entregar : " +  numBilletes + " billetes de " + BILLETES[i] + "€");
            } else {
                result -= BILLETES[i] * billetesDisponbles[i];
                console.log("Entregar : " +  billetesDisponbles[i] + " billetes de " + BILLETES[i] + "€");
            }
            console.log("____________________________________")
        }
    }
     return result;
}

const getMonedas = n => {
    let result = n;
    for (let i = 0; i < MONEDAS.length; i++) {
        if (result > MONEDAS[i]) {
            let numMonedas = Math.floor(result / MONEDAS[i]);
            if (numMonedas <= monedasDisponibles[i]) {
                result = result - (numMonedas * MONEDAS[i]);
                console.log("Entregar: " + numMonedas + " monedas de " + MONEDAS[i] + "€")
            } else {
                result -= (MONEDAS[i] * monedasDisponibles[i]);
                console.log("Entregar: " + monedasDisponibles[i] + " monedas de " + MONEDAS[i] + "€")
            }
            console.log("_________________________________")
        }
    }
    return result;
}