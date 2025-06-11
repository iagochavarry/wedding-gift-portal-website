import { Gift, PaymentMethods, GiftAssets } from '../types/gift';

// ===========================
// CONFIGURAÇÕES GLOBAIS
// ===========================

const STRIPE_CONFIG = {
  publishableKey:
    'pk_live_51RYllAKdfV9iJjRV3UUyAMypCHiRqNOGPQ2pUu8dGW1nffAngdwh5NFY5NvlIznWtnyTxt2osXIFNHNw7THdRcde00QqjduWLF',
} as const;

// ===========================
// DADOS BÁSICOS DOS PRESENTES
// ===========================

interface GiftCore {
  id: string;
  slug: string;
  name: string;
  description: string;
  price: number;
  category: 'casa' | 'lua-de-mel' | 'customizado';
}

interface PaymentConfig {
  pixCode?: string;
  creditCard?: {
    stripeUrl: string;
    pagarMeUrl?: string;
  };
}

// ===========================
// DEFINIÇÃO DOS PRESENTES
// ===========================

const giftsData: Array<GiftCore & { payment: PaymentConfig }> = [
  // === PRESENTES DE CASA ===
  {
    id: '18',
    slug: 'lava-e-seca',
    name: 'Lava e Seca',
    description:
      'Máquina lava e seca de alta eficiência, perfeita para facilitar o cuidado das roupas no dia a dia.',
    price: 3299.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654073299.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63046281',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/bJeeVe7Od5eI9WW7NlbV602',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_kKmZYNqWBMVyB4vh1bUJL8EwG0Ql9rDP',
      },
    },
  },
  {
    id: '19',
    slug: 'lava-loucas',
    name: 'Lava-louças',
    description:
      'Lava-louças moderna e eficiente, ideal para otimizar o tempo na cozinha e manter a louça sempre limpa.',
    price: 2899.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654072899.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63049B01',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/5kQdRa6K98qUc540kTbV603',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_QXaov2xk06rDjJY2fzFVW8bYd9VAR5OM',
      },
    },
  },
  {
    id: '2',
    slug: 'buffet-abracasa',
    name: 'Buffet Chico - Abracasa',
    description:
      'Buffet de design contemporâneo, perfeito para sala de jantar ou estar. Produzido pela Ateliê Casa, acabamento em madeira natural e detalhes ripados.',
    price: 2499.88,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654072499.885802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63043A2D',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/3cI7sM9Wl9uY7OO6JhbV604',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_nQ6ozq2gwR05d22GcATadjxEVJmeL4GD',
      },
    },
  },
  {
    id: '22',
    slug: 'soundbar',
    name: 'SoundBar',
    description:
      'SoundBar de alta qualidade com excelente qualidade de som para TV e entretenimento em casa.',
    price: 1890.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071890.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304B8C3',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/aFa4gA0lL9uY5GG9VtbV60c',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_qgvABOXjdwxrA61Fo3FlGDZ95mb7ykY4',
      },
    },
  },
  {
    id: '23',
    slug: 'mesa-centro',
    name: 'Mesa de Centro',
    description:
      'Mesa de centro elegante e funcional, perfeita para completar a decoração da sala de estar.',
    price: 1390.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071349.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304B0B6',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/14A00k0lLdLe7OOgjRbV60d',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_7o5Op6kgDEJN0B3HlvtDqYXRazMdPyV3',
      },
    },
  },
  {
    id: '6',
    slug: 'mesinha-cabeceira',
    name: 'Conjunto Mesinha de Cabeceira',
    description:
      'Conjunto de mesinhas de cabeceira com design moderno e funcional, com gavetas para organização.',
    price: 849.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406849.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***630401E7',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/8x228s9Wl36A4CC3x5bV60b',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_ebYlPwvzJ42DVkaTQXtvjR5G3LBXnAop',
      },
    },
  },
  {
    id: '21',
    slug: 'jogo-cama-completo',
    name: 'Jogo de Cama Completo',
    description:
      'Jogo de cama completo de alta qualidade, com lençóis, fronhas e edredom para um quarto aconchegante.',
    price: 749.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406749.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63040E06',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/5kQbJ2ecB7mQ1qq4B9bV606',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_58oPAm9KOkpDvkjspJiwbrJQjGvVnxRw',
      },
    },
  },
  {
    id: '1',
    slug: 'jogo-panelas',
    name: 'Jogo de Panelas Tramontina',
    description:
      'Jogo de panelas Tramontina com 5 peças em aço inox, incluindo tampa de vidro temperado.',
    price: 669.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406669.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304E76B',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/7sYeVeb0paz2b107NlbV605',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_DW39yvgnXRr408gCoiPv4B8LlYpV0m2N',
      },
    },
  },
  {
    id: '3',
    slug: 'carrinho-bar',
    name: 'Carrinho Bar',
    description:
      'Carrinho bar elegante para servir drinks e bebidas especiais em casa, com acabamento moderno.',
    price: 629.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406629.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304D7A9',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/bJe00k4C1ePi9WWd7FbV607',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_k89nNyRPVxa4AqKCDFrX47KBlp5gDvMA',
      },
    },
  },
  {
    id: '14',
    slug: 'quadro-sala',
    name: 'Quadro para Sala',
    description:
      'Quadro decorativo elegante para sala de estar, com design moderno que complementa a decoração.',
    price: 429.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406429.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63042590',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/fZudRagkJ8qUfhg2t1bV609',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_K15djvgqoxr429f0Bs78E7RDpZMmBw8W',
      },
    },
  },
  {
    id: '16',
    slug: 'puff-boucle',
    name: 'Puff Bouclé',
    description:
      'Puff elegante em tecido bouclé, perfeito para complementar a decoração da sala com conforto e estilo.',
    price: 569.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406569.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304E45E',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/eVq3cw0lLaz29WW2t1bV608',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_16d0m2RB8lKN02aCRSG8bVwryOp9XW4g',
      },
    },
  },
  {
    id: '4',
    slug: 'kit-taca-espumante',
    name: 'Kit Taças de Espumante',
    description: 'Conjunto de taças elegantes para espumante, perfeito para celebrações especiais.',
    price: 399.0,
    category: 'casa',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406399.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63042F33',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/eVqdRa7Od7mQfhg2t1bV60a',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_BoqLN0yEx1ZnEm6iVBixngY8V9rwP6WO',
      },
    },
  },

  // === PRESENTES DE LUA DE MEL ===
  {
    id: '8',
    slug: 'diaria-amalfi',
    name: 'Diária em Positano',
    description:
      'Hospedagem romântica na Costa Amalfitana, com vista para o mar e café da manhã incluso.',
    price: 2000.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654072000.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304A083',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/aFa14o3xXcHac54ebJbV60i',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_Ooa9AREXqw0bEQAiDGINbVgBzl26M3WK',
      },
    },
  },
  {
    id: '7',
    slug: 'diaria-puglia',
    name: 'Diária em Puglia',
    description:
      'Uma diária inesquecível em um trullo típico da região de Puglia, Itália. Hospedagem charmosa e autêntica para nossa lua de mel.',
    price: 1550.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071550.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304145D',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/28E8wQ1pPfTmd982t1bV60f',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_5WvangmL1Yx9rgJohViyjOwGeNyQ6RV8',
      },
    },
  },
  {
    id: '10',
    slug: 'jantar-coliseu-roma',
    name: 'Jantar no Coliseu, Roma',
    description:
      'Uma noite especial com jantar próximo ao Coliseu, em Roma, celebrando nossa união com uma vista histórica.',
    price: 1150.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de352040000530398654071150.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304E00E',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/28EeVec4taz2d983x5bV60g',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_2JAb76nQa3EvpDSPXHALvGg0pmDlLwdM',
      },
    },
  },
  {
    id: '9',
    slug: 'passeio-barco-capri',
    name: 'Passeio de Barco em Capri',
    description:
      'Um passeio de barco privativo pela ilha de Capri, com direito a mergulho e paisagens deslumbrantes.',
    price: 850.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406850.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304A366',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/eVqdRafgFcHa1qq4B9bV60h',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_l7ZkjyPnwovVNlQheVH2qEAgOpM346YX',
      },
    },
  },
  {
    id: '11',
    slug: 'jantar-alberobello',
    name: 'Jantar em Alberobello',
    description:
      'Jantar romântico em Alberobello, entre os famosos trulli, com culinária típica da região de Puglia.',
    price: 750.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406750.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304AC87',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/8x24gA3xX9uYc549VtbV60j',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_2NVqERerD0X4leRI7ECzpawv1Jmx5nBk',
      },
    },
  },
  {
    id: '12',
    slug: 'tour-pompeia',
    name: 'Tour em Pompeia',
    description:
      'Visita guiada às ruínas de Pompeia, uma experiência histórica única durante nossa lua de mel.',
    price: 650.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406650.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63045D8B',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/8x24gA3xX9uYc549VtbV60j',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_5kE8431jN9bBDK4fAipQLKYxOzr6Zqov',
      },
    },
  },
  {
    id: '17',
    slug: 'jantar-napoles',
    name: 'Jantar em Nápoles',
    description:
      'Jantar romântico em Nápoles, berço da pizza, com vista para o Golfo de Nápoles e culinária italiana autêntica.',
    price: 450.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406450.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***6304AFB2',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/bJe14o0lL9uY2uu5FdbV60k',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_071kaJAylrEpgASKMtL09B3Y8GRqXZmP',
      },
    },
  },
  {
    id: '13',
    slug: 'aluguel-carro-italia',
    name: 'Aluguel de Carro na Itália',
    description:
      'Aluguel de carro para explorar a Itália com liberdade e conforto durante nossa lua de mel.',
    price: 399.0,
    category: 'lua-de-mel',
    payment: {
      pixCode:
        '00020126580014br.gov.bcb.pix01361138a170-3d37-4627-839d-2131a73a3de35204000053039865406399.005802BR5925IAGO SICHINEL SILVA MARTI6014RIO DE JANEIRO62070503***63042F33',
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/cNi3cw0lLbD63yyc3BbV60l',
        pagarMeUrl: 'https://payment-link-v3.pagar.me/pl_0oDN9KraxpqBKbt3KCx8WGYmk4l6y25w',
      },
    },
  },

  // === PRESENTE CUSTOMIZADO ===
  {
    id: '20',
    slug: 'presente-customizado',
    name: 'Presente Customizado',
    description:
      'Escolha o valor que desejar para nos presentear! Toda contribuição será recebida com muito carinho.',
    price: 0.0,
    category: 'customizado',
    payment: {
      creditCard: {
        stripeUrl: 'https://buy.stripe.com/cNi7sM8Sh5eI0mmebJbV60e',
      },
    },
  },
];

