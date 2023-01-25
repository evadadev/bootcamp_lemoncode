var getInput = () => document.getElementById("input").value;
var resultadoParcial = 0;
var almacena = "";

function suma() {
    resultadoParcial = resultadoParcial === 0 ? parseInt(getInput()) : resultadoParcial + parseInt(getInput());
    almacena = almacena + getInput() + "+";
    console.log(resultadoParcial);
    document.getElementById("input").value = "";
    document.getElementById("operaciones").innerText = almacena; 
}
document.getElementById("my-sum").addEventListener("click", suma);

function resta() {
    resultadoParcial = resultadoParcial === 0 ? parseInt(getInput()) : resultadoParcial - parseInt(getInput());
    almacena = almacena + getInput() + "-";
    console.log(resultadoParcial);
    document.getElementById("input").value = "";
    document.getElementById("operaciones").innerText = almacena; 
}
document.getElementById("my-rest").addEventListener("click", resta);

function multiplica() {
    resultadoParcial = resultadoParcial === 0 ? parseInt(getInput()) : resultadoParcial * parseInt(getInput());
    almacena = almacena + getInput() + "*";
    console.log(resultadoParcial);
    document.getElementById("input").value = "";
    document.getElementById("operaciones").innerText = almacena; 
}
document.getElementById("my-mult").addEventListener("click", multiplica);

function divide() {
    resultadoParcial = resultadoParcial === 0 ? parseInt(getInput()) : resultadoParcial / parseInt(getInput());
    almacena = almacena + getInput() + "/";
    console.log(resultadoParcial);
    document.getElementById("input").value = "";
    document.getElementById("operaciones").innerText = almacena; 
}
document.getElementById("my-div").addEventListener("click", divide);

function total() {
    document.getElementById("input").value = resultadoParcial;
    resultadoParcial = 0;
}
document.getElementById("resultado").addEventListener("click", total);