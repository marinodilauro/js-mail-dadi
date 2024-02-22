// #region ||||| USER ACCESS |||||

// Creo una lista con le email che hanno accesso

const emailList = [
  "marino@yahoo.it",
  "jimmy@hotmail.com",
  "andrea@outlook.it",
  "simona@virgilio.it",
  "chiara@virgilio.it",
  "piera@alice.it",
  "lello@gmail.com"
];


// Creo una variabile con l'email dell'utente

const inputEmailElement = document.getElementById("inputEmail");

let userEmail = inputEmailElement.value;


// Aiuto email a schermo

const helpLinkElement = document.getElementById("help");


helpLinkElement.addEventListener("click", function (e) {

  e.preventDefault();

  helpLinkElement.insertAdjacentHTML("afterend",
    `<div class="rounded mc_help">
      Prova questa email: ${emailList[Math.floor(Math.random() * (emailList.length - 1))]}
    </div>`
  );

});


// Creo una variabile booleana per verificare se l'utente ha accesso

let hasAccess = false;

const formElement = document.querySelector(".mc_login_form");


// Input utente

formElement.addEventListener("submit", function (e) {

  e.preventDefault();

  userEmail = inputEmailElement.value;

  /* // Verifico se l'input è compilato e se è un indirizzo email valido
  
    if (!userEmail) {
  
      alert("❗Tutti i campi sono obbligatori❗");
  
    } else if (userEmail.search("@") === -1) {
  
      alert("❗Inserire un indirizzo email valido❗");
  
    } else { }*/

  // Creo un ciclo for per controllare i dati all'interno della lista

  for (let i = 0; i < emailList.length; i++) {
    const email = emailList[i];

    if (userEmail === email) {
      hasAccess = true;
    }

  };

  // Stampa il risultato in console

  const loginElement = document.querySelector(".mc_login_output");

  if (hasAccess === true) {

    loginElement.innerHTML = `<div class="mc_access_granted">Ciao ${userEmail.split("@")[0]}, bentornato/a!</div>`;

  } else {

    loginElement.innerHTML = `<div class="mc_access_denied">Spiacente ${userEmail.split("@")[0]}, la tua email non è presente in archivio!</div>`;

  };

  const helpBannerElement = document.querySelector(".mc_help");
  helpBannerElement.remove();

  hasAccess = false;

});

// #endregion ||||| USER ACCESS |||||


// #region ||||| DICE GAME |||||

// Creo due variabili che avranno come valore un numero generato randomicamente fra 1 e 6

const playBtnElement = document.getElementById("playBtn");

playBtnElement.addEventListener("click", function () {

  const userNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const cpuNumber = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

  console.log(userNumber, cpuNumber);

  const gameResultsElement = document.querySelector(".mc_game_results");
  const numbersElement = document.querySelector(".mc_numbers");

  numbersElement.innerHTML =
    `
  <div class="mc_number fs-1">Your number:
    <div class="mc_number" style="color: var(--md-font_darkest)">${userNumber}</div>
  </div>
  `;

  numbersElement.innerHTML +=
    `
  <div class="mc_number fs-1">CPU number:
    <div class="mc_number" style="color: var(--md-font_darkest)">${cpuNumber}</div>
  </div>
  `;

  // Verifico quale dei due valori è maggiore e stampo il risultato

  if (userNumber > cpuNumber) {

    //console.log("You win!");
    gameResultsElement.innerHTML = `<div class="mc_win">🎉You won! Congratulations!🎉</div>`;

  } else if (userNumber === cpuNumber) {

    gameResultsElement.innerHTML = `<div class="mc_draw">😯WOW! That's a draw!😯</div>`;

  } else {

    //console.log("You lose!");
    gameResultsElement.innerHTML = `<div class="mc_lose">😩You lose! Better luck next time!😩</div>`;

  };
});
// #endregion ||||| DICE GAME |||||
