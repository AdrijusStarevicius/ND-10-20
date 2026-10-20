// 1
const nuoroda = document.createElement("a");
const paveikslelis = document.createElement("img");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const p1 = document.createElement("p");
const p2 = document.createElement("p");

// 2
const visiElementai = document.querySelectorAll(
        "a, img, div, p"
    );

console.log("Visi pasirinkti elementai:", visiElementai);

// 3
 visiElementai.forEach(function (elementas, indeksas) {
        elementas.classList.add("elementas");
        elementas.id = "elementas-" + (indeksas + 1);
    });

// 4
div1.style.height = "100px";
div1.style.width = "200px";
div1.style.backgroundColor = "lightblue";

div2.style.height = "100px";
div2.style.width = "200px";
div2.style.backgroundColor = "orange";

// 5
p1.style.color = "red";
p2.style.color = "blue";

// 6
paveikslelis.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY8wsBMDbSRGPyBF1VQVcepV6Z13Aobud3h2fSus4-BKu0FD2ApzFy-CX2&s=10";

// 7
paveikslelis.style.width = "160px";
paveikslelis.style.height = "160px";
paveikslelis.style.objectFit = "cover";
paveikslelis.style.borderRadius = "50%";
paveikslelis.style.border = "5px solid green";

// 8
const visiParagrafai = document.querySelectorAll("p");

    visiParagrafai.forEach(function (paragrafas) {
        console.log(paragrafas);
    });

