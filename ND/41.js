// 1
let eilutes = document.createElement("input");
eilutes.placeholder = "Eilučių skaičius";
eilutes.type = "number";

let stulpeliai = document.createElement("input");
stulpeliai.placeholder = "Stulpelių skaičius";
stulpeliai.type = "number";

let mygtukas = document.createElement("button");
mygtukas.textContent = "Kurti lentelę";

// 2
let rezultatas = document.createElement("div");

document.body.append(eilutes, document.createElement("br"));
document.body.append(stulpeliai, document.createElement("br"));
document.body.append(mygtukas, rezultatas);

// 3
mygtukas.onclick = function () {
    let e = Number(eilutes.value);
    let s = Number(stulpeliai.value);

    let lentele = document.createElement("table");
    lentele.style.borderCollapse = "collapse";

    for (let i = 0; i < e; i++) {
        let eilute = document.createElement("tr");

        for (let j = 0; j < s; j++) {
            let langelis = document.createElement("td");
            langelis.textContent = `(${i + 1}; ${j + 1})`;
            langelis.style.border = "1px solid black";
            langelis.style.padding = "10px";
            eilute.appendChild(langelis);
        }

        lentele.appendChild(eilute);
    }

    rezultatas.replaceChildren(lentele);
};
