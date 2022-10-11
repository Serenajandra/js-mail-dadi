// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// generare numero computer
const computerNumber = Math.floor(Math.random()*6)+1;
console.log (computerNumber);
// generare numero user
const  userNumber = Math.floor(Math.random()*6)+1;
console.log(userNumber);

// SE numero computer > numero userNumber
if(computerNumber > userNumber){
//     allora vince computer
    alert("Il computer ha vinto!");
    // ALTRIMENTI vince user
} else{
    alert("ha vinto l'utente!");
}


