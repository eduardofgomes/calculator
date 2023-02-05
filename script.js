function insert(number) {
    var anotherNumber = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = number + anotherNumber
}

function clean() {
    document.querySelector("#resultado").innerHTML = ""
}

function back() {
    var resultado = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}