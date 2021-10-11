
//validação
const botaoAcess = document.getElementById("btnAcess");
botaoAcess.addEventListener("click", function(verificacao){
    var loginCampo = document.getElementById("emailLogin").value;
    var passCampo = document.getElementById("pass").value;
    
    if((validarEmail(loginCampo)) && (passCampo.length>=8)){
        document.getElementById("preencha").style.display = "none";
        document.getElementById("fundo-popup-boasvindas").style.display = "flex";
        verificacao.preventDefault();
    }
    else{
        document.getElementById("fundo-popup-boasvindas").style.display = "none";
        document.getElementById("preencha").style.display = "flex";
        verificacao.preventDefault();
    }
});

//Email
function validarEmail(email){
    var validacao =  /\S+@\S+.\S+/;
    return validacao.test(email)
}

//Esqueceu Senha
const cliqueAquiLink = document.getElementById("cliqueAqui");
cliqueAquiLink.addEventListener("click", function(entrarContato){
    document.getElementById("fundo-popup-senha").style.display="flex"
});
//voltar
const btnVoltar = document.getElementById("btn-voltar");
btnVoltar.addEventListener("click", function(botaoVoltar){
    document.getElementById("fundo-popup-senha").style.display="none"
});
