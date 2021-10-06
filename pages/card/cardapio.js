const details = document.querySelectorAll("li")
const italico = document.querySelectorAll(".pratos")
const popUp = document.querySelector("#popUpUm")
const fechar = document.querySelectorAll(".fecharPopUpUm")
const negrito = document.querySelector(".contactEmail")
const maiusculo = document.querySelectorAll(".hPratos")


details.forEach(function(details){
    details.addEventListener("click", () => {
        popUp.style.display = "block"
    })
}) // aparecer o popUp pratos

fechar.forEach(function(fechar){
    fechar.addEventListener("click", () => {
        popUp.style.display = "none"
    })
}) // fechar popUP

italico.forEach(function(italico){
    italico.addEventListener("mouseover", () => {
        italico.style.fontStyle = "italic";
        italico.style.fontSize = "30px"
    } )
}) // passar mouse nos pratos

italico.forEach(function(italico){
    italico.addEventListener("mouseout", () => {
        italico.style.fontStyle = "";
        italico.style.fontSize = ""
    } )
}) // retirar mouse pratos

negrito.addEventListener("mouseenter", function(event) {
    event.target.style.fontSize = "30px";
    event.target.style.fontWeight = "bold";
  }); // passar mouse no link
  
negrito.addEventListener("mouseout", function(event) {
    event.target.style.fontSize = "";
    event.target.style.fontWeight = "";
  }); // retirar mouse no link
