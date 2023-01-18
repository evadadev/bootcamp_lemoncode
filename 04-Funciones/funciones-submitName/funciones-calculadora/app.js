var getValueA = () => document.getElementById("input-A").value;
var getValueB = () => document.getElementById("input-B").value;

var suma = (num1,num2) => parseInt(num1) + parseInt(num2);
function getSuma() {
    var inputA = getValueA();
    var inputB = getValueB();
    var totalSum = suma(inputA, inputB);
    var result = inputA === "" || inputB === "" ? "Error" : totalSum;

    document.getElementById("result").innerText = result;
}
document.getElementById("my-sum").addEventListener("click", getSuma);

var resta = (num1,num2) => parseInt(num1) - parseInt(num2);
function getResta() {
    var inputA = getValueA();
    var inputB = getValueB();
    var totalResta = resta(inputA,inputB);
    var result = inputA === "" || inputB === "" ? "Error" : totalResta;
    
    document.getElementById("result").innerText = result;
}
document.getElementById("my-rest").addEventListener("click", getResta);

var multiplica = (num1,num2) => parseInt(num1) * parseInt(num2);
function getMultiplica() {
    var inputA = getValueA();
    var inputB = getValueB();
    var totalMultiplica = multiplica(inputA,inputB);
    var result = inputA === "" || inputB === "" ? "Error" : totalMultiplica;
    
    document.getElementById("result").innerText = result;
}
document.getElementById("my-mult").addEventListener("click", getMultiplica);

var divide = (num1,num2) => parseInt(num1) / parseInt(num2);
function getDivide() {
    var inputA = getValueA();
    var inputB = getValueB();
    var totalDivide = divide(inputA,inputB);
    var result = inputA === "" || inputB === "" ? "Error" : totalDivide;
    
    document.getElementById("result").innerText = result;
}

document.getElementById("my-div").addEventListener("click", getDivide);


