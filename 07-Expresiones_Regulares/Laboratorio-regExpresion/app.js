console.log("Expresiones regulares");
console.log("_____________");
console.log("Validar un IBAN");
console.log("_____________");

const pattern = /^[A-Z]{2}\d{22}$/;
const values = ['ES6600190020961234567890'];
console.log("Es una cuenta válida " + pattern.test(values));

console.log("_____________");
console.log("Válido también con espacios")
console.log("_____________");

const pattern1 = /^[A-Z]{2}\d{2}\s?(\d{4}\s?){5}$/
const values1 = ['ES6600190020961234567890', 'ES66 0019 0020 9612 3456 7890'];
values1.forEach(value => {
    console.log("Es una cuenta válida " + value + pattern1.test(value));
});

console.log("_____________");
console.log("Extraer el código de pais y dígito de control")
console.log("_____________");

const pattern2 = /^([A-Z]{2})(\d{2}\s?)(\d{4}\s?){5}$/
const values2 = ['ES66 0019 0020 9612 3456 7890'];
values2.forEach(value => {
    console.log("El primer dígito " + value + pattern2.exec(value));
});


console.log("_____________");
console.log("Validar matruícula de coche moderna")
console.log("_____________");

const pattern3 = /^\d{4}\s?[-]?[A-Z]{3}$/;
const values3 = ['2021 GMD', '2345-GMD', '4532BDB','0320-AAA'];
values3.forEach(value => {
    console.log("Matrícula de coche " + value + pattern3.test(value));
});

console.log("_____________");
console.log("Extraemos la parte numérica y las letras")
console.log("_____________");

const pattern4 = /^(\d{4})\s?[-]?([A-Z]{3})$/;
const values4 = ['2021 GMD', '2345-GMD', '4532BDB','0320-AAA'];
values4.forEach(value => {
    console.log("Matrícula de coche "  + pattern4.exec(value));
});

console.log("_____________");
console.log("Extraer imágenes de ficheros HTML")
console.log("_____________");

const pattern5 = /^<img src=".{1,}\.[a-z]{3,4}"\/>$/i;
const imagen = '<img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>';

console.log("La src del fichero HTML es: " + pattern5.test(imagen));

console.log("_____________");
console.log("Extraer todos los src de todos los objetos HTML")
console.log("_____________");

const pattern6 = /^<img src=".{1,}\.[a-z]{3,4}"\/>$/gmi;
const myHtml = `<html>
<body>
<img src="https://image.freepik.com/iconos-gratis/github-circular_318-10610.jpg"/>
<h1>ejemplo</h1>
<img src="https://github.githubassets.com/images/modules/logos_page/GitHubMark.png"/>
</body>
</html>`;

console.log("Éstos son los src que tengo en mi HTML " + myHtml.match(pattern6));

console.log("_____________");
console.log("Tarjeta de crédito")
console.log("_____________");

const pattern7 = /^[50-55]{2}\s?-?\d{2}\s?-?\d{4}\s?-?\d{4}\s?-?\d{4}/;
const values7 = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
values7.forEach(value => {
    console.log("Valida tu Máster card " + pattern7.test(value));
})
console.log("_____________");
console.log("Vamos a extraer cada grupo de cuatro digitos")
console.log("_____________");

const pattern8 = /^([50-55]{2}\s?-?\d{2}\s?-?)(\d{4}\s?-?)(\d{4}\s?-?)(\d{4})$/;
const values8 = ["5299 6400 0000 0000", "5299-6400-0000-0000", "5299640000000000"];
values8.forEach(value => {
    console.log("Valores correctos de 4 en 4 ", pattern8.exec(value));
})
console.log("_____________");
console.log("Comprobar si una clave es fuerte o no")
console.log("_____________");

const pattern9 = /^([a-z]{1,})([A-Z]{1,})(\d{1,})([\D\W]{1,})$/gi;
const values9 = ["evAD09_", "evad09-", "evaDiAA09&"];
values9.forEach(value => {
    console.log("Su clave es correcta ", pattern9.test(value));
})
console.log("_____________");
console.log("Comprobar si una clave es fuerte o no")
console.log("_____________");

const pattern10 = /^(([a-z]{1,})([A-Z]{1,})(\d{1,})){8}$/;
const values10 = ["evADA096", "evada09-", "evaDA09&"];
values10.forEach(value => {
    console.log("Su clave es correcta ", pattern10.test(value));
})
console.log("_____________");
console.log("Comprobar si una URL está bien formada")
console.log("_____________");

const pattern11 = /^[https://www.].{1,}\.[net]|[www.].{1,}\.[net]|.{1,}\.[net]$/;
const values11 = ["https://www.lemoncode.net", "www.lemoncode.net", "lemoncode.net"];
values11.forEach(value => {
    console.log("Su URL  es correcta ", pattern11.test(value));
})
console.log("_____________");
console.log("Validar que un color en Hexadecimal")
console.log("_____________");

const pattern12 =/^[#](\d[a-z]){6}|[#]\d[a-z]{3}$/;
const values12 = ["#c1c1c1", "#ccc", "#23454367"];
values12.forEach(value => {
    console.log("Color correcto ", pattern12.test(value));
})