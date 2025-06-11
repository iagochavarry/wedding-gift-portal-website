import { useEffect } from 'react';

interface StripeButtonProps {
  buyButtonId: string;
  publishableKey: string;
}

// Definição de tipos para elemento customizado do Stripe
declare global {
  interface Window {
    StripeButton?: unknown;
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'stripe-buy-button': {
        'buy-button-id': string;
        'publishable-key': string;
      };
    }
  }
}

export const StripeButton = ({ buyButtonId, publishableKey }: StripeButtonProps) => {
  useEffect(() => {
    // Garantir que o script do Stripe foi carregado
    const checkStripe = () => {
      if (typeof window !== 'undefined' && window.StripeButton) {
        return true;
      }
      return false;
    };

    if (!checkStripe()) {
      const script = document.createElement('script');
      script.src = 'https://js.stripe.com/v3/buy-button.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return <stripe-buy-button buy-button-id={buyButtonId} publishable-key={publishableKey} />;
};
