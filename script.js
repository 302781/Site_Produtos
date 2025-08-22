document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input[type="search"]');

    const productsData = [
        {
            name: 'Antena Digital',
            description: 'Dê uma olhada em Antena 3/5 Metro Digital Interna Externa Full Hdtv 4K Cabo Grande antena digital para tv e conversor digital tv.',
            price: 'R$ 20,99',
            image: './img/Shoppe/Antena Digital.png',
            shopeeLink: 'https://s.shopee.com.br/gFPKX7CRx',
            id: 'BND-HBF-DLE', 
        },
        {
            name: 'Aspirador & Soprador',
            description: 'Dê uma olhada em Carro Aspirador De Pó Portátil Sem Fio Mini Comprimido Espanador De Ar & Soprador Bomba Mão.',
            price: 'R$ 167,75',
            image: './img/Shoppe/Aspirador.png',
            shopeeLink: 'https://s.shopee.com.br//709SshSBU5',
            id: 'BCY-UGR-PCT',
        },
        {
            name: 'Balança de Cozinha',
            description: 'Balança de Cozinha Digital Eletrônica 10kg Balança de Cozinha Digital Eletrônica 10kg Balança de Cozinha Digital Eletrônica 10kg.',
            price: 'R$ 41,99',
            image: './img/Shoppe/Balança de Cozinha.png',
            shopeeLink: 'https://s.shopee.com.br/4L8hi0f3jb',
            id: 'BJP-QQY-ALJ',
        },
        {
            name: 'Barbeador Elétrico',
            description: 'Dê uma olhada em Máquina corta cabelo acabamento barbear barbeador eletrônico pezinho vintage Buda dragão.',
            price: 'R$ 21,00',
            image: './img/Shoppe/Barbeador.png',
            shopeeLink: 'https://shopee.com.br/8fHgsWk1gG',
            id: 'BYX-UBC-WMX',
        },
        {
            name: 'Cabo USB',
            description: 'Dê uma olhada em Conjunto de adaptador de cabo de carregamento múltiplo 6 em 1 USB C para USB Kit de cabo adaptador de celular Suporte de telefone celular pino de ejeção adaptador USB caixa de armazenamento portátil para viagem de negócio. ',
            price: 'R$ 15,00',
            image: './img/Shoppe/Cabo Usb.jpeg',
            shopeeLink: 'https://s.shopee.com.br/7V5kAWosvy',
            id: 'AHU-AUK-ZCD',
        },
        {
            name: 'Chaleira Elétrica Retro SMEG', 
            description: 'Dê uma olhada em SMEG 304 Garrafa de água de aço inoxidável Design europeu de grande capacidade adequado para fogão a gás Fogão elétrico.',
            price: 'R$ 1.074,90',
            image: './img/Shoppe/Chaleira 1.jpeg',
            shopeeLink: 'https://s.shopee.com.br/gFQ2x8gLQ',
            id: 'CCJ-RBH-YVF',
        },
        {
            name: 'Bule de Chá Elétrico SMEG', 
            description: 'Dê uma olhada em Em Estoque Chaleira Elétrica Retro Italiana Padrão Europeu SMEG para Preparação de Chá com 7 Configurações de Temperatur.',
            price: 'R$ 1.696,00',
            image: './img/Shoppe/Bule de Cha.jpeg',
            shopeeLink: 'https://s.shopee.com.br/6KtmnHbvis',
            id: 'BLT-PZG-EAE',
        },
        {
            name: 'Chaveiro de Defesa Pessoal Feminino',
            description: 'Dê uma olhada em Defesa Pessoal Chaveiro Feminino De Segurança Autodefesa Chaveiro Kit Alarme De Autodefesa Para Mulheres Menina Idosa.',
            price: 'R$ 46,90 - R$ 53,90',
            image: './img/Shoppe/Chaveiro defesa pessoal .png',
            shopeeLink: 'https://s.shopee.com.br/AUjLl8cOUv',
            id: 'BUK-QFP-XET',
       },
        {
            name: 'Depilador Elétrico a Laser Portátil',
            description: 'Dê uma olhada em Indução Laser depilador eletrico masculino feminino a laser Portátil corpo removedor de pêlos USB',
            price: 'R$ 19,99 - R$ 56,99',
            image: './img/Shoppe/Depilador.png',
            shopeeLink: 'https://s.shopee.com.br/9KXOOaKRZ9',
            id: 'ABY-ZGW-VDZ',
        },
        {
            name: 'Depilador a Laser 900 Mil Pulsos Portátil',
            description: 'Dê uma olhada em Depilador A Laser 900 Mil Pulsos Portátil.',
            price: 'R$ 199,99',
            image: './img/Shoppe/Depilado_Laser.jpeg',
            shopeeLink: 'https://s.shopee.com.br/5pxWEDaYGq',
            id: 'BUW-VYG-PYJ',
        },
        {
            name: 'Desumidificador de Ar',
            description: 'Ideal para ambientes úmidos, este desumidificador de ar compacto ajuda a combater mofo e odores.',
            price: 'R$ 180,00',
            image: './img/Shoppe/Desumidificador.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_DESUMIDIFICADOR', 
            id: 'DES-UMID-001',
        },
        {
            name: 'Bucha de Ferro',
            description: 'Ducha decorativa de ferro fundido, perfeita para seu jardim ou área externa, com um toque rústico e elegante.',
            price: 'R$ 250,00',
            image: './img/Shoppe/Ducha de Ferro.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_DUCHA',
            id: 'DUC-FER-JAR',
        },
        {
            name: 'Escova Elétrica para Limpeza',
            description: 'Escova elétrica multifuncional para limpeza profunda de diversas superfícies em casa.',
            price: 'R$ 79,99',
            image: './img/Shoppe/Escola Elétrica .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCOVA_ELET',
            id: 'ESC-ELET-LIMP',
        },
        {
            name: 'Escova de Cabelo Desembaraçadora',
            description: 'Escova de cabelo com cerdas flexíveis, ideal para desembaraçar todos os tipos de cabelo sem quebrar os fios.',
            price: 'R$ 25,90',
            image: './img/Shoppe/Escova .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCOVA_CABELO',
            id: 'ESC-CAB-DES',
        },
        {
            name: 'Escova Alisadora de Cabelo',
            description: 'Escova que alisa o cabelo enquanto penteia, prática e eficiente para um liso perfeito.',
            price: 'R$ 120,00',
            image: './img/Shoppe/Escova Alisador.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCOVA_ALISADORA',
            id: 'ESC-ALIS-CAB',
        },
        {
            name: 'Escova de Dente Elétrica',
            description: 'Escova de dente elétrica com tecnologia avançada para uma limpeza bucal superior e mais eficaz.',
            price: 'R$ 95,00',
            image: './img/Shoppe/Escova Elétrica .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCOVA_DENTE',
            id: 'ESC-DENT-ELET',
        },
        {
            name: 'Esfregão Mágico Absorvente',
            description: 'Esfregão super absorvente com sistema de torção fácil, ideal para limpar pisos com eficiência.',
            price: 'R$ 65,00',
            image: './img/Shoppe/Esfregão .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESFREGAO',
            id: 'ESF-MAG-ABS',
        },
        {
            name: 'Esfregão Giratório com Balde',
            description: 'Sistema completo de esfregão giratório com balde, facilita a limpeza e seca rapidamente.',
            price: 'R$ 110,00',
            image: './img/Shoppe/Esfregão giratório .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESFREGAO_GIR',
            id: 'ESF-GIR-BALDE',
        },
        {
            name: 'Filtro de Água Eletrônico',
            description: 'Filtro de água eletrônico com múltiplas etapas de filtragem, garantindo água pura e saborosa.',
            price: 'R$ 320,00',
            image: './img/Shoppe/Filtro Elétrico .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FILTRO_ELET',
            id: 'FILT-AGUA-ELET',
        },
        {
            name: 'Fone Bluetooth Intra-auricular',
            description: 'Fone de ouvido Bluetooth com design intra-auricular, som de alta qualidade e bateria de longa duração.',
            price: 'R$ 89,90',
            image: './img/Shoppe/Fone de Ouvido Bluetooth .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FONE_BT',
            id: 'FONE-BT-INTRA',
        },
        {
            name: 'Fone de Ouvido KZ Profissional',
            description: 'Fone de ouvido KZ com áudio de alta fidelidade, ideal para músicos e amantes da música.',
            price: 'R$ 150,00',
            image: './img/Shoppe/Fone de Ouvido KZ.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FONE_KZ',
            id: 'FONE-KZ-PROF',
        },
        {
            name: 'Kit de Ferramentas Domésticas Essenciais',
            description: 'Conjunto completo de ferramentas essenciais para pequenos reparos e montagens em casa.',
            price: 'R$ 130,00',
            image: './img/Shoppe/Jogo de chave.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_KIT_FERRAMENTAS',
            id: 'KIT-FERR-DOMES',
        },
        {
            name: 'Liquidificador Portátil USB',
            description: 'Liquidificador compacto e portátil, recarregável via USB, ideal para shakes e sucos em qualquer lugar.',
            price: 'R$ 85,00',
            image: './img/Shoppe/Liquidificador .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LIQUIDIFICADOR',
            id: 'LIQ-PORT-USB',
        },
        {
            name: 'Lixadeira Elétrica de Mão',
            description: 'Lixadeira elétrica compacta e potente, ideal para trabalhos em madeira e acabamentos.',
            price: 'R$ 150,00',
            image: './img/Shoppe/Lixadeira.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LIXADEIRA',
            id: 'LIXADEIRA-ELET',
        },
        {
            name: 'Mini Máquina de Costura Portátil',
            description: 'Mini máquina de costura compacta e fácil de usar, ideal para pequenos reparos e projetos de costura.',
            price: 'R$ 95,00',
            image: './img/Shoppe/Maquina mini.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MINI_MAQ_COSTURA',
            id: 'MINI-MAQ-COST',
        },
        {
            name: 'Máquina de Café Programável',
            description: 'Dê uma olhada em Mini Máquina De Café Expresso Portátil Elétrica Sem Fio 3 Em 1 Para Carro E Casa , Acampamento , Viagem , Cápsula , Cafe',
            price: 'R$ 232,54',
            image: './img/Shoppe/maquina_cafe.png',
            shopeeLink: 'hhttps://s.shopee.com.br/AUjsbwSHdh',
            id: 'BWA-PZC-EAF',
        },
        {
            name: 'Mouse Gamer',
            description: 'Dê uma olhada em Mouse Gamer RGB 7 Botões 7200 DPI SOFT PRO 1619B R8.',
            price: 'R$ 78,9',
            image: './img/Shoppe/mouse_gamer.jpg',
            shopeeLink: 'https://s.shopee.com.br/2qKRMTVRBJ',
            id: 'CCF-MLG-AWN',
        },
        {
            name: 'Smartwatch',
            description: 'Dê uma olhada em Case Acrílico + Película Silicone Protetora Para Smartwatch 41mm 45mm 49mm + Envio Rápido ',
            price: 'R$ 19,90',
            image: './img/Shoppe/smartwatch.jpg',
            shopeeLink: 'https://s.shopee.com.br/7ATQeTOxfV',
            id: 'ACJ-MBP-MFM',
        },
        {
            name: 'Câmera de Segurança IP',
            description: 'Dê uma olhada em Kit 5 Câmeras Lâmpada 360° com Conexão Wi-Fi e Visão Noturna – Controle via Celular',
            price: 'R$ 127,22 - 318,05',
            image: './img/Shoppe/camera.jpg',
            shopeeLink: 'https://s.shopee.com.br/9znc21DwRo',
            id: 'BFR-AVW-AEM',
        },
        {
            name: 'Smart TV 4K',
            description: 'Dê uma olhada em Smart TV LED 43" Ultra HD 4K LG 43UR781C0SA Preto ThinQ AI 3 HDMI 2 USB Wi-Fi Bluetooth HDR10 ',
            price: 'R$ 1.699,00',
            image: './img/Shoppe/Smart_TV.jpg',
            shopeeLink: 'https://s.shopee.com.br/8pbedwYMlW',
            id: 'AFT-YJP-UYZ',
        },
        {
            name: 'Carregador de Indução',
            description: 'Dê uma olhada em Carregador Por Indicação Wireless 3 em 1.',
            price: 'R$ 149,99',
            image: './img/Shoppe/Carregador.jpg',
            shopeeLink: 'https://s.shopee.com.br/60HTGoLgTT',
            id: 'CMA-EFF-EWJ',
        },
        {
            name: 'Brinquedo robô',
            description: 'Dê uma olhada em Brinquedo Robô Dança Gira 360 Graus Robot Som led luz Brinquedo infantil Premium.',
            price: 'R$ 42,97',
            image: './img/Shoppe/Brinquedo_Robo.jpg',
            shopeeLink: 'https://s.shopee.com.br/2g11IlN0N0',
            id: 'ALU-TQA-EBW',
        },
        {
            name: 'Aspirador De Pó Robô',
            description: 'Dê uma olhada em Aspirador De Pó Robô Sem Fio Inteligente Para Caza Chão Varre e Esfrega.',
            price: 'R$ 58,99',
            image: './img/Shoppe/Aspirador_robo.jpg',
            shopeeLink: 'https://s.shopee.com.br/5L1mKwXx2J',
            id: 'AKK-AMX-WEK',
        },
        {
            name: 'Lâmpada Inteligente',
            description: 'Dê uma olhada em Kit 3 Lâmpadas Led Inteligente Sensor Presença 9w E27 6500k',
            price: 'R$ 85,90',
            image: './img/Shoppe/lampada.jpg',
            shopeeLink: 'https://s.shopee.com.br/60HTH5jcBw',
            id: 'AHN-BTE-AVX',
        },
 {
            name: 'Lanterna',
            description: 'Dê uma olhada em Lanterna Super Potente Tática Mais Forte Do Mundo Potente Sitio Fazenda Acampamento Camping Segurança',
            price: 'R$20,50',
            image: './img/Shoppe/Lanterna.jpg',
            shopeeLink: 'https://s.shopee.com.br/9AEdjqyF1K',
            id: 'BCV-QTC-NZM',
        },
        {
            name: 'Teclado Mecânico RGB',
            description: 'Dê uma olhada em Kit Mobilador Gamer Barato RGB 6 Itens Para Celular Mouse Teclado Mecanico Mouse Pad Tripé HUb USB',
            price: 'R$ 29,90 - 112,90',
            image: './img/Shoppe/teclado.jpg',
            shopeeLink: 'https://s.shopee.com.br/9KXvFThVl3',
            id: 'ANU-MUY-TFK',
        },
        {
            name: 'Fone de Ouvido Bluetooth',
            description: 'BDê uma olhada em Bluetooth esportes fone de ouvido M10 fone alta fidelidade qualidade som F9 tela grande Display Digital M28 M19 M25',
            price: 'R$ 35,50',
            image: './img/Shoppe/blutooth.jpg',
            shopeeLink: 'https://s.shopee.com.br/5AiMHsZl6n',
            id: 'CKQ-MDD-MCE',
        },
       /* {
            name: 'Kit de Ferramentas Domésticas Essenciais',
            description: 'Conjunto completo de ferramentas essenciais para pequenos reparos e montagens em casa.',
            price: 'R$ 130,00',
            image: './img/Shoppe/Jogo de chave.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_KIT_FERRAMENTAS',
            id: 'KIT-FERR-DOMES',
        },
        {
            name: 'Kit Limpeza de Computador e Eletrônicos',
            description: 'Kit completo com sprays e panos especiais para limpar telas, teclados e outros eletrônicos.',
            price: 'R$ 50,00',
            image: './img/Shoppe/Limpeza de Computador.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LIMP_COMPUTADOR',
            id: 'KIT-LIMP-COMP',
        },
        {
            name: 'Mix de Castanhas Premium 500g',
            description: 'Delicioso mix de castanhas frescas e selecionadas, perfeito para um lanche saudável e energético.',
            price: 'R$ 48,00',
            image: './img/Shoppe/Mix.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MIX',
            id: 'MIX-CASTANHAS',
        },
        {
            name: 'Mini Climatizador de Ar Portátil USB',
            description: 'Mini climatizador de ar pessoal, refresca e umidifica o ambiente, alimentado por USB.',
            price: 'R$ 110,00',
            image: './img/Shoppe/MIni- Ar condicionador .png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MINI_AR_COND',
            id: 'MINI-AR-COND',
        },
        {
            name: 'Passadeira Antiderrapante para Cozinha',
            description: 'Passadeira para cozinha com base antiderrapante, que oferece segurança e conforto ao cozinhar.',
            price: 'R$ 55,00',
            image: './img/Shoppe/Passadeira.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_PASSADEIRA',
            id: 'PASSADEIRA-COZ',
        },

        {
            name: 'Ventilador de Teto com Controle Remoto',
            description: 'Ventilador silencioso e moderno, com controle remoto para ajustar a velocidade e a iluminação.',
            price: 'R$ 290,00',
            image: './img/Shoppe/Ventilador.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_VENTILADOR',
            id: 'VENTILADOR-TETO',
        },
        {
            name: 'Fita de LED RGB com Controle Remoto',
            description: 'Fita de LED flexível e colorida, ideal para iluminação decorativa em ambientes internos, com várias opções de cores.',
            price: 'R$ 45,00',
            image: './img/Shoppe/Fita LED.png',
            shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FITA_LED',
            id: 'FITA-LED-RGB',
        },*/
       
    ];

    // Função para criar um card de produto
    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">${product.price}</p>
            <a href="${product.shopeeLink}" target="_blank" rel="noopener noreferrer" class="buy-button">Ver na Shopee</a>
        `;
        return productCard;
    }

    // Função para exibir os produtos
    function displayProducts(productsToDisplay) {
        productListDiv.innerHTML = ''; // Limpa a lista antes de adicionar novos produtos
        if (productsToDisplay.length === 0) {
            productListDiv.innerHTML = '<p class="no-results">Nenhum produto encontrado. Tente outra pesquisa!</p>';
            return;
        }
        productsToDisplay.forEach(product => {
            productListDiv.appendChild(createProductCard(product));
        });
    }

    // Lógica para pesquisa
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário
        const searchTerm = searchInput.value.toLowerCase().trim();

        const filteredProducts = productsData.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   (product.description && product.description.toLowerCase().includes(searchTerm)) || // Verifica se a descrição existe
                   (product.id && product.id.toLowerCase().includes(searchTerm)); // Permite pesquisar por ID
        });
        displayProducts(filteredProducts);

        // Se a pesquisa for enviada via GET, atualiza a URL
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('q', searchTerm);
        window.history.pushState({ path: currentUrl.href }, '', currentUrl.href);
    });

    // Função para lidar com a pesquisa inicial (se houver um termo na URL)
    function handleInitialSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const initialSearchTerm = urlParams.get('q');
        if (initialSearchTerm) {
            searchInput.value = initialSearchTerm; // Preenche o campo de pesquisa
            const filteredProducts = productsData.filter(product => {
                return product.name.toLowerCase().includes(initialSearchTerm.toLowerCase()) ||
                       (product.description && product.description.toLowerCase().includes(initialSearchTerm.toLowerCase())) ||
                       (product.id && product.id.toLowerCase().includes(initialSearchTerm.toLowerCase()));
            });
            displayProducts(filteredProducts);
        } else {
            displayProducts(productsData); // Exibe todos os produtos se não houver pesquisa inicial
        }
    }

    // Exibir todos os produtos ao carregar a página (ou resultados da pesquisa inicial)
    handleInitialSearch();

    // Lógica para o botão "ler mais/menos" na bio (opcional, se você quiser implementar)
    const bioParagraph = document.querySelector('.linktree-user-bio p');
    const toggleBioButton = document.querySelector('.toggle-text-btn');
    const fullBioText = bioParagraph.textContent; // Armazena o texto completo
    const shortBioLength = 150; // Defina um limite de caracteres para a bio curta

    if (fullBioText.length > shortBioLength) {
        bioParagraph.textContent = fullBioText.substring(0, shortBioLength) + '...';
        toggleBioButton.style.display = 'inline'; // Mostra o botão se o texto for longo

        toggleBioButton.addEventListener('click', () => {
            if (bioParagraph.textContent.includes('...')) {
                bioParagraph.textContent = fullBioText;
                toggleBioButton.textContent = '...menos';
            } else {
                bioParagraph.textContent = fullBioText.substring(0, shortBioLength) + '...';
                toggleBioButton.textContent = '...mais';
            }
        });
    }
});