const border = document.querySelectorAll(".pratos")
const negrito = document.querySelector(".contactEmail")
const maiusculo = document.querySelectorAll(".hPratos")
const pop = document.querySelector(".popUp")
const fotos = document.querySelectorAll(".contPhoto")
const fechar = document.querySelector(".closePop")
const selecionar = document.querySelector(".itensCard")
const selecionarDois = document.querySelector("#itensCard2")
const selecionarTreis = document.querySelector("#itensCard3")
const imgFic = document.getElementById("imagemFic")



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

 //aparecer popUp

fechar.addEventListener("click", () =>{
    pop.style.display = "none"
}) //fechar popUp

fotos.forEach(function(fo){
    fo.addEventListener("mouseover", () => {
        fo.style.opacity = "50%"        
    }) //opacidade na tela
})
fotos.forEach(function(fot){
    fot.addEventListener("mouseout", () => {
        fot.style.opacity = ""
    })
}) // retirar opacidade

fotos.forEach(function(foto){
    foto.addEventListener("click", ()=>{
        pop.style.display = "block"
        conteudo()
})
}); //mostrar popUP e adicionar conteudo 

fotos.forEach(function(fotob){
    fotob.addEventListener("click", ()=>{
        conteudoB()
})
}); //adicionar conteudo 

fotos.forEach(function(fotoc){
    fotoc.addEventListener("click", ()=>{
        conteudoC()
})
});//adicionar conteudo 

selecionar.addEventListener("click", (e) => {
    conteudo(e.target.id)
}) // pegar id do que eu clicar

selecionarDois.addEventListener("click", (e) => {
    conteudoB(e.target.id)
}) //pegar id do que eu clicar

selecionarTreis.addEventListener("click", (e) => {
    conteudoC(e.target.id)
})// pegar id do que eu clicar

function conteudo(cont){
    valor = cont
    if (valor == "imag0"){
        imgFic.setAttribute('src','/pages/card/img/comidas/buchada-de-bode-receita-jeito-nordestino.png')
        document.getElementById('nomeComida').innerHTML = "Buchada de bode"
        document.getElementById('porcao').innerHTML = "500gm"
        document.getElementById('acomp1').innerText = "arroz"
        document.getElementById('acomp2').innerText = "feijao macassar"
        document.getElementById('acomp3').innerText = "farinha"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$30,00"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if (valor == "imag1"){
        imgFic.setAttribute('src','/pages/card/img/comidas/sarapatel.png')
        document.getElementById('nomeComida').innerHTML = "Sarapatel"
        document.getElementById('porcao').innerHTML = "600gm"
        document.getElementById('acomp1').innerText = "arroz refogado"
        document.getElementById('acomp2').innerText = "feijao preto"
        document.getElementById('acomp3').innerText = "vinagrete"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$40,00"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    }  else if (valor == "imag2"){
        imgFic.setAttribute('src','/pages/card/img/comidas/galinha-a-cabidela.png')
        document.getElementById('nomeComida').innerHTML = "Galinha cabidela"
        document.getElementById('porcao').innerHTML = "300gm"
        document.getElementById('acomp1').innerText = "arroz refogado"
        document.getElementById('acomp2').innerText = "feijao tropeiro"
        document.getElementById('acomp3').innerText = "vinagrete e farofa"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$24,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    }   else if (valor == "imag3"){
        imgFic.setAttribute('src','/pages/card/img/comidas/maodevaca.png')
        document.getElementById('nomeComida').innerHTML = "Mão de vaca"
        document.getElementById('porcao').innerHTML = "400gm"
        document.getElementById('acomp1').innerText = "arroz branco"
        document.getElementById('acomp2').innerText = "feijao mulato"
        document.getElementById('acomp3').innerText = "purê"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$24,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else {
        null
    } 
} //setting da aba de comidas


function conteudoB(cont){
    valorB = cont
    if (valorB == "imag4"){
        imgFic.setAttribute('src','/pages/card/img/bebidas/pitu.png')
        imgFic.setAttribute('height','250px')
        document.getElementById('nomeComida').innerHTML = "Pitu do amor"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Dose"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$5,00"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if(valorB == "imag5"){
        imgFic.setAttribute('src','/pages/card/img/bebidas/acalcatrao.png')
        document.getElementById('nomeComida').innerHTML = "Alcatrão puro"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Dose"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$8,00"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if (valorB == "imag6"){
        imgFic.setAttribute('src','/pages/card/img/bebidas/mojito.png')
        imgFic.setAttribute('height','250px')
        document.getElementById('nomeComida').innerHTML = "Mojito"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Copo: 350Ml"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$12,00"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if (valorB == "imag7"){
        imgFic.setAttribute('src','/pages/card/img/bebidas/carreiteiro.png')
        imgFic.setAttribute('height', '300px')
        document.getElementById('nomeComida').innerHTML = "Carreteiro"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Copo: 350Ml"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$10,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    }
} //setting da aba de bebidas

function conteudoC(cont){
    valorC = cont
    if (valorC == "imag8"){
        imgFic.setAttribute('src','/pages/card/img/sobremesas/bolo-de-rolo.png')
        document.getElementById('nomeComida').innerHTML = "Bolo de rolo"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Porção: 300Mg"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$7,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if(valorC == "imag9"){
        imgFic.setAttribute('src','/pages/card/img/sobremesas/cocada.png')
        document.getElementById('nomeComida').innerHTML = "Cocada"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Porção: 150Mg"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$4,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if (valorC == "imag10"){
        imgFic.setAttribute('src','/pages/card/img/sobremesas/munguza.png')
        document.getElementById('nomeComida').innerHTML = "Munguza"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Porção: 400Mg"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$9,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    } else if (valorC == "imag11"){
        imgFic.setAttribute('src','/pages/card/img/sobremesas/cartola.png')
        document.getElementById('nomeComida').innerHTML = "Cartola"
        document.getElementById('acomp').innerText = ""
        document.getElementById('acomp1').innerText = ""
        document.getElementById('acomp2').innerText = ""
        document.getElementById('acomp3').innerText = ""
        document.getElementById('porcao').innerHTML = "Porção: 350Mg"
        var valores = document.getElementById('price')
        valores.innerText = "valor: R$14,99"
        valores.setAttribute("id","price")
        valores.style.fontWeight = "bold"
    }
} //setting da aba de Sobremesas