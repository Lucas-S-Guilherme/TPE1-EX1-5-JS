
// 1. O Hipermercado Assaí está com uma promoção de carnes que é imperdível. Confira:
    
// Até 5 Kg               Acima de 5 Kg
// File Duplo      R$ 4,90 por Kg          R$ 5,80 por Kg
// Alcatra           R$ 5,90 por Kg          R$ 6,80 por Kg
// Picanha          R$ 6,90 por Kg          R$ 7,80 por Kg

// Para atender a todos os clientes, cada cliente poderá levar apenas um dos tipos de carne da promoção, porém não há limites para a quantidade de carne por cliente.
// Se compra for feita no cartão Assaí o cliente receberá ainda um desconto de 5% sobre o total a compra. 

// Escreva um script que peça o tipo e a quantidade de carne comprada pelo usuário e gere um cupom fiscal, contendo as informações da compra: tipo e quantidade de carne, preço total, tipo de pagamento, valor do desconto e valor a pagar.

function PromocaoCarne (tipoCarne, tipoPagamento, quantidadeCarne){

    let tipoCarne = "File Duplo";
    let tipoPagamento = "Cartao Assai";
    let quantidadeCarne = 5;
    let preçoTotal;
    let descontoCartao = 0.05;
    
    if(tipoPagamento == "Cartao Assai"){
        switch (tipoCarne){
            case "File Duplo":
                if(quantidadeCarne <= 5){
                    preçoTotal = quantidadeCarne * 4.9 * (1 - descontoCartao);
                    console.log(`
                    Tipo da carne: ${tipoCarne}
                    \n Quantidade de carne: ${quantidadeCarne}
                    \n Preço total R$ ${preçoTotal}
                    \n Tipo de Pagamento: ${tipoPagamento}
                    \n Valor do desconto: R$ ${quantidadeCarne * 4.9 * descontoCartao}
                    \n Valor a pagar: R$ ${preçoTotal}` )    
        
                }
        }
    }

}




