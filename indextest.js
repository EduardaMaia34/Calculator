var calc = document.getElementById("txt"); 
var v1 = "";
var v2 = "";
var sinalBoolean = 0;
var sinal;

function ACbutton() {
    if (calc.innerHTML !== "Digite o cálculo..."){
        calc.innerHTML = "Digite o cálculo...";
        v1 = 0;
        v2 = 0;
    } else {
        alert("calculo precisa ser inserido");
    }
}



document.getElementById("AC").onclick = function() {
    ACbutton();
}

