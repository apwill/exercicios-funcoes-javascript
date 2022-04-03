/**
 * A minha função deve dividir 2 números.
 * A minha função deve receber 2 argumentos.
 * A minha função deve mostrar na tela uma mensagem com o resultado
*/

function divisao(num1, num2) {
    let resultadoDivisao = num1/num2
    let mensagem = `A divisão entre ${num1} e ${num2} é igual a ${resultadoDivisao}`

    return mensagem
}

console.log(divisao(8, 4))