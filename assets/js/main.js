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

const userEmail = "mario@sitostrano.it";


// Creo una variabile booleana per verificare se l'utente ha accesso

let hasAccess = false;


// Creo un ciclo for per controllare i dati all'interno della lista

for (let i = 0; i < emailList.length; i++) {
  const email = emailList[i];

  if (userEmail === email) {
    hasAccess = true;
  }

}

// Stampa il risultato in console

if (hasAccess === true) {
  console.log(`Ciao ${userEmail.split("@")[0]}, bentornato/a!`)
} else {
  console.log(`Spiacente ${userEmail.split("@")[0]}, la tua email non è presente in archivio!`)
}


