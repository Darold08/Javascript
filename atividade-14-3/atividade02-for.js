// 02. Crie um algoritmo leia um nome e o salário bruto de 10 pessoas. Calcule e imprima o nome e o valor de imposto de renda a ser pago.
// Calcule o total de Imposto de Renda a ser pago  conforme a tabela abaixo:
// Salário <= R$ 2.100,00 = isento
// Salário <= R$ 2.800,00 = 7,5%
// Salário <= R$ 3.750,00 = 15%
// Salário <= R$ 4.660,00 = 22.5%
// Salário > R$ 4.660,00 = 27.5%

import rl, { questionInt } from 'readline-sync';

for (let i = 1; i <= 2; i++) {
    // Ler o nome e o salário bruto da pessoa
    let nome = rl.question(`Informe o nome da ${i}ª pessoa: `);
    let salario = rl.questionFloat(`Informe o salário de ${nome}: `);

    // Calcular o imposto de renda conforme a tabela
    let impostoRenda = 0;

    if (salario <= 2100) {
        impostoRenda = 0;
    } else if (salario <= 2800) {
        impostoRenda = salario * 0.075;
    } else if (salario <= 3750) {
        impostoRenda = salario * 0.15;
    } else if (salario <= 4660) {
        impostoRenda = salario * 0.225;
    } else {
        impostoRenda = salario * 0.275;
    }

    // Imprimir o nome e o valor do imposto de renda
    console.log(`\nImposto de Renda a ser pago`);
    console.log(`Nome: ${nome} \nImposto de Renda: R$ ${impostoRenda.toFixed(2)}\n`);
}