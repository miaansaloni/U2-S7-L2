// Calcola il tempo trascorso in secondi dall'inizio della sessione,
//recupera il valore del tempo trascorso da sessionStorage.
//Se non è presente un valore di tempo in sessionStorege, lo inizializza a 0.
function getPassedTime() {
  let passedTime = sessionStorage.getItem("passedTime");
  if (!passedTime) {
    passedTime = 0;
  }
  return parseInt(passedTime);
}

// Funzione per aggiornare il contatore
//Incrementa il valore del tempo trascorso e lo salva in sessionStorage
//Aggiorna il valore del contatore sulla pagina
function updateCounter() {
  let passedTime = getPassedTime();
  passedTime++;
  sessionStorage.setItem("passedTime", passedTime);
  document.getElementById("counter").innerText = passedTime + "s";
}
//esegue la funzione updateCounter ogni secondo
setInterval(updateCounter, 1000);

updateCounter();
