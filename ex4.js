// 1. Um posto está vendendo combustíveis com a seguinte tabela de descontos:
//     - Álcool: até 20 litros, desconto de 3% por litro acima de 20 litros, desconto de 5% por litro
//     - Gasolina: até 20 litros, desconto de 4% por litro acima de 20 litros, desconto de 6% por litro
    
//     Escreva um algoritmo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se que o preço do litro da gasolina é R$ 2,50 o preço do litro do álcool é R$ 1,90

let gasolina = 2.5;
let alcool = 1.9;

let tipoCombustivel = "g";
let quantidadeCombustivel = 19;

console.log(``)

switch (tipoCombustivel){
    case "a":
        if(quantidadeCombustivel <= 20){
            alcool *= 0.97;
            console.log(`Abastecido ${quantidadeCombustivel} Litros de Álcool 
            \nO valor a ser pago é de R$${quantidadeCombustivel * alcool}`);
        }
        else {
            alcool *= 0.95;
            console.log(`Abastecido ${quantidadeCombustivel} Litros de Álcool 
            \n O valor a ser pago é de R$${quantidadeCombustivel * alcool}`)}
        break;
    
    case "g":
        if(quantidadeCombustivel <= 20){
            gasolina *= 0.96;
            console.log(`Abastecido ${quantidadeCombustivel} Litros de Gasolina 
            \n O valor a ser pago é de R$${quantidadeCombustivel * gasolina}`);
        }
        else {
            gasolina *= 0.94;
            console.log(`Abastecido ${quantidadeCombustivel} Litros de Gasolina
            \n O valor a ser pago é de R$${quantidadeCombustivel * gasolina}`)}
        break;

}
