document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        {
            image: "src/SV.png",
            title: "Suape Vantagens",
            descricao:
                "Plataforma de conexão entre os trabalhadores do porto de Suape e região com os estabelecimentos locais, como clínicas, bares, lojas e restaurantes.",
            descricaoPagina:
                "Plataforma de conexão entre os trabalhadores do porto de Suape e região com os estabelecimentos locais, como clínicas, bares, lojas e restaurantes.",
            link: "https://suapevantagens.netlify.app/",
        },
        {
            image: "src/prefeitura-do-recife.png",
            title: "Análise estatística de licitações da Prefeitura do Recife.",
            descricao:
                "O dataset foi encontrado no portal da Prefeitura do Recife, onde foi realizado: pré-processamento, análise exploratória de dados e modelagem dos dados.",
            descricaoPagina:
                "O dataset foi encontrado no portal da Prefeitura do Recife, onde foi realizado: pré-processamento, análise exploratória de dados e modelagem dos dados.",
            link: "https://github.com/dayviddouglas/ciencia_de_dados_licitacoes_prefeitura_do_recife",
        },

        {
            image: "src/projeto-iot.jpeg",
            title: "Sensor de temperatura e umidade através de gestos.",
            descricao:
                "Projeto IOT (Internet of Things), onde realiza ações através de gestos, onde realiza aferição de temperatura e umidade de ambiente.",
            descricaoPagina:
                "Projeto IOT (Internet of Things), onde realiza ações através de gestos, onde realiza aferição de temperatura e umidade de ambiente.",
            link: "https://github.com/marciomilet/IoT-NodeMCU",
        },

        {
            image: "src/chatbot-img.png",
            title: "ChatBot NPL Livros",
            descricao:
                "Um chatbot projetado para interagir com usuários de maneira natural e eficiente utiliza modelos de Processamento de Linguagem Natural (NLP) para compreender e responder às perguntas. O objetivo é auxiliar o usuário na busca por livros, proporcionando uma experiência de consulta mais intuitiva e personalizada.",
            descricaoPagina:
                "Um chatbot projetado para interagir com usuários de maneira natural e eficiente utiliza modelos de Processamento de Linguagem Natural (NLP) para compreender e responder às perguntas. O objetivo é auxiliar o usuário na busca por livros, proporcionando uma experiência de consulta mais intuitiva e personalizada.",
            link: "https://senacpernambuco-my.sharepoint.com/:u:/g/personal/dayvid_lima_edu_pe_senac_br/EQ24lode62pAlU4gtFt395gBuVXHogNZnYw20AwnReHWIQ?e=OoYSn9",
        },
    ];

    const projectCardsContainer = document.getElementById("carregaProjetos");
    const descricaoProjetos = document.getElementById("descricaoProjetos");

    function generateProjectCards() {
        projects.forEach((project) => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
            <a href="javascript:void(0)">
            <div class="primeiro">
                <div class="imagemPortfolio">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="titulo">
                    <h2>${project.title}</h2>
                </div>
                <div class="descricao">
                    <p>${project.descricao}</p>
                </div>
            </div>
            </a>
            `;

            
            card.addEventListener("click", () => showProjectDetails(project));

            
            projectCardsContainer.appendChild(card);
        });
    }

    function showProjectDetails(project) {
        projectCardsContainer.style.display = "none";

        descricaoProjetos.innerHTML = `
            <button id="voltarButton" class="botaoVoltar">← Voltar</button>
            <div class="imagemPortfolio">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="titulo">
                <h1>${project.title}</h1>
            </div>
            <div class="descricao">
                <p>${project.descricaoPagina}</p>
            </div>
            <div class="linkProjeto">
                <a href="${project.link}" target="_blank"><button class="botaoVoltar">Acessar o projeto</button></a>
            </div>
        `;
        
        descricaoProjetos.style.display = "block";

        
        const voltarButton = document.getElementById("voltarButton");
        voltarButton.addEventListener("click", goBack);
    }

    function goBack() {
        
        projectCardsContainer.style.display = "flex";
        
        descricaoProjetos.style.display = "none";
    }

    
    generateProjectCards();
});
