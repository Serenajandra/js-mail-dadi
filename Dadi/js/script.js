// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// generare numero computer

const computerNumber = Math.floor(Math.random()*6)+1;
console.log (computerNumber);
const computerBtn = document.getElementById("computer_btn");

computerBtn.addEventListener("click", function() {
    alert(`il computer ha scelto il numero ${computerNumber}`)
})

// generare numero user
const  userNumber = Math.floor(Math.random()*6)+1;
console.log(userNumber);

const userBtn = document.getElementById("user_btn");

userBtn.addEventListener("click", function(){
    // SE numero computer > numero userNumber
    if(computerNumber > userNumber){
    //     allora vince computer
        alert(`Purtroppo  hai estratto il numero ${userNumber} quindi il computer ha vinto`);
        // ALTRIMENTI vince user
    } else {
        alert(`Hai estratto il numero ${userNumber}, quindi hai vinto!`);
    }


})
