/* function saluto() {
    console.log('ciao ciao')
}

saluto ()

function somma(numero1, numero2) {
    const risultato = numero1 + numero2;
    //console.log(risultato)
    return risultato;
}

const risultatoSomma = somma(12, 3)

console.log (risultatoSomma);

*/

/* 

const x = 5;
const y = 8;

if (x == 5 && y < 8) {
    console.log ('X e y sono corretti')
} else {
    console.log ('Nopeeeeeeeeee')
}

*/

//const utenteLoggato = false;

// if (!utenteLoggato) {
//     console.log('Utente non è loggato');
// } else {
//     console.log('Utente loggato')
// }
// 


//const frase = document.getElementById('ciao');
//console.log(frase)
//console.log(frase.innerText)
//
//const valore = document.getElementById('inp');
//
//console.log(valore)
//console.log(valore.value)
//
//frase.style.color = 'red';

const button = document.getElementById('pulsante');

button.addEventListener('click', function () {
    console.log('bravo hai cliccato bene')
});