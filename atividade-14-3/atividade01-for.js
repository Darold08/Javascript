// 01. Escreva um programa que calcule e imprima os primeiros 20 números da sequência de Fibonacci.

// Inicializar os dois primeiros números da sequência de Fibonacci
let anterior = 0;
let atual = 1;

// Imprimir os dois primeiros números da sequência de Fibonacci
console.log(anterior);
console.log(atual);

// Loop para calcular e imprimir os próximos 18 números da sequência
for (let i = 3; i <= 20; i++) {
    // Calcular o próximo número da sequência como a soma dos dois números anteriores
    let proximo = anterior + atual;

    // Imprimir o próximo número da sequência
    console.log(proximo);

    // Atualizar os valores dos dois números mais recentes na sequência para os próximos cálculos
    anterior = atual;
    atual = proximo;
}

