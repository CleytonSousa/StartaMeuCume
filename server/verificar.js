function validarForm(){

let name = document.getElementById("name").value
let email = document.getElementById("email").value
let number = document.getElementById("number").value
let assunto = document.getElementById("assunto").value
let mensagem = document.getElementById("mensagem").value


let regexName = /[1-9]/
let regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
let regexNumber = /[a-zA-Z]/


    if(name === ""){
        document.getElementById("erroMsgName").innerHTML = "O campo <b><u>Nome</b></u> não pode estar vazio!"
    }

    else if(regexName.test(name) == true){
        document.getElementById("erroMsgName").innerHTML = "<b><u>Nome</b></u> não pode conter apenas numeros!"
    }

    else if(name.indexOf('@' || '#' || '$' || '%' || '*' || '(' || ')' || '_' || '||' || '+') > -1){
        document.getElementById("erroMsgName").innerHTML = "O campo <b><u>Nome</b></u> não pode conter caracteres especiais!"
    }

    if(regexEmail.test(email) == false){
        document.getElementById("erroMsgEmail").innerHTML = "Erro, <b><u>Email</b></u> invalido!"
    }

    if(regexNumber.test(number) == true){
        document.getElementById("erroMsgNumber").innerHTML = "<b><u>Numero</b></u> não pode conter letras"
    }
    if(number === ""){
        document.getElementById("erroMsgNumber").innerHTML = "<b><u>Numero</b></u> não pode ficar vazio"
    }

    if(assunto === ""){
        document.getElementById("erroMsgAssunto").innerHTML = "O <b><u>assunto</b></u> não pode estar vazio"
    }
    if(mensagem === ""){
        document.getElementById("erroMsgMensagem").innerHTML = "O campo <b><u>mensagem</u></b> não pode estar vazio"
    }
}


function limparErroMsg(){
    document.getElementById("erroMsgName").innerHTML = ""
    document.getElementById("erroMsgName").innerHTML = ""
    document.getElementById("erroMsgName").innerHTML = ""
    document.getElementById("erroMsgEmail").innerHTML = ""
    document.getElementById("erroMsgNumber").innerHTML = ""
}

let btnClean = document.getElementById("cleanBtn")

btnClean.addEventListener("click", ()=>{
    document.getElementById("name").value = ""
    document.getElementById("email").value = ""
    document.getElementById("number").value = ""
    document.getElementById("assunto").value = ""
    document.getElementById("mensagem").value = ""
});