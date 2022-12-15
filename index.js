
var calc = document.getElementById("txt");
var v1;
var v2;
var sinalBoolean = false;
var sinal;

function ACbutton() {
    if (calc.innerHTML !== "Digite o cálculo..."){
        calc.innerHTML = "Digite o cálculo...";
        v1 = "";
        v2 = "";
        sinalBoolean = false;
    } else {
        alert("calculo precisa ser inserido");
    }
}

function reset() {
    if (calc.innerHTML === "Digite o cálculo...") {
        calc.innerHTML = "";
        v1 = "";
        v2 = "";
    }
    if (sinalBoolean === true) {
        if (v2 === ""){
            calc.innerHTML = "";
        }
    }
}

function addValues(valor) {

    if (sinalBoolean === false) {
        reset();
        v1 += valor;
        calc.innerHTML += valor;
    }
    if (sinalBoolean === true){
        reset();
        v2 += valor;
        calc.innerHTML += valor;
    }
}






document.getElementById("AC").onclick = function() {
    ACbutton();
}

document.getElementById("+").onclick = function() {
    sinalBoolean = true;
    sinal = 1;
    reset();
}
document.getElementById("-").onclick = function() {
    sinalBoolean = true;
    sinal = 2;
    reset();
}
document.getElementById("x").onclick = function() {
    sinalBoolean = true;
    sinal = 3;
    reset();
}
document.getElementById("/").onclick = function() {
    sinalBoolean = true;
    sinal = 4;
    reset();
}

document.getElementById("=").onclick = function() {
    var resposta;
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);

    if (sinal === 1){
        resposta = v1 + v2;
    } if (sinal === 2){
        resposta = v1 - v2;
    } if (sinal === 3){
        resposta = v1 * v2;
    } if (sinal === 4){
        resposta = v1 / v2;
    }

    calc.innerHTML = resposta;

    v1 = resposta;
    v2 = "";
    sinalBoolean = false;
}



document.getElementById("1").onclick = function() {
    addValues("1")
}
document.getElementById("2").onclick = function() {
    addValues("2")
}
document.getElementById("3").onclick = function() {
    addValues("3")
}
document.getElementById("4").onclick = function() {
    addValues("4")
}
document.getElementById("5").onclick = function() {
    addValues("5")
}
document.getElementById("6").onclick = function() {
    addValues("6")
}
document.getElementById("7").onclick = function() {
    addValues("7")
}
document.getElementById("8").onclick = function() {
    addValues("8")
}
document.getElementById("9").onclick = function() {
    addValues("9")
}
document.getElementById("0").onclick = function() {
    addValues("0")
}

