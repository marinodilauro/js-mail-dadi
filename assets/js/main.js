////////// #region USER ACCESS //////////

// Creo una lista con le email che hanno accesso

const emailList = [
  "marino@yahoo.it",
  "jimmyo@hotmail.com",
  "andrea@outlook.it",
  "simona@virgilio.it",
  "chiara@virgilio.it",
  "piera@alice.it",
  "lello@gmail.com"
];


// Creo una variabile con l'email dell'utente

const inputEmailElement = document.getElementById("inputEmail");

let userEmail = inputEmailElement.value;


// Creo una variabile booleana per verificare se l'utente ha accesso

let hasAccess = false;


const submitButtonElement = document.getElementById("submitBtn");

submitButtonElement.addEventListener("click", function (e) {

  e.preventDefault();

  userEmail = inputEmailElement.value;

  // Creo un ciclo for per controllare i dati all'interno della lista

  for (let i = 0; i < emailList.length; i++) {
    const email = emailList[i];

    if (userEmail === email) {
      hasAccess = true;
    }

  };

  // Stampa il risultato in console

  const loginOutputElement = document.querySelector(".mc_login_output");

  if (hasAccess === true) {

    //console.log(`Ciao ${userEmail.split("@")[0]}, bentornato/a!`)
    loginOutputElement.innerHTML = `<div>Ciao ${userEmail.split("@")[0]}, bentornato/a!</div>`;

  } else {

    // console.log(`Spiacente ${userEmail.split("@")[0]}, la tua email non è presente in archivio!`)
    loginOutputElement.innerHTML = `Spiacente ${userEmail.split("@")[0]}, la tua email non è presente in archivio!`;

  };

  hasAccess = false;

});



////////// #endregion USER ACCESS //////////


////////// #region DICE GAME //////////

// Creo due variabili che avranno come valore un numero generato randomicamente fra 1 e 6

const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
const cpuNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

console.log(userNumber, cpuNumber);


// Verifico quale dei due valori è maggiore e stampo il risultato

if (userNumber > cpuNumber) {
  console.log("You win!");
} else {
  console.log("You lose!");
};

////////// #endregion DICE GAME //////////
