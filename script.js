// ===========================
// FOX GAMES - SCRIPT.JS
// ===========================

// BOTÃO ENTRAR
const btnEntrar = document.querySelector(".btn-entrar");

if (btnEntrar) {
    btnEntrar.addEventListener("click", () => {

        let usuario = prompt("Digite seu usuário:");

        if (usuario && usuario.trim() !== "") {

            localStorage.setItem("usuarioFOX", usuario);

            alert(`Bem-vindo(a), ${usuario}!`);

            btnEntrar.textContent = usuario;

        } else {

            alert("Usuário inválido!");

        }

    });
}

// VERIFICAR LOGIN SALVO
const usuarioSalvo = localStorage.getItem("usuarioFOX");

if (usuarioSalvo && btnEntrar) {
    btnEntrar.textContent = usuarioSalvo;
}


// PESQUISA DE JOGOS
const pesquisa = document.querySelector(".search-box");

if (pesquisa) {

    pesquisa.addEventListener("keypress", (e) => {

        if (e.key === "Enter") {

            const texto = pesquisa.value.toLowerCase();

            if (texto.includes("minecraft")) {
                window.location.href = "jogos.html";
            }

            else if (texto.includes("free fire")) {
                window.location.href = "jogos.html";
            }

            else if (texto.includes("roblox")) {
                window.location.href = "jogos.html";
            }

            else {
                alert("Jogo não encontrado.");
            }

        }

    });

}


// BOTÃO EXPLORAR JOGOS
const btnExplorar = document.querySelector(".btn-primary");

if (btnExplorar) {

    btnExplorar.addEventListener("click", () => {

        window.location.href = "jogos.html";

    });

}


// BOTÃO COMUNIDADE
const btnComunidade = document.querySelector(".btn-secondary");

if (btnComunidade) {

    btnComunidade.addEventListener("click", () => {

        window.location.href = "comunidade.html";

    });

}


// DESTACAR PÁGINA ATUAL
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    if (window.location.href.includes(link.getAttribute("href"))) {

        links.forEach(l => l.classList.remove("active"));

        link.classList.add("active");

    }

});


// RANKING EXEMPLO
const ranking = [

    { nome: "Lua", pontos: 2500 },
    { nome: "Ana", pontos: 2300 },
    { nome: "Pedro", pontos: 1800 },
    { nome: "João", pontos: 1500 }

];

console.log("Ranking FOX:");

ranking.forEach((jogador, posicao) => {

    console.log(
        `${posicao + 1}° - ${jogador.nome} (${jogador.pontos} pts)`
    );

});// =======================
// PESQUISA DE JOGOS
// =======================

const campoBusca = document.querySelector(".catalog-search");

if (campoBusca) {

    campoBusca.addEventListener("keyup", () => {

        const texto = campoBusca.value.toLowerCase();

        const cards = document.querySelectorAll(".game-card");

        cards.forEach(card => {

            const titulo = card
                .querySelector(".game-title")
                .textContent
                .toLowerCase();

            if (titulo.includes(texto)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }

        });

    });

}


// =======================
// FILTRO DE CATEGORIAS
// =======================

const categorias = document.querySelectorAll(".category-item");

categorias.forEach(categoria => {

    categoria.addEventListener("click", () => {

        categorias.forEach(item =>
            item.classList.remove("active")
        );

        categoria.classList.add("active");

        const categoriaSelecionada =
            categoria.textContent.toLowerCase();

        const cards =
            document.querySelectorAll(".game-card");

        cards.forEach(card => {

            const genero = card
                .querySelector(".tag-genre")
                .textContent
                .toLowerCase();

            if (
                categoriaSelecionada === "todos"
            ) {

                card.style.display = "flex";

            } else {

                if (
                    genero.includes(categoriaSelecionada)
                ) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            }

        });

    });

});


// =======================
// BOTÕES JOGAR
// =======================

const botoesJogar =
document.querySelectorAll(".btn-play-now");

botoesJogar.forEach(botao => {

    botao.addEventListener("click", () => {

        const nomeJogo =
            botao
            .closest(".game-card")
            .querySelector(".game-title")
            .textContent;

        alert(
            `Iniciando ${nomeJogo}...`
        );

    });

});


// =======================
// LOGIN
// =======================

const btnEntrar =
document.querySelector(".btn-entrar");

if (btnEntrar) {

    const usuario =
        localStorage.getItem("usuarioFOX");

    if (usuario) {
        btnEntrar.textContent = usuario;
    }

    btnEntrar.addEventListener("click", () => {

        const nome =
            prompt("Digite seu usuário:");

        if (nome) {

            localStorage.setItem(
                "usuarioFOX",
                nome
            );

            btnEntrar.textContent = nome;

        }

    });

}
// =======================
// PÁGINA DE NOTÍCIAS
// =======================

// Pesquisar notícias
const buscaNoticias = document.querySelector(".search-box");

