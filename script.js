


function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

function aumentarFonte() {
    document.body.classList.remove("fonte-pequena");
    document.body.classList.add("fonte-grande");
}

function diminuirFonte() {
    document.body.classList.remove("fonte-grande");
    document.body.classList.add("fonte-pequena");
}



let slideAtual = 0;

function mostrarSlide() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("ativo");
    }

    slides[slideAtual].classList.add("ativo");
}

function proximoSlide() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    slideAtual++;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    mostrarSlide();
}

function slideAnterior() {
    const slides = document.querySelectorAll(".slide");

    if (slides.length === 0) {
        return;
    }

    slideAtual--;

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide();
}


mostrarSlide();



function pesquisarCampeao() {
    const campoPesquisa = document.getElementById("pesquisa");

    if (!campoPesquisa) {
        return;
    }

    const pesquisa = campoPesquisa.value.toLowerCase();
    const cards = document.querySelectorAll("#lista-campeoes .card");

    for (let i = 0; i < cards.length; i++) {
        const conteudo = cards[i].innerText.toLowerCase();

        if (conteudo.includes(pesquisa)) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}


const formularioContato = document.getElementById("formulario-contato");

if (formularioContato) {
    formularioContato.addEventListener("submit", function(event) {
        event.preventDefault();

        const mensagem = document.getElementById("mensagem-contato");

        if (mensagem) {
            mensagem.innerText =
                "Mensagem enviada com sucesso! Obrigado pelo contato.";
        }

        formularioContato.reset();
    });
}
