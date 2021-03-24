// funcao sem retorno

function imprimirSoma(a, b){
    console.log(a+b)
}

// imprimirSoma(2, 3)
// imprimirSoma(2)

// funcao com retorno
function soma (a ,b = 0 ){
    return a + b 

}

resultado = soma(1)
console.log("Resultado: ",resultado)
console.log("Soma: ",soma(10))