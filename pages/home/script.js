const login = document.getElementById("login");
const cardapio = document.getElementById("cardapio");
const pratosPopulares = document.getElementById("pratos-populares");
const reservas = document.getElementById("reservas");
const contatos = document.getElementById("contatos");


// validação das páginas


login.addEventListener("click", () =>{
    if(login.href == ""){
        window.location.href = ""
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

cardapio.addEventListener("click", () =>{
    if(cardapio.href == ""){
        window.location.href = ""
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

pratosPopulares.addEventListener("click", () =>{
    if(pratosPopulares.href == ""){
        window.location.href = ""
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

reservas.addEventListener("click", () =>{
    if(reservas.href == ""){
        window.location.href = ""
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

contatos.addEventListener("click", () =>{
    if(contatos.href == "http://127.0.0.1:5500/pages/Form%20contatos/contato/contatos.html"){
        window.location.href = "http://127.0.0.1:5500/pages/Form%20contatos/contato/contatos.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})




// hover do menu

login.addEventListener("mouseover", () => {
    login.style.color = "#B47110"
    login.style.fontWeight = "bold"
    login.style.borderBottom = "3px solid #B47110"
} )

login.addEventListener("mouseout", () => {
    login.style.color = ""
    login.style.fontWeight = ""
    login.style.borderBottom = ""
} )


cardapio.addEventListener("mouseover", () =>{
    cardapio.style.color = "#B47110"
    cardapio.style.fontWeight = "bold"
    cardapio.style.borderBottom = "3px solid #B47110"
})

cardapio.addEventListener("mouseout", () =>{
    cardapio.style.color = ""
    cardapio.style.fontWeight = ""
    cardapio.style.borderBottom = ""
})


pratosPopulares.addEventListener("mouseover", () =>{
    pratosPopulares.style.color = "#B47110"
    pratosPopulares.style.fontWeight = "bold"
    pratosPopulares.style.borderBottom = "3px solid #B47110"
})

pratosPopulares.addEventListener("mouseout", () =>{
    pratosPopulares.style.color = ""
    pratosPopulares.style.fontWeight = ""
    pratosPopulares.style.borderBottom = ""
})


reservas.addEventListener("mouseover", () =>{
    reservas.style.color = "#B47110"
    reservas.style.fontWeight = "bold"
    reservas.style.borderBottom = "3px solid #B47110"
})

reservas.addEventListener("mouseout", () =>{
    reservas.style.color = ""
    reservas.style.fontWeight = ""
    reservas.style.borderBottom = ""
})

contatos.addEventListener("mouseover", () =>{
    contatos.style.color = "#B47110"
    contatos.style.fontWeight = "bold"
    contatos.style.borderBottom = "3px solid #B47110"
})

contatos.addEventListener("mouseout", () =>{
    contatos.style.color = ""
    contatos.style.fontWeight = ""
    contatos.style.borderBottom = ""
})



