// 1. Dodavanje itema
var a;
// Prvo nam treba forma u kojoj unosimo ime itema
// id - addForm
const form = document.getElementById("addForm");

// Treba nam container gdje se nalazi svi itemi
// id - items
const itemList = document.getElementById("items");

// Na submit forme gdje unosimo item treba da aktiviramo submit event

form.addEventListener("submit", addItem);

// Sada trebamo da kreiramo event handler za submit forme
// Event handler za dodavanje itema
function addItem(event){
  event.preventDefault();

let input = document.getElementById("item").value;
if (input !== ""){
    // Na submit forme trebamo da onemogucimo default ponasanje forme
  /// tj. da onemogucimo action na submit

  // Sada nam treba vrijednost iz input polja
  // koju smo unijeli
  // id - item

  // Sledeci korak je kreiranje novog li itema
  const li = document.createElement("li");
  const op = document.createElement("option"); // kreiramo option elemente za datalistu
  // Nakon toga li itemu trebamo dodati klasu 
  // class - list-group-item
  li.className = "list-group-item";
  op.className = "opop"; // kreiramo datalist item
  op.value = input;

  document.getElementById("datalist1").appendChild(op); // dodajemo na datalist iteme
  // Nakon ovog trebamo da kreiramo text node
  // cija je vrijednost sacuvana u input polju
  // i da dodamo taj text node u li

  li.appendChild(document.createTextNode(input));
    // Potrebno je da kreiramo i delete button element
    const deleteBtn = document.createElement("button");
    // Potrebno je da dodamo klase za delete button
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // da bismo dobili adekvatan izgled
    // class - btn btn-danger btn-sm float-right delete
  
    // Potrebno je da dodamo na delete button text node "X"
    deleteBtn.appendChild(document.createTextNode("X"));
    // Sada moramo da dodamo deleteBtn u li
    li.appendChild(deleteBtn);
    // Nakon toga, potrebno je da dodamo
    // novokreirani li u listu itema
    itemList.appendChild(li);
}
document.getElementById("item").value = "";
}

// 2. Brisanje elemenata iz liste

// Na item list dodamo click event i event handler za brisanje itema
// U prvom koraku smo nasli item list !
itemList.addEventListener("click", removeItem);

// Sada trebamo da kreiramo event handler za brisanje itema
function removeItem(event){
  // sa treba da provjerimo da li je user kliknuo na X
  // to mozemo da odradimo tako sto provjerimo da li
  // element koji smo kliknuli sadrzi klasu "delete"
  if (event.target.classList.contains("delete")){
    if (confirm("Jeste li sigurni da zelite da uklonite item?")){
      // ako sadrzi pozvati confirm sa porukom "Jeste li sigurni"
      // - radimo detaljnije nakon testa
      // confirm vrace true/false
    var opLista = document.getElementsByClassName("opop");
          // trebamo da obrisemo li element
          // prvo selektujemo li
          // li je parent node elementa X, tj. targeta
          // parentElement
     const li = event.target.parentNode;
     a = event.target.parentNode.innerText; // string je Item 1 i X na kraju moramo koristiti slice
     for (i = 0; i < opLista.length; i++){    // trazimo value itema sa dataliste i brisemo ga
       if (opLista[i].value === a.slice(0,-2)){
       opLista[i].parentNode.removeChild(opLista[i]);
     }
    }
     itemList.removeChild(li);
    }
  }

      

          // onda obrisemo selektovani li
          // iz parent noda, tj. lista itema (definisana globalno)
          // parent.removeChild(child)

}

// 3. Filtriranje/pretraga elemenata

const filter = document.getElementById("filter");
// prvo nam treba input polje za pretragu itema
// id - filter

// Na filter input polje dodamo event "keyup" i event handler
filter.addEventListener("keyup", filterItems);
// Event handler za filtriranje itema

function filterItems(event){
  // konvertovanje slova iz e.target.value u lowercase,
  // taj tekst cuvamo u varijablu 
  // lakse nam je da radimo pretragu
  const text = event.target.value.toLowerCase();
  // uzmemo sve li iteme iz liste itema, gore vec definisali
  // sve elemente moramo da sacuvamo u varijablu
  // mozemo da koristimo getElementsByTagName
  const liElements = itemList.getElementsByTagName("li");
  // Konvertujemo items HTMLCollection u Array
  const liArray = Array.from(liElements);
  // prolazimo kroz sve elemente niza
    liArray.forEach(function(item){
      // iz svakog itema izvucemo text content
      // item.firstChild.textContent
      const itemText = item.firstChild.textContent;
      // provjerim da li se uneseni tekst nalazi u item name
      // Napomena: i item names moraju biti mala slova
      // Najjednostavnije koristiti indexOf za provjeru da li 
      // se string nalazi u stringu, != -1 ako jeste 
      if (itemText.toLowerCase().indexOf(text) != -1){
        item.style.display = "block";
      }
      else {
        item.style.display = "none";
      }
    })
      

      
          // ako jeste, item.style.display = "block"
          // ako nije, item.style.display = "none"
}

/* Parametari funkcije su ime 
    cookie-a (cname), 
    vrijednost cookie(cvalue)
    broj dana koliko cookie vazi (exdays)
    Funkcija setuje cookie dodavanjem zajedno cname,
    cvalue i exdays
*/

function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
      alert("Welcome again " + user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
         setCookie("username", user, 30);
     }
  }
}
