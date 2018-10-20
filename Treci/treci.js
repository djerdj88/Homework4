"use strict";

const brojKvadratica = parseInt(prompt("Unesite broj zeljenih kvadratica!!!"));
const container = document.getElementById("container");
const slova = document.getElementById("slova");
const dodajKvadratic = document.getElementById("dodaj");
const provjeriKvadratice = document.getElementById("provjera");
let brojac = brojKvadratica;

for (let i = 0; i < brojKvadratica; i++){
    let a, b, c, d, bText, newDiv;

    newDiv = document.createElement("div");
    newDiv.className = `new-${i+1}`;
    container.appendChild(newDiv);
    a = document.createElement("div");
    b = document.createElement("BUTTON");
    b.className = `b-`;
    bText = document.createTextNode("-");
    b.appendChild(bText);
    a.appendChild(b);
    newDiv.appendChild(a);
    c = document.createElement("div");
    d = document.createElement("input");
    d.type = "text";
    d.className = `input-${i+1}`;
    d.pattern = "[A-Za-z -]";
    d.required = true;
    d.title = "Molim vas unesite velika ili mala slova";
    c.appendChild(d);
    newDiv.appendChild(c);
}



let dodajK = function(){
    let a, b, c, d, bText, newDiv;

    newDiv = document.createElement("div");
    newDiv.className = `new-${brojac+1}`;
    container.appendChild(newDiv);
    a = document.createElement("div");
    b = document.createElement("BUTTON");
    bText = document.createTextNode("-");
    b.className = `b-`;
    b.appendChild(bText);
    a.appendChild(b);
    newDiv.appendChild(a);
    c = document.createElement("div");
    d = document.createElement("input");
    d.type = "text";
    d.className = `input-${brojac+1}`;
    d.pattern = "[A-Za-z -]";
    d.required = true;
    d.title = "Molim vas unesite velika ili mala slova";
    c.appendChild(d);
    newDiv.appendChild(c);
    brojac++;
};

dodajKvadratic.addEventListener("click", dodajK);


let provjeri = function (){
    let str = "";
    var letters = /^[A-Za-z -]+$/;
    for (let i = 1; i <= brojac; i++){
        if (!document.getElementsByClassName(`input-${i}`)[0].value.match(letters)){
            alert("Molim Vas unesite samo slova!!!");
            break;
        }
        else{
        str += document.getElementsByClassName(`input-${i}`)[0].value;
        }
    }
    if (str.length === brojac){
        palindrom(str);
    }
}

provjeriKvadratice.addEventListener("click", provjeri);

function palindrom(pal) {
    let p = 1;
    for (let i = 0; i < pal.length/2; i++){
        if (pal[i].toUpperCase() === pal[pal.length -i - 1].toUpperCase()){
        }
        else{
            p = 0;
            document.getElementById("palindrom").innerText = "String nije palindrom!!!";
            break;
        }
    }
    if (p === 1){
        document.getElementById("palindrom").innerText = "String je palindrom!!!";
    }
};

function delKvadratic(event){
    if (event.target.classList.contains("b-")){
        var z = event.target.parentNode.nextSibling.lastChild.className;
    z = parseInt(z.replace( /\D+/g, ''));
        let x = event.target.parentNode.parentNode;
        container.removeChild(x);
        for (let i = z + 1; i <= brojac; i++){
            document.getElementsByClassName(`input-${i}`)[0].className = `input-${i-1}`;
            document.getElementsByClassName(`new-${i}`)[0].className = `new-${i-1}`;
            }
            brojac--;
    }
    
        
};

container.addEventListener("click", delKvadratic);