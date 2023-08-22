
// 1. O Hipermercado Assaí está com uma promoção de carnes que é imperdível. Confira:
    
// Até 5 Kg               Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg

// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente.
// Se compra for feita no cartão Assaí o cliente receberá ainda um desconto de 5% sobre o total a compra. 

// Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.


module.exports = PromocaoCarne;
function PromocaoCarne (tipoCarne, quantidadeCarne, tipoPagamento){

    
    let precoSemDescontos;
    let descontoCartao = 0.95;
    let fileDuploAte5kg = 4.9;
    let fileDuploMaior5kg = 5.8;
    let alcatraAte5kg = 5.90;
    let alcatraMaior5kg = 6.80;
    let picateAte5kg = 6.90;
    let picateMaior5kg = 7.90;

    if(tipoPagamento == "Cartao Assai"){
        switch (tipoCarne){
            case "File Duplo":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * fileDuploAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * fileDuploMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
            break;

            case "Alcatra":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * alcatraAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * alcatraMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
            break;

            case "Picanha":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * picateAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${(precoSemDescontos * descontoCartao)}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * picateMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${precoSemDescontos - (precoSemDescontos * descontoCartao)}
                    \n Valor a pagar: R$ ${precoSemDescontos * descontoCartao}` )    
        
                }
            break;

            default:
                console.log("Digite um tipo válido de Carne: \n File Duplo, Alcatra ou Picanha!!");  

        }
        
    }
    else{ // sem desconto
        switch (tipoCarne){
            case "File Duplo":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * fileDuploAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * fileDuploMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}`)    
        
                }
            break;

            case "Alcatra":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * alcatraAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * alcatraMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
            break;

            case "Picanha":
                if(quantidadeCarne <= 5){
                    precoSemDescontos = quantidadeCarne * picateAte5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ 
                    \n Valor a pagar: R$ ${(precoSemDescontos)}` )    
        
                }
                else{
                    precoSemDescontos = quantidadeCarne * picateMaior5kg;
                    console.log(`
                    \n Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${precoSemDescontos}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ }
                    \n Valor a pagar: R$ ${precoSemDescontos}` )    
        
                }
            break;

            default:
                console.log("Digite um tipo válido de Carne: \n File Duplo, Alcatra ou Picanha!!"); 
        }
    }

    

}




