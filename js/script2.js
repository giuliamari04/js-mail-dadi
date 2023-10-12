// SECONDO ESERCIZIO DADI
function getInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const button2 = document.getElementById('inizio');
const risultato = document.querySelector('.risultato');
const gioco = document.getElementById('gioco');
const p1 = document.getElementById('giocatore');
const p2 = document.getElementById('pc');




button2.addEventListener('click', function () {
    gioco.classList.remove('d-none');
   
    const giocatore = getInteger(1, 6);
    const pc = getInteger(1, 6);
    p1.textContent = giocatore;
    p2.textContent = pc;

    console.log(giocatore);
    console.log(pc);


if (giocatore < pc) {
            risultato.innerHTML = `<h2>Il computer vince!</h2>`;
         } else if (giocatore > pc) {
             risultato.innerHTML = `<h2>Il giocatore vince!</h2>`;
         } else {
             risultato.innerHTML = `<h2>pareggio!</h2>`;
         }

         
});