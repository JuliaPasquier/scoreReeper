//Mes Variables

let scoreJ1 = 0;
let scoreJ2 = 0
let scoreTotal = 0
const scoreMax = 5


// Mes EventListener
document.getElementById("boutonJ1").addEventListener("click", function () {
    scoreJ1++
    updateScore();
    checkWinner();
})

document.getElementById("boutonJ2").addEventListener("click", function () {
    scoreJ2++
    updateScore();
    checkWinner();
})

document.getElementById("reset").addEventListener("click",function(){
    resetScore();
    
})


//Mes functions
function updateScore(){
    document.getElementById("scoreJ1").textContent = scoreJ1
    document.getElementById("scoreJ2").textContent = scoreJ2
}

function checkWinner() {
    scoreTotal++;
    if (scoreTotal >= scoreMax) {
        attribuerCouleur();
        freezeScore();
    }
}

function attribuerCouleur(){
    if(scoreJ1 > scoreJ2){
        document.getElementById("scoreJ1").style.color = "green"
        document.getElementById("scoreJ2").style.color = "red"
    }else if(scoreJ1 < scoreJ2) {
        document.getElementById("scoreJ1").style.color = "red"
        document.getElementById("scoreJ2").style.color = "green"
    }else{
        document.getElementById("scoreJ1").style.color = "black"
        document.getElementById("scoreJ2").style.color = "black"
    }
}

function freezeScore(){
    document.getElementById("boutonJ1").disabled = true;
    document.getElementById("boutonJ2").disabled = true;
}

function resetScore(){
    document.getElementById("boutonJ1").disabled = false;
    document.getElementById("boutonJ2").disabled = false;
    scoreJ1 = 0
    scoreJ2 = 0
    scoreTotal = 0
    updateScore();
    attribuerCouleur()
}