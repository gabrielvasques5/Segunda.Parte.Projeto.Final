
function alternarTema() {
    document.body.classList.toggle("dark-mode");
}

let zoomAtual = 100;

function aumentarFonte() {
    if (zoomAtual < 130) {
        zoomAtual += 10;
        document.body.style.zoom = zoomAtual + "%";
    }
}

function diminuirFonte() {
    if (zoomAtual > 80) {
        zoomAtual -= 10;
        document.body.style.zoom = zoomAtual + "%";
    }
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

const dadosFinais = {
    "1989": { campeao: "Grêmio", vice: "Sport", ida: "Sport 0 × 0 Grêmio", volta: "Grêmio 2 × 1 Sport", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/1989.webp" },
    "1990": { campeao: "Flamengo", vice: "Goiás", ida: "Flamengo 1 × 0 Goiás", volta: "Flamengo 0 × 0 Goiás", agregado: "1 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/1990.webp" },
    "1991": { campeao: "Criciúma", vice: "Grêmio", ida: "Grêmio 1 × 1 Criciúma", volta: "Criciúma 0 × 0 Grêmio", agregado: "1 × 1", detalhe: "Campeão pelo critério do gol fora de casa.", foto: "img/1991.webp" },
    "1992": { campeao: "Internacional", vice: "Fluminense", ida: "Fluminense 2 × 1 Internacional", volta: "Internacional 1 × 0 Fluminense", agregado: "2 × 2", detalhe: "Campeão pelo critério do gol fora de casa.", foto: "img/1992.webp" },
    "1993": { campeao: "Cruzeiro", vice: "Grêmio", ida: "Grêmio 0 × 0 Cruzeiro", volta: "Cruzeiro 2 × 1 Grêmio", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/1993.webp" },
    "1994": { campeao: "Grêmio", vice: "Ceará", ida: "Ceará 0 × 0 Grêmio", volta: "Grêmio 1 × 0 Ceará", agregado: "1 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/1994.webp" },
    "1995": { campeao: "Corinthians", vice: "Grêmio", ida: "Corinthians 2 × 1 Grêmio", volta: "Grêmio 0 × 1 Corinthians", agregado: "3 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/1995.webp" },
    "1996": { campeao: "Cruzeiro", vice: "Palmeiras", ida: "Cruzeiro 1 × 1 Palmeiras", volta: "Palmeiras 1 × 2 Cruzeiro", agregado: "3 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/1996.webp" },
    "1997": { campeao: "Grêmio", vice: "Flamengo", ida: "Grêmio 0 × 0 Flamengo", volta: "Flamengo 2 × 2 Grêmio", agregado: "2 × 2", detalhe: "Campeão pelo critério do gol fora de casa.", foto: "img/1997.webp" },
    "1998": { campeao: "Palmeiras", vice: "Cruzeiro", ida: "Cruzeiro 1 × 0 Palmeiras", volta: "Palmeiras 2 × 0 Cruzeiro", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/1998.webp" },
    "1999": { campeao: "Juventude", vice: "Botafogo", ida: "Juventude 2 × 1 Botafogo", volta: "Botafogo 0 × 0 Juventude", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/1999.webp" },
    "2000": { campeao: "Cruzeiro", vice: "São Paulo", ida: "São Paulo 0 × 0 Cruzeiro", volta: "Cruzeiro 2 × 1 São Paulo", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2000.webp" },
    "2001": { campeao: "Grêmio", vice: "Corinthians", ida: "Grêmio 2 × 2 Corinthians", volta: "Corinthians 1 × 3 Grêmio", agregado: "5 × 3", detalhe: "Título decidido no placar agregado.", foto: "img/2001.webp" },
    "2002": { campeao: "Corinthians", vice: "Brasiliense", ida: "Corinthians 2 × 1 Brasiliense", volta: "Brasiliense 1 × 1 Corinthians", agregado: "3 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/2002.webp" },
    "2003": { campeao: "Cruzeiro", vice: "Flamengo", ida: "Flamengo 1 × 1 Cruzeiro", volta: "Cruzeiro 3 × 1 Flamengo", agregado: "4 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/2003.webp" },
    "2004": { campeao: "Santo André", vice: "Flamengo", ida: "Santo André 2 × 2 Flamengo", volta: "Flamengo 0 × 2 Santo André", agregado: "4 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/2004.webp" },
    "2005": { campeao: "Paulista", vice: "Fluminense", ida: "Paulista 2 × 0 Fluminense", volta: "Fluminense 0 × 0 Paulista", agregado: "2 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/2005.webp" },
    "2006": { campeao: "Flamengo", vice: "Vasco", ida: "Flamengo 2 × 0 Vasco", volta: "Vasco 0 × 1 Flamengo", agregado: "3 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/2006.webp" },
    "2007": { campeao: "Fluminense", vice: "Figueirense", ida: "Fluminense 1 × 1 Figueirense", volta: "Figueirense 0 × 1 Fluminense", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2007.webp" },
    "2008": { campeao: "Sport", vice: "Corinthians", ida: "Corinthians 3 × 1 Sport", volta: "Sport 2 × 0 Corinthians", agregado: "3 × 3", detalhe: "Campeão pelo critério do gol fora de casa.", foto: "img/2008.webp" },
    "2009": { campeao: "Corinthians", vice: "Internacional", ida: "Corinthians 2 × 0 Internacional", volta: "Internacional 2 × 2 Corinthians", agregado: "4 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/2009.webp" },
    "2010": { campeao: "Santos", vice: "Vitória", ida: "Santos 2 × 0 Vitória", volta: "Vitória 2 × 1 Santos", agregado: "3 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/2010.webp" },
    "2011": { campeao: "Vasco", vice: "Coritiba", ida: "Vasco 1 × 0 Coritiba", volta: "Coritiba 3 × 2 Vasco", agregado: "3 × 3", detalhe: "Campeão pelo critério do gol fora de casa.", foto: "img/2011.webp" },
    "2012": { campeao: "Palmeiras", vice: "Coritiba", ida: "Palmeiras 2 × 0 Coritiba", volta: "Coritiba 1 × 1 Palmeiras", agregado: "3 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2012.webp" },
    "2013": { campeao: "Flamengo", vice: "Athletico-PR", ida: "Athletico-PR 1 × 1 Flamengo", volta: "Flamengo 2 × 0 Athletico-PR", agregado: "3 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2013.webp" },
    "2014": { campeao: "Atlético-MG", vice: "Cruzeiro", ida: "Atlético-MG 2 × 0 Cruzeiro", volta: "Cruzeiro 0 × 1 Atlético-MG", agregado: "3 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/2014.webp" },
    "2015": { campeao: "Palmeiras", vice: "Santos", ida: "Santos 1 × 0 Palmeiras", volta: "Palmeiras 2 × 1 Santos", agregado: "2 × 2 (4 × 3 pên.)", detalhe: "Decidido nos pênaltis após empate no agregado.", foto: "img/2015.webp" },
    "2016": { campeao: "Grêmio", vice: "Atlético-MG", ida: "Atlético-MG 1 × 3 Grêmio", volta: "Grêmio 1 × 1 Atlético-MG", agregado: "4 × 2", detalhe: "Título decidido no placar agregado.", foto: "img/gremio.jpg" },
    "2017": { campeao: "Cruzeiro", vice: "Flamengo", ida: "Flamengo 1 × 1 Cruzeiro", volta: "Cruzeiro 0 × 0 Flamengo", agregado: "1 × 1 (5 × 3 pên.)", detalhe: "Decidido nos pênaltis após empate no agregado.", foto: "img/2017.webp" },
    "2018": { campeao: "Cruzeiro", vice: "Corinthians", ida: "Cruzeiro 1 × 0 Corinthians", volta: "Corinthians 1 × 2 Cruzeiro", agregado: "3 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2018.webp" },
    "2019": { campeao: "Athletico-PR", vice: "Internacional", ida: "Athletico-PR 1 × 0 Internacional", volta: "Internacional 1 × 2 Athletico-PR", agregado: "3 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2019.webp" },
    "2020": { campeao: "Palmeiras", vice: "Grêmio", ida: "Grêmio 0 × 1 Palmeiras", volta: "Palmeiras 2 × 0 Grêmio", agregado: "3 × 0", detalhe: "Título decidido no placar agregado.", foto: "img/2020.webp" },
    "2021": { campeao: "Atlético-MG", vice: "Athletico-PR", ida: "Atlético-MG 4 × 0 Athletico-PR", volta: "Athletico-PR 1 × 2 Atlético-MG", agregado: "6 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2021.webp" },
    "2022": { campeao: "Flamengo", vice: "Corinthians", ida: "Corinthians 0 × 0 Flamengo", volta: "Flamengo 1 × 1 Corinthians", agregado: "1 × 1 (6 × 5 pên.)", detalhe: "Decidido nos pênaltis após empate no agregado.", foto: "img/2022.webp" },
    "2023": { campeao: "São Paulo", vice: "Flamengo", ida: "Flamengo 0 × 1 São Paulo", volta: "São Paulo 1 × 1 Flamengo", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2023.webp" },
    "2024": { campeao: "Flamengo", vice: "Atlético-MG", ida: "Flamengo 3 × 1 Atlético-MG", volta: "Atlético-MG 0 × 1 Flamengo", agregado: "4 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2024.webp" },
    "2025": { campeao: "Corinthians", vice: "Vasco", ida: "Corinthians 0 × 0 Vasco", volta: "Vasco 1 × 2 Corinthians", agregado: "2 × 1", detalhe: "Título decidido no placar agregado.", foto: "img/2025.webp" }
};

const cardsCampeoes = document.querySelectorAll("#lista-campeoes .card");

cardsCampeoes.forEach(function(card) {
    card.addEventListener("click", function() {
        const ano = card.querySelector("h3").innerText.trim();
        const info = dadosFinais[ano];

        if (info) {
            document.getElementById("modal-titulo").innerText = info.campeao;
            document.getElementById("modal-subtitulo").innerText = ano + " • Campeão sobre " + info.vice;
            document.getElementById("modal-ida").innerText = info.ida;
            document.getElementById("modal-volta").innerText = info.volta;
            document.getElementById("modal-placar-agregado").innerText = info.agregado;
            document.getElementById("modal-detalhe").innerText = info.detalhe;

            const imgModal = document.getElementById("modal-foto");
            imgModal.src = "img/" + ano + ".webp";

            imgModal.onerror = function() {
                // Se não encontrou .webp, tenta carregar .jpg
                if (this.src.endsWith(".webp")) {
                    this.src = "img/" + ano + ".jpg";
                } else {
                    // Se também não encontrou .jpg, mostra a foto da taça
                    this.onerror = null;
                    this.src = "img/taca.webp";
                }
            };

            document.getElementById("modal-campeao").classList.add("aberto");
        }
    });
});

function fecharModal() {
    const modal = document.getElementById("modal-campeao");
    if (modal) {
        modal.classList.remove("aberto");
    }
}

function fecharModalFora(event) {
    if (event.target.id === "modal-campeao") {
        fecharModal();
    }
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        fecharModal();
    }
});

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