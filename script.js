function limit() {
    if(numbers.length >= 15) {
        
    }
}

function insert(number) {
    var anotherNumber = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = number + anotherNumber

    limit()
}

function clean() {
    document.querySelector("#resultado").innerHTML = ""
}

function back() {
    var resultado = document.querySelector("#resultado").innerHTML
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    var resultado = document.querySelector("#resultado").innerHTML
    if(resultado) {
        document.querySelector("#resultado").innerHTML = eval(resultado) 
    } else {
        alert('Field is empty, please type some value')
    }
}