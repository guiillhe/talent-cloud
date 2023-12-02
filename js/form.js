let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTelefone = document.getElementById("telefone");
let selectPlano = document.getElementById("plano");
let inputMensagem = document.getElementById("mensagem");
let btnSubmit = document.querySelector('input[type="submit"]');

inputNome.addEventListener("focus", () => {
    inputNome.style.backgroundColor = "#ee9600";
});

inputNome.addEventListener("blur", (e) => {    
    if (e.target.value === "") {
        e.target.style.backgroundColor = "#FF0000";
        alert("O campo não pode estar vazio.");
    }else if(!e.target.value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/^[a-zA-Z ]+$/)){
        e.target.style.backgroundColor = "#FF0000";
        alert("O campo deve conter apenas letras.");

    }else if (e.target.value.length < 5) {
        e.target.style.backgroundColor = "#FF0000";
        alert("O campo deve conter no mínimo 5 caracteres.");
    } else if(e.target.value.length > 50) {
        e.target.style.backgroundColor = "#FF0000";
        alert("O campo deve conter no máximo 50 caracteres.");
        
    }else {
        
        e.target.style.backgroundColor = "#00FF00";
    }
});

inputEmail.addEventListener("focus", () => {
    inputEmail.style.backgroundColor = "#ee9600";
});

inputEmail.addEventListener("blur", (e) => {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const valor = e.target.value.trim();
    if (valor === "") {
        e.target.style.backgroundColor = "#FF0000";
        alert("O campo não pode estar vazio.");
    } else if (!valor.match(regexEmail)) {
        e.target.style.backgroundColor = "#FF0000";
        alert("Por favor, digite um e-mail válido.");
    }else{
        e.target.style.backgroundColor = "#00FF00";
    }
});

inputTelefone.addEventListener("focus", () => {
    inputTelefone.style.backgroundColor = "#ee9600";
});

inputTelefone.addEventListener("blur", (e) => {      
    const valor = inputTelefone.value.trim();
    if (!valor.match(/^[0-9]+$/)) {        
        e.target.style.backgroundColor = "#FF0000";
        e.target.value = ""
        alert("O campo deve conter apenas números."); 
    }else {
        inputTelefone.setCustomValidity("");
        e.target.style.backgroundColor = "#00FF00";
    }
    
});

selectPlano.addEventListener("focus", () => {
    selectPlano.style.backgroundColor = "#ee9600";
});

selectPlano.addEventListener("blur", (e) => {    
    const valor = document.querySelector("select[name='planos']").value;    
    if (valor === "") {
        e.target.style.backgroundColor = "#FF0000";        
        alert("Por favor, selecione um plano.");        
    }else {
        e.target.style.backgroundColor = "#00FF00";
    }
});

inputMensagem.addEventListener("focus", () => {
    inputMensagem.style.backgroundColor = "#ee9600";
});

inputMensagem.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});


btnSubmit.addEventListener("click", (e) => {    
    if (inputMensagem.value === "") {        
        alert("Por favor, preencha todos os campos.");
    } else {
        e.preventDefault();         
        alert("formulário enviado com sucesso!");
        window.location.href = 'index.html';
    }
})




