const formularioLogin = document.getElementById("form-login");

formularioLogin.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document
        .getElementById("email-login")
        .value;

    document.getElementById("mensagem-login").innerText =
        "Login realizado com sucesso! Bem-vindo, " + email;

});