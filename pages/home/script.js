const login = document.getElementById("login");
const cardapio = document.getElementById("cardapio");
const pratosPopulares = document.getElementById("pratos-populares");
const reservas = document.getElementById("reservas");
const contatos = document.getElementById("contatos");
const menuHover = document.querySelectorAll(".menu");
const pratosImagens = document.querySelectorAll(".pratos-imagens");



// validação das páginas : cada função retorna o caminho de cada página


// Página de login

login.addEventListener("click", (e) =>{
    if(login.href == "https://cleytonsousa.github.io/StartaMeuCume/pages/login/login.html"){
        window.location.href = "https://cleytonsousa.github.io/StartaMeuCume/pages/login/login.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

// Página cardápio

cardapio.addEventListener("click", (e) =>{
    if(cardapio.href == "https://cleytonsousa.github.io/StartaMeuCume/pages/card/cardapio.html"){
        window.location.href = "https://cleytonsousa.github.io/StartaMeuCume/pages/card/cardapio.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

// Página pratos populares

pratosPopulares.addEventListener("click", (e) =>{
    if(pratosPopulares.href == "https://cleytonsousa.github.io/StartaMeuCume/pages/pratos/pratosPrincipais.html"){
        window.location.href = "https://cleytonsousa.github.io/StartaMeuCume/pages/pratos/pratosPrincipais.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

// Página de reservas

reservas.addEventListener("click", (e) =>{
    if(reservas.href == "https://cleytonsousa.github.io/StartaMeuCume/pages/reserva/reservas.html"){
        window.location.href = "https://cleytonsousa.github.io/StartaMeuCume/pages/reserva/reservas.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})

// Página de contatos

contatos.addEventListener("click", (e) =>{
    if(contatos.href == "https://cleytonsousa.github.io/StartaMeuCume/pages/FormContatos/contato/contatos.html"){
        window.location.href = "https://cleytonsousa.github.io/StartaMeuCume/pages/FormContatos/contato/contatos.html"
    } else{
        alert("A página não foi encontrada. Entre em contato com o restaurante.")
        e.preventDefault();
    }
})



// Hover do menu


menuHover.forEach(function(hover){
    hover.addEventListener("mouseover", () =>{
    hover.style.color = "#B47110"
    hover.style.fontWeight = "bold"
    hover.style.borderBottom = "3px solid #B47110"
    })
})

menuHover.forEach(function(hover){
    hover.addEventListener("mouseout", () =>{
    hover.style.color = ""
    hover.style.fontWeight = ""
    hover.style.borderBottom = ""
    })
})



// Opacidade nas imagens dos pratos


pratosImagens.forEach(function(opacidade){
    opacidade.addEventListener("mouseover", () => {
        opacidade.style.opacity = "50%" 
        opacidade.style.border = "3px solid #B47110"    
    })
})

pratosImagens.forEach(function(opacidade){
    opacidade.addEventListener("mouseout", () => {
        opacidade.style.opacity = ""   
        opacidade.style.border = ""     
    })
})


// Direcionar para pratos principais

pratosImagens.forEach(function(direcionar){
    direcionar.addEventListener("click", () =>{
        if(pratosImagens.href == ""){
            window.location.href = ""
        } else{
            alert("A página não foi encontrada. Entre em contato com o restaurante.")
            direcionar.preventDefault();
        }
    })
})