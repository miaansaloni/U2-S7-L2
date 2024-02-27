const nameInput = document.getElementById("name");
const saveBTN = document.getElementById("save");
const removeBTN = document.getElementById("remove");
const savedNameEl = document.getElementById("savedName");
const formNode = document.querySelector("form");

formNode.onsubmit = function (e) {
  e.preventDefault();
  //Funzione che recupera il valore del nome salvato in localStorage
  function getSavedName() {
    return localStorage.getItem("name");
  }
  //Salva il valore del nome inserito dall'utente in localStorage
  function saveName() {
    const name = nameInput.value;
    localStorage.setItem("name", name);
    showSavedName();
  }
  //Rimuove il valore del nome da localStorage
  function removeName() {
    localStorage.removeItem("name");
    showSavedName();
  }
  //Aggiorna l'area del nome salvato con il valore presente in localStorage
  function showSavedName() {
    const savedName = getSavedName();
    savedNameEl.innerText = savedName ? `Welcome ${savedName}!` : "";
  }

  saveBTN.addEventListener("click", saveName);
  removeBTN.addEventListener("click", removeName);

  nameInput.value = "";
  showSavedName();
};
