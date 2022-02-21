// Variabile Nome
const firstName = prompt("Qual è il tuo nome?");
console.log(firstName);

// Variabile Cognome
const surname = prompt("Qual è il tuo cognome?");
console.log(surname);

// Variabile Colore
const myColor = prompt("Qual è il tuo colore preferito?");
console.log(myColor);

document.getElementById("my-password").innerHTML = firstName + surname + myColor + "21";

// Alert Completamento
let stringaUno;                 // Dichiarazione variabile
stringaUno = "Ottimo lavoro, ecco la tua password";   // Assegnazione variabile
alert(stringaUno);              // Utilizzo/Richiamo variabile