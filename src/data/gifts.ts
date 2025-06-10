import { Gift } from '../types/gift';

const qrCodes = {
  '3300-00': {
    asset: '/assets/qrcodes/2499-88.jpeg', // Using 2499 QR code for 3300
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654073300.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304F2E1',
  },
  '2800-00': {
    asset: '/assets/qrcodes/2499-88.jpeg', // Using 2499 QR code for 2800
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654072800.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63049B7A',
  },
  '2499-88': {
    asset: '/assets/qrcodes/2499-88.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654072499.885802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63043A2D',
  },
  '1550-00': {
    asset: '/assets/qrcodes/1550-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071550.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304E12A',
  },
  '1500-00': {
    asset: '/assets/qrcodes/1550-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071500.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304A1B2',
  },
  '1150-00': {
    asset: '/assets/qrcodes/1150-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071150.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304E00E',
  },
  '850-00': {
    asset: '/assets/qrcodes/850-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406850.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304A366',
  },
  '650-00': {
    asset: '/assets/qrcodes/650-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406650.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63045D8B',
  },
  '450-00': {
    asset: '/assets/qrcodes/450-00.jpeg',

    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406450.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304AFB2',
  },
  '380-00': {
    asset: '/assets/qrcodes/650-00.jpeg', // Using 650 QR code for 380
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406380.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304C5A3',
  },
  '350-00': {
    asset: '/assets/qrcodes/650-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406350.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***630458D4',
  },
  '0-00': {
    asset: '/assets/qrcodes/0-00.jpeg',
    code: '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304A32E',
  },
};

