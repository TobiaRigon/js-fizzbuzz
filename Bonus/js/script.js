// definisci container
let container = document.querySelector(".container");

// crea ciclo i da 1 a 100
for (let i = 1; i <= 100; i++) {
    // crea valore
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
        // altrimenti valore = i
        output = i;
    }

    // aggiungi direttamente l'HTML al container
    container.innerHTML += `<div class="${String(output).toLowerCase()}">${output}</div>`;
}