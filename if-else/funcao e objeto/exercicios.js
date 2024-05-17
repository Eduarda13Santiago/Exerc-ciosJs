//Construiur um menu que é possivel escolher 
//um exercicio  entre os exercicios anteriores,para ser executado.
// Faça com que o menu repita a sua execução, 
//disponibilize  as opcoes para o usuário, até que seja digitado digitar "sair"


function anonascimento() {
    let ano = prompt("Digite o seu ano de nascimento")

    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - ano;

    if (idade >= 18) {
        console.log("você é maior de idade ")
        console.log("Sua idade é :" + idade)
    }

    else {
        console.log("Você é menor de idade ")
        console.log("Sua idade é:" + idade)
    }
}

function diadoaniversario() {
    let number = parseInt(prompt("Coloque o dia do seu aniversário e informaremos se este número é par ou ímpar: "))

    if (number % 2 == 0) {
        console.log("O número é par.");
    }

    else {
        console.log("O número é ímpar.");
    }
}


function tabuada() {
    let numero = parseInt(prompt("Digite um número para ver na tabuada: "))



    if (!isNaN(numero)) {

        for (let num = 1; num <= 10; num++) {
            console.log(numero + " X " + num + " = " + (numero * num));
        }

    } else {
        console.log("Número invalido. Por favor, digite um número válido.")
    }



}

function pesoealtura() {
    let peso = parseFloat(prompt("Informe o seu peso (em kg):"));

    let altura = parseFloat(prompt("Informe a sua altura (em metros): "))

    let imc = peso / (altura * altura);
    console.log("Seu IMC é:" + imc);

    if (imc < 18.5) {
        console.log("Abaixo do peso");
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        console.log("Peso normal");
    }
    else if (imc >= 25 && imc <= 29.9) {
        console.log("Sobrepeso");
    }
    else if (imc >= 30 && imc <= 34.9) {
        console.log("Obesidade grau 1");
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        console.log("Obesidade grau 2");
    }
    else {
        console.log("Obesidade grau 3");
    }
}


function contagem() {


    let numero = parseInt(prompt("Digite um número para a contagem regressiva: "));

    console.log("Contagem regressiva está começando em: " + numero)

    while (numero >= 0) {
        console.log(numero);
        numero--;
    }

    console.log("Contagem regressiva finalizada!");
}

function impressao() {

    for (let num = 0; num <= 50; num++) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    }
}



// let opcao;

// do {
//     opcao = window.prompt("MENU\nDigite a opção desejada:\n1- Ano de nascimento\n2 -Dia do seu aniversário \n3 - Tabuada \n4 - Peso e Altura \n5 - Contagem regressiva \n6 - Números ímpares de 0 a 50 \n ")

//     console.clear()

//     switch (opcao) {
//         case "1":
//             anonascimento()
//             break;

//         case "2":
//             diadoaniversario()
//             break;

//         case "3":
//             tabuada()
//             break;

//         case "4":
//             pesoealtura()
//             break;

//         case "5":
//             contagem()
//             break;

//         case "6":
//             impressao()
//             break;



//         default:
//             break;
//     }

// } while (opcao !== "sair");



let resposta = window.prompt("MENU\nDigite a opção desejada:\n1- Ano de nascimento\n2 -Dia do seu aniversário \n3 - Tabuada \n4 - Peso e Altura \n5 - Contagem regressiva \n6 - Números ímpares de 0 a 50 \n ")

while (resposta !== "sair") {


    switch (resposta) {
        case "1":
            anonascimento()
            break;

        case "2":
            diadoaniversario()
            break;

        case "3":
            tabuada()
            break;

        case "4":
            pesoealtura()
            break;

        case "5":
            contagem()
            break;

        case "6":
            impressao()
            break;



        default:
            break;
    }

    resposta = window.prompt("MENU\nDigite a opção desejada:\n1- Ano de nascimento\n2 -Dia do seu aniversário \n3 - Tabuada \n4 - Peso e Altura \n5 - Contagem regressiva \n6 - Números ímpares de 0 a 50 \n ")
    console.clear()
}


// switch (opcao) {
//     case "2":
//         diadoaniversario()
//         break;

//     default:
//         break;
// }


// switch (opcao) {
//     case "3":
//         tabuada()
//         break;

//     default:
//         break;
// }

// switch (opcao) {
//     case "4":
//         pesoealtura()
//         break;

//     default:
//         break;
// }

// switch (opcao) {
//     case "5":
//         contagem()
//         break;

//     default:
//         break;
// }

// switch (opcao) {
//     case "6":
//         impressao()
//         break;

//     default:
//         break;
// }
