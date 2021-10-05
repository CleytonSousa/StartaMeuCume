
//validação
const botaoAcess = document.getElementById("btnAcess");
botaoAcess.addEventListener("click", function (verificacao){
    let loginCampo = document.getElementById("login").value;
    let passCampo = document.getElementById("pass").value;
    
    if(loginCampo=="" && passCampo==""){
        document.getElementById("obs").innerHTML = "Campos vazios";
        verificacao.preventDefault();
    }
    
    //boas-vindas pop-up
});

// boas-vindas pop-up
function boasvindas(){
   
}

// Esqueceu Senha