var cnpj = "";

function capture(){
    cnpj = document.getElementById('cnpj').value;
    let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
    let digitos = cnpj.split("-")[1];
    document.getElementById('valorDigitado').innerHTML = numeros + digitos;

    if (getPrimeiroDigito(numeros) != digitos[0])
        return  document.getElementById('valorDigitado').innerHTML = numeros + digitos + " - Invalido";
    

    if (getSegundoDigito(numeros+""+digitos[0]) != digitos[1])
        return  document.getElementById('valorDigitado').innerHTML = numeros + digitos + " - Invalido";
    

    return document.getElementById('valorDigitado').innerHTML = numeros + digitos + " - Valido";
}


function getPrimeiroDigito(numeros){
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i>= 0; i--){
        resultado += numeros[i] * peso;
        peso = (peso == 9 ? 2 : peso+1)
    }
    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo)

    return resultado;
}

function getSegundoDigito(numeros){
    let peso = 2;
    let resultado = 0;
    for (let i = numeros.length - 1; i>= 0; i--){
        resultado += numeros[i] * peso;
        peso = (peso == 9 ? 2 : peso+1)
    }
    modulo = resultado % 11;
    resultado = (modulo < 2 ? 0 : 11 - modulo)

    return resultado;
    return 0;
}






























var cnpj2 ="";

function valida_cnpj(cnpj){
    let numeros = cnpj.split("-")[0].replace(/[.|\/]/g, "");
    let digitos =cnpj.split("-")[1];
}

