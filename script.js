let input = document.querySelector('#prix');
let error = document.querySelector('small');
let formulaire = document.querySelector('form');
let instructions = document.querySelector('#instructions');

error.style.display = "none";

let nombreAleatoire = Math.floor(Math.random() * 1001);
let coup = 0;
let nombreChoisi = 0;

function verifier(nombre) {
    let div = document.createElement('div');

    if (nombre < nombreAleatoire) {
        div.textContent = "#" + coup + " (" + nombre + ") C'est plus !";
        div.className = "plus";
    } else if (nombre > nombreAleatoire) {
        div.textContent = "#" + coup + " (" + nombre + ") C'est moins !";
        div.className = "moins";
    } else {
        div.textContent = "#" + coup + " (" + nombre + ") Félicitations, vous avez trouvé le juste prix !";
        div.className = "fini";
        input.disabled = true;
    }
    instructions.prepend(div);
}

input.addEventListener('keyup', () => {
    if (isNaN(input.value) || input.value === '') {
        error.style.display = "block";
        input.style.borderColor = 'red';
    } else {
        error.style.display = "none";
        input.style.borderColor = '';
    }
});

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    if (isNaN(input.value) || input.value === '') {
        error.style.display = "block";
        input.style.borderColor = 'red';
    } else {
        coup++;
        error.style.display = "none";
        input.style.borderColor = 'silver';
        nombreChoisi = Number(input.value);
        input.value = '';
        verifier(nombreChoisi);
    }
});
