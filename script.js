document.addEventListener('DOMContentLoaded', () => {
    
    const productListDiv = document.getElementById('product-list');

    const productsData = [
        {
            name: 'Antena Digital',
            descricao:'Dê uma olhada em Antena 3/5 Metro Digital Interna Externa Full Hdtv 4K Cabo Grande antena digital para tv e conversor digital tv.',
            price: 'R$ 20,99 ',
            image: './img/Shoppe/Antena Digital.png', 
            shopeeLink: 'https://s.shopee.com.br/gFPKX7CRx',
            Id: 'BND-HBF-DLE',
        },
        {
            name: 'Aspirador & Soprador',
            descricao:'Dê uma olhada em Carro Aspirador De Pó Portátil Sem Fio Mini Comprimido Espanador De Ar & Soprador Bomba Mão.',
            price: 'R$ 167,75',
            image: './img/Shoppe/Aspirador.png', 
            shopeeLink: 'https://s.shopee.com.br//709SshSBU5', 
            Id:'BCY-UGR-PCT',
        },
        
        {
            name: 'Balança de Cozinha',
            descriçao: 'Balança de Cozinha Digital Eletrônica 10kg Balança de Cozinha Digital Eletrônica 10kg Balança de Cozinha Digital Eletrônica 10kg.',
            price: 'R$ 41,99',
            image: './img/Shoppe/Balança de Cozinha.png', 
            shopeeLink: 'https://s.shopee.com.br/4L8hi0f3jb',
            Id: 'BJP-QQY-ALJ',
        },
        {
            name: 'Barbeador Elétrico',
            descriçao: 'Dê uma olhada em Máquina corta cabelo acabamento barbear barbeador eletrônico pezinho vintage Buda dragão.',
            price: 'R$ 21,00',
            image: './img/Shoppe/Barbeador.png',
            shopeeLink: 'https://shopee.com.br/8fHgsWk1gG',
            Id:'BYX-UBC-WMX',
        },
        {
            name: 'Base Matte',
            descriçao:' Base Matte é uma base de maquiagem que proporciona um acabamento matte e duradouro, ideal para peles oleosas.',
            price: 'R$ 105,00',
            image: './img/Shoppe/Base Matte.png', 
            shopeeLink: 'https://s.shopee.com.br/2qJtwNEv0T',
            Id:'CFE-BFJ-VPW',
        },
        {
            name: 'Base(SHEGLAM)',
            descriçao: 'Dê uma olhada em SHEGLAM Skinfluencer de pele base amostra.',
            price: 'R$ 18,15',
            image: './img/Shoppe/Base.png', 
            shopeeLink: 'https://s.shopee.com.br/8fHgtDGHY',
            Id:'AAT-MHY-LWW', 
        },
        {
            name: 'Batom Liquido',
            descriçao: 'Dê uma olhada em Sheglam Batom Líquido Matte Pout Pillow Cushion.',
            price: 'R$ 78,90',
            image: './img/Shoppe/Batom Líquido .jpeg', 
            shopeeLink: 'https://s.shopee.com.br/709SuIvlQf',
            Id:'BGZ-SKQ-UFD', 
        },
        {
            name: 'Biblia Feminina',
            descricao: 'Dê uma olhada em Bíblia Evangélica Feminina | Capa dura | Biblia Sagrada Roxa | ARC | Letra Média | Harpa Cristã.',
            price: 'R$ 46,91',
            image: './img/Shoppe/Biblia Feminina.png', 
            shopeeLink: 'https://s.shopee.com.br/2LNdLqSIiS',
            Id:'AAG-FRF-XBK',
        },
         {
            name: 'Biblia Kingstone',
            descriçao: 'Dê uma olhada em Bíblia em Quadrinhos Kingstone POP 17x24cm | SBB.',
            price: 'R$ 127,42',
            image: './img/Shoppe/Bíblia Kingstone.png', 
            shopeeLink: 'https://s.shopee.com.br/VvzAZBgOv',
            Id:'AJS-NDS-PES',
        },
         {
            name: 'Blush',
            descriçao: 'Dê uma olhada em Paleta de Blush Contorno BANDAIYAN, Blush Perolado Iluminador, Blush Bicolor, Blush Matte à Prova d\'Água, Blush em Creme.',
            price: 'R$ 58,93',
            image: './img/Shoppe/Blush.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/4L8hjvtPVb',
            Id:'AUN-MUF-AHE',
        },
         {
            name: 'Cabeceira',
            descriçao: 'Dê uma olhada em Cabeceira de Cama Casal Queen King Solteiro Cabeceira Casal Estofada Modulada Cabeceiras Estofadas.',
            price: 'R$ 53,90 - R$ 94,90',
            image: './img/Shoppe/Cabeceira.png', 
            shopeeLink: 'https://s.shopee.com.br/2qJuZ2VMtM',
            Id:'CMT-JZD-PJC', 
        },
         {
            name: 'Cabide',
            descriçao: 'Dê uma olhada em Cabide de Plástico para Roupas Adulto Infantil Cabideiro Organizador de Roupa Cabide de Plástico.',
            price: 'R$ 101,29 - R$ 106,57',
            image: './img/Shoppe/Cabide.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/2Vh4D7zyJM',
            Id:'ADV-YBQ-ZRU',
        },
        {
            name: 'Cabo USB',
            descriçao:'Dê uma olhada em Conjunto de adaptador de cabo de carregamento múltiplo 6 em 1 USB C para USB Kit de cabo adaptador de celular Suporte de telefone celular pino de ejeção adaptador USB caixa de armazenamento portátil para viagem de negócio. ',
            price: 'R$ 15',
            image: './img/Shoppe/Cabo usb.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/7V5kAWosvy',
            Id:'AHU-AUK-ZCD',
        },
        {
            name: 'Caixa Saco',
            descriçao:'Dê uma olhada em Saco Organizador para Cobertor Caixa Organizadora Casaco Guarda Roupa Grande Caixa de Roupas Anti-Poeira Umidade Armário.',
            price: 'R$ 12,99 - R$ 51,99',
            image: './img/Shoppe/Caixa Saco.png', 
            shopeeLink: 'https://s.shopee.com.br/40Vs0E3NT8',
            Id:'AWW-SFU-PNE',
        },
        {
            name: 'Calça Alfaiataria',
            descriçao:'Dê uma olhada em Calça Pantalona Feminina Pantalona Feminina Calça Pantalona Alfaiataria Pantalona Preta PROMOÇÃO.',
            price: 'R$ R$49,89 - R$59,90',
            image: './img/Shoppe/Calça Alfaiateria.png', 
            shopeeLink: 'https://s.shopee.com.br/6AaMaJSjDA',
            Id:'BBB-VMZ-XSA',
        },
        {
            name: 'Calça Feminina',
            descriçao:'Dê uma olhada em Calça Pantalona Feminina  Modelo Clochard com Cinto Calças de Verão Colorida Tecido Duna Moda Praia.',
            price: 'R$ 69,90',
            image: './img/Shoppe/Calça Feminina.png', 
            shopeeLink: 'https://s.shopee.com.br/6VDCz2724x',
            Id:'BWC-HXB-ZPX', 
        },
        {
            name: 'Calça Pantalona',
            descriçao:'Dê uma olhada em JOGGER TACTEL ROSA COM CORRENTE – A CALÇA QUE VAI TE DAR UM LOOK INCRÍVEL E ÚNICO.',
            price: 'R$ 39,35',
            image: './img/Shoppe/Calça Pantalona.png', 
            shopeeLink: 'https://s.shopee.com.br/7AStmKXg1f',
            Id:'CJT-TRT-ZTF', 
        },
        {
            name: 'Calça Social',
            descriçao:'Dê uma olhada em Calça Pantalona social alfaiataria, cintura alta com cinto, calça pantalona wide leg social.',
            price: 'R$ 58,46 - R$ 79,00',
            image: './img/Shoppe/Calça Social.png', 
            shopeeLink: 'https://s.shopee.com.br/2Vh4Dqvon7',
            Id:'ADJ-SJY-LNV', 
        },
        {
            name: 'Canguru',
            descriçao:'Dê uma olhada em Canguru bebê mãe canguru Banco De Cintura Para Bebê Canguru  Bebe Mochila Infantil Hipseat Carrier.',
            price: 'R$ 89,00 - R$ 119,00',
            image: './img/Shoppe/Canguru.png', 
            shopeeLink: 'https://s.shopee.com.br/2B4DpLBRCH',
            Id:'CJL-TCH-RDD', 
        },
        {
            name: 'Capa de Colchao', 
            descriçao:'Dê uma olhada em Capa Para Colchão Queen Box Impermeável Protetor de Colchão Impermeável Capa de Colchão Casal Protetor de Colchão Impermeável.',
            price: 'R$ 75,90',
            image: './img/Shoppe/Capa de Colchão .jpeg', 
            shopeeLink: 'https://s.shopee.com.br/AUjLkmzIza',
            Id:'AYT-RAN-ZJA', 
        },
        {
            name: 'Chaleira',
            descriçao:'Dê uma olhada em SMEG 304 Garrafa de água de aço inoxidável Design europeu de grande capacidade adequado para fogão a gás Fogão elétrico.',
           price: 'R$ 1.074,90',
            image: './img/Shoppe/Chaleira 1.jpeg',
            image: './img/Shoppe/Chaleira 2.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/gFQ2x8gLQ', 
            Id:'CCJ-RBH-YVF',
        },
        {
            name: 'Chaveiro Personalizado',
            descriçao: 'Dê uma olhada em Defesa Pessoal Chaveiro Feminino De Segurança Autodefesa Chaveiro Kit Alarme De Autodefesa Para Mulheres Menina Idosa.',
            price: 'R$ 46,90 - R$ 53,90',
            image: './img/Shoppe/Chaveiro defesa pessoal .png', 
            shopeeLink: 'https://s.shopee.com.br/AUjLl8cOUv' ,
            Id:'BUK-QFP-XET',
        },
        {
            name: 'Chaveiro Camera',
            descriçao:'Dê uma olhada em Chaveiro Personalizado Com Foto Instagram Presente Polaroid Câmera.',
            price: 'R$ 24,99',
            image: './img/Shoppe/Chaveiro Camera.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/8020mex6lY',
            Id:'CDU-JDK-TVQ', 
        },
        {
            name: 'Chaveiro',
            descriçao:'Dê uma olhada em Chaveiro Personalizado Dia dos Namorados Calendario Data Frente e Verso Presente Casal Lembrancinha .',
            price: 'R$ 12,50 - R$ 22,75',
            image: './img/Shoppe/Chaveiro Personalizado.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/9fAElob8km',
            Id:'AHC-PYM-FNH',
        },
         {
            name: 'Cordao de Chaveiro',
            descriçao:'Dê uma olhada em Cordão Para Chaveiro OUDIMEIHE , Versátil De Corda De Fita Simples , Alça Colorida Durável INS DIY Canva.',
            price: 'R$ 15,31 - R$ 17,76',
            image: './img/Shoppe/Cordão de Chaveiro.png', 
            shopeeLink: 'https://s.shopee.com.br/8pb7mQ0edF',
            Id:'ANT-LGU-JKF',
        },
        {
            name: 'Kit Creme Facial',
            descriçao:'Dê uma olhada em Kit 2 Creme Facial 50+ com Colágeno e Vitamina E Antirrugas e Anti- sinais Lucy\'s 100g Cada.',
            price: 'R$' + '37,80',
            image: './img/Shoppe/Colágeno .png', 
            shopeeLink: 'https://s.shopee.com.br/8020mzfpFH',
            Id:'BEE-GFP-XXC',
        },
        {
            name: 'Creme Anti-estria',
            descriçap:'Dê uma olhada em Creme Anti-Estrias Morena Brasil – Ação Poderosa com Colágeno e Elastina.',
            price: 'R$ 39,90',
            image: './img/Shoppe/Anti-Estria.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/9UqoZqG5o5',
            Id:'CFR-GYE-DJL', 
        },
        {
            name: 'Coleçao de Livros',
            descriçao:'Dê uma olhada em Coleção C/5 livros: O Livro Das Línguas + O Livro Das Tintas + O Livro Do Papel + O Livro Do Lápis + O Livro Das Cores.',
            price: 'R$ 64,90',
            image: './img/Shoppe/Coleção de Livros.png', 
            shopeeLink: 'https://s.shopee.com.br/5AhpQ5QVst',
            Id:'BHR-DFS-HFJ', 
        },
        {
            name: 'Livro - Pateta Faz História',
            price: 'R$ 19,97',
            image: './img/Shoppe/Livro - Pateta faz historia.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/8UyHOHhpY4',
            Id: 'AYG-KHW-LXH', 
        },
        {
            name: 'Conjunto de Facas',
            descriçao:'Dê uma olhada em Jogo De Facas de Cozinha Afiadas Conjunto De Facas, Faqueiro Kit De Faca 4 Facas e Acessórios 1 Tesoura, 1 Descascador.',
            price: 'R$ 24,99 - R$ 69,99',
            image: './img/Shoppe/Conjunto de Facas.png', 
            shopeeLink: 'https://s.shopee.com.br/9KXONtXPhu',
            Id: 'AZE-WTF-RLW', 
        },
        {
            name: 'Conjunto de Facas',
            descriçao:'Dê uma olhada em Kit de Conjunto Facas Coloridas Tesoura Descascador Cozinha Gourmet 6 Peças.',
            price: 'R$ 35,00',
            image: './img/Shoppe/Kit de Facas.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/30dKqIv8Zj',
            Id: 'AEY-QQG-NWQ', 
        },
        {
            name: 'Copo Térmico',
            descriçao:'Dê uma olhada em Caneca Garrafa térmica Copo Térmico Marmorizado com Alça e Bico 1,2L 1200ML Aço Inoxidável.',
            price: 'R$ 77,00',
            image: './img/Shoppe/Copo Térmico .png', 
            shopeeLink: 'https://s.shopee.com.br/LcZfbCoeD',
            Id: 'CBX-KJR-LMT', 
        },
        {
            name: 'Copo Térmico',
            descriçao:'Dê uma olhada em Copo Térmico Porta Latinha Barrigudinha Long Neck Lata Alta, O copo térmico 5 em 1 já personalizado.',
            price: 'R$ 69,90',
            image: './img/Shoppe/Copo Térmico.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/40Vs2Paq4F',
            Id: 'AXQ-YMX-RYL', 
        },
        {
            name: 'Creme de Rosto',
            descriçao:'Dê uma olhada em Kit Desodorante Creme Dove Sérum Previne Escurecimento 50g + Desodorante Herbíssimo Care Rosa Mosqueta e Niacinamida 55.',
            price: 'R$ 34,90',
            image: './img/Shoppe/Creme de Hibismo.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/3qCRqEpqBF',
            Id:'CLH-RXC-CVG',
        },
        {
            name: 'Cruzadinho',
            descriçao:'Dê uma olhada em kit 12 palavras cruzadas sem repetição revista passatempo cruzadinha diretas palavra cruzada.',
            price: 'R$ 19,99',
            image: './img/Shoppe/Cruzadinha.png', 
            shopeeLink: 'https://s.shopee.com.br/9pTezMDNO0',
            Id: 'CGK-PEH-DVZ', 
        },
        {
            name: 'Cruzadinho',
            descriçao:'Dê uma olhada em Livro 99  Palavras Cruzadas - Cruzadinhas Editora Caras.',
            price: 'R$ 9,90',
            image: './img/Shoppe/99 Cruzadas.jpeg', 
            shopeeLink: 'https://s.shopee.com.br/8KerCeIhRR',
            Id: 'ACL-EZP-KFT', 
        },
        {
            name: 'Depilador Eletrico',
            descriçao:'Dê uma olhada em Indução Laser depilador eletrico masculino feminino a laser Portátil corpo removedor de pêlos USB',
            price: 'R$ 19,99 - R$ 56,99',
            image: './img/Shoppe/Depilador.png', 
            shopeeLink: 'https://s.shopee.com.br/9KXOOaKRZ9',
            Id: 'ABY-ZGW-VDZ', 
        },
        ////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////////////
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