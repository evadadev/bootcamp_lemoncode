const plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
const encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

const transformLetter = letter => {
    return letter.toLowerCase();
}

const encriptar = () => {
    let word = document.getElementById("input").value;
    //let size = plainAlphabet.length;
    let encriptedWord = "";
    word = transformLetter(word);
    for(let letter of word) {
        // for (let i = 0; i < size; i++) {
        //     if (letter === plainAlphabet[i]) {
        //         encriptedWord +=  encryptedAlphabet[i];
        //     }
        // }
        let result = plainAlphabet.indexOf(letter);
        encriptedWord += encryptedAlphabet[result];
        
    }
    document.getElementById("input-2").innerText = encriptedWord;
}
document.getElementById("btn").addEventListener("click", encriptar);

const descript = () => {
    let word = document.getElementById("input-2").value;
    let size = encryptedAlphabet.length;
    let descriptWord = "";
    word = transformLetter(word);
    for(let letter of word) {
        for (let i = 0; i < size; i++) {
            if (letter === encryptedAlphabet[i]) {
                descriptWord += plainAlphabet[i];
            }
        }
    }
    document.getElementById("input").innerText = descriptWord;
}
document.getElementById("btn-2").addEventListener("click", descript);

///////////

// GENERADOR ALEATORIO

const randomaPick = (n, min, max) => {
    let array = [];
    for (let i = 0; i < n; i++) {
        let valor = Math.floor(Math.random() * max) + min;
        array.push(valor);
    }
    return array;
}
console.log(randomaPick(10, 1, 100));