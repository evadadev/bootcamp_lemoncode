// function submitName() {
//     var fullName;

//     var name = document.getElementById("my-name").value;
//     fullName = name;

//     var surname1 = document.getElementById("my-surname1").value;
//     fullName = fullName + " " + surname1;

//     var surname2 = document.getElementById("my-surname2").value;
//     fullName = fullName + " " + surname2;

//     document.getElementById("full-name").innerText = fullName;
// }

// document.getElementById("my-button").addEventListener("click", submitName);

// Funciones ligeras.

// function getName() {
//     return document.getElementById("my-name").value;
// }

// function getSurname1() {
//     return document.getElementById("my-surname1").value;
// }

// function getSurname2(){
//     return document.getElementById("my-surname2").value;
// }

// function getfullName() {
//     return getName() + " " + getSurname1() + " " + getSurname2();
// }

// function submitName() {
//     document.getElementById("full-name").innerText = getfullName();
// }

// document.getElementById("my-button").addEventListener("click", submitName);

// Formato arrow.

var getName = () => document.getElementById("my-name").value;

var getSurname1 = () => document.getElementById("my-surname1").value;

var getSurname2 = () => document.getElementById("my-surname2").value;

var getFullName = () => getName() + " " + getSurname1() + " " + getSurname2();

var submitName = () => {
    document.getElementById("full-name").innerText = getFullName();
}
//document.getElementById("my-button").addEventListener("click", submitName);
document.getElementById("my-name").addEventListener("keyup", submitName);
document.getElementById("my-surname1").addEventListener("keyup", submitName);
document.getElementById("my-surname2").addEventListener("keyup", submitName);
