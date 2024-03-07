import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log(`Olá, ${nome}.`);

let x = entradaDados.questionInt('X: ');
let y = entradaDados.questionInt('Y: ');
console.log(`Total: ${x+y}`);