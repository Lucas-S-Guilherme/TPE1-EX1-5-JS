
function FolhaPagamento(salarioHora, horasTrabalhadas){

    let salarioBrutoMes = salarioHora*horasTrabalhadas;
    let salarioReajustado;
    let FGTS = 0.11;
    let INSS = 0.1;
    
    if (salarioBrutoMes <= 900){
        console.log(`Salário Bruto: (${horasTrabalhadas}h * R$${salarioHora}) = R$${salarioBrutoMes}
        \n (-) ISENTO DE IR - SALÁRIO ABAIXO DE R$900,00
        \n (-) INSS (10%)         : R$ ${salarioBrutoMes*INSS}
        \n FGTS (11%)             : R$ ${salarioBrutoMes*FGTS}
        \n Total de descontos     : R$ ${salarioBrutoMes*INSS}
        \n Salário Líquido        : R$ ${(salarioBrutoMes) - (salarioBrutoMes * INSS)}     `);
    } 
    
    else if(salarioBrutoMes > 900 && salarioBrutoMes <= 1500){
        console.log(`Salário Bruto: (${horasTrabalhadas}h * R$${salarioHora}) = R$${salarioBrutoMes}
        \n (-) IR (5%)            : R$ ${salarioBrutoMes*0.05}
        \n (-) INSS (10%)         : R$ ${salarioBrutoMes*INSS}
        \n FGTS (11%)             : R$ ${salarioBrutoMes*FGTS}
        \n Total de descontos     : R$ ${salarioBrutoMes*(INSS+0.05)}
        \n Salário Líquido        : R$ ${(salarioBrutoMes) - (salarioBrutoMes * (INSS+0.05))}     `);
    } 
    
    else if(salarioBrutoMes > 1500 && salarioBrutoMes <= 2500){
        console.log(`Salário Bruto: (${horasTrabalhadas}h * R$${salarioHora}) = R$${salarioBrutoMes}
        \n (-) IR (10%)            : R$ ${salarioBrutoMes*0.1}
        \n (-) INSS (10%)         : R$ ${salarioBrutoMes*INSS}
        \n FGTS (11%)             : R$ ${salarioBrutoMes*FGTS}
        \n Total de descontos     : R$ ${salarioBrutoMes*(INSS+0.1)}
        \n Salário Líquido        : R$ ${(salarioBrutoMes) - (salarioBrutoMes * (INSS+0.1))}     `);
    } 
    
    else if(salarioBrutoMes > 2500){
        console.log(`Salário Bruto: (${horasTrabalhadas}h * R$${salarioHora}) = R$${salarioBrutoMes}
        \n (-) IR (20%)            : R$ ${salarioBrutoMes*0.2}
        \n (-) INSS (10%)         : R$ ${salarioBrutoMes*INSS}
        \n FGTS (11%)             : R$ ${salarioBrutoMes*FGTS}
        \n Total de descontos     : R$ ${salarioBrutoMes*(INSS+0.2)}
        \n Salário Líquido        : R$ ${(salarioBrutoMes) - (salarioBrutoMes * (INSS+0.2))}     `);
    } 

}

module.exports = FolhaPagamento;





