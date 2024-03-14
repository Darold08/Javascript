//01. Escreva um programa que peça ao usuário para digitar um número e, em seguida,
//imprima a tabuada desse número usando um loop while.

import dados from 'readline-sync'
let numero = dados.questionInt("Digite um numero: ");
let cont = 0;

while (cont <= 10) {
    let resultado = numero * cont;
    console.log(`${numero} x ${cont} = ${resultado}`);
    cont ++;
} 