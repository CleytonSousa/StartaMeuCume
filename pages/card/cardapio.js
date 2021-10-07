const border = document.querySelectorAll(".pratos")
const negrito = document.querySelector(".contactEmail")
const maiusculo = document.querySelectorAll(".hPratos")
const pop = document.querySelector(".popUp")
const fotos = document.querySelectorAll(".contPhoto")
const fechar = document.querySelector(".closePop")



border.forEach(function(border){
    border.addEventListener("mouseover", () => {
        border.style.borderBottom = "3px solid #B47110";
        border.style.fontStyle = "italic";
    } )
}) // passar mouse nos pratos

border.forEach(function(border){
    border.addEventListener("mouseout", () => {
        border.style.borderBottom = "";
        border.style.fontStyle = ""
    } )
}) // retirar mouse pratos

negrito.addEventListener("mouseenter", function(event) {
    event.target.style.borderBottom = "3px solid #B47110";
    event.target.style.fontWeight = "bold";
  }); // passar mouse no link
  
negrito.addEventListener("mouseout", function(event) {
    event.target.style.borderBottom = "";
    event.target.style.fontWeight = "";
  }); // retirar mouse no link

fotos.forEach(function(fotos){
    fotos.addEventListener("click", ()=>{
        pop.style.display = "block"
        imagemCerta()
})
}); //aparecer popUp

fechar.addEventListener("click", () =>{
    pop.style.display = "none"
})

const imagemCerta = () =>{
    
}