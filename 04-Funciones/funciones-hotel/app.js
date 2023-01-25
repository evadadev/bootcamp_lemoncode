let total = 0;
let reserva = {};

const setReserva = () => {
    const datos = {
        type: document.getElementById("selectHabitacion").value,
        spa: document.getElementById("spa").checked,
        ocupacion: document.getElementById("ocupaHabitacion").value,
        noches: document.getElementById("numNoches").value,
        coche: document.getElementById("parking").value,
        resultadoTotal: document.getElementById("calcular").value
    }

    return datos
}

const getTypeHab = () => {
    
    const Standar = 100;
    const JuniorSuite = 120;
    const Suite = 150;

    if (reserva.type === "standar"){
        return parseInt(reserva.noches) * Standar;
    } else if ( reserva.type === "juniorSuite"){
        return parseInt(reserva.noches) * JuniorSuite;
    } else {
        return parseInt(reserva.noches) * Suite;
    }
}

function pintaTotal() {
    reserva = setReserva()
    total = getTypeHab();
    total = getOcupa();
    total = getSpa(total);
    getParking();

    document.getElementById("result").innerText = total; 
}
document.getElementById("calcular").addEventListener("click", pintaTotal);


function getSpa(a) {
   const totalSpa = reserva.spa === true ? a + 20 : a;
   return totalSpa; 
}

function getOcupa() {
    console.log(reserva.ocupacion);
    if (reserva.ocupacion === "individual") {
        const decremento = total * 0.25;
        return total - decremento;
    } else if (reserva.ocupacion === "triple") {
        const incremento = total * 0.25;
        return total + incremento;
    } else {
        return total;
    }
}

function getParking() {
    total = (reserva.coche * 10) + total;
}