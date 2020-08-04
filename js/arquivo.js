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
    var textoFruta = "LOCALIZANDO a palavra fruta, dentro deste TEXTO, 1,2,3";
    var pos = textoFruta.indexOf("fruta");
    switch(parametro){
        case 'um':
            document.getElementById("mostrandoposicao").innerHTML='Está na posição '+pos;
        break;
        case 'dois':
            document.getElementById("mostrandoposicao").innerHTML=textoFruta;
        break;
        case 'naotem':
            var naotempalavra = textoFruta.indexOf("nao");
            document.getElementById("mostrandoposicao").innerHTML="Quando o indexOf() não encontra retorna: "+naotempalavra;
        break;
        case 'pera':
            var textoFrutaMudado = textoFruta.replace("fruta","Pera");
            document.getElementById("mostrandoposicao").innerHTML=textoFrutaMudado;
        break;
        case 'minusculo':
            document.getElementById("mostrandoposicao").innerHTML=textoFruta.toLowerCase();
        break;
        // textoFruta.trim(); Tira espaços em branco no começo e no fim
        case 'antesdavirgula':
            var separa = textoFruta.split(",");
            document.getElementById("mostrandoposicao").innerHTML=separa[0];
        break;
        case 'depoisdavirgula':
            var separa = textoFruta.split(",");
            document.getElementById("mostrandoposicao").innerHTML=separa[1];
        break;
        case 'stringnumerosoma':
            var separa = textoFruta.split(",");
            var separaEsoma=parseInt(separa[2])+parseInt(separa[3])+parseInt(separa[4]);
            document.getElementById("mostrandoposicao").innerHTML=separaEsoma;
        break;
    }
}
function carros(parametro){
    var carros = ['Fusca', 'Chevette', 'Opala'];    
    switch(parametro){
        case 'maverick':
            carros[0] = "Maverick";
            document.getElementById("arraycarros").innerHTML=carros;
        break;
        case 'ultimo':        
            var ultimocarro = carros[carros.length - 1];
            document.getElementById("arraycarros").innerHTML=ultimocarro;
        break;
        case 'lista':
            var qtdcarros = carros.length;
            var listando = "<ul>";
            for(c = 0;c < qtdcarros;c++){//Executa enquanto c é menor que qtdcarros
                listando +="<li>"+carros[c]+"</li>";
            }
            listando += "</ul>";
            document.getElementById("arraycarros").innerHTML=listando;
        break;
        case 'listaforeach':
            var listando = "<ul>";
                carros.forEach(funlista);
            listando += "</ul>";
            document.getElementById("arraycarros").innerHTML=listando;
            function funlista(value){
                listando += "<li>"+value+"</li>";
            }
        break;
        case 'addcamaro':
            carros.push("Camaro");
            document.getElementById("arraycarros").innerHTML=carros;
        break;
        case '350Z':            
            carros[carros.length] = "Nisan350Z";
            document.getElementById("arraycarros").innerHTML=carros;
        break;        
    }
}
function indexes(parametro){
    var vindexes = {um:"Nomeando", dois:"os", tres:"indexes", quatro:"da", cinco:"array"};    
    var v2indexes = ["Trasformando", "array", "em", "string"];   
    var v3indexes = ["Arroz", "Carne", "Batatas"];
    var v4indexes = ["Faca", "Garfo", "Colher", "Prato"];
    var v5indexes = [1, 5, 3, 2, 4];
    var v6indexes = [
        {tipo:"Fruta", nome:"Maçã"},
        {tipo:"Talher", nome:"Faca"},
        {tipo:"Acao", nome:"Descascar"}
    ];   
    switch(parametro){
        case 'indexstring':         
            document.getElementById("mostraindexes").innerHTML=vindexes['um'];          
        break;
        case 'remover':
            v2indexes.pop();
            document.getElementById("mostraindexes").innerHTML=v2indexes;
        break;
        case 'ultimo':            
            document.getElementById("mostraindexes").innerHTML=v2indexes.pop();
        break;
        case 'primeiro':
            v2indexes.shift();
            document.getElementById("mostraindexes").innerHTML=v2indexes;
        break;    
        case 'addelemento':            
            v2indexes.unshift("e");
            v2indexes.unshift("Aprendendo");
            document.getElementById("mostraindexes").innerHTML=v2indexes;
        break;    
        case 'deleta':
            delete v2indexes[0];
            document.getElementById("mostraindexes").innerHTML=v2indexes;
        break;    
        case 'concatena':
            var concatenado = v2indexes.concat(c, v4indexes);
            document.getElementById("mostraindexes").innerHTML=concatenado;
        break;x 
        case 'apartir':
            var partindo = v4indexes.slice(2);
            c
        break;  
        case 'transformaemstring':
            document.getElementById("mostraindexes").innerHTML=v4indexes.toString();
        break;  
        case 'ordemalfabetica':
            document.getElementById("mostraindexes").innerHTML=v3indexes.sort();
        break;  
        case 'crescente':
            v5indexes.sort(function(a, b){return a - b});
            document.getElementById("mostraindexes").innerHTML=v5indexes;
        break;  
        case 'decrescente':
            v5indexes.sort(function(a, b){return b - a});
            document.getElementById("mostraindexes").innerHTML=v5indexes;
        break;  
        case 'aleatorea':
            //Da para usar essa para fazer uma nova implementação no PizzaChosen!
            v5indexes.sort(function(a, b){return 0.5 - Math.random()});
            document.getElementById("mostraindexes").innerHTML=v5indexes;
        break;  
        case 'maiorvalor':
            v5indexes.sort(function(a, b){return b - a});
            var mvalor = v5indexes[0]
            document.getElementById("mostraindexes").innerHTML=mvalor;
        break;  
        case 'matrizComObjetos':
            document.getElementById("mostraindexes").innerHTML=
                "Eu estou tendo uma "+v6indexes[2].tipo+" de "+v6indexes[2].nome+" um(a) "+v6indexes[0].tipo+" de nome "+v6indexes[0].nome+" com um(a) "+
                v6indexes[1].tipo+" de nome "+v6indexes[1].nome
            ;
        break;  
        case 'maisvelhomaisnovo':
            var v7indexes = [
                {nome:"Pedrinho", idade:15},
                {nome:"Juninho", idade:14},
                {nome:"Leandro", idade:18}
            ];
            v7indexes.sort(function(a, b){return b.idade - a.idade});
            document.getElementById("mostraindexes").innerHTML=
                v7indexes[0].nome+" "+v7indexes[0].idade+" - "+
                v7indexes[1].nome+" "+v7indexes[1].idade+" - "+
                v7indexes[2].nome+" "+v7indexes[2].idade
            ;
        break;  
        case 'retornaoutraarray':
            var maiores3 = v5indexes.filter(funcfiltra);
            document.getElementById("mostraindexes").innerHTML=maiores3;
            function funcfiltra(value){
                return value > 3;
            }
        break;  
        case 'somamatriz5':
            var somandomatriz5 = v5indexes.reduce(funcsomatudo);
            document.getElementById("mostraindexes").innerHTML=somandomatriz5;
            function funcsomatudo(total, value, index, array){
                return total + value;
            }
        break;  
        // case :
        // break;  
    }
}
//W3schools - javascript - parei no js Dates