//TRANSIÇÃO DE MENU FIXO COM SCROLL

$(document).ready(function(){

    var myNavBar = {
    
        flagAdd: true,
    
        elements: [],
    
        init: function (elements) {
            this.elements = elements;
        },
    
        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
    
        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }
    
    };
    
    myNavBar.init(  [
        "header",
        "header-container",
        "brand"
    ]);
    
    function offSetManager(){
    
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;
    
        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }
    
    }
    
    window.onscroll = function(e) {
        offSetManager();
    }
    
    offSetManager();
    });



// // validação das páginas

const login = document.getElementById("login");
const cardapio = document.getElementById("cardapio");
const pratosPopulares = document.getElementById("pratos-populares");
const reservas = document.getElementById("reservas");
const contatos = document.getElementById("contatos");


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






