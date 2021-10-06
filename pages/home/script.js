const links = document.getElementById("contatos");
links.addEventListener("click", (e) =>{
    if(links.href != "pages/form-contatos/contato/contatos.html"){
        alert("página não encontrada.")
    }
})

