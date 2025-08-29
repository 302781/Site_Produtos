document.addEventListener('DOMContentLoaded', () => {
    const empreendimentosListDiv = document.getElementById('empreendimentos-list');

    const empreendimentosData = [
        {
            name: 'Nome do Projeto 1',
            description: 'Uma breve descrição sobre este empreendimento. Fale sobre os objetivos, o que ele oferece e o público-alvo. Destaque os principais benefícios.',
            image: './img/Empreendimentos/projeto1.jpg', // Adicione a imagem na pasta
            link: '#', // Link para o site ou mais informações do projeto
        },
        {
            name: 'Nome do Projeto 2',
            description: 'Este projeto foca em soluções inovadoras para o mercado X. Explique como ele se diferencia e o valor que ele traz para os usuários.',
            image: './img/Empreendimentos/projeto2.jpg',
            link: '#',
        },
        {
            name: 'Nome do Projeto 3',
            description: 'Mais um dos nossos projetos em desenvolvimento. Detalhe o estágio atual do projeto e o que a sua comunidade pode esperar dele.',
            image: './img/Empreendimentos/Empreendimento.png',
            link: '#',
        },
        // Adicione mais projetos aqui com a mesma estrutura
    ];

    function createEmpreendimentoCard(empreendimento) {
        const empreendimentoCard = document.createElement('div');
        empreendimentoCard.classList.add('empreendimento-card');

        empreendimentoCard.innerHTML = `
            <img src="${empreendimento.image}" alt="${empreendimento.name}">
            <div class="empreendimento-info">
                <h3>${empreendimento.name}</h3>
                <p>${empreendimento.description}</p>
                <a href="${empreendimento.link}" target="_blank" rel="noopener noreferrer" class="ver-projeto-btn">Ver Projeto</a>
            </div>
        `;
        return empreendimentoCard;
    }

    function displayEmpreendimentos(empreendimentosToDisplay) {
        empreendimentosListDiv.innerHTML = '';
        if (empreendimentosToDisplay.length === 0) {
            empreendimentosListDiv.innerHTML = '<p class="no-results">Nenhum empreendimento encontrado no momento.</p>';
            return;
        }
        empreendimentosToDisplay.forEach(empreendimento => {
            empreendimentosListDiv.appendChild(createEmpreendimentoCard(empreendimento));
        });
    }

    // Exibe todos os empreendimentos ao carregar a página
    displayEmpreendimentos(empreendimentosData);
});