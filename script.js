document.addEventListener('DOMContentLoaded', () => {
    
    const productListDiv = document.getElementById('product-list');

    const productsData = [
        {
            name: 'Antena Digital',
            descricao:'',
            price: 'R$ ',
            image: './img/Shoppe/Antena Digital.png', 
            shopeeLink: 'https://s.shopee.com.br/1BBfkvNVyj/AXD-SVB-NJG'
        },
        {
            name: 'Aspirador & Soprador',
            price: 'R$ ',
            image: './img/Shoppe/Aspirador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Balança de Cozinha',
            price: 'R$',
            image: './img/Shoppe/Balança de Cozinha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Barbeador Elétrico',
            price: 'R$',
            image: './img/Shoppe/Barbeador.png',
            shopeeLink: 'https://shopee.com.br/'
        },
        {
            name: 'Base Matte',
            price: 'R$',
            image: './img/Shoppe/Base Matte.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Base(SHEGLAM)',
            price: 'R$',
            image: './img/Shoppe/Base.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Batom Liquido',
            price: 'R$',
            image: './img/Shoppe/Batom Líquido .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Biblia Feminina',
            price: 'R$',
            image: './img/Shoppe/Biblia Feminina.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
         {
            name: 'Biblia Kingstone',
            price: 'R$',
            image: './img/Shoppe/Bíblia Kingstone.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
         {
            name: 'Blush',
            price: 'R$',
            image: './img/Shoppe/Blush.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
         {
            name: 'Cabeceira',
            price: 'R$',
            image: './img/Shoppe/Cabeceira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
         {
            name: 'Cabide',
            price: 'R$',
            image: './img/Shoppe/Cabide.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Cabo USB',
            price: 'R$',
            image: './img/Shoppe/Cabo usb.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Caixa Saco',
            price: 'R$',
            image: './img/Shoppe/Caixa Saco.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Calça Alfaiataria',
            price: 'R$',
            image: './img/Shoppe/Calça Alfaiateria.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Calça Feminina',
            price: 'R$',
            image: './img/Shoppe/Calça Feminina.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Calça Pantalona',
            price: 'R$',
            image: './img/Shoppe/Calça Pantalona.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Calça Social',
            price: 'R$',
            image: './img/Shoppe/Calça Social.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Canguru',
            price: 'R$',
            image: './img/Shoppe/Canguru.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Capa de Colchao', 
            price: 'R$',
            image: './img/Shoppe/Capa de Colchão .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Chaleira',
            price: 'R$',
            image: './img/Shoppe/Chaleira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Chaveiro Personalizado',
            price: 'R$',
            image: './img/Shoppe/Chaveiro defesa pessoal .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Chaveiro',
            price: 'R$',
            image: './img/Shoppe/Chaveiro.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Colageno',
            price: 'R$',
            image: './img/Shoppe/Colágeno .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Coleçao de Livros',
            price: 'R$',
            image: './img/Shoppe/Chaveiro.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Conjunto de Facas',
            price: 'R$',
            image: './img/Shoppe/Conjunto de Facas.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Copo Térmico',
            price: 'R$',
            image: './img/Shoppe/Copo Térmico .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Creme de Rosto',
            price: 'R$',
            image: './img/Shoppe/Creme.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Cruzadinho',
            price: 'R$',
            image: './img/Shoppe/Cruzadinha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Depilador Eletrico',
            price: 'R$',
            image: './img/Shoppe/Depilador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Desumidificador de Ar',
            price: 'R$',
            image: './img/Shoppe/Desumidificador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Devocional(Cafe com o Pai)',
            price: 'R$',
            image: './img/Shoppe/Devocional.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Ducha de Ferro',
            price: 'R$',
            image: './img/Shoppe/Ducha de Ferro.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Escova Eletrica',
            price: 'R$',
            image: './img/Shoppe/Escola Elétrica .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Escova de Cabelo',
            price: 'R$',
            image: './img/Shoppe/Escova .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Escova de Cabelo liso',
            price: 'R$',
            image: './img/Shoppe/Escova Alisador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Escova de Dente Elétrico',
            price: 'R$',
            image: './img/Shoppe/Escova Elétrica .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Esfregao',
            price: 'R$',
            image: './img/Shoppe/Esfregão .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Esfregao giratorio',
            price: 'R$',
            image: './img/Shoppe/Esfregão giratório .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Espelho',
            price: 'R$',
            image: './img/Shoppe/Espelho.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Filtro de Água Eletronico',
            price: 'R$',
            image: './img/Shoppe/Filtro Elétrico .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fita Dubla',
            price: 'R$',
            image: './img/Shoppe/Fita Dupla.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fita LED',
            price: 'R$',
            image: './img/Shoppe/Fita Led.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fita Selante',
            price: 'R$',
            image: './img/Shoppe/Fita Selante.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fixador de Maquiagem',
            price: 'R$',
            image: './img/Shoppe/Fixador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fone Bluetooth',
            price: 'R$',
            image: './img/Shoppe/Fone de Ouvido Bluetooth .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Fone de Ouvido',
            price: 'R$',
            image: './img/Shoppe/Fone de Ouvido KZ.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Forminhas de Doces',
            price: 'R$',
            image: './img/Shoppe/Forminhas.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Gloss Labial',
            price: 'R$',
            image: './img/Shoppe/Gloss.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Hidratante Labial',
            price: 'R$',
            image: './img/Shoppe/Hidratante.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit de Ferrramentas',
            price: 'R$',
            image: './img/Shoppe/Jogo de chave.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit de Cozinha',
            price: 'R$',
            image: './img/Shoppe/Jogo de Cozinha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit de Lençois',
            price: 'R$',
            image: './img/Shoppe/Jogo de Lençois.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Banho',
            price: 'R$',
            image: './img/Shoppe/Kit Banho.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Defenca Pessoal',
            price: 'R$',
            image: './img/Shoppe/Kit Defensivo .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Garrafa',
            price: 'R$',
            image: './img/Shoppe/Kit Garrafa.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Unha',
            price: 'R$',
            image: './img/Shoppe/Kit Unha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Lib Gloss',
            price: 'R$',
            image: './img/Shoppe/Lib Gloss.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Limpeza de Album',
            price: 'R$',
            image: './img/Shoppe/Limpeza Álbum .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Kit Limpeza de Computador',
            price: 'R$',
            image: './img/Shoppe/Limpeza de Computador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Liquidificador',
            price: 'R$',
            image: './img/Shoppe/Liquidificador .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro - Quem sou Eu?',
            price: 'R$',
            image: './img/Shoppe/Livro - Quem sou.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro - Atos a Apocalipse',
            price: 'R$',
            image: './img/Shoppe/Livro -Atos.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro para Colorir',
            price: 'R$',
            image: './img/Shoppe/Livro para Colorir.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro - Futuro',
            price: 'R$',
            image: './img/Shoppe/Livro- Futuro.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro - Primeiras Palavras',
            price: 'R$',
            image: './img/Shoppe/Livro- Primeira Palavras.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Livro - Triade do Poder',
            price: 'R$',
            image: './img/Shoppe/Livro- triade.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Lixadeira',
            price: 'R$',
            image: './img/Shoppe/Lixadeira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Manta de Sofa',
            price: 'R$',
            image: './img/Shoppe/Manta.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Maquiagem Capilar',
            price: 'R$',
            image: './img/Shoppe/Maquiagem Capilar.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Mini Maquina de Costura',
            price: 'R$',
            image: './img/Shoppe/Maquina mini.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Meia',
            price: 'R$',
            image: './img/Shoppe/Meia.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Mesa Cabeceira',
            price: 'R$',
            image: './img/Shoppe/Mesa Cabeceira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Mix',
            price: 'R$',
            image: './img/Shoppe/Mix.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Mini - Ar Condicionado',
            price: 'R$',
            image: './img/Shoppe/MIni- Ar condicionador .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Misturador',
            price: 'R$',
            image: './img/Shoppe/Misturador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Organizador de Maquiagem',
            price: 'R$',
            image: './img/Shoppe/Organizador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Paleta de Maquiagem',
            price: 'R$',
            image: './img/Shoppe/Paleta de Sombra.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Parrafuso de Borracha',
            price: 'R$',
            image: './img/Shoppe/Parrafuso de Borracha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Passadeira',
            price: 'R$',
            image: './img/Shoppe/Passadeira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Pelicula de Celular',
            price: 'R$',
            image: './img/Shoppe/Película .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Pelicula de Celular HD',
            price: 'R$',
            image: './img/Shoppe/Película HD.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Pijama',
            price: 'R$',
            image: './img/Shoppe/Pijama.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Pilha Alcalina',
            price: 'R$',
            image: './img/Shoppe/Pilha Alcalina .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: '4 Pilha',
            price: 'R$',
            image: './img/Shoppe/Pilha.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Prateleira de Banheiro',
            price: 'R$',
            image: './img/Shoppe/Prateleira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Primer de maquiagem',
            price: 'R$',
            image: './img/Shoppe/Primer.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Projetor 4K',
            price: 'R$',
            image: './img/Shoppe/Projetor 4K.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Projetor',
            price: 'R$',
            image: './img/Shoppe/Projetor.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Protetor Solar',
            price: 'R$',
            image: './img/Shoppe/Protetor Solar.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Purificador de Ar',
            price: 'R$',
            image: './img/Shoppe/Purificador de ar.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Regata',
            price: 'R$',
            image: './img/Shoppe/Regata.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Repelente',
            price: 'R$',
            image: './img/Shoppe/Repelente.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Robo de Limpeza',
            price: 'R$',
            image: './img/Shoppe/Robo.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Rodo',
            price: 'R$',
            image: './img/Shoppe/Rodo.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Sanduicheira',
            price: 'R$',
            image: './img/Shoppe/Sanduicheira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Sapateria',
            price: 'R$',
            image: './img/Shoppe/Sapateria.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Serum Facial',
            price: 'R$',
            image: './img/Shoppe/Serum.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Shorts Legging',
            price: 'R$',
            image: './img/Shoppe/Short Legging.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Short Feminino',
            price: 'R$',
            image: './img/Shoppe/Short.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Chaleira(Smeg)',
            price: 'R$',
            image: './img/Shoppe/Smeg - Chaleira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Stick de Maquiagem',
            price: 'R$',
            image: './img/Shoppe/Stick de Blush.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Tapate',
            price: 'R$',
            image: './img/Shoppe/Tapate.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Regua de Tomada',
            price: 'R$',
            image: './img/Shoppe/Tomada.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Torradeira',
            price: 'R$',
            image: './img/Shoppe/Torradeira.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Triturador de Alimentos',
            price: 'R$',
            image: './img/Shoppe/Triturador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'TV Box',
            price: 'R$',
            image: './img/Shoppe/TV.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Ventilador de Teto',
            price: 'R$',
            image: './img/Shoppe/Ventilador de teto.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Ventilador de Teto',
            price: 'R$',
            image: './img/Shoppe/Ventilador.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Vestido Feminino',
            price: 'R$',
            image: './img/Shoppe/Vestido.png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        {
            name: 'Xicara de Café',
            price: 'R$',
            image: './img/Shoppe/Xícara de Café .png', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },
        /*{
            name: '',
            price: 'R$',
            image: './img/Shoppe/', 
            shopeeLink: 'https://s.shopee.com.br/' 
        },*/
        
    ];

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card'); // Adiciona a classe para estilização CSS

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="price">${product.price}</p>
            <a href="${product.shopeeLink}" target="_blank" class="buy-button">Ver na Shopee</a>
        `;
        // O "target="_blank"" garante que o link abra em uma nova aba
        // O "buy-button" é uma classe para você estilizar o botão no CSS

        return card;
    }

    // Itera sobre os dados dos produtos e cria os cards no HTML
    productsData.forEach(product => {
        const cardElement = createProductCard(product);
        productListDiv.appendChild(cardElement);
    });

    // --- Funcionalidade "Leia Mais/Menos" para a biografia (opcional) ---
    const bioText = document.querySelector('.linktree-user-bio p');
    const toggleButton = document.querySelector('.toggle-text-btn');
    const originalText = bioText.textContent;
    const shortTextLength = 100; // Defina um limite de caracteres para o texto curto

    if (originalText.length > shortTextLength) {
        bioText.textContent = originalText.substring(0, shortTextLength) + '...';
        toggleButton.style.display = 'inline'; // Mostra o botão se o texto for longo
    } else {
        toggleButton.style.display = 'none'; // Esconde o botão se o texto for curto
    }

    toggleButton.addEventListener('click', () => {
        if (bioText.textContent.includes('...')) {
            bioText.textContent = originalText;
            toggleButton.textContent = '...menos';
        } else {
            bioText.textContent = originalText.substring(0, shortTextLength) + '...';
            toggleButton.textContent = '...mais';
        }
    });

});