
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


