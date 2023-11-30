let inputNome = document.getElementById("nome");
let inputEmail = document.getElementById("email");
let inputTelefone = document.getElementById("telefone");
let selectPlano = document.getElementById("plano");
let inputMensagem = document.getElementById("mensagem");
let btnSubmit = document.querySelector('button[type="submit"]');

inputNome.addEventListener("focus", () => {
    inputNome.style.backgroundColor = "#ee9600";
});

inputNome.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});

inputEmail.addEventListener("focus", () => {
    inputEmail.style.backgroundColor = "#ee9600";
});

inputEmail.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});

inputTelefone.addEventListener("focus", () => {
    inputTelefone.style.backgroundColor = "#ee9600";
});

inputTelefone.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});

selectPlano.addEventListener("focus", () => {
    selectPlano.style.backgroundColor = "#ee9600";
});

selectPlano.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "#ee9600";
});

inputMensagem.addEventListener("focus", () => {
    inputMensagem.style.backgroundColor = "#ee9600";
});

inputMensagem.addEventListener("blur", (e) => {
    e.target.style.backgroundColor = "";
});

btnSubmit.addEventListener("click", (e) => {
    if (inputMensagem.value === "") {
        e.preventDefault()
        alert("Por favor, preencha todos os campos.");
    } else { 
    alert("formulário enviado com sucesso!");
    }
})
