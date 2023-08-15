//Faça um script que leia um número e exiba o dia correspondente da semana. (1-Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.

let opcaoSemana = 2;

DiaDaSemana(opcaoSemana);


function DiaDaSemana(opcao)
{
    switch(opcao){

        case 1: 
            console.log("Domingo");
        break;

        case 2: 
            console.log("Segunda");
        break;

        case 3: 
            console.log("Terça-Feira");
        break;

        case 4: 
            console.log("Quarta-Feira");
        break;

        case 5: 
            console.log("Quinta-Feira");
        break;

        case 6: 
            console.log("Sexta-Feira");
        break;

        case 7: 
            console.log("Sábado");
        break;

        default: 
        console.log("Valor inválido!!")
    }


}