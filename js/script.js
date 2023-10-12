// PRIMO ESERCIZIO EMAIL

const utenti = [
    'pippo@gmail.com',
    'pluto@gmail.com',
    'paperino@gmail.com',
    'topolino@gmail.com'
];

const button = document.getElementById('bottone');
const alert = document.querySelector('.alert');

button.addEventListener('click', function () {
    let email = document.getElementById('email').value;
    console.log(email);
    let trovato = false;

    for (let i = 0; i < utenti.length; i++) {
        let utenteCorrente = utenti[i];
        if (utenteCorrente === email) {
            trovato = true;
        }
    }
    let text;
    if (trovato) {
        text = 'utente presente ';
    } else {
        text = 'non sei nella lista ';
    }
    
   alert.textContent = text;
    alert.classList.remove('d-none');

})




