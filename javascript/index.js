alert("Welcome to Learn Javascript!");

// testing hitungan
var rand1 = Math.floor(Math.random() * 10);
var rand2 = Math.floor(Math.random() * 10);

var answer = rand1 + rand2;
var jawaban = prompt("Perhitungan dari " + rand1 + " ditambah " + rand2 + " adalah...");

if(jawaban == answer) {
    alert("Jawaban kamu benar!");
} else {
    alert("Jawaban kamu kurang tepat");
}

//end testing hitungan