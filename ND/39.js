document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.padding = "20px";

// 1 

const elementas1 = document.createElement("h2");
elementas1.textContent = "Pirma užduotis";
document.body.appendChild(elementas1);


// 2 

const elementas2 = document.createElement("div");
const tekstas2 = document.createElement("p");

tekstas2.textContent = "Tai tekstas div elemento viduje.";

elementas2.appendChild(tekstas2);
document.body.appendChild(elementas2);


// 3 

const elementas3 = document.createElement("p");

elementas3.textContent = "Elementas su atributais";
elementas3.setAttribute("class", "myClass");
elementas3.setAttribute("id", "myId");

document.body.appendChild(elementas3);

const nuoroda = document.createElement("a");

nuoroda.textContent = "Google";
nuoroda.setAttribute("href", "https://www.google.com");
nuoroda.setAttribute("target", "_blank");

document.body.appendChild(nuoroda);

document.body.appendChild(document.createElement("br"));

const nuotrauka = document.createElement("img");

nuotrauka.setAttribute("src", "https://placehold.co/200x100");
nuotrauka.setAttribute("alt", "Pavyzdinė nuotrauka");
nuotrauka.setAttribute("width", "200");

document.body.appendChild(nuotrauka);


// 4 

const div = document.createElement("div");
const elementuMasyvas = [];

for (let i = 1; i <= 4; i++) {
    const p = document.createElement("p");

    p.textContent = "Tai " + i + " pastraipa";

    elementuMasyvas.push(p);
    div.appendChild(p);
}

elementuMasyvas.forEach(function(elementas, indeksas) {
    if (indeksas === 1) {
        elementas.style.color = "red";
        elementas.style.backgroundColor = "black";
    } else {
        elementas.style.color = "white";
        elementas.style.backgroundColor = "green";
    }

    elementas.style.padding = "10px";
});

document.body.appendChild(div);


// 5 

const antraste5 = document.createElement("h2");
antraste5.textContent = "Input reikšmė";

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Įrašyk tekstą";

const mygtukas5 = document.createElement("button");
mygtukas5.textContent = "Patvirtinti";

const rezultatas5 = document.createElement("p");

document.body.append(antraste5, input, mygtukas5, rezultatas5);

mygtukas5.addEventListener("click", function() {
    const reiksme = input.value;

    console.log(reiksme);
    rezultatas5.textContent = "Įvestas tekstas: " + reiksme;
});


// 6 

const antraste6 = document.createElement("h2");
antraste6.textContent = "Elementų kūrimas ir šalinimas";

const sukurtiMygtukas = document.createElement("button");
sukurtiMygtukas.textContent = "Sukurti elementą";

const salintiMygtukas = document.createElement("button");
salintiMygtukas.textContent = "Pašalinti elementą";

const elementuVieta = document.createElement("div");

sukurtiMygtukas.style.marginRight = "10px";
sukurtiMygtukas.style.padding = "8px";

salintiMygtukas.style.padding = "8px";

document.body.append(
    antraste6,
    sukurtiMygtukas,
    salintiMygtukas,
    elementuVieta
);

sukurtiMygtukas.addEventListener("click", function() {
    const naujasElementas = document.createElement("p");

    naujasElementas.textContent = "Naujas sukurtas elementas";
    elementuVieta.appendChild(naujasElementas);
});

salintiMygtukas.addEventListener("click", function() {
    if (elementuVieta.lastElementChild) {
        elementuVieta.lastElementChild.remove();
    }
});


// 7 

const antraste7 = document.createElement("h2");
antraste7.textContent = "Paspaudimų skaitiklis";

const skaitiklis = document.createElement("span");
skaitiklis.textContent = "0";

const mygtukas7 = document.createElement("button");
mygtukas7.textContent = "Spausk mane";

let paspaudimai = 0;

mygtukas7.style.marginLeft = "10px";
mygtukas7.style.padding = "8px 15px";

document.body.append(antraste7, skaitiklis, mygtukas7);

mygtukas7.addEventListener("click", function() {
    paspaudimai++;

    skaitiklis.textContent = paspaudimai;
});