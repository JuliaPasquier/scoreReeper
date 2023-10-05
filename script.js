//Mes Variables

let scoreJ1 = 0;
let scoreJ2 = 0
let scoreTotal = 0

//Mes constantes
const scoreMax = 5
const J1 = document.getElementById("scoreJ1");
const J2 = document.getElementById("scoreJ2");
const boutonJ1 = document.getElementById("boutonJ1");
const boutonJ2 = document.getElementById("boutonJ2");


//Mon Event Listener
document.addEventListener("click", (e) => {
    if (e.target.matches("#boutonJ1")) {
        scoreJ1++
        updateScore();
        checkWinner();
    }
    if (e.target.matches("#boutonJ2")) {
        scoreJ2++
        updateScore();
        checkWinner();
    }
    if (e.target.matches("#reset")) {
        resetScore();
    }
})


//Mes functions
function updateScore() {
    J1.textContent = scoreJ1
    J2.textContent = scoreJ2
}

function checkWinner() {
    scoreTotal++;
    if (scoreTotal >= scoreMax) {
        attribuerCouleur();
        freezeScore();
    }
}

function attribuerCouleur() {
    if (scoreJ1 > scoreJ2) {
        J1.style.color = "green"
        J2.style.color = "red"
    } else if (scoreJ1 < scoreJ2) {
        J1.style.color = "red"
        J2.style.color = "green"
    } else {
        J1.style.color = "black"
        J2.style.color = "black"
    }
}

function freezeScore() {
    boutonJ1.disabled = true;
    boutonJ2.disabled = true;
}

function resetScore() {
    boutonJ1.disabled = false;
    boutonJ2.disabled = false;
    scoreJ1 = 0
    scoreJ2 = 0
    scoreTotal = 0
    updateScore();
    attribuerCouleur()
}