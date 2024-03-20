let sectionResultado = document.querySelector('.caja-resultado');
let sectionSinResultado = document.querySelector('.caja-sin-resultado');

function verificarTexto(texto){ 
    let textoHabilitado = false; 
    let cantidadLetras = 0;
    const letrasPosibles = "abcdefghijklmnñopqrstuvwxyz ";

    for(var i = 0; i < texto.length; i++){
        let letra = texto[i];
        if(letrasPosibles.includes(letra) == true){
            cantidadLetras ++;
        }
    }

    if(cantidadLetras != texto.length){
        textoHabilitado = false;                
    }

    else{
        textoHabilitado= true;
    }

    return textoHabilitado;
}

function encriptar(textoParaEncriptar){
    let matrixCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    for(let i = 0; i < matrixCodigo.length; i++){
        if(textoParaEncriptar.includes(matrixCodigo[i][0])){
            textoParaEncriptar = textoParaEncriptar.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1]);
        }
    }
    return textoParaEncriptar;
}


function desencriptar(textoParaDesencriptar){
    let matrixCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
   

    for(let i = 0; i < matrixCodigo.length; i++){
        if(textoParaDesencriptar.includes(matrixCodigo[i][1])){
            textoParaDesencriptar = textoParaDesencriptar.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0]);
        }
    }
    return textoParaDesencriptar;
}



function cambiarSections(){
    if(document.querySelector(".texto-input").value != "" ){
        sectionSinResultado.style.display ="none";
        sectionResultado.style.display ="inline-block";
    }
    else{
        sectionSinResultado.style.display ="inline-block";
        sectionResultado.style.display ="none";
    }
}

function botonEncriptar(){
    
    let txtIngresado = document.querySelector(".texto-input").value;
    let habilitado = verificarTexto(txtIngresado);

    if(habilitado == false){
        alert("Solo minusculas y sin acentos!");
    }
    else{
        cambiarSections();
        let txtEncriptado = encriptar(txtIngresado);
        document.querySelector('.parrafoResultado').textContent = txtEncriptado;
    }
    
}

function botonDesencriptar(){
    let txtIngresado = document.querySelector(".texto-input").value;
    let habilitado = verificarTexto(txtIngresado);

    if(habilitado == false){
        alert("Solo minusculas y sin acentos!");
    }
    else{
        cambiarSections();
        let txtDesencriptado = desencriptar(txtIngresado);
        document.querySelector('.parrafoResultado').textContent = txtDesencriptado;
    }

}

function botonCopiar(){
    let resultado = document.getElementById("parrafoResultado").textContent;
    let inputTemp = document.createElement("input");

    inputTemp.value = resultado;

    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
}
