

// exercício 01
console.log("\n\n**********_____ Exercício 01  _____**********");
const reajusteSalarial = require('./ex1.0.js');
//Insira o valor do salário na função abaixo
reajusteSalarial(1000);

console.log("\n\n**********_____ Exercício 02  _____**********");
const FolhaPagamento = require('./ex2.0');
//inserir salarioHora, horasTrabalhadas
FolhaPagamento(100, 44);

//Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo... 7 - sábado), se digitar outro valor deve aparecer valor inválido.
console.log("\n\n**********_____ Exercício 03 _____********** ");
const DiaDaSemana = require('./ex3');
DiaDaSemana(1);

console.log("\n\n**********_____ Exercício 04 _____********** ");
const Abastecimento = require('./ex4');
// inserit tipo de Combustível (g = gasolina, a = Alcool - E quantidade)
Abastecimento('g', 10);

console.log("\n\n**********_____ Exercício 05 _____********** ");
const PromocaoCarne = require('./ex5');
//inserir tipo carne (File duplo, Alcatra ou Picanha), quantidade de carne, tipo pagamento (Cartao Assai ou outros)

PromocaoCarne('File Duplo', 5.1, 'Cartao Assai');



