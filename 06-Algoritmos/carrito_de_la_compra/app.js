const container = document.getElementById("product-list-container");

const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

const subTotalSpan = document.createElement("div");
subTotalSpan.setAttribute("id", "subtotal");
const iva = document.createElement("div");
iva.setAttribute("id", "iva");
const totalSpan = document.createElement("div");
totalSpan.setAttribute("id", "total");



const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
description: "Cinta rotular",
price: 9.3,
tax: REGULAR_TYPE,
stock: 2,
units: 0,
},
{
    description: "Papelera plástico",
    price: 2.75,
    tax: REGULAR_TYPE,
    stock: 5,
    units: 0,
},
{
    description: "Escuadra",
    price: 8.4,
    tax: REGULAR_TYPE,
    stock: 3,
    units: 0,
},
{
    description: "Pizarra blanca",
    price: 5.95,
    tax: REGULAR_TYPE,
    stock: 2,
    units: 0,
},
{
    description: "Afilador",
    price: 1.2,
    tax: LOWER_TYPE,
    stock: 10,
    units: 0,
},
{
    description: "Libro ABC",
    price: 19,
    tax: EXEMPT_TYPE,
    stock: 2,
    units: 0,
},
];


const table = document.createElement("table");
table.setAttribute("id", "my-table");
container.appendChild(table);

const createProduct = product => { 
        let input = document.createElement("input");
        input.setAttribute("type", "number");
        input.setAttribute("id", "input-num");
        input.setAttribute("max", product.stock);
        input.setAttribute("min", 0);
        input.addEventListener("change", event => product.units = event.target.valueAsNumber);

        return input;
}

const showProductos = productList => {
    let num = 1;
    for (let product of productList) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        let td = document.createElement("td");
        tr.appendChild(td);
        td.innerText = num + ".";

        let td1 = document.createElement("td");
        tr.appendChild(td1);
        td1.innerText = product.description + " - " + product.price + "€/und";
        
        let td2 = document.createElement("td");
        tr.appendChild(td2);
        let getInput = createProduct(product);
        td2.appendChild(getInput);
        num++;
    }
}
showProductos(products);

const showbutton = () => {
    let btn = document.createElement("button");
    btn.setAttribute("id", "btn");
    btn.setAttribute("type", "button");
    btn.setAttribute("name", "total");
    btn.setAttribute("value", 0);
    btn.innerText = "Calcular";
    container.appendChild(btn);
}

const showSubTotal = () => {

    subTotalSpan.innerText = "Subtotal " +  getSubTotal().toFixed(2) + "€";
    container.appendChild(subTotalSpan);
}

const getSubTotal = () => {
    let subTotal = 0;
    for ( let product of products) {
        subTotal = subTotal + (product.units * product.price);
    }
    return subTotal;
}

const showIva = () => {
        iva.innerText = "Iva " + getIva().toFixed(2) + "€";
        container.appendChild(iva);
}

const getIva = () => {
    let getTotalIva = 0;
    for (let product of products) {
        getTotalIva = getTotalIva + (product.price * product.units * product.tax) / 100;
    }
    return getTotalIva;
}

const showTotal = () => {
    let getTotal = 0;
    getTotal = getSubTotal() + getIva();
    totalSpan.innerText = "TOTAL " + getTotal.toFixed(2) + "€";
    container.appendChild(totalSpan);
}


showbutton();
document.getElementById("btn").addEventListener("click", showSubTotal);
document.getElementById("btn").addEventListener("click", showIva);
document.getElementById("btn").addEventListener("click", showTotal);
