export interface PaymentMethods {
  pix?: {
    qrCode: string;
    code: string;
  };
  creditCard?: {
    stripe: {
      buttonId: string;
      publishableKey: string;
    };
    pagarMe?: {
      url: string;
    };
  };
}

export interface GiftAssets {
  image: string;
  qrCode: string;
}

export interface Gift {
  id: string;
  slug: string; // Para identificação nas pastas
  name: string;
  description: string;
  price: number;
  category: 'casa' | 'lua-de-mel' | 'customizado';
  assets: GiftAssets;
  paymentMethods: PaymentMethods;

  // Campos legados para compatibilidade (serão removidos)
  image?: string;
  qrCode?: string;
  code?: string;
  creditCardEnabled?: boolean;
  stripeButtonId?: string;
  stripePublishableKey?: string;
  pagarMeEnabled?: boolean;
  pagarMeUrl?: string;
}

export type GiftCategory = 'Cozinha' | 'Cama' | 'Banho' | 'Decoração' | 'Outros';

export interface GiftState {
  gifts: Gift[];
  loading: boolean;
  error: string | null;
}

export interface GiftContextType extends GiftState {
  selectGift: (gift: Gift) => void;
  selectedGift: Gift | null;
}
