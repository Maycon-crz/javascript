//Function, Alert puro, console.log()
function paragrafoinnerHTML(){
    document.getElementById("atribuiPorinnerHTML").innerHTML ="Chamando função com (onclick) e atribuindo texto por innerHTML = '...'";
};
function alertando(){
    window.alert("Bora lá");
}
function escrevenoconsole(){
    console.log("Reaprendendo javascript puro!");
}
//Imprimir a página atual, variaveis, comentario
function imprimepagina(){
    window.print();
}
function variavel(){
    var maycon = "Aprendendo javascript puro sem Jquery hehe";
    window.alert(maycon);
}
//------Calculadora simples------
var pnumero = "";
var parametro = "";
var snumero = "";
var conta = 1;
function calculadora(numero){
    switch(conta){
        case 1:
            pnumero = numero;
            // alert("Primeiro - "+pnumero);
            document.getElementById("painelcalculadora").innerHTML = pnumero;
        break;
        case 2:
            parametro = numero;
            // alert("Segundo - "+pnumero+parametro);
            document.getElementById("painelcalculadora").innerHTML = pnumero+parametro;
        break;
        case 3:
            snumero = numero;
            var resultado = 0;
            switch(parametro){
                case "+":
                    resultado = pnumero + snumero;
                break;
                case "-":
                    resultado = pnumero - snumero;
                break;
                case "*":
                    resultado = pnumero * snumero;
                break;
                case "/":
                    resultado = pnumero / snumero;
                break;
            }
            document.getElementById("painelcalculadora").innerHTML = pnumero+parametro+snumero+" = "+resultado;
            conta=0;
        break;
    }
    conta++;
}
//------------
//Matris
function matriz(parametro){
    var frutas = ["Laranja","Pera","Banana"];
    switch(parametro){
        case "m":
            document.getElementById("mostramatriz").innerHTML = frutas; 
        break;
        case "um":
            document.getElementById("mostramatriz").innerHTML = frutas[0];
        break;
        case "dois":
            document.getElementById("mostramatriz").innerHTML = frutas[1];
        break;
        case "tres":
            document.getElementById("mostramatriz").innerHTML = frutas[2];
        break;
    }
}
//Objeto
function jogo(parametro){
    var niveis = {
        um : "Extremamente fácil",
        dois: "Fácil",
        tres: "Razoavel",
        quatro: "Médio",
        cinco: "Difícil",
    }
    switch(parametro){
        case 1:
            document.getElementById("mostraNivel").innerHTML = niveis.um;
        break;
        case 2:
            document.getElementById("mostraNivel").innerHTML = niveis.dois;
        break;
        case 3:
            document.getElementById("mostraNivel").innerHTML = niveis.tres;
        break;
        case 4:
            document.getElementById("mostraNivel").innerHTML = niveis.quatro;
        break;
        case 5:
            document.getElementById("mostraNivel").innerHTML = niveis.cinco;
        break;
    }
}
function exemplodereturn(p1, p2){
    document.getElementById("retornou").innerHTML = retornando(p1, p2);
}
function retornando(p1, p2){
    return p1 + p2;
}
function mostradataehora(){
    document.getElementById("date").innerHTML=Date();
}
function posicaodefruta(parametro){
    var textoFruta = "Localizando a palavra fruta dentro deste texto";
    var pos = textoFruta.indexOf("fruta");
    if(parametro == 'um'){
        document.getElementById("mostrandoposicao").innerHTML='Está na posição '+pos;
    }if(parametro == 'dois'){
        document.getElementById("mostrandoposicao").innerHTML=textoFruta;
    }
}
//W3schools - javascript - parei no JS String methods