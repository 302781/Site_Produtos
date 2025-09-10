document.addEventListener('DOMContentLoaded', () => {
    const empreendimentosGrid = document.getElementById('empreendimentos-grid');

    const empreendimentosData = [
        {
            groupTitle: 'Recanto dos Pássaros - Recanto das Emas/DF',
            cards: [
                {
                    name: 'Recanto dos Passaros',
                    description: 'Apartamentos de estúdio de 27,79m².',
                    image: 'img/empreendimentos/passaros.png',
                    link: 'contatos.html',
                }
            ]
        },
        {
            groupTitle: 'Total Ville Ikeda - Ceilândia/DF',
            cards: [
                {
                    name: 'Total Ville Ikeda',
                    description: 'Apartamentos de 2 e 3 quartos com lazer de clube.',
                    image: 'img/empreendimentos/Ikeda.jpg',
                    link: 'contatos.html',
                }
            ]
        },
        /*{
            groupTitle: 'Total Ville - Santa Maria/DF',
            cards: [
                {
                    name: 'Total Ville Conviver',
                    description: 'Apartamentos de 2 e 3 quartos com suíte.',
                    image: 'paginas do empreendimento/img/conviver.jpg',
                    link: '#',
                }
            ]
        },*/
        {
            groupTitle: 'Águas Claras/DF',
            cards: [
                {
                    name: 'Reserva Parque Clube',
                    description: 'Apartamentos de 2 e 3 quartos (63m² e 81m²).',
                    image: 'img/empreendimentos/reserva.jpg',
                    link: 'contatos.html',
                },
                {
                    name: 'Lumi Tower Residence',
                    description: 'Apartamentos de 2 e 3 quartos com suíte(59.86m² até 72.06m²).',
                    image: 'img/empreendimentos/Lumi.png',
                    link: 'contatos.html',
                }
            ]
        }
    ];

    function createEmpreendimentoCard(card) {
        const cardElement = document.createElement('a');
        cardElement.classList.add('empreendimento-card');
        cardElement.href = card.link;
        
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <div class="card-content">
                <h3>${card.name}</h3>
                <p>${card.description}</p>
            </div>
        `;
        return cardElement;
    }

    empreendimentosData.forEach(group => {
        const cardGroup = document.createElement('div');
        cardGroup.classList.add('card-group');

        const groupTitle = document.createElement('h2');
        groupTitle.classList.add('group-title');
        groupTitle.textContent = group.groupTitle;

        const cardsWrapper = document.createElement('div');
        cardsWrapper.classList.add('cards-wrapper');

        group.cards.forEach(card => {
            cardsWrapper.appendChild(createEmpreendimentoCard(card));
        });

        cardGroup.appendChild(groupTitle);
        cardGroup.appendChild(cardsWrapper);

        empreendimentosGrid.appendChild(cardGroup);
    });
});