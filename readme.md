# Readme
## Mail

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

### Steps

- Creo una lista con le email che hanno accesso
- Creo una variabile con l'email dell'utente
- Creo una variabile booleana per verificare se l'utente ha accesso
- Creo un ciclo for per controllare i dati all'interno della lista
  - Verifico se l'email inserita dall'utente è presente nella lista
    - SE è presente:
      - Stampa un messaggio di accesso
    - ALTRIMENTI:
      - Stampa un messaggio di accesso negato
    
### Tools

- Variabili e costanti
- console.log() per stampare dati in console
- For loop
- Istruzioni condizionali (if/else if/else)
- tag per input a schermo (input)
- document.getElementBy...
- element.insertAdjacentHTML()

***

## Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.

### Steps

- Creo due variabili che avranno come valore un numero generato randomicamente fra 1 e 6
- Verifico quale dei due valori è maggiore.
  - SE il primo è maggiore:
    - Stampa "Hai vinto!"
  - ALTRIMENTI:
    - Stampa "Hai perso!"

### Tools

- Variabili e costanti
- console.log() per stampare dati in console
- Math.Ranfom()
- Istruzioni condizionali (if/else if/else)
- tag per input a schermo (button)
- element.insertAdjacentHTML() to create tag in HTML via JS
- document.getElementBy....innerHTML per stampare il risultato all'interno dell'HTML 