// ===========================
// FUNÇÕES AUXILIARES
// ===========================

/**
 * Gera assets baseados no slug do presente
 */
function createAssets(slug: string): GiftAssets {
  return {
    image: `/gifts/${slug}/image.png`,
    qrCode: `/gifts/${slug}/qrcode.jpeg`,
  };
}

/**
 * Cria métodos de pagamento baseados na configuração
 */
function createPaymentMethods(payment: PaymentConfig): PaymentMethods {
  const paymentMethods: PaymentMethods = {};

  // Adiciona PIX apenas se pixCode existir
  if (payment.pixCode) {
    paymentMethods.pix = {
      qrCode: createAssets('').qrCode, // Será substituído depois
      code: payment.pixCode,
    };
  }

  if (payment.creditCard) {
    const creditCardConfig: PaymentMethods['creditCard'] = {
      stripe: {
        buttonId: payment.creditCard.stripeUrl,
        publishableKey: STRIPE_CONFIG.publishableKey,
      },
    };

    if (payment.creditCard.pagarMeUrl) {
      creditCardConfig.pagarMe = {
        url: payment.creditCard.pagarMeUrl,
      };
    }

    paymentMethods.creditCard = creditCardConfig;
  }

  return paymentMethods;
}

/**
 * Converte dados brutos em Gift completo
 */
function createGift(giftData: GiftCore & { payment: PaymentConfig }): Gift {
  const assets = createAssets(giftData.slug);
  const paymentMethods = createPaymentMethods(giftData.payment);

  // Atualiza o QR Code do PIX com o path correto (apenas se PIX existir)
  if (paymentMethods.pix) {
    paymentMethods.pix.qrCode = assets.qrCode;
  }

  const gift: Gift = {
    id: giftData.id,
    slug: giftData.slug,
    name: giftData.name,
    description: giftData.description,
    price: giftData.price,
    category: giftData.category,
    assets,
    paymentMethods,

    // Campos legados para compatibilidade
    image: assets.image,
    qrCode: assets.qrCode,
    creditCardEnabled: !!paymentMethods.creditCard,
    pagarMeEnabled: !!paymentMethods.creditCard?.pagarMe,
    ...(paymentMethods.pix && { code: paymentMethods.pix.code }),
  };

  // Adiciona campos opcionais apenas se existirem
  if (paymentMethods.creditCard?.stripe.buttonId) {
    gift.stripeButtonId = paymentMethods.creditCard.stripe.buttonId;
  }
  if (paymentMethods.creditCard?.stripe.publishableKey) {
    gift.stripePublishableKey = paymentMethods.creditCard.stripe.publishableKey;
  }
  if (paymentMethods.creditCard?.pagarMe?.url) {
    gift.pagarMeUrl = paymentMethods.creditCard.pagarMe?.url;
  }

  return gift;
}

// ===========================
// EXPORT FINAL
// ===========================

export const gifts: Gift[] = giftsData.map(createGift);

export default gifts;
