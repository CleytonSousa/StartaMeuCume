const border = document.querySelectorAll(".pratos")
const negrito = document.querySelector(".contactEmail")
const maiusculo = document.querySelectorAll(".hPratos")
const pop = document.getElementById('popUp')


border.forEach(function(border){
    border.addEventListener("click", () => {
           pop.appendChild(pop)
    })

})
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
