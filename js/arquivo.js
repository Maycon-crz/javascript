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
