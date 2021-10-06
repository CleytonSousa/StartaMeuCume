const horario = document.getElementById("horario"); 

const cancelar = document.getElementById("cancelar");
const voltar = document.getElementById("voltar"); 
const salvar = document.getElementById("salvar"); 

const data = document.getElementById("data")
const numeroDePessoas = document.getElementById("numero_de_pessoas");
const nome = document.getElementById("nome");
const email = document.getElementById("email");

let hoje = new Date(); // data de hoje
let dataPtBr = hoje.toLocaleDateString('pt-BR'); //baseando-se no idioma

// data de hoje -------
let arrayDiaMesAno = [];
arrayDiaMesAno = dataPtBr.split("/"); //dividir a data em dia, mês e ano.

// horário selecionado ------
let selected = "horario_1";


// funções ------
salvar.addEventListener("click", (e) => {
    // data informada
    let dataInformada = data.value;
    let arrayDataInformada = [];

    let emailValue = email.value;
    let nomeValue = nome.value;

    arrayDataInformada = dataInformada.split("-"); //ex.: 2021-09-01
    arrayDataInformada.reverse(); //ex.: 01-09-2021

    validarData(dataInformada, arrayDataInformada);


    // horario selecionado
    let time = document.getElementById(selected).value;
    let hora = hoje.getHours();


    if(parseInt(time) < hora && arrayDataInformada[0] <= arrayDiaMesAno[0] || arrayDataInformada[1] < arrayDiaMesAno[1]){
        document.getElementById("verificar_horario").textContent = "Horário inválido.";
        mensagemDeErro();
    }else if(numeroDePessoas.value == ""){ // Número de pessoas
        document.getElementById("verificar_numero_de_pessoas").textContent = "*Número de pessoas inválido.";
        mensagemDeErro();
    }else if(validateNome(nomeValue) == false){ // nome e email
        document.getElementById("verificar_nome_e_email").textContent = "*Nome ou email inválido.";
        mensagemDeErro();

    }else if(validateEmail(emailValue) == false){
        document.getElementById("verificar_nome_e_email").textContent = "*Nome ou email inválido.";
        mensagemDeErro();
    }else{
        limparMensagemDeErro();
    };

    // pop up
    let alerta = document.getElementById("virificar_todos_os_dados").textContent;
    
    popUp(alerta, arrayDataInformada);
});

function validarData(dataInformada, arrayDataInformada){
    if(arrayDataInformada[0] < arrayDiaMesAno[0] || arrayDataInformada[1] < arrayDiaMesAno[1] || arrayDataInformada[2] < arrayDiaMesAno[2]){
        document.getElementById("verificar_data").textContent = "*Data inválida.";
        mensagemDeErro();
    }else{
        document.getElementById("verificar_data").textContent = "";
        limparMensagemDeErro()
    };
};

function validateEmail(email) {
    let re = /\S+@\S+\.\S+/; 
    return re.test(email); //busca por uma correspondência entre  uma expressão regular e uma string. Retorna true ou false.
};

function validateNome(nome) {
    let re = /[A-Z][a-z]* [A-Z][a-z]*/;
    return re.test(nome); 
};

function popUp(alerta, arrayDataInformada){
    if(alerta == ""){
        document.getElementById("pop_up_salvar").classList.remove("pop_up_off");
        document.getElementById("pop_up_salvar").classList.add("pop_up_on");

        // informações_da_reserva
        let hoarioDaReserva = document.getElementById(selected).value;

        document.getElementById("informacoes_da_reserva_nome").textContent = nome.value;

        document.getElementById("informacoes_da_reserva_data").textContent = `Data: ${arrayDataInformada[0]}/${arrayDataInformada[1]}/${arrayDataInformada[2]}`;

        document.getElementById("informacoes_da_reserva_hora").textContent = `Hora: ${hoarioDaReserva}:00`;

        document.getElementById("informacoes_da_reserva_pessoas").textContent = `Número de pessoas: ${numeroDePessoas.value}`;

    };
};

function mensagemDeErro() {
    document.getElementById("virificar_todos_os_dados").textContent = "Por favor verifique se todos as informações foram preenchidos corretamente.";
};

function limparMensagemDeErro() {
    document.getElementById("virificar_todos_os_dados").textContent = "";

    document.getElementById("verificar_numero_de_pessoas").textContent = "";
    document.getElementById("verificar_horario").textContent = "";
    document.getElementById("verificar_nome_e_email").textContent = "";
};

cancelar.addEventListener("click", () => {
    document.getElementById("pop_up_cancelar").classList.remove("pop_up_off");
    document.getElementById("pop_up_cancelar").classList.add("pop_up_on");
});

voltar.addEventListener("click", () => {
    document.getElementById("pop_up_cancelar").classList.add("pop_up_off");
    document.getElementById("pop_up_cancelar").classList.remove("pop_up_on");


    // captar todos os elementos com ".check", o forEach() serve para percorrê-los e aplicar uma alteração. 
    let classCheck = document.querySelectorAll(".check");
    classCheck.forEach((elemento => {
        elemento.textContent = "";
    }));
});


horario.addEventListener("click", (e) => {
    let target = e.target.id;

    if(target == "horario_almoco" || target == "horario" || target == "horario_jantar" || target == "verificar_horario" || target == selected){
        return;
    };

    document.getElementById(target).classList.add("borda-horario");
    document.getElementById(selected).classList.remove("borda-horario");
    
    selected = target;
});

const finalizar_reserva = document.getElementById("finalizar_reserva")
finalizar_reserva.addEventListener("click", () => {
    document.location.reload(true);
});