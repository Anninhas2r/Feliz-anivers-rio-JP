const inputs = document.querySelectorAll('.input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove('focus');
    }
    parent.classList.add('blur');
}


inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

function validateForm() {
    // Pega os valores dos campos
    const name = document.getElementById('name').value.trim();
    const birthday = document.getElementById('birthday').value;
    const nickname = document.getElementById('nickname').value.trim().toLowerCase();

    // Verifica as respostas corretas
    if (name === "João Paulo Lemes Furtado" && birthday === "2024-12-13" && nickname === "fafa") {
        alert("Tudo certo! Vamos para a próxima página.");
        // Redireciona para a segunda página (crie o arquivo page2.html)
        window.location.href = "page2.html";
    } else {
        alert("Erro! As informações estão incorretas. Tente novamente.");
    }
}
function validateForm() {
    // Pegando os valores dos campos
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var nickname = document.getElementById("nickname").value;

    // Verificando se todos os campos foram preenchidos
    if (name == "" || birthday == "" || nickname == "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Impede o envio do formulário
    }

    // Caso o formulário esteja correto, exibe um alerta de sucesso
    alert("Formulário enviado com sucesso! Vamos para a próxima página.");
    
    // Aqui você pode redirecionar para a próxima página ou fazer outras ações
    // Exemplo de redirecionamento:
    // window.location.href = "proxima_pagina.html";
}
function validateForm() {
    // Pegando os valores dos campos
    var girlfriendName = document.getElementById("girlfriend-name").value;
    var girlfriendAge = document.getElementById("girlfriend-age").value;
    var relationshipDate = document.getElementById("relationship-date").value;
    var nicknameYou = document.getElementById("nickname-you").value;

    // Verificando se todos os campos foram preenchidos corretamente
    if (girlfriendName.toUpperCase() !== "ANNA FLÁVIA" || 
        girlfriendAge !== "23" || 
        relationshipDate !== "24/08/2019" || 
        nicknameYou.toUpperCase() !== "NENEM") {
        
        alert("Parece que alguma resposta está errada! Tente novamente.");
        return false; // Impede o envio do formulário
    }

    // Caso o formulário esteja correto, exibe um alerta de sucesso
    alert("Você acertou todas as respostas! Parabéns!");
    
    // Aqui você pode redirecionar para a próxima página ou fazer outras ações
    // Exemplo de redirecionamento:
    // window.location.href = "pagina_feliz.html";
}
