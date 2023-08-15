function Exercicio1 (salario){
    
    let salarioReajustado;
    
    
    if (salario <= 280){
        salarioReajustado = salario * 1.2;
        console.log("O Salário antes do reajuste é: R$", salario,
    "\n O percentual aplicado foi de 20%",
    "\n O valor do aumento será: R$", (salarioReajustado-salario),
    "\n O novo salário após o aumento será R$", salarioReajustado
     );
    } 
    
    else if(salario > 280 && salario < 700){
        salarioReajustado = salario *1.15;
        console.log("O Salário antes do reajuste é: R$", salario,
    "\n O percentual aplicado foi de 15%",
    "\n O valor do aumento será: R$", (salarioReajustado-salario),
    "\n O novo salário após o aumento será R$", salarioReajustado
     );
    } 
    
    else if(salario > 700 && salario < 1500){
        salarioReajustado = salario * 1.10; 
        console.log("O Salário antes do reajuste é: R$", salario,
    "\n O percentual aplicado foi de 10%",
    "\n O valor do aumento será: R$", (salarioReajustado-salario),
    "\n O novo salário após o aumento será R$", salarioReajustado
     );
    } 
    
    else if(salario > 1500){
        salarioReajustado = salario * 1.05;
        console.log("O Salário antes do reajuste é: R$", salario,
    "\n O percentual aplicado foi de 5%",
    "\n O valor do aumento será: R$", (salarioReajustado-salario),
    "\n O novo salário após o aumento será R$", salarioReajustado
     );
    }
}

module.exports = Exercicio1;

