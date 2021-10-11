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


// INICIO TESTE MENU



$(document).ready(function(){
    $window = $(window);
        $('section[data-type="background"]').each(function(){
            var $scroll = $(this);                 
            $(window).scroll(function() {
            var yPos = -($window.scrollTop() / $scroll.data('speed')); 
            var coords = '50% '+ yPos + 'px';
            $scroll.css({ backgroundPosition: coords });    
        });
    });  
});




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
























// // hover do menu

// login.addEventListener("mouseover", () => {
//     login.style.color = "#B47110"
//     login.style.fontWeight = "bold"
//     login.style.borderBottom = "3px solid #B47110"
// } )

// login.addEventListener("mouseout", () => {
//     login.style.color = ""
//     login.style.fontWeight = ""
//     login.style.borderBottom = ""
// } )


// cardapio.addEventListener("mouseover", () =>{
//     cardapio.style.color = "#B47110"
//     cardapio.style.fontWeight = "bold"
//     cardapio.style.borderBottom = "3px solid #B47110"
// })

// cardapio.addEventListener("mouseout", () =>{
//     cardapio.style.color = ""
//     cardapio.style.fontWeight = ""
//     cardapio.style.borderBottom = ""
// })


// pratosPopulares.addEventListener("mouseover", () =>{
//     pratosPopulares.style.color = "#B47110"
//     pratosPopulares.style.fontWeight = "bold"
//     pratosPopulares.style.borderBottom = "3px solid #B47110"
// })

// pratosPopulares.addEventListener("mouseout", () =>{
//     pratosPopulares.style.color = ""
//     pratosPopulares.style.fontWeight = ""
//     pratosPopulares.style.borderBottom = ""
// })


// reservas.addEventListener("mouseover", () =>{
//     reservas.style.color = "#B47110"
//     reservas.style.fontWeight = "bold"
//     reservas.style.borderBottom = "3px solid #B47110"
// })

// reservas.addEventListener("mouseout", () =>{
//     reservas.style.color = ""
//     reservas.style.fontWeight = ""
//     reservas.style.borderBottom = ""
// })

// contatos.addEventListener("mouseover", () =>{
//     contatos.style.color = "#B47110"
//     contatos.style.fontWeight = "bold"
//     contatos.style.borderBottom = "3px solid #B47110"
// })

// contatos.addEventListener("mouseout", () =>{
//     contatos.style.color = ""
//     contatos.style.fontWeight = ""
//     contatos.style.borderBottom = ""
// })

//CODIGO DE THAYZA A CIMA


/*--------------------------- header - nav Matheus ----------------------*/


// mobile menu
// const menuOpen = document.getElementById("menuIconOpen");
// menuOpen.addEventListener("click", () => {
//     document.getElementById("menuIconClose").style.display = "flex";
//     document.getElementById("menuIconOpen").style.display = "none";

//     document.getElementById("navMobiel").style.display = "flex"
// })

// const menuClose = document.getElementById("menuIconClose");
// menuClose.addEventListener("click", () => {
//     document.getElementById("menuIconOpen").style.display = "flex";
//     document.getElementById("menuIconClose").style.display = "none";

//     document.getElementById("navMobiel").style.display = "none"


// })


/*--------------------------- header - nav ----------------------*/




