
// 4 praktinė užduotis

document.body.innerHTML = "";

let galerija = document.createElement("div");
galerija.style.display = "flex";
galerija.style.flexWrap = "wrap";
galerija.style.gap = "20px";
galerija.style.padding = "20px";

document.body.appendChild(galerija);

let nuotraukos = [
    "https://picsum.photos/id/10/200/150",
    "https://picsum.photos/id/20/200/150",
    "https://picsum.photos/id/30/200/150",
    "https://picsum.photos/id/40/200/150",
    "https://picsum.photos/id/50/200/150",
    "https://picsum.photos/id/60/200/150"
];

nuotraukos.forEach(function (src, index) {
    let kortele = document.createElement("div");

    let img = document.createElement("img");
    img.src = src;
    img.style.width = "200px";
    img.style.height = "150px";
    img.style.objectFit = "cover";
    img.style.display = "block";

    let sirdute = document.createElement("div");
    sirdute.textContent = "♥";
    sirdute.style.fontSize = "35px";
    sirdute.style.cursor = "pointer";
    sirdute.style.textAlign = "center";

    let raktas = "megstamaNuotrauka" + index;

    function atnaujinti() {
        sirdute.style.color =
            localStorage.getItem(raktas) === "true" ? "red" : "white";
        sirdute.style.textShadow = "0 0 2px black";
    }

    atnaujinti();

    sirdute.onclick = function () {
        if (localStorage.getItem(raktas) === "true") {
            localStorage.removeItem(raktas);
        } else {
            localStorage.setItem(raktas, "true");
        }

        atnaujinti();
    };

    kortele.appendChild(img);
    kortele.appendChild(sirdute);
    galerija.appendChild(kortele);
});
