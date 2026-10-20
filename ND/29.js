let root = document.getElementById("root");

// 1
let h2 = document.createElement("h2");
h2.textContent = "Mano pirmasis elementas";
root.appendChild(h2);

// 2
let p = document.createElement("p");
p.textContent = "Tai yra mano sukurtas tekstas";
root.appendChild(p)

// 3
let div = document.createElement("div");
div.style.width = "300px";
div.style.height = "100px";
div.style.backgroundColor = "red";
root.appendChild(div);

// 4
let button = document.createElement("button");
button.textContent = "Spausti";
root.appendChild(button);

// 5
let img = document.createElement("img");
img.src = "image.jpg";
img.alt = "Mano paveikslėlis";
root.appendChild(img);

// 7
let a = document.createElement("a");
a.textContent = "Apsilankyti svetaineje";
a.href = "Noreika.lt";
root.appendChild(a);

// 8
let div2 = document.createElement("div");
div2.textContent = "Sveiki!";
div2.style.width = "200px";
div2.style.height = "50px";
div2.style.backgroundColor = "green";
div2.style.color = "red";
root.appendChild(div2);
