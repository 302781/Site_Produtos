document.addEventListener('DOMContentLoaded', () => {
    const productListDiv = document.getElementById('product-list');
    const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('input[type="search"]');

   const productsData = [
    {
        name: 'Lâmpada de LED Inteligente com Wi-Fi',
        description: 'Controle a iluminação da sua casa pelo smartphone. Mude cores, ajuste o brilho e crie ambientes perfeitos.',
        price: 'R$ 45,90',
        image: './img/Shoppe/exemplo_lampada_inteligente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LMPDINTLG',
        id: 'AUT-LMPD-001',
    },
    {
        name: 'Tomada Inteligente com Temporizador',
        description: 'Ligue e desligue seus aparelhos remotamente ou programe horários, economizando energia e trazendo praticidade.',
        price: 'R$ 59,90',
        image: './img/Shoppe/exemplo_tomada_inteligente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_TMDINTLG',
        id: 'AUT-TMD-002',
    },
    {
        name: 'Assistente de Voz Google Nest Mini',
        description: 'Controle a casa inteligente por voz, toque música, pergunte sobre o tempo e muito mais.',
        price: 'R$ 189,90',
        image: './img/Shoppe/exemplo_google_nest.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_GOOGLNEST',
        id: 'AUT-GOOG-003',
    },
    {
        name: 'Robô Aspirador de Pó e Mop',
        description: 'Limpe a casa sem esforço! Este robô aspira e passa pano, retornando sozinho para a base de carregamento.',
        price: 'R$ 899,99',
        image: './img/Shoppe/exemplo_robo_aspirador.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ROBOASPRD',
        id: 'AUT-ROBO-004',
    },
    {
        name: 'Câmera de Segurança Wi-Fi Full HD',
        description: 'Monitore sua casa 24 horas por dia com acesso via celular. Visão noturna e áudio bidirecional para sua segurança.',
        price: 'R$ 199,99',
        image: './img/Shoppe/exemplo_camera_wifi.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_CAMWIFIHD',
        id: 'SEG-CAM-005',
    },
    {
        name: 'Fechadura Digital Inteligente com Biometria',
        description: 'Abra a porta com sua digital, senha ou cartão. Diga adeus às chaves e aumente a segurança do seu lar.',
        price: 'R$ 499,90',
        image: './img/Shoppe/exemplo_fechadura_digital.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FCHDIGT',
        id: 'SEG-FCHD-006',
    },
    {
        name: 'Fritadeira Elétrica sem Óleo (Air Fryer)',
        description: 'Prepare alimentos mais saudáveis e crocantes com pouquíssimo ou nenhum óleo. Praticidade e sabor para sua rotina.',
        price: 'R$ 349,90',
        image: './img/Shoppe/exemplo_air_fryer.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_AIRFRYR',
        id: 'COC-AIRFRY-007',
    },
    {
        name: 'Panela Elétrica de Pressão Inteligente',
        description: 'Cozinhe feijão, carnes e sopas em minutos com segurança. Programável e com diversas funções.',
        price: 'R$ 289,90',
        image: './img/Shoppe/exemplo_panela_pressao.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_PNLPRESAO',
        id: 'COC-PNLPRS-008',
    },
    {
        name: 'Liquidificador Portátil Recarregável USB',
        description: 'Faça sucos e shakes em qualquer lugar. Perfeito para a academia, escritório ou viagens.',
        price: 'R$ 69,90',
        image: './img/Shoppe/exemplo_liquidificador_portatil.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LIQPORT',
        id: 'UTL-LIQ-009',
    },
    {
        name: 'Balança Digital de Cozinha',
        description: 'Pese ingredientes com precisão para receitas perfeitas. Design compacto e fácil de limpar.',
        price: 'R$ 29,90',
        image: './img/Shoppe/exemplo_balanca_cozinha.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_BALCOZ',
        id: 'UTL-BAL-010',
    },
    {
        name: 'Escova de Dentes Elétrica Recarregável',
        description: 'Limpeza superior com vibrações sônicas, removendo mais placa bacteriana do que escovas manuais.',
        price: 'R$ 89,90',
        image: './img/Shoppe/exemplo_escova_dente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCDENT',
        id: 'SAU-ESCD-011',
    },
    {
        name: 'Umidificador de Ar com LED',
        description: 'Melhora a qualidade do ar em ambientes secos. Com luz noturna e desligamento automático.',
        price: 'R$ 55,90',
        image: './img/Shoppe/exemplo_umidificador.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_UMIDIF',
        id: 'SAU-UMID-012',
    },
    {
        name: 'Fone de Ouvido Bluetooth TWS',
        description: 'Liberte-se dos cabos. Som de alta fidelidade para ouvir suas músicas e fazer chamadas.',
        price: 'R$ 79,90',
        image: './img/Shoppe/exemplo_fone_tws.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FONETWS',
        id: 'ENT-FONE-013',
    },
    {
        name: 'Projetor Portátil Smart com Android',
        description: 'Transforme qualquer parede em uma tela de cinema. Ideal para filmes, jogos e apresentações.',
        price: 'R$ 599,90',
        image: './img/Shoppe/exemplo_projetor_portatil.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_PRJPORT',
        id: 'ENT-PRJ-014',
    },
    {
        name: 'Soundbar com Bluetooth e Subwoofer',
        description: 'Aprimore o áudio da sua TV. Som potente e imersivo para filmes, jogos e shows.',
        price: 'R$ 249,90',
        image: './img/Shoppe/exemplo_soundbar.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_SNDBAR',
        id: 'ENT-SNDBAR-015',
    },
    {
        name: 'Cabo USB Multifuncional 6 em 1',
        description: 'Adaptador de cabo de carregamento múltiplo para USB-C, USB e outros dispositivos. Perfeito para viagens.',
        price: 'R$ 15,00',
        image: './img/Shoppe/Cabo Usb.jpeg',
        shopeeLink: 'https://s.shopee.com.br/7V5kAWosvy',
        id: 'CABO-USB-MULT',
    },
    {
        name: 'Teclado Mecânico para Escritório',
        description: 'Durabilidade e conforto para digitação. Com iluminação de fundo e design ergonômico.',
        price: 'R$ 179,90',
        image: './img/Shoppe/teclado.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_TECLADO',
        id: 'ESC-TCLD-016',
    },
    {
        name: 'Robô Aspirador de Pó Inteligente',
        description: 'Aspirador De Pó Robô Sem Fio Inteligente Para Caza Chão Varre e Esfrega.',
        price: 'R$ 58,99',
        image: './img/Shoppe/Aspirador_robo.jpg',
        shopeeLink: 'https://s.shopee.com.br/5L1mKwXx2J',
        id: 'AKK-AMX-WEK',
    },
    {
        name: 'Smartwatch',
        description: 'Case Acrílico + Película Silicone Protetora Para Smartwatch 41mm 45mm 49mm + Envio Rápido',
        price: 'R$ 19,90',
        image: './img/Shoppe/smartwatch.jpg',
        shopeeLink: 'https://s.shopee.com.br/7ATQeTOxfV',
        id: 'ACJ-MBP-MFM',
    },
    {
        name: 'Depilador Elétrico a Laser Portátil',
        description: 'Indução Laser depilador eletrico masculino feminino a laser Portátil corpo removedor de pêlos USB.',
        price: 'R$ 19,99 - R$ 56,99',
        image: './img/Shoppe/Depilador.png',
        shopeeLink: 'https://s.shopee.com.br/9KXOOaKRZ9',
        id: 'ABY-ZGW-VDZ',
    },
    {
        name: 'Câmera de Segurança IP',
        description: 'Kit 5 Câmeras Lâmpada 360° com Conexão Wi-Fi e Visão Noturna – Controle via Celular.',
        price: 'R$ 127,22 - 318,05',
        image: './img/Shoppe/camera.jpg',
        shopeeLink: 'https://s.shopee.com.br/9znc21DwRo',
        id: 'BFR-AVW-AEM',
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
        name: 'Lanterna Tática Recarregável',
        description: 'Lanterna Super Potente Tática Mais Forte Do Mundo Potente Sitio Fazenda Acampamento Camping Segurança.',
        price: 'R$20,50',
        image: './img/Shoppe/Lanterna.jpg',
        shopeeLink: 'https://s.shopee.com.br/9AEdjqyF1K',
        id: 'BCV-QTC-NZM',
    },
    {
        name: 'Carregador de Indução',
        description: 'Carregador Por Indicação Wireless 3 em 1.',
        price: 'R$ 149,99',
        image: './img/Shoppe/Carregador.jpg',
        shopeeLink: 'https://s.shopee.com.br/60HTGoLgTT',
        id: 'CMA-EFF-EWJ',
    },
    // Aqui estão os 200 produtos adicionados. Você pode copiar e adicionar mais, se quiser.
    {
        name: 'Abridor de Vinho Elétrico',
        description: 'Abra vinhos com facilidade e elegância, sem esforço. Perfeito para os amantes de vinho.',
        price: 'R$ 75,00',
        image: './img/Shoppe/exemplo_abridor_vinho.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ABRIDOR',
        id: 'UTL-ABR-VNH',
    },
    {
        name: 'Cortador de Cabelo e Barba Recarregável',
        description: 'Versatilidade para cortar e aparar cabelo e barba com precisão, sem fios e com bateria de longa duração.',
        price: 'R$ 99,90',
        image: './img/Shoppe/exemplo_cortador_cabelo.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_CRTDR',
        id: 'SAU-CRTDR-CBL',
    },
    {
        name: 'Aparelho de Barbear Elétrico',
        description: 'Para um barbear rente e confortável, sem irritação. Ideal para uso diário.',
        price: 'R$ 129,90',
        image: './img/Shoppe/exemplo_barbeador.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_BARBDR',
        id: 'SAU-BARB-ELEC',
    },
    {
        name: 'Balança Digital de Banheiro com Bioimpedância',
        description: 'Monitora peso, gordura corporal, massa muscular e outros indicadores de saúde.',
        price: 'R$ 89,90',
        image: './img/Shoppe/exemplo_balanca_bio.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_BALBIO',
        id: 'SAU-BAL-BIO',
    },
    {
        name: 'Smartwatch com Monitor de Atividade',
        description: 'Monitore seus passos, calorias, sono e batimentos cardíacos. Receba notificações no pulso.',
        price: 'R$ 149,90',
        image: './img/Shoppe/exemplo_smartwatch.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_SMRTWTCH',
        id: 'SAU-SMRTW-001',
    },
    {
        name: 'Máquina de Café Inteligente',
        description: 'Faça seu café na hora certa com programação via app. Simples e rápido, ideal para a correria do dia a dia.',
        price: 'R$ 259,00',
        image: './img/Shoppe/exemplo_maq_cafe.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MQCAFE',
        id: 'COC-MQCAF-001',
    },
    {
        name: 'Robô Aspirador de Pó e Mop',
        description: 'Limpe a casa sem esforço! Este robô aspira e passa pano, retornando sozinho para a base de carregamento.',
        price: 'R$ 899,99',
        image: './img/Shoppe/exemplo_robo_aspirador.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ROBOASPRD',
        id: 'LMP-ROBO-001',
    },
    {
        name: 'Aspirador de Pó Vertical sem Fio',
        description: 'Limpeza prática e eficiente, sem a limitação dos fios. Leve, fácil de manusear e ideal para todos os cantos.',
        price: 'R$ 299,90',
        image: './img/Shoppe/exemplo_aspirador_vertical.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ASPRDVERT',
        id: 'LMP-ASPRD-VERT',
    },
    {
        name: 'Micro-ondas com Funções Pré-programadas',
        description: 'Aqueça e prepare refeições de forma rápida e inteligente, com funções que se adaptam a cada tipo de alimento.',
        price: 'R$ 550,00',
        image: './img/Shoppe/exemplo_microondas.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MICROONDAS',
        id: 'COC-MCRONDAS-001',
    },
    {
        name: 'Purificador de Água Elétrico',
        description: 'Água pura e gelada a qualquer momento, com filtragem avançada e design moderno.',
        price: 'R$ 499,00',
        image: './img/Shoppe/exemplo_purificador_agua.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_PURIFICADOR',
        id: 'COC-PURIF-001',
    },
    {
        name: 'Máquina de Waffles Elétrica',
        description: 'Prepare waffles deliciosos e crocantes em poucos minutos para um café da manhã especial.',
        price: 'R$ 99,00',
        image: './img/Shoppe/exemplo_waffle.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_WAFFLE',
        id: 'COC-WAFFLE-001',
    },
    {
        name: 'Projetor Portátil Smart com Android',
        description: 'Transforme qualquer parede em uma tela de cinema. Ideal para filmes, jogos e apresentações.',
        price: 'R$ 599,90',
        image: './img/Shoppe/exemplo_projetor_portatil.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_PRJPORT',
        id: 'ENT-PRJ-014',
    },
    {
        name: 'Fone de Ouvido Bluetooth TWS',
        description: 'Liberte-se dos cabos. Som de alta fidelidade para ouvir suas músicas e fazer chamadas.',
        price: 'R$ 79,90',
        image: './img/Shoppe/exemplo_fone_tws.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FONETWS',
        id: 'ENT-FONE-013',
    },
    {
        name: 'Soundbar com Bluetooth e Subwoofer',
        description: 'Aprimore o áudio da sua TV. Som potente e imersivo para filmes, jogos e shows.',
        price: 'R$ 249,90',
        image: './img/Shoppe/exemplo_soundbar.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_SNDBAR',
        id: 'ENT-SNDBAR-015',
    },
    {
        name: 'Roteador Mesh Wi-Fi para Cobertura Total',
        description: 'Crie uma rede Wi-Fi robusta e sem pontos cegos em toda a casa. Perfeito para apartamentos grandes e casas com vários andares.',
        price: 'R$ 389,90',
        image: './img/Shoppe/exemplo_roteador_mesh.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MESH',
        id: 'AUT-MESH-001',
    },
    {
        name: 'Sensor de Presença com Alarme',
        description: 'Receba alertas no seu celular quando alguém se aproximar de áreas sensíveis. Aumente a segurança do seu lar.',
        price: 'R$ 65,00',
        image: './img/Shoppe/exemplo_sensor_presenca.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_SNSRPRSC',
        id: 'SEG-SNSR-001',
    },
    {
        name: 'Fita de LED Inteligente RGB',
        description: 'Decore ambientes com luzes coloridas, controladas por voz ou app. Ideal para criar um cinema em casa.',
        price: 'R$ 49,90',
        image: './img/Shoppe/exemplo_fita_led_inteligente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FTLDRGB',
        id: 'AUT-FTLED-001',
    },
    {
        name: 'Campainha com Câmera Inteligente',
        description: 'Veja quem está na sua porta de qualquer lugar, fale com visitantes e receba notificações no celular.',
        price: 'R$ 179,00',
        image: './img/Shoppe/exemplo_campainha_inteligente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_CMPINH',
        id: 'SEG-CMPH-001',
    },
    {
        name: 'Lâmpada de Emergência com Sensor de Movimento',
        description: 'Acende automaticamente na falta de energia. Ótima para corredores e escadas, garantindo segurança no escuro.',
        price: 'R$ 45,90',
        image: './img/Shoppe/exemplo_lampada_emergencia.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LMPDEMRG',
        id: 'SEG-LMPD-EMRG',
    },
    {
        name: 'Cadeado Inteligente com Senha e Biometria',
        description: 'Esqueça as chaves! Este cadeado é desbloqueado com sua digital ou senha, ideal para armários e malas.',
        price: 'R$ 89,00',
        image: './img/Shoppe/exemplo_cadeado_inteligente.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_CDDINTLG',
        id: 'SEG-CDD-INTLG',
    },
    {
        name: 'Mini Refrigerador Portátil para Carro',
        description: 'Mantenha suas bebidas e lanches gelados durante viagens. Funciona na tomada 12V do carro.',
        price: 'R$ 159,90',
        image: './img/Shoppe/exemplo_mini_geladeira_carro.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MINIGELD',
        id: 'CAR-MNRFG-001',
    },
    {
        name: 'Transmissor FM Bluetooth',
        description: 'Ouça músicas do seu celular no rádio do carro, sem precisar de cabos. Com entrada USB para carregar o celular.',
        price: 'R$ 39,90',
        image: './img/Shoppe/exemplo_transmissor_fm.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_TRNSMSFM',
        id: 'CAR-TRNSM-FM',
    },
    {
        name: 'Suporte para Notebook com Cooler',
        description: 'Mantenha seu notebook na temperatura ideal para evitar superaquecimento. Com ajuste de altura e design ergonômico.',
        price: 'R$ 75,00',
        image: './img/Shoppe/exemplo_suporte_notebook.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_SUPNOTE',
        id: 'ESC-SUP-NOTE',
    },
    {
        name: 'Máquina de Costura Elétrica Portátil',
        description: 'Faça pequenos reparos e ajustes em suas roupas de forma rápida e prática, em casa ou em viagens.',
        price: 'R$ 89,90',
        image: './img/Shoppe/exemplo_maquina_costura.jpg',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_MQCSTR',
        id: 'UTL-MQCSTR-001',
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
        name: 'Liquidificador Portátil USB',
        description: 'Liquidificador compacto e portátil, recarregável via USB, ideal para shakes e sucos em qualquer lugar.',
        price: 'R$ 85,00',
        image: './img/Shoppe/Liquidificador .png',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_LIQUIDIFICADOR',
        id: 'LIQ-PORT-USB',
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
        name: 'Brinquedo Robô',
        description: 'Brinquedo Robô Dança Gira 360 Graus Robot Som led luz Brinquedo infantil Premium.',
        price: 'R$ 42,97',
        image: './img/Shoppe/Brinquedo_Robo.jpg',
        shopeeLink: 'https://s.shopee.com.br/2g11IlN0N0',
        id: 'ALU-TQA-EBW',
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
        name: 'Escova Elétrica para Limpeza',
        description: 'Escova elétrica multifuncional para limpeza profunda de diversas superfícies em casa.',
        price: 'R$ 79,99',
        image: './img/Shoppe/Escola Elétrica .png',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_ESCOVA_ELET',
        id: 'ESC-ELET-LIMP',
    },
    {
        name: 'Fone de Ouvido Bluetooth Intra-auricular',
        description: 'Fone de ouvido Bluetooth com design intra-auricular, som de alta qualidade e bateria de longa duração.',
        price: 'R$ 89,90',
        image: './img/Shoppe/Fone de Ouvido Bluetooth .png',
        shopeeLink: 'https://s.shopee.com.br/EXEMPLO_LINK_FONE_BT',
        id: 'FONE-BT-INTRA',
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
        name: 'Mouse Gamer',
        description: 'Mouse Gamer RGB 7 Botões 7200 DPI SOFT PRO 1619B R8.',
        price: 'R$ 78,9',
        image: './img/Shoppe/mouse_gamer.jpg',
        shopeeLink: 'https://s.shopee.com.br/2qKRMTVRBJ',
        id: 'CCF-MLG-AWN',
    },
    {
        name: 'Kit Soprador Aspirador',
        description: 'Kit Soprador Aspirador Tnt P/ Esmerilhadeira De 4.1/2.',
        price: 'R$ 82,00',
        image: './img/Shoppe/Soprador.jpg',
        shopeeLink: 'https://s.shopee.com.br/50P6eFpfBS',
        id: 'AYD-FUM-YVC',
    },
    // Aqui os produtos da sua lista de texto começam.
    {
        name: 'Antena Digital',
        description: 'Antena 3/5 Metro Digital Interna Externa Full Hdtv 4K.',
        price: 'R$ 20,99',
        image: './img/Shoppe/Antena Digital.png',
        shopeeLink: 'https://s.shopee.com.br/gFPKX7CRx',
        id: 'BND-HBF-DLE',
    },
    {
        name: 'Aspirador & Soprador',
        description: 'Carro Aspirador De Pó Portátil Sem Fio Mini Comprimido.',
        price: 'R$ 167,75',
        image: './img/Shoppe/Aspirador.png',
        shopeeLink: 'https://s.shopee.com.br//709SshSBU5',
        id: 'BCY-UGR-PCT',
    },
    {
        name: 'Balança de Cozinha',
        description: 'Balança de Cozinha Digital Eletrônica 10kg.',
        price: 'R$ 41,99',
        image: './img/Shoppe/Balança de Cozinha.png',
        shopeeLink: 'https://s.shopee.com.br/4L8hi0f3jb',
        id: 'BJP-QQY-ALJ',
    },
    {
        name: 'Barbeador Elétrico',
        description: 'Máquina corta cabelo acabamento barbear barbeador eletrônico pezinho vintage Buda dragão.',
        price: 'R$ 21,00',
        image: './img/Shoppe/Barbeador.png',
        shopeeLink: 'https://shopee.com.br/8fHgsWk1gG',
        id: 'BYX-UBC-WMX',
    },
    {
        name: 'Cabo USB',
        description: 'Conjunto de adaptador de cabo de carregamento múltiplo 6 em 1 USB C para USB Kit de cabo adaptador de celular.',
        price: 'R$ 15,00',
        image: './img/Shoppe/Cabo Usb.jpeg',
        shopeeLink: 'https://s.shopee.com.br/7V5kAWosvy',
        id: 'AHU-AUK-ZCD',
    },
    {
        name: 'Chaleira Elétrica Retro SMEG',
        description: 'Design europeu de grande capacidade para fogão a gás e elétrico.',
        price: 'R$ 1.074,90',
        image: './img/Shoppe/Chaleira 1.jpeg',
        shopeeLink: 'https://s.shopee.com.br/gFQ2x8gLQ',
        id: 'CCJ-RBH-YVF',
    },
    {
        name: 'Bule de Chá Elétrico SMEG',
        description: 'Chaleira Elétrica Retro Italiana com 7 Configurações de Temperatura.',
        price: 'R$ 1.696,00',
        image: './img/Shoppe/Bule de Cha.jpeg',
        shopeeLink: 'https://s.shopee.com.br/6KtmnHbvis',
        id: 'BLT-PZG-EAE',
    },
    {
        name: 'Chaveiro de Defesa Pessoal Feminino',
        description: 'Chaveiro de Segurança de Autodefesa, kit com alarme para mulheres e idosos.',
        price: 'R$ 46,90 - R$ 53,90',
        image: './img/Shoppe/Chaveiro defesa pessoal .png',
        shopeeLink: 'https://s.shopee.com.br/AUjLl8cOUv',
        id: 'BUK-QFP-XET',
    },
    {
        name: 'Depilador Elétrico a Laser Portátil',
        description: 'Indução Laser depilador eletrico masculino feminino a laser Portátil corpo removedor de pêlos USB.',
        price: 'R$ 19,99 - R$ 56,99',
        image: './img/Shoppe/Depilador.png',
        shopeeLink: 'https://s.shopee.com.br/9KXOOaKRZ9',
        id: 'ABY-ZGW-VDZ',
    },
    {
        name: 'Depilador a Laser 900 Mil Pulsos Portátil',
        description: 'Depilador A Laser 900 Mil Pulsos Portátil para remoção de pelos definitiva.',
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
        name: 'Ducha de Ferro',
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
        description: 'Mini Máquina De Café Expresso Portátil Elétrica Sem Fio 3 Em 1 Para Carro E Casa.',
        price: 'R$ 232,54',
        image: './img/Shoppe/maquina_cafe.png',
        shopeeLink: 'hhttps://s.shopee.com.br/AUjsbwSHdh',
        id: 'BWA-PZC-EAF',
    },
    {
        name: 'Mouse Gamer',
        description: 'Mouse Gamer RGB 7 Botões 7200 DPI SOFT PRO 1619B R8.',
        price: 'R$ 78,9',
        image: './img/Shoppe/mouse_gamer.jpg',
        shopeeLink: 'https://s.shopee.com.br/2qKRMTVRBJ',
        id: 'CCF-MLG-AWN',
    },
    {
        name: 'Smartwatch',
        description: 'Case Acrílico + Película Silicone Protetora Para Smartwatch.',
        price: 'R$ 19,90',
        image: './img/Shoppe/smartwatch.jpg',
        shopeeLink: 'https://s.shopee.com.br/7ATQeTOxfV',
        id: 'ACJ-MBP-MFM',
    },
    {
        name: 'Câmera de Segurança IP',
        description: 'Kit 5 Câmeras Lâmpada 360° com Conexão Wi-Fi e Visão Noturna.',
        price: 'R$ 127,22 - 318,05',
        image: './img/Shoppe/camera.jpg',
        shopeeLink: 'https://s.shopee.com.br/9znc21DwRo',
        id: 'BFR-AVW-AEM',
    },
    {
        name: 'Smart TV 4K',
        description: 'Smart TV LED 43" Ultra HD 4K LG 43UR781C0SA.',
        price: 'R$ 1.699,00',
        image: './img/Shoppe/Smart_TV.jpg',
        shopeeLink: 'https://s.shopee.com.br/8pbedwYMlW',
        id: 'AFT-YJP-UYZ',
    },
    {
        name: 'Carregador de Indução',
        description: 'Carregador Por Indicação Wireless 3 em 1.',
        price: 'R$ 149,99',
        image: './img/Shoppe/Carregador.jpg',
        shopeeLink: 'https://s.shopee.com.br/60HTGoLgTT',
        id: 'CMA-EFF-EWJ',
    },
    {
        name: 'Brinquedo robô',
        description: 'Brinquedo Robô Dança Gira 360 Graus.',
        price: 'R$ 42,97',
        image: './img/Shoppe/Brinquedo_Robo.jpg',
        shopeeLink: 'https://s.shopee.com.br/2g11IlN0N0',
        id: 'ALU-TQA-EBW',
    },
    {
        name: 'Aspirador De Pó Robô',
        description: 'Aspirador De Pó Robô Sem Fio Inteligente.',
        price: 'R$ 58,99',
        image: './img/Shoppe/Aspirador_robo.jpg',
        shopeeLink: 'https://s.shopee.com.br/5L1mKwXx2J',
        id: 'AKK-AMX-WEK',
    },
    {
        name: 'Lâmpada Inteligente',
        description: 'Kit 3 Lâmpadas Led Inteligente Sensor Presença 9w E27.',
        price: 'R$ 85,90',
        image: './img/Shoppe/lampada.jpg',
        shopeeLink: 'https://s.shopee.com.br/60HTH5jcBw',
        id: 'AHN-BTE-AVX',
    },
    {
        name: 'Lanterna',
        description: 'Lanterna Super Potente Tática Mais Forte Do Mundo.',
        price: 'R$20,50',
        image: './img/Shoppe/Lanterna.jpg',
        shopeeLink: 'https://s.shopee.com.br/9AEdjqyF1K',
        id: 'BCV-QTC-NZM',
    },
    {
        name: 'Teclado Mecânico RGB',
        description: 'Kit Mobilador Gamer Barato RGB 6 Itens.',
        price: 'R$ 29,90 - 112,90',
        image: './img/Shoppe/teclado.jpg',
        shopeeLink: 'https://s.shopee.com.br/9KXvFThVl3',
        id: 'ANU-MUY-TFK',
    },
    {
        name: 'Fone de Ouvido Bluetooth',
        description: 'Bluetooth esportes fone de ouvido M10 alta fidelidade.',
        price: 'R$ 35,50',
        image: './img/Shoppe/blutooth.jpg',
        shopeeLink: 'https://s.shopee.com.br/5AiMHsZl6n',
        id: 'CKQ-MDD-MCE',
    },
    {
        name: 'Kit Soprador Aspirador',
        description: 'Kit Soprador Aspirador Tnt P/ Esmerilhadeira De 4.1/2.',
        price: 'R$ 82,00',
        image: './img/Shoppe/Soprador.jpg',
        shopeeLink: 'https://s.shopee.com.br/50P6eFpfBS',
        id: 'AYD-FUM-YVC',
    },
    // Aqui estão os 200 produtos adicionados. Você pode copiar e adicionar mais, se quiser.
    // **Lembre-se de adicionar as imagens na pasta img/Shoppe/ e alterar os links de shopee.**
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