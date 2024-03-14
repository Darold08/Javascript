import ques from "readline-sync";

let salario = ques.questionFloat("Digite o seu salário atual: ");
let boni = ques.question("Digite seu grau de bonificação(A, B, C e D): ");
let percen = 0

switch (boni) {
    case "A":
        percen = 0.05;
        console.log(`Com a bonificação, seu salário atual será de ${salario + (salario * percen)}`);
        break;
    case "B":
        percen = 0.10;
        console.log(`Com a bonificação, seu salário atual será de ${salario + (salario * percen)}`);
        break;
    case "C":
        percen = 0.15;
        console.log(`Com a bonificação, seu salário atual será de ${salario + (salario * percen)}`);
        break;
    case "D":
        percen = 0.05;
        console.log(`Com a bonificação, seu salário atual será de ${salario + (salario * percen)}`);
        break;
    default:
        console.log(`Bonificação inexistente, seu salário atual continua sendo ${salario}`)
        break;
}