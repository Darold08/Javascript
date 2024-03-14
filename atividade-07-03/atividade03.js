import calcu from 'readline-sync';

let x = calcu.questionFloat("Digite o primeiro numero: ")
let y = calcu.questionFloat("Digite o segundo numero: ")
let operação = calcu.question("Digite a operaçao desejada entre as opcoes + - * / ^: ")

switch (operação) {
    case "+":
        console.log(`${x + y}`)
        break;
    case "-":
        console.log(`${x - y}`)
        break;
    case "*":
        console.log(`${x * y}`)
        break;
    case "/":
        console.log(`${x / y}`)
        break;
    case "^":
        console.log(`${x ^ y}`)
        break;
    default:
        console.log(`Operação inválida!`)
        break;
}