// 3.
function ejecutar3() {
    const h2 = document.querySelector("h2");
    console.log(h2.textContent);
    document.getElementById("resultado3").textContent = "Revisa la consola.";
}

// 4. 
function ejecutar4() {
    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(p => p.textContent = "Texto actualizado dinámicamente");
    document.getElementById("resultado4");
}

// 5.
function ejecutar5() {
    const img = document.querySelector("img");
    img.src = "nuevo.png";
    img.alt = "Imagen cambiada por JS";
    document.getElementById("resultado5");
}

// 6. 
function ejecutar6() {
    const lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.classList.add("resaltado");
        li.classList.remove("oculto");
    });
    document.getElementById("resultado6");
}

// 7. 
function ejecutar7() {
    const ul = document.getElementById("lista-ejemplo");
    let salida = "";
    for (let li of ul.children) {
        console.log(li.textContent);
        salida += li.textContent + " | ";
    }
    document.getElementById("resultado7").textContent = salida;
}

// 8. 
function ejecutar8() {
    const colores = ["lightblue", "lightgreen", "lightpink"];
    const divs = document.querySelectorAll("div");

    divs.forEach((div, i) => {
        div.style.background = colores[i % colores.length];
    });

    document.getElementById("resultado8");
}

// 9. 
function ejecutar9() {
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Elemento insertado con JS";
    document.body.appendChild(nuevoP);

    document.getElementById("resultado9");
}

// 10. 
function ejecutar10() {
    const h3 = document.createElement("h3");
    h3.textContent = "Soy un H3 agregado antes del primer párrafo";

    const primerP = document.querySelector("p");
    document.body.insertBefore(h3, primerP);

    document.getElementById("resultado10");
}