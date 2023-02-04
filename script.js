function insert(number) {
    
    var anotherNumber = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = number + anotherNumber
}

function clean() {
    document.querySelector("#resultado").innerHTML = ""
}

function back() {
    let resultado = document.querySelector("#resultado")
    let array = [...resultado].pop()
    resultado.innerHTML = array
}