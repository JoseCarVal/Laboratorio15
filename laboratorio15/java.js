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
}

// 5.
function ejecutar5() {
    const img = document.querySelector("img");
    img.src = "nuevo.png";
    img.alt = "Imagen cambiada por JS";
}

// 6. 
function ejecutar6() {
    const lis = document.querySelectorAll("li");
    lis.forEach(li => {
        li.classList.add("resaltado");
        li.classList.remove("oculto");
    });
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
}

// 9. 
function ejecutar9() {
    const nuevoP = document.createElement("p");
    nuevoP.textContent = "Elemento insertado con JS";
    document.body.appendChild(nuevoP);

}

// 10. 
function ejecutar10() {
    const h3 = document.createElement("h3");
    h3.textContent = "Soy un H3 agregado antes del primer párrafo";

    const primerP = document.querySelector("p");
    document.body.insertBefore(h3, primerP);
}

// 11. 
function ejecutar11() {
    const ul = document.createElement("ul");

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        li.textContent = `Elemento ${i}`;
        ul.appendChild(li);
    }

    const section = document.getElementById("mi-section");
    section.appendChild(ul);

    document.getElementById("resultado11").textContent = "Lista creada en el section.";
}

// 12. 
function ejecutar12() {
    const parrafo = document.getElementById("parrafo-reemplazar");

    const nuevoDiv = document.createElement("div");
    nuevoDiv.textContent = "Párrafo reemplazado";

    parrafo.replaceWith(nuevoDiv);

    document.getElementById("resultado12").textContent = "Párrafo reemplazado.";
}

// 13.
function ejecutar13() {
    const parrafos = document.querySelectorAll("p");
    const ultimo = parrafos[parrafos.length - 1];

    if (ultimo) ultimo.remove();

    document.getElementById("resultado13").textContent = "Último párrafo eliminado.";
}

// 14. 
function ejecutar14() {
    const cont = document.getElementById("contenido");
    cont.innerHTML = "";

    document.getElementById("resultado14").textContent = "Contenedor vaciado.";
}

// 15.
function ejecutar15() {
    const article = document.querySelector("main article");

    if (article) {
        const clon = article.cloneNode(true);
        document.querySelector("main").appendChild(clon);
    }

    document.getElementById("resultado15").textContent = "Artículo clonado en main.";
}

// 16.
function ejecutar16() {
    const ul = document.querySelector("ul");
    if (!ul) return;

    const ultimo = ul.lastElementChild;
    if (ultimo) {
        ul.insertBefore(ultimo, ul.firstElementChild);
    }

    document.getElementById("resultado16").textContent = "Último li movido al inicio.";
}

// 17. 
function ejecutar17() {
    const cont = document.getElementById("contenedor-parrafos");
    if (!cont) return;

    const parrafos = Array.from(cont.querySelectorAll("p"));

    parrafos.sort((a, b) => a.textContent.localeCompare(b.textContent));

    parrafos.forEach(p => cont.appendChild(p));

    document.getElementById("resultado17").textContent = "Párrafos reordenados.";
}

// 18. 
function ejecutar18() {
    const sections = document.querySelectorAll("section");

    sections.forEach((sec, i) => {
        sec.setAttribute("data-index", i);
    });

    document.getElementById("resultado18").textContent = "Atributos data-index agregados.";
}

// 19. 
function ejecutar19() {
    const totalDivs = document.querySelectorAll("div").length;

    const p = document.createElement("p");
    p.textContent = `Cantidad de divs en el documento: ${totalDivs}`;
    document.body.appendChild(p);

    document.getElementById("resultado19").textContent = "Contador creado.";
}

// 20.
function ejecutar20() {
    const ul = document.createElement("ul");

    for (let i = 1; i <= 5; i++) {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = "Nivel interno";
        li.appendChild(span);
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

    document.getElementById("resultado20").textContent = "UL con spans creado.";
}

// 21.
function ejecutar21() {
    const div = document.getElementById("contenedor");
    if (!div) return;

    div.innerHTML = ""; 

    for (let i = 1; i <= 3; i++) {
        const p = document.createElement("p");
        p.textContent = `Párrafo ${i}`;
        div.appendChild(p);
    }

    const segundo = div.querySelectorAll("p")[1];
    if (segundo) segundo.remove();

    document.getElementById("resultado21").textContent = "Se eliminaron y recrearon párrafos.";
}

// 22.
function ejecutar22() {
    const section = document.getElementById("section-dinamica");
    if (!section) return;

    const h2Viejo = section.querySelector("h2");
    if (h2Viejo) h2Viejo.remove();

    const h2 = document.createElement("h2");
    h2.textContent = "Título nuevo";

    const p = document.createElement("p");
    p.textContent = "Descripción generada";

    const ul = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
        const li = document.createElement("li");
        li.textContent = `Ítem ${i}`;
        ul.appendChild(li);
    }

    section.appendChild(h2);
    section.appendChild(p);
    section.appendChild(ul);

    document.getElementById("resultado22").textContent = "Section modificada.";
}