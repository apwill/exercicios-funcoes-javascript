/**
 * O programa deve receber 3 argumentos (número, número e operador).
 * O programa deve realizar a operação baseada no operador que recebeu. ex: calc(2, 4, "+"), 
 * o resultado é: 6.
*/

function calc (num1, num2, operador = "+") {
    if(!(Number(num1) && Number(num2))) {

        return "É necessário dois números válidos"
    }

    let resultado;

    let convertNum1 = Number(num1)
    let convertNum2 = Number(num2)

    if(operador==="+") {
        resultado = convertNum1+convertNum2
    }

    if(operador==="-") {
        resultado = convertNum1-convertNum2
    }

    if(operador==="*") {
        resultado = convertNum1*convertNum2
    }

    if(operador==="/") {
        resultado = convertNum1/convertNum2
    }

    return resultado
}

console.log(calc(3, 4, "*"))
console.log(calc(3, 4, "/"))
console.log(calc(3, 4, "-"))
console.log(calc(3, 4, "+"))
console.log(calc(3, 4))
console.log(calc("3", 3))
console.log(calc(3.5, 4.2))