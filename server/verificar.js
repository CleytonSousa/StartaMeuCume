function verify(){

    //pegando valores dos inputs do form
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let assunto = document.getElementById('assunto').value
    let mensagem = document.getElementById('mensagem').value

//verificar se todos foram preenchidos
    if(name == ""){
        alert("Erro, nome mal definido!")
        return
    } else if(email == ""){
        alert("Erro, email mal definido")
        return
    } else if(number == ""){
        alert("Erro, numero de contato mal definido")
        return
    } else if(assunto == ""){
        alert("Erro, preencha o campo assunto")
            return
    } else if(mensagem == ""){
        alert("Erro, campo de texto vazio!")
        return
    } else {
        alert("Mensagem enviada com sucesso!")
        window.location.reload(true) //se todas as infos forem preenchidas a pagina deve recarregar, sem isso da erro ao enviar o form data
        return
    }
}

function clean(){
    //botão pra limpar todos os inputs
    document.getElementById('name').value = ""
    document.getElementById('email').value = ""
    document.getElementById('number').value = ""
    document.getElementById('assunto').value = ""
    document.getElementById('mensagem').value = ""
}