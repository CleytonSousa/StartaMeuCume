let apiId = "" //"051dc57bd39347eaa2068fa743cafade"

function fazPost(url, body){
    console.log("Body= ", body)
    let request = new XMLHttpRequest();
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function(){
        console.log(this.responseText)
    }
    return  request.responseText
}

function fazerContato(){
    let url = `https://crudcrud.com/api/${apiId}/contatos`;

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let assunto = document.getElementById("assunto").value;
    let mensagem = document.getElementById("mensagem").value;


    let body = {
        "nome": name,
        "email": email,
        "numero": number,
        "sobre": assunto,
        "mensagem": mensagem

    }

    fazPost(url, body)
}


function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

function criarLinha(usuario){
    let linha = document.createElement('tr');
    let tdEmail = document.createElement("td");
    let tdNome = document.createElement("td");
    let tdNumero = document.createElement("td");
    let tdSobre = document.createElement("td");
    let tdMsg = document.createElement("td")


    tdNome.innerHTML = usuario.nome
    tdEmail.innerHTML = usuario.email
    tdNumero.innerHTML = usuario.numero
    tdSobre.innerHTML = usuario.sobre
    tdMsg.innerHTML = usuario.mensagem
    

   
    linha.appendChild(tdNome);
    linha.appendChild(tdEmail);
    linha.appendChild(tdNumero);
    linha.appendChild(tdSobre);
    linha.appendChild(tdMsg);


    return linha;
}

function main(){
    let data = fazGet(`https://crudcrud.com/api/${apiId}/contatos`);
    let usuarios = JSON.parse(data);
    let tabela = document.getElementById('tabela')

    usuarios.forEach(element => {
        let linha = criarLinha(element);
        tabela.appendChild(linha);
    });
    //para cada usuario
    //criar linha e add a tabela
     
}
main();
