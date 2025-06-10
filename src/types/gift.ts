export interface Gift {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  qrCode: string;
  code: string;
  category: 'casa' | 'lua-de-mel';
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
