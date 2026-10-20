
"use strict";

// 1
let tekstai = [
    "JavaScript yra programavimo kalba.",
    "Mokausi kurti internetinius puslapius.",
    "Šis elementas pažymėtas pagal ID.",
    "Šis elementas pažymėtas pagal CLASS.",
    "Šis elementas pažymėtas pagal TAG."
];

let elementai = [];

tekstai.forEach((tekstas, indeksas) => {
    let p = document.createElement("p");
    p.textContent = tekstas;
    document.body.appendChild(p);
    elementai.push(p);
});

// 2

// 3a
elementai[0].id = "pirmas";
document.getElementById("pirmas").style.color = "red";
document.getElementById("pirmas").style.fontSize = "24px";

// 3b
elementai[1].className = "antras";
document.querySelector(".antras").style.color = "blue";
document.querySelector(".antras").style.fontWeight = "bold";

// 3c
document.querySelectorAll("p").forEach(p => {
    p.style.fontFamily = "Arial";
});

// 4
let divai = [];

for (let i = 0; i < 6; i++) {
    let div = document.createElement("div");

    div.textContent = `DIV elementas ${i + 1}`;
    div.style.width = "180px";
    div.style.height = "80px";
    div.style.border = "2px solid black";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.display = "inline-flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "center";
    div.style.boxSizing = "border-box";

    document.body.appendChild(div);
    divai.push(div);
}

// 5
let mygtukas = document.createElement("button");
mygtukas.textContent = "Keisti DIV spalvas";
mygtukas.style.display = "block";
mygtukas.style.margin = "15px";

document.body.appendChild(mygtukas);

function atsitiktineSpalva() {
    return "#" + Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0");
}

mygtukas.addEventListener("click", () => {
    divai.forEach(div => {
        div.style.backgroundColor = atsitiktineSpalva();
    });
});

// 6
let zodziai = [
    "JavaScript",
    "HTML",
    "CSS",
    "Programavimas",
    "Internetas",
    "Kompiuteris",
    "Funkcija",
    "Kintamasis",
    "Masyvas",
    "Naršyklė"
];

let pastraipos = [];

for (let i = 0; i < 6; i++) {
    let p = document.createElement("p");
    p.style.fontSize = "20px";
    p.style.color = "green";

    document.body.appendChild(p);
    pastraipos.push(p);
}

function atsitiktinisZodis() {
    let indeksas = Math.floor(Math.random() * zodziai.length);
    return zodziai[indeksas];
}

function atnaujintiZodzius() {
    pastraipos.forEach(p => {
        p.textContent = atsitiktinisZodis();
    });
}

atnaujintiZodzius();

window.addEventListener("pageshow", atnaujintiZodzius);
