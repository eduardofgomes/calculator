var buttons = document.querySelectorAll(".botao")
var operationButtons = document.querySelectorAll("#taltaltal")

function calculator([buttons]) {
    
}

function insert(number) {
    var anotherNumber = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = number + anotherNumber;
}

function clean() {
    document.querySelector("#resultado").innerHTML = "";
}