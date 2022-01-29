
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

var inputText = "";
var outputText = ""; 
var pattern=/^[a-z\s]+$/;
document.getElementById("btn-encriptar").addEventListener("click", encript);
document.getElementById("btn-desencriptar").addEventListener("click", desencript);
document.getElementById("btn-copy").addEventListener("click", copyToClipBoard);

function encript() {
    inputText = document.getElementById('input-texto').value;

    if (pattern.test(inputText) === false) {
        
        alert("Solo ingresar caracteres soportados, lea instrucciones");

    } else {

        outputText = inputText.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
        
        document.getElementById('msg').value = outputText;
        document.getElementById("input-texto").value = ""; 
        
    }     
}

function desencript() {
    inputText = document.getElementById('input-texto').value; 

    if (pattern.test(inputText) === false) {

        alert("Solo ingresar caracteres soportados, lea instrucciones");
        
    } else {

        outputText =  inputText.replace(/enter/g, "e")
                                .replace(/imes/g, "i")
                                .replace(/ai/g, "a")
                                .replace(/ober/g, "o")
                                .replace(/ufat/g, "u");
                                
    document.getElementById('msg').value = outputText;
    document.getElementById("input-texto").value = ""; 
        
    }        
}

function copyToClipBoard() {

    var content = document.getElementById('msg');
    content.select();
    document.execCommand('copy');
    document.getElementById("msg").value = "";
    

}