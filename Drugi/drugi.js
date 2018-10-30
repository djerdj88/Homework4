let table = document.querySelector('.iksoks');
let a = "X";
let gameplay = true;
let counter = 0;
let cell1 = document.getElementById('cell-1');
let cell2 = document.getElementById('cell-2');
let cell3 = document.getElementById('cell-3');
let cell4 = document.getElementById('cell-4');
let cell5 = document.getElementById('cell-5');
let cell6 = document.getElementById('cell-6');
let cell7 = document.getElementById('cell-7');
let cell8 = document.getElementById('cell-8');
let cell9 = document.getElementById('cell-9');

table.addEventListener("click", function(e){
    let text = document.getElementById(e.target.id);
    if (gameplay){
   if (text.innerText === ""){
    text.innerText = a;
    counter++;
    if (a === "X"){
        a = "O";
    }
    else {
        a = "X";
    }
   }
   if (counter >= 5){
    if (cell1.innerText === "X" && cell2.innerText === "X" && cell3.innerText === "X"){
        cell1.style.backgroundColor = "coral";
        cell2.style.backgroundColor = "coral";
        cell3.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
        
    }
    else if (cell1.innerText === "X" && cell5.innerText === "X" && cell9.innerText === "X"){
        cell1.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if (cell1.innerText === "X" && cell4.innerText === "X" && cell7.innerText === "X"){
        cell1.style.backgroundColor = "coral";
        cell4.style.backgroundColor = "coral";
        cell7.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if (cell4.innerText === "X" && cell5.innerText === "X" && cell6.innerText === "X"){
        cell4.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell6.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if (cell7.innerText === "X" && cell8.innerText === "X" && cell9.innerText === "X"){
        cell7.style.backgroundColor = "coral";
        cell8.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if(cell2.innerText === "X" && cell5.innerText === "X" && cell8.innerText === "X"){
        cell2.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell8.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if (cell3.innerText === "X" && cell6.innerText === "X" && cell9.innerText === "X"){
        cell3.style.backgroundColor = "coral";
        cell6.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    else if (cell3.innerText === "X" && cell5.innerText === "X" && cell7.innerText === "X"){
        cell3.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell7.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player X is the Winner!";
        gameplay = false;
    }
    if (cell1.innerText === "O" && cell2.innerText === "O" && cell3.innerText === "O"){
        cell1.style.backgroundColor = "coral";
        cell2.style.backgroundColor = "coral";
        cell3.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell1.innerText === "O" && cell5.innerText === "O" && cell9.innerText === "O"){
        cell1.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell1.innerText === "O" && cell4.innerText === "O" && cell7.innerText === "O"){
        cell1.style.backgroundColor = "coral";
        cell4.style.backgroundColor = "coral";
        cell7.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell4.innerText === "O" && cell5.innerText === "O" && cell6.innerText === "O"){
        cell4.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell6.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell7.innerText === "O" && cell8.innerText === "O" && cell9.innerText === "O"){
        cell7.style.backgroundColor = "coral";
        cell8.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if(cell2.innerText === "O" && cell5.innerText === "O" && cell8.innerText === "O"){
        cell2.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell8.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell3.innerText === "O" && cell6.innerText === "O" && cell9.innerText === "O"){
        cell3.style.backgroundColor = "coral";
        cell6.style.backgroundColor = "coral";
        cell9.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else if (cell3.innerText === "O" && cell5.innerText === "O" && cell7.innerText === "O"){
        cell3.style.backgroundColor = "coral";
        cell5.style.backgroundColor = "coral";
        cell7.style.backgroundColor = "coral";
        document.querySelector(".winner").innerHTML = "<br><br><br>Player O is the Winner!";
        gameplay = false;
    }
    else {
        if (counter === 9 && document.querySelector(".winner").innerText === ""){
            document.querySelector(".winner").innerHTML = "<br><br><br>It is a Draw!";
            setTimeout(() => {
                location.reload();
            }, 2000);
        }
    }
}
}
if (document.querySelector(".winner").innerHTML === "<br><br><br>Player O is the Winner!" || document.querySelector(".winner").innerHTML === "<br><br><br>Player X is the Winner!"){
    setTimeout(() => {
        location.reload();
    }, 2000);
}
});