if (buscaNoticias) {

    buscaNoticias.addEventListener("keyup", () => {

        const texto =
        buscaNoticias.value.toLowerCase();

        const noticias =
        document.querySelectorAll(".news-item");

        noticias.forEach(noticia => {

            const titulo =
            noticia.querySelector("h3")
            .textContent
            .toLowerCase();

            if (titulo.includes(texto)) {

                noticia.style.display = "flex";

            } else {

                noticia.style.display = "none";

            }

        });

    });

}


// Notícias da lista
const listaNoticias =
document.querySelectorAll(".news-item");

listaNoticias.forEach(item => {

    item.addEventListener("click", () => {

        const titulo =
        item.querySelector("h3").textContent;

        alert(
            "Abrindo notícia:\n\n" + titulo
        );

    });

});


// Notícias em destaque
const destaques =
document.querySelectorAll(".featured-card");

destaques.forEach(card => {

    card.addEventListener("click", () => {

        const titulo =
        card.querySelector("h2").textContent;

        alert(
            "Abrindo destaque:\n\n" + titulo
        );

    });

});
// =======================
// RANKING FOX
// =======================

const jogadores = [
    {
        nome: "Beatriz",
        pontos: 100,
        vitorias: 0
    },
    {
        nome: "Esperança",
        pontos: 100,
        vitorias: 0
    },
    {
        nome: "Lua",
        pontos: 100,
        vitorias: 0
    }
];

// Ordenar por pontos
jogadores.sort((a, b) => b.pontos - a.pontos);

console.table(jogadores);


// =======================
// GANHAR PONTOS
// =======================

function ganharPontos(nome, pontos) {

    const jogador = jogadores.find(
        j => j.nome === nome
    );

    if (jogador) {

        jogador.pontos += pontos;

        localStorage.setItem(
            "rankingFOX",
            JSON.stringify(jogadores)
        );

        console.log(
            `${nome} ganhou ${pontos} pontos`
        );

    }

}


// =======================
// GANHAR VITÓRIA
// =======================

function ganharVitoria(nome) {

    const jogador = jogadores.find(
        j => j.nome === nome
    );

    if (jogador) {

        jogador.vitorias++;

        localStorage.setItem(
            "rankingFOX",
            JSON.stringify(jogadores)
        );

    }

}


// =======================
// CARREGAR RANKING
// =======================

const rankingSalvo =
localStorage.getItem("rankingFOX");

if (rankingSalvo) {

    const dados =
    JSON.parse(rankingSalvo);

    console.table(dados);

}
// =======================
// COMUNIDADE FOX
// =======================

// CHAT AO VIVO

const btnChat =
document.querySelector(".btn-blue");

if (btnChat) {

    btnChat.addEventListener("click", () => {

        alert(
            "💬 Chat ao vivo em desenvolvimento!"
        );

    });

}


// MENSAGENS PRIVADAS

const btnMensagem =
document.querySelector(".btn-purple");

if (btnMensagem) {

    btnMensagem.addEventListener("click", () => {

        alert(
            "✉️ Sistema de mensagens em desenvolvimento!"
        );

    });

}


// CURTIDAS

const curtidas =
document.querySelectorAll(".interaction-item");

curtidas.forEach(item => {

    if (item.textContent.includes("🤍")) {

        item.addEventListener("click", () => {

            let numero =
            parseInt(
                item.textContent.replace(/\D/g, "")
            );

            numero++;

            item.innerHTML =
            `❤️ ${numero}`;

        });

    }

});


// COMPARTILHAR

const compartilhar =
document.querySelector(".share-item");

if (compartilhar) {

    compartilhar.addEventListener("click", () => {

        navigator.clipboard.writeText(
            window.location.href
        );

        alert(
            "🔗 Link copiado!"
        );

    });

}


// ENTRAR PARA POSTAR

const btnPostar =
document.querySelector(
".btn-inline-entrar"
);

if (btnPostar) {

    btnPostar.addEventListener("click", () => {

        let usuario =
        localStorage.getItem(
            "usuarioFOX"
        );

        if (!usuario) {

            usuario = prompt(
                "Digite seu usuário:"
            );

            if (usuario) {

                localStorage.setItem(
                    "usuarioFOX",
                    usuario
                );

            }

        }

        if (usuario) {

            const texto =
            prompt(
                "O que deseja publicar?"
            );

            if (texto) {

                alert(
                    `Post publicado!\n\n${texto}`
                );

            }

        }

    });

}
// BOTÃO EXPLORAR JOGOS

const btnExplorar = document.querySelector(".btn-primary");

if (btnExplorar) {

    btnExplorar.addEventListener("click", () => {

        window.location.href = "jogos.html";

    });

}


// BOTÃO VER COMUNIDADE

const btnComunidade = document.querySelector(".btn-secondary");

if (btnComunidade) {

    btnComunidade.addEventListener("click", () => {

        window.location.href = "comunidade.html";

    });

}
const modal =
document.getElementById("loginModal");

const openBtn =
document.getElementById("openLogin");

const closeBtn =
document.querySelector(".close-modal");

openBtn.onclick = () => {

    modal.style.display = "flex";

};

closeBtn.onclick = () => {

    modal.style.display = "none";

};

window.onclick = (event) => {

    if(event.target === modal){

        modal.style.display = "none";

    }

};