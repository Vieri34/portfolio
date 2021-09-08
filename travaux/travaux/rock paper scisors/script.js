
/* appel images */
let imgPlayer = document.getElementById("player");
let imgAi = document.getElementById("ai");
let text = document.getElementById("mess");

let btnRock = document.getElementById("rock");
let btnPaper = document.getElementById("paper");
let btnScisors = document.getElementById("scissors");

let values = ["pierre", "papier", "ciseaux"];
let p1;
let p2;

function rock(event) {
    imgPlayer.src = "pierre.png";
    p1 = "pierre";
    play();
}

function paper(event) {
    imgPlayer.src = "papier.png";
    p1 = "papier";
    play();
}

function scissors(event) {
    imgPlayer.src = "ciseaux.png";
    p1 = "ciseaux";
    play();
}

function play() {
    rand = Math.floor(Math.random() * values.length);
    p2 = values[rand];

    imgAi.src = values[rand] + ".png";

    if (p1 === p2) {
        text.innerHTML = "Egalité";
    }

    if (p1 === "pierre") {
        if (p2 === "ciseaux") {
            text.innerHTML =  "Gagné !!"
        }

        else {
            text.innerHTML =  "Perdu..."
        }
    }

    if (p1 === "papier") {
        if (p2 === "pierre") {
            text.innerHTML =  "Gagné !!"
        }

        else {
            text.innerHTML =  "Perdu..."
        }
    }

    if (p1 === "ciseaux") {
        if (p2 === "papier") {
            text.innerHTML =  "Gagné !!"
        }

        else if (p2 === "papier") {
            text.innerHTML =  "Perdu..."
        }
    }
}

console.log (p2);

btnRock.addEventListener("click", rock);
btnPaper.addEventListener("click", paper);
btnScisors.addEventListener("click", scissors);