export const gifts: Gift[] = [
  {
    id: '18',
    name: 'Lava e Seca',
    description:
      'Máquina lava e seca de alta eficiência, perfeita para facilitar o cuidado das roupas no dia a dia.',
    price: 3300.0,
    image: '/assets/gifts/lava-e-seca.png',
    qrCode: qrCodes['3300-00'].asset,
    code: qrCodes['3300-00'].code,
    category: 'casa',
  },
  {
    id: '19',
    name: 'Lava-louças',
    description:
      'Lava-louças moderna e eficiente, ideal para otimizar o tempo na cozinha e manter a louça sempre limpa.',
    price: 2800.0,
    image: '/assets/gifts/lava-loucas.png',
    qrCode: qrCodes['2800-00'].asset,
    code: qrCodes['2800-00'].code,
    category: 'casa',
  },
  {
    id: '2',
    name: 'Buffet Chico - Abracasa',
    description:
      'Buffet de design contemporâneo, perfeito para sala de jantar ou estar. Produzido pela Ateliê Casa, acabamento em madeira natural e detalhes ripados.',
    price: 2499.88,
    image: '/assets/gifts/buffet-chico-abracasa.png',
    qrCode: qrCodes['2499-88'].asset,
    code: qrCodes['2499-88'].code,
    category: 'casa',
  },
  {
    id: '1',
    name: 'Jogo de Panelas Tramontina',
    description:
      'Jogo de panelas Tramontina com 5 peças em aço inox, incluindo tampa de vidro temperado.',
    price: 650.0,
    image: '/assets/gifts/jogo-panelas-tramontina.png',
    qrCode: qrCodes['650-00'].asset,
    code: qrCodes['650-00'].code,
    category: 'casa',
  },
  {
    id: '3',
    name: 'Carrinho Bar',
    description:
      'Carrinho bar elegante para servir drinks e bebidas especiais em casa, com acabamento moderno.',
    price: 650.0,
    image: '/assets/gifts/carrinho-bar.png',
    qrCode: qrCodes['650-00'].asset,
    code: qrCodes['650-00'].code,
    category: 'casa',
  },
  {
    id: '14',
    name: 'Quadro para Sala',
    description:
      'Quadro decorativo elegante para sala de estar, com design moderno que complementa a decoração.',
    price: 650.0,
    image: '/assets/gifts/quadro-sala.png',
    qrCode: qrCodes['650-00'].asset,
    code: qrCodes['650-00'].code,
    category: 'casa',
  },
  {
    id: '16',
    name: 'Puff Bouclé',
    description:
      'Puff elegante em tecido bouclé, perfeito para complementar a decoração da sala com conforto e estilo.',
    price: 450.0,
    image: '/assets/gifts/puff-boucle.png',
    qrCode: qrCodes['450-00'].asset,
    code: qrCodes['450-00'].code,
    category: 'casa',
  },
  {
    id: '4',
    name: 'Kit Taças de Espumante',
    description: 'Conjunto de taças elegantes para espumante, perfeito para celebrações especiais.',
    price: 450.0,
    image: '/assets/gifts/kit-taca-espumante.png',
    qrCode: qrCodes['450-00'].asset,
    code: qrCodes['450-00'].code,
    category: 'casa',
  },
  {
    id: '6',
    name: 'Mesinha de Cabeceira',
    description:
      'Mesinha de cabeceira com design moderno e funcional, com gavetas para organização.',
    price: 450.0,
    image: '/assets/gifts/mesinha-cabeceira.png',
    qrCode: qrCodes['450-00'].asset,
    code: qrCodes['450-00'].code,
    category: 'casa',
  },
  {
    id: '5',
    name: 'Liquidificador',
    description:
      'Liquidificador de alta potência para preparar sucos, vitaminas e receitas especiais.',
    price: 350.0,
    image: '/assets/gifts/liquidificador.png',
    qrCode: qrCodes['350-00'].asset,
    code: qrCodes['350-00'].code,
    category: 'casa',
  },
  {
    id: '15',
    name: 'Quadro para Varanda',
    description:
      'Quadro decorativo para varanda, perfeito para criar um ambiente aconchegante e estiloso.',
    price: 450.0,
    image: '/assets/gifts/quadro-varanda.png',
    qrCode: qrCodes['450-00'].asset,
    code: qrCodes['450-00'].code,
    category: 'casa',
  },
  {
    id: '7',
    name: 'Diária em Puglia',
    description:
      'Uma diária inesquecível em um trullo típico da região de Puglia, Itália. Hospedagem charmosa e autêntica para nossa lua de mel.',
    price: 1500.0,
    image: '/assets/gifts/diaria-puglia-trulli.png',
    qrCode: qrCodes['1500-00'].asset,
    code: qrCodes['1500-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '8',
    name: 'Diária em Amalfi',
    description:
      'Hospedagem romântica na Costa Amalfitana, com vista para o mar e café da manhã incluso.',
    price: 1150.0,
    image: '/assets/gifts/diaria-amalfi.png',
    qrCode: qrCodes['1150-00'].asset,
    code: qrCodes['1150-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '9',
    name: 'Passeio de Barco em Capri',
    description:
      'Um passeio de barco privativo pela ilha de Capri, com direito a mergulho e paisagens deslumbrantes.',
    price: 850.0,
    image: '/assets/gifts/passeio-barco-capri.png',
    qrCode: qrCodes['850-00'].asset,
    code: qrCodes['850-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '10',
    name: 'Jantar no Coliseu, Roma',
    description:
      'Uma noite especial com jantar próximo ao Coliseu, em Roma, celebrando nossa união com uma vista histórica.',
    price: 850.0,
    image: '/assets/gifts/jantar-coliseu-roma.png',
    qrCode: qrCodes['850-00'].asset,
    code: qrCodes['850-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '11',
    name: 'Jantar em Alberobello',
    description:
      'Jantar romântico em Alberobello, entre os famosos trulli, com culinária típica da região de Puglia.',
    price: 850.0,
    image: '/assets/gifts/jantar-alberobello.png',
    qrCode: qrCodes['850-00'].asset,
    code: qrCodes['850-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '12',
    name: 'Tour em Pompeia',
    description:
      'Visita guiada às ruínas de Pompeia, uma experiência histórica única durante nossa lua de mel.',
    price: 650.0,
    image: '/assets/gifts/tour-pompeia.png',
    qrCode: qrCodes['650-00'].asset,
    code: qrCodes['650-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '17',
    name: 'Jantar em Nápoles',
    description:
      'Jantar romântico em Nápoles, berço da pizza, com vista para o Golfo de Nápoles e culinária italiana autêntica.',
    price: 380.0,
    image: '/assets/gifts/jantar-napoles.png',
    qrCode: qrCodes['380-00'].asset,
    code: qrCodes['380-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '13',
    name: 'Aluguel de Carro na Itália',
    description:
      'Aluguel de carro para explorar a Itália com liberdade e conforto durante nossa lua de mel.',
    price: 350.0,
    image: '/assets/gifts/aluguel-carro-italia.png',
    qrCode: qrCodes['350-00'].asset,
    code: qrCodes['350-00'].code,
    category: 'lua-de-mel',
  },
  {
    id: '20',
    name: 'Presente Customizado',
    description:
      'Escolha o valor que desejar para nos presentear! Toda contribuição será recebida com muito carinho.',
    price: 0.0,
    image: '/assets/gifts/presente-customizado.png',
    qrCode: qrCodes['0-00'].asset,
    code: qrCodes['0-00'].code,
    category: 'customizado',
  },
];
