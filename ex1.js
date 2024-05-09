//Exercício 1: Verificação de login
//Escreva um programa que solicita ao usuário um nome de usuário e uma senha. Verifique se o
//nome de usuário é admin e a senha é senha123. Exiba uma mensagem indicando se o login
//foi bem-sucedido ou não.
//"admin" e a senha é "senha123"
//Exiba uma mensagem indicando se o login foi bem-sucedido ou não.

//solicita ao usuario um nome de usuario.
let username = prompt("Digite um nome de usuário: ");


//solicita ao usuario uma senha.
let senha = prompt("Digite a senha: ");


//verifique se o nome de usuario é"admin" e a senha é "senha123".
//CASO SIM -> Exiba a mensagem de login bem sucedida .
//CASO NÃO -> Exiba uma mensagem de usuario ou senha incorreta.

if (username == "admin" && senha == "senha123") {
    console.log("Login bem sucedido");
}
else{
    console.log("Você não tem permissão de acesso!");
}



//Exiba uma mensagem indicando se o login foi bem sucedido ou não

