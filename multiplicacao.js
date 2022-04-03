/**
 * A minha função deve multiplicar 2 números. 
 * A minha função deve receber 2 argumentos para multiplicar 2 números. 
 * A minha função deve exibir na tela uma mensagem com o resultado da multiplicação.
*/

function multiplicacao (num1, num2) {
    let resultadoMultiplicacao = num1*num2
    let mensagem = `A multiplicação entre ${num1} e ${num2} é igual a ${resultadoMultiplicacao}`

    return mensagem
}

console.log(multiplicacao(4, 2))