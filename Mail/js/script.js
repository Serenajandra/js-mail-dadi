// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// Dati
const mailList = [" david@dodo.it", "pippo@dodo.it", "paperina@dodo.it", "pluto@dodo.it", "mickey@dodo.it","donald@dodo.it", "qui@dodo.it"];

// Chiedere mail
const userMail = prompt("Inserisci la tua e-mail");
// console.log (userMail);
// Per ogni elemento confrontare con la lista
let isFound = false;
for (let i = 0; i < mailList.length; i++) {
    // console.log(i);
    const thisMail = mailList[i];
    // console.log(thisMail);
    if (thisMail === userMail) {
        isFound = true;
    }
    console.log(userMail, thisMail, isFound);
}
// Se mail presente stampa messaggio ok altrimenti stampa messaggio negativo
if (isFound) {
    alert("La tua e-mail è stata autenticata corettamente")
} else {
    alert("La tua e-mail non è stata riconosciuta dal sistema")
}

