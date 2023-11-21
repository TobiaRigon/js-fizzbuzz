// definisci container
let container = document.querySelector(".container");

// crea ciclo i da 1 a 100
for (let i = 1; i <= 100; i++) {
    // crea output
    let output = "";

        // se divisibile sia per 3 che per 5 valore = FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
        output = "FizzBuzz";
    } else if (i % 5 === 0) {
        // se divisibile per 5 valore = Buzz
        output = "Buzz";
    } else if (i % 3 === 0) {
        // se divisibile per 3 valore = Fizz
        output = "Fizz";
    } else {
        // altrimenti output = i
        output = i;
    }

 // converti output in stringa
 output = output.toString();




 //============= appendChild
 // Commenta le righe seguenti se si utilizza innerHTML

 // crea un nuovo elemento div
 let divElement = document.createElement("div");
 // aggiungi la classe al div
 divElement.className = output.toLowerCase();
 // aggiungi il testo al div
 divElement.textContent = output;

 // utilizza appendChild per aggiungere il div al container
 container.appendChild(divElement);
 



 //=============== innerHTML
 // Commenta le righe seguenti se si utilizza appendChild

// // aggiungi direttamente l'HTML al container con innerHTML
// container.innerHTML += `<div class="${String(output).toLowerCase()}">${output}</div>`;
}