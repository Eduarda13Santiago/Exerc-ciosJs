// Exercício 5: Verificação de números em ordem crescente
// Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
// crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
// não.


let numero1 = parseFloat(prompt("Digite o primeiro número"));

let numero2 = parseFloat(prompt("Digite o segundo número"));

let numero3 = parseFloat(prompt("Digite o terceiro número"));

if (numero1 < numero2 && numero2 < numero3) {
    console.log("Os números estão em ordem crescente.");
} 

else if (numero1 > numero2 && numero2 > numero3){
    console.log("Os números  estão em ordem decrescente.");
}
 
else{
    console.log("Os números NÃO estão em ordenado")
}