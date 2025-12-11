document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input[type="search"]');

    const productsData = [
        {
            name: 'Antena Digital HDTV 4K',
            description: 'Sinal perfeito, imagem cristalina.',
            price: 'R$ 20,99',
            image: './img/Shoppe/Antena Digital.png',
            shopeeLink: 'https://s.shopee.com.br/gFPKX7CRx',
            id: 'BND-HBF-DLE',
        },
        {
            name: 'Robô Aspirador de Pó Inteligente',
            description: 'Limpeza automática e sem esforço.',
            price: 'R$ 53,47',
            image: './img/Shoppe/Aspirador_robo.jpg',
            shopeeLink: 'https://s.shopee.com.br/3qDDlSoswd',
            id: 'BDE-BAR-ZKZ',
        },
        {
            name: 'Balança de Cozinha Digital',
            description: 'Precisão para suas receitas.',
            price: 'R$ 41,99',
            image: './img/Shoppe/Balança de Cozinha.png',
            shopeeLink: 'https://s.shopee.com.br/4L8hi0f3jb',
            id: 'BJP-QQY-ALJ',
        },
        {
            name: 'Barbeador Elétrico Vintage',
            description: 'Visual impecável, com estilo e precisão.',
            price: 'R$ 21,00',
            image: './img/Shoppe/Barbeador.png',
            shopeeLink: 'https://shopee.com.br/8fHgsWk1gG',
            id: 'BYX-UBC-WMX',
        },
        {
            name: 'Kit de Cabos Multicarregador 6 em 1',
            description: 'Diga adeus à bagunça de fios.',
            price: 'R$ 15,00',
            image: './img/Shoppe/Cabo Usb.jpeg',
            shopeeLink: 'https://s.shopee.com.br/7V5kAWosvy',
            id: 'AHU-AUK-ZCD',
        },
        {
            name: 'Chaleira Elétrica Retrô SMEG',
            description: 'Elegância e rapidez na sua cozinha.',
            price: 'R$ 1.074,90',
            image: './img/Shoppe/Chaleira.png',
            shopeeLink: 'https://s.shopee.com.br/gFQ2x8gLQ',
            id: 'CCJ-RBH-YVF',
        },
        {
            name: 'Bule de Chá Elétrico SMEG',
            description: 'Chá perfeito, com 7 temperaturas.',
            price: 'R$ 1.696,00',
            image: './img/Shoppe/Bule de Cha.jpeg',
            shopeeLink: 'https://s.shopee.com.br/6KtmnHbvis',
            id: 'BLT-PZG-EAE',
        },
        {
            name: 'Câmera Lâmpada Wi-Fi 360°',
            description: 'Monitore sua casa com visão noturna.',
            price: 'R$ 63,61',
            image: './img/Shoppe/Camera .jpg',
            shopeeLink: 'https://s.shopee.com.br/9fB0ezkVuV',
            id: 'CKQ-MFQ-HAP',
        },
        {
            name: 'Cortador de Cabelo Profissional',
            description: 'Corte de salão no conforto de casa.',
            price: 'R$ 329,48',
            image: './img/Shoppe/Cortado.jpg',
            shopeeLink: 'https://s.shopee.com.br/6Ab8V8wUkr',
            id: 'CFW-PSB-QDA',
        },
        {
            name: 'Depilador a Laser Portátil',
            description: 'Pele lisa e depilação indolor.',
            price: 'R$ 199,99',
            image: './img/Shoppe/Depilado_Laser.jpeg',
            shopeeLink: 'https://s.shopee.com.br/5pxWEDaYGq',
            id: 'BUW-VYG-PYJ',
        },
        {
            name: 'Camera Digital Portatil',
            description: 'Dê uma olhada em Câmera Digital Portátil, Câmera para Estudantes, Câmera de Bolso, 180 °   Câmera de Tela Flip para Estudantes, Câmera Di.',
            price: 'R$ 198,92',
            image: './img/Shoppe/camera_digital.jpg',
            shopeeLink: 'https://s.shopee.com.br/8pcMXoeBmy',
            id: 'BSZ-PFU-KUY',
        },
        {
            name: 'Esponjas Inox Limpeza',
            description: 'Dê uma olhada em Esponjas Inox Limpeza Pesada Aço Inox Grelhas Ferros Com 12 .',
            price: 'R$ 38,98',
            image: './img/Shoppe/Esponja_Ferro.png',
            shopeeLink: 'https://s.shopee.com.br/7KmK1GfzhC',
            id: 'CJX-YVA-KBA',
        },
        {
            name: 'Escova Elétrica para Limpeza',
            description: 'Dê uma olhada em Escova De Limpeza Elétrica Giratória, Escova De Limpeza Elétrica Com 3 Cabeças De Escova, Escova De Limpeza De Chuveiro Para Limpeza De Banheiro, Janela, Cozinha Para Hotel/comercial.',
            price: 'R$ 53,03',
            image: './img/Shoppe/esponja eletrica .jpg',
            shopeeLink: 'https://s.shopee.com.br/5L1FdlvXSy',
            id: 'BFC-TQZ-EWX',
        },
        {
            name: 'Espremedor Smeg',
            description: 'Dê uma olhada em Espremedor Smeg, Anni 50, Creme, 220V - CJF11CRBR.',
            price: 'R$ 3.038,90',
            image: './img/Shoppe/espremedor.jpg',
            shopeeLink: 'https://s.shopee.com.br/AA7k1lqiHK',
            id: 'ANX-HNG-LQM',
        },
        {
            name: 'Máquina de Café Expresso Portátil',
            description: 'Seu café expresso em qualquer lugar.',
            price: 'R$ 232,54',
            image: './img/Shoppe/maquina_cafe.png',
            shopeeLink: 'https://s.shopee.com.br/AUjsbwSHdh',
            id: 'BWA-PZC-EAF',
        },
        {
            name: 'Mouse Gamer RGB',
            description: 'Precisão e iluminação para seus jogos.',
            price: 'R$ 78,9',
            image: './img/Shoppe/mouse_gamer.jpg',
            shopeeLink: 'https://s.shopee.com.br/2qKRMTVRBJ',
            id: 'CCF-MLG-AWN',
        },
        {
            name: 'Mini Impressora Portátil', 
            description: 'Imprima fotos e anotações direto do seu bolso via Bluetooth.',
            price: 'R$ 49,99',
            image: './img/Shoppe/impressora.jpg',
            shopeeLink: 'https://s.shopee.com.br/2LOscQCYQx',
            id: 'ALY-QQD-DZM',
        },
        {
            name: 'Smeg-Moedor de Cafe', 
            description: 'Dê uma olhada em Moedor de café Smeg, Anni 50, Branco, 220V - CGF11WHBR.',
            price: 'R$ 1389,90',
            image: './img/Shoppe/moedor.jpg',
            shopeeLink: 'https://s.shopee.com.br/5L2UIBcjmE',
            id: 'CJV-WTX-RQV',
        },
        {
            name: 'Suporte p/ Celular de Moto e Bike',
            description: 'Segurança e resistência para seu celular no guidão.',
            price: 'R$ 20,99',
            image: './img/Shoppe/suporte para celular .jpg',
            shopeeLink: 'https://s.shopee.com.br/1qSEMReJO8',
            id: 'BTV-FBC-AAY',
        },
        {
            name: 'Hub USB Tipo-C 4 Portas',
            description: 'Expanda as portas do seu notebook com alta velocidade.',
            price: 'R$ 19,98',
            image: './img/Shoppe/hub usb.jpg',
            shopeeLink: 'https://s.shopee.com.br/AKQmTwtjP8',
            id: 'AQR-LSZ-QZJ',
        },
        {
            name: 'Mini Câmera Espiã A9 Wi-Fi',
            description: 'Monitoramento discreto com qualidade Full HD e Wi-Fi.',
            price: 'R$ 20,81 - R$ 32,36',
            image: './img/Shoppe/mini camera.jpg',
            shopeeLink: 'https://s.shopee.com.br/70AKVkL5dn',
            id: 'CBR-LLR-XZF',
        },
        {
            name: 'Suporte Celular de Mesa Retrátil',
            description: 'Ajuste perfeito para seu celular. Conforto e estabilidade.',
            price: 'R$ 23,99 - R$ 24,99',
            image: './img/Shoppe/suporte celular de mesa.jpg',
            shopeeLink: 'https://s.shopee.com.br/3qDIjqiVx0',
            id: 'BPC-WCE-BKT',
        },
        {
            name: 'Luminária LED Meia Lua',
            description: 'Iluminação profissional para maquiagem, tatuagem e fotos.',
            price: 'R$ 249,99 - R$ 299,90',
            image: './img/Shoppe/luminaria meia lua.jpg',
            shopeeLink: 'https://s.shopee.com.br/8Uz8IGUmwT',
            id: 'BUD-RHQ-LBF',
        },
        {
            name: 'suporte base para Notebook',
            description: 'Dê uma olhada em suporte base para Notebook com cooler e led cor preto.',
            price: 'R$ 20,00',
            image: './img/Shoppe/suporte_cooler.jpg',
            shopeeLink: 'https://s.shopee.com.br/7V6ymqVnfK',
            id: 'ADZ-VHC-YGR',
        },
        {
            name: 'Suporte para Câmeras e Action Cam',
            description: 'Prenda sua câmera em bonés e trilhos táticos.',
            price: 'R$ 45,90 - R$ 99,90',
            image: './img/Shoppe/suporte para camera.jpg',
            shopeeLink: 'https://s.shopee.com.br/VwqlVISTm',
            id: 'ACM-GRA-ERB',
        },
        {
            name: 'Befo - Ventilador Resfriamento',
            description: 'Folha magnética para resfriar seu celular em jogos.',
            price: 'R$ 10,24 - R$ 10,58',
            image: './img/Shoppe/mini ventoinha.jpg',
            shopeeLink: 'https://s.shopee.com.br/6VE3uRg2Ob',
            id: 'ARY-JJX-FKH',
        },
        {
            name: 'Controle Gamer para Celular',
            description: 'Melhore sua performance em jogos com cooler integrado.',
            price: 'R$ 53,00 - R$ 70,00',
            image: './img/Shoppe/controle com ventoinha.jpg',
            shopeeLink: 'https://s.shopee.com.br/AKQmTQ2718',
            id: 'AHA-WDT-ZAZ',
        },
        {
            name: 'Mini Teclado Wireless c/ Touchpad',
            description: 'Controle sua TV, PC ou notebook de forma prática e sem fios.',
            price: 'R$ 36,50',
            image: './img/Shoppe/mini teclado.jpg',
            shopeeLink: 'https://s.shopee.com.br/7ATkhUhwZe',
            id: 'AWT-NTZ-GXP',
        },
        {
            name: 'Óculos VR Box 2.0',
            description: 'Explore a realidade virtual e 3D no seu próprio celular.',
            price: 'R$ 48,99',
            image: './img/Shoppe/oculos vr.jpg',
            shopeeLink: 'https://s.shopee.com.br/9AEp54L9c6',
            id: 'BYA-JHH-GTX',
        },
        {
            name: 'Microfone SF 666 Condensador',
            description: 'Grave áudios com clareza e qualidade profissional.',
            price: 'R$ 59,99',
            image: './img/Shoppe/microfone.jpg',
            shopeeLink: 'https://s.shopee.com.br/1VpNwpicu8',
            id: 'BQK-TUB-RKX',
        },
        {
            name: 'Carregador Portátil Turbo 20000mAh',
            description: 'Nunca mais fique sem bateria! Carregamento rápido para todos os dispositivos.',
            price: 'R$ 64,75 - R$ 68,70',
            image: './img/Shoppe/carregador portatil.jpg',
            shopeeLink: 'https://s.shopee.com.br/2Vhv8Plph5',
            id: 'BGC-GRV-CPX',
        },
        {
            name: 'Suporte Celular Modelo Carro',
            description: 'Suporte dobrável com rotação 360°. Design elegante para seu carro.',
            price: 'R$ 32,98',
            image: './img/Shoppe/suporte.jpg',
            shopeeLink: 'https://s.shopee.com.br/6pquIBVmed',
            id: 'CGL-QVT-XWE',
        },
        {
            name: 'Cabo Carregador Turbo p/ iPhone',
            description: 'Carregamento turbo para seu iPhone. Resistente e rápido.',
            price: 'R$ 6,50',
            image: './img/Shoppe/cabo turbo.jpg',
            shopeeLink: 'https://s.shopee.com.br/2B54jUPyjq',
            id: 'BAM-LHM-ZLN',
        },
        {
            name: 'Mini Ventilador USB Flexível',
            description: 'Ventilação imediata para seu notebook ou computador.',
            price: 'R$ 14,99',
            image: './img/Shoppe/mini ventilador.jpg',
            shopeeLink: 'https://s.shopee.com.br/LdQY3PDyo',
            id: 'AHQ-XGQ-RJC',
        },
        {
            name: 'Webcam Full HD 1080p',
            description: 'Videochamadas e lives em alta definição. Microfone integrado.',
            price: 'R$ 22,90',
            image: './img/Shoppe/webcam.jpg',
            shopeeLink: 'https://s.shopee.com.br/2Vhv7bO26R',
            id: 'CGV-BCG-HPR',
        },
        {
            name: 'Mini Tripé Flexível',
            description: 'Estabilidade para suas fotos e vídeos em qualquer superfície.',
            price: 'R$ 14,99',
            image: './img/Shoppe/mini tripe.jpg',
            shopeeLink: 'https://s.shopee.com.br/7KnAsPBVE5',
            id: 'BRM-APQ-XSC',
        },
        {
            name: 'Caixa de Som Bluetooth Caveira',
            description: 'Som portátil e à prova d’água com design único e LED.',
            price: 'R$ 77,00',
            image: './img/Shoppe/caixa de som.jpg',
            shopeeLink: 'https://s.shopee.com.br/7pjRTEcQAP',
            id: 'CKT-GSQ-AEW',
        },
        {
            name: 'Ring Light LED de Mesa',
            description: 'Iluminação perfeita para vídeos, fotos e lives.',
            price: 'R$ 28,60 - R$ 44,00',
            image: './img/Shoppe/ring light.jpg',
            shopeeLink: 'https://s.shopee.com.br/9UrfS3YHmF',
            id: 'BRJ-FDL-TQT',
        },
        {
            name: 'Fone Gamer TWS Kaidi',
            description: 'Baixa latência para jogos.',
            price: 'R$ 89,90',
            image: './img/Shoppe/fone gamer.jpg',
            shopeeLink: 'https://s.shopee.com.br/7ATkfhINym',
            id: 'BBK-XSX-CKM',
        },
        {
            name: 'Smartwatch IWO X8',
            description: 'Relógio inteligente para esporte, à prova d’água e com Bluetooth.',
            price: 'R$ 35,88 - R$ 39,99',
            image: './img/Shoppe/Smartwatch_prova.jpg',
            shopeeLink: 'https://s.shopee.com.br/2Vhv6zCR16',
            id: 'AVH-VRX-KHF',
        },
        {
            name: 'Mini Projetor Portátil AUN',
            description: 'Crie uma experiência de cinema em casa com Wi-Fi e HDMI.',
            price: 'R$ 649,99',
            image: './img/Shoppe/mini projetor.jpg',
            shopeeLink: 'https://s.shopee.com.br/4Aq956zGqW',
            id: 'BEP-UDP-AUL',
        },
        {
            name: 'Smartwatch Esportivo',
            description: 'Monitore sua saúde e receba notificações.',
            price: 'R$ 19,90',
            image: './img/Shoppe/smartwatch.jpg',
            shopeeLink: 'https://s.shopee.com.br/7ATQeTOxfV',
            id: 'ACJ-MBP-MFM',
        },
        {
            name: 'Câmera de Segurança IP Wi-Fi',
            description: 'Proteção 24h via celular.',
            price: 'R$ 127,22 - 318,05',
            image: './img/Shoppe/Camera .jpg',
            shopeeLink: 'https://s.shopee.com.br/9znc21DwRo',
            id: 'BFR-AVW-AEM',
        },
        {
            name: 'Smart TV 4K LG 43"',
            description: 'Imagem Ultra HD 4K e som de cinema.',
            price: 'R$ 1.699,00',
            image: './img/Shoppe/Smart_TV.jpg',
            shopeeLink: 'https://s.shopee.com.br/8pbedwYMlW',
            id: 'AFT-YJP-UYZ',
        },
        {
            name: 'Carregador de Indução 3 em 1',
            description: 'Carregue tudo, sem bagunça de fios.',
            price: 'R$ 149,99',
            image: './img/Shoppe/Carregador.jpg',
            shopeeLink: 'https://s.shopee.com.br/60HTGoLgTT',
            id: 'CMA-EFF-EWJ',
        },
        {
            name: 'Brinquedo Robô Musical',
            description: 'Diversão garantida para a criançada.',
            price: 'R$ 42,97',
            image: './img/Shoppe/Brinquedo_Robo.jpg',
            shopeeLink: 'https://s.shopee.com.br/2g11IlN0N0',
            id: 'ALU-TQA-EBW',
        },
        {
            name: 'Lâmpada Inteligente com Sensor',
            description: 'Economia e segurança. Acende com movimento.',
            price: 'R$ 85,90',
            image: './img/Shoppe/lampada.jpg',
            shopeeLink: 'https://s.shopee.com.br/60HTH5jcBw',
            id: 'AHN-BTE-AVX',
        },
        {
            name: 'Lanterna Tática Super Potente',
            description: 'Ilumine tudo, ideal para segurança.',
            price: 'R$ 20,50',
            image: './img/Shoppe/Lanterna.jpg',
            shopeeLink: 'https://s.shopee.com.br/9AEdjqyF1K',
            id: 'BCV-QTC-NZM',
        },
        {
            name: 'Teclado Mecânico RGB Gamer',
            description: 'Domine seus jogos com alto desempenho.',
            price: 'R$ 29,90 - 112,90',
            image: './img/Shoppe/teclado.jpg',
            shopeeLink: 'https://s.shopee.com.br/9KXvFThVl3',
            id: 'ANU-MUY-TFK',
        },
        {
            name: 'Fone de Ouvido Bluetooth TWS',
            description: 'Liberdade sem fio e som de alta fidelidade.',
            price: 'R$ 35,50',
            image: './img/Shoppe/blutooth.jpg',
            shopeeLink: 'https://s.shopee.com.br/5AiMHsZl6n',
            id: 'CKQ-MDD-MCE',
        },
        {
            name: 'Kit Soprador e Aspirador',
            description: 'Ferramenta versátil para limpeza.',
            price: 'R$ 82,00',
            image: './img/Shoppe/Soprador.jpg',
            shopeeLink: 'https://s.shopee.com.br/50P6eFpfBS',
            id: 'AYD-FUM-YVC',
        },
        {
            name: 'Soprador Térmico Profissional',
            description: 'Potência e controle para seus projetos.',
            price: 'R$ 184,90',
            image: './img/Shoppe/soprador_termico.jpg',
            shopeeLink: 'https://s.shopee.com.br/7V6W62BJJd',
            id: 'ARP-YBP-EDB',
        },
        {
            name: 'Combo Gamer Completo',
            description: 'Tudo para dominar o jogo.',
            price: 'R$ 339,90',
            image: './img/Shoppe/combo.jpg',
            shopeeLink: 'https://s.shopee.com.br/1VpIxIrpTV',
            id: 'BXP-CPV-CVD',
        },
        {
            name: 'Chave de Impacto sem Fio',
            description: 'Potência e liberdade para seus reparos.',
            price: 'R$ 499,00',
            image: './img/Shoppe/chave.jpg',
            shopeeLink: 'https://s.shopee.com.br/5pyI7V4KDV',
            id: 'AGS-KWK-YSZ',
        },
        {
            name: 'Cozedor Elétrico de Ovo',
            description: 'Ovo perfeito, sem sujar a cozinha.',
            price: 'R$ 59,90',
            image: './img/Shoppe/cozedor.jpg',
            shopeeLink: 'https://s.shopee.com.br/7V6W6pE49Q',
            id: 'ANU-MXK-RZW',
        },
        {
            name: 'Ventilador de Teto Tornado',
            description: 'Poderoso e silencioso. Máxima ventilação.',
            price: 'R$ 772,65',
            image: './img/Shoppe/ventilador.jpg',
            shopeeLink: 'https://s.shopee.com.br/8AOxb16nga',
            id: 'APD-HUB-MRF',
        },
        {
            name: 'Fita de LED 5m Colorida',
            description: 'Transforme seu ambiente com luzes vibrantes.',
            price: 'R$ 27,00',
            image: './img/Shoppe/fita_led.jpg',
            shopeeLink: 'https://s.shopee.com.br/5fervpFbVO',
            id: 'BNN-UYM-UHZ',
        },
    ];

    function createProductCard(product) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <div class="details">
                    <p class="price-label">Preço:</p>
                    <p class="price"><strong>${product.price}</strong></p>
                    <p class="id">ID: <strong>${product.id}</strong></p>
                </div>
            </div>
            <a href="${product.shopeeLink}" target="_blank" rel="noopener noreferrer" class="buy-button">Comprar na Shopee</a>
        `;
        return productCard;
    }

    function displayProducts(productsToDisplay) {
        productListDiv.innerHTML = '';
        if (productsToDisplay.length === 0) {
            productListDiv.innerHTML = '<p class="no-results">Nenhum produto encontrado. Tente outra pesquisa!</p>';
            return;
        }
        productsToDisplay.forEach(product => {
            productListDiv.appendChild(createProductCard(product));
        });
    }

    searchForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase().trim();

        const filteredProducts = productsData.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                (product.description && product.description.toLowerCase().includes(searchTerm)) ||
                (product.id && product.id.toLowerCase().includes(searchTerm));
        });
        displayProducts(filteredProducts);

        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.set('q', searchTerm);
        window.history.pushState({ path: currentUrl.href }, '', currentUrl.href);
    });

    function handleInitialSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const initialSearchTerm = urlParams.get('q');
        if (initialSearchTerm) {
            searchInput.value = initialSearchTerm;
            const filteredProducts = productsData.filter(product => {
                return product.name.toLowerCase().includes(initialSearchTerm.toLowerCase()) ||
                    (product.description && product.description.toLowerCase().includes(initialSearchTerm.toLowerCase())) ||
                    (product.id && product.id.toLowerCase().includes(initialSearchTerm.toLowerCase()));
            });
            displayProducts(filteredProducts);
        } else {
            displayProducts(productsData);
        }
    }

    handleInitialSearch();

    const bioParagraph = document.querySelector('.linktree-user-bio p');
    const toggleBioButton = document.querySelector('.toggle-text-btn');
    const fullBioText = bioParagraph.textContent;
    const shortBioLength = 150;

    if (fullBioText.length > shortBioLength) {
        bioParagraph.textContent = fullBioText.substring(0, shortBioLength) + '...';
        toggleBioButton.style.display = 'inline';

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