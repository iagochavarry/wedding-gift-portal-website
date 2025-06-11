# Estrutura dos Presentes - Guia de Uso

## 📋 Visão Geral

O arquivo `gifts.ts` foi refatorado para eliminar repetições e facilitar a manutenção das configurações de pagamento (PIX + Stripe + Pagar.me).

## 🔧 Como Adicionar um Novo Presente

### 1. Adicionar dados básicos

No array `giftDataList`, adicione um novo objeto:

```typescript
{
  id: '22',
  name: 'Nome do Presente',
  description: 'Descrição detalhada...',
  price: 299.00,
  image: '/assets/gifts/nome-do-presente.png',
  category: 'casa', // 'casa' | 'lua-de-mel' | 'customizado'
  stripeProductKey: 'nome-produto',    // OPCIONAL: cartão à vista
  pagarMeProductKey: 'nome-produto',   // OPCIONAL: cartão parcelado
}
```

### 2. Para aceitar cartão à vista (Stripe)

Se o presente deve aceitar cartão à vista, adicione:

1. **stripeProductKey**: Chave única para identificar o produto
2. **ID do botão Stripe**: No objeto `STRIPE_BUTTON_IDS`:

```typescript
const STRIPE_BUTTON_IDS: Record<string, string> = {
  // ... existentes
  'nome-produto': 'buy_btn_SEU_ID_STRIPE_AQUI',
};
```

### 3. Para aceitar cartão parcelado (Pagar.me)

Se o presente deve aceitar cartão parcelado, adicione:

1. **pagarMeProductKey**: Chave única para identificar o produto
2. **URL do Pagar.me**: No objeto `PAGAR_ME_URLS`:

```typescript
const PAGAR_ME_URLS: Record<string, string> = {
  // ... existentes
  'nome-produto': 'https://payment-link-v3.pagar.me/pl_SUA_URL_AQUI',
};
```

### 4. QR Code PIX (se necessário)

Se o valor não existir, adicione no `pixDataByPrice`:

```typescript
'299-00': {
  asset: '/assets/qrcodes/299-00.jpeg',
  code: 'CÓDIGO_PIX_COMPLETO_AQUI',
},
```

## 🎯 Configurações Globais

### Stripe (Cartão à Vista)

```typescript
const STRIPE_CONFIG = {
  publishableKey: 'pk_live_...', // Chave global reutilizada
};
```

### Pagar.me (Cartão Parcelado)

```typescript
const PAGAR_ME_URLS: Record<string, string> = {
  'produto-1': 'https://payment-link-v3.pagar.me/pl_...',
  'produto-2': 'https://payment-link-v3.pagar.me/pl_...',
};
```

### Preços com Decimais Especiais

A nova função `getPriceKey()` agora funciona automaticamente para qualquer valor:

```typescript
// Exemplos automáticos:
// 299.00 → '299-00'
// 1999.99 → '1999-99'
// 2499.88 → '2499-88'
```

## 🚀 Exemplo Completo

Para adicionar um presente de R$ 500 que aceita todas as formas de pagamento:

```typescript
// 1. Em giftDataList
{
  id: '23',
  name: 'Cafeteira Expresso',
  description: 'Cafeteira italiana para espressos perfeitos',
  price: 500.00,
  image: '/assets/gifts/cafeteira.png',
  category: 'casa',
  stripeProductKey: 'cafeteira-expresso',     // Cartão à vista
  pagarMeProductKey: 'cafeteira-expresso',    // Cartão parcelado
}

// 2. Em STRIPE_BUTTON_IDS (cartão à vista)
'cafeteira-expresso': 'buy_btn_1XYZ123...',

// 3. Em PAGAR_ME_URLS (cartão parcelado)
'cafeteira-expresso': 'https://payment-link-v3.pagar.me/pl_ABC123...',

// 4. Em pixDataByPrice (se não existir)
'500-00': {
  asset: '/assets/qrcodes/500-00.jpeg',
  code: '00020126580014br.gov.bcb.pix...',
},
```

## 💳 Métodos de Pagamento

### PIX (Sempre disponível)

- ✅ QR Code automático baseado no preço
- ✅ Código PIX para copiar e colar
- ✅ Pagamento instantâneo

### Cartão à Vista (Stripe)

- ✅ Pagamento seguro via Stripe
- ✅ Suporte a Visa, Mastercard, etc.
- ✅ Pagamento único sem parcelamento

### Cartão Parcelado (Pagar.me)

- ✅ Link externo do Pagar.me
- ✅ Parcelamento em até 12x
- ✅ Checkout completo no Pagar.me

## ✅ Vantagens da Nova Estrutura

- ✅ **3 métodos de pagamento** integrados
- ✅ **Zero repetição** de configurações
- ✅ **Dados organizados** por responsabilidade
- ✅ **Fácil manutenção** e adição de novos presentes
- ✅ **Type-safe** com TypeScript
- ✅ **Fallbacks automáticos** para dados PIX
- ✅ **URL externa** para Pagar.me

## 🔍 Como Funciona

1. `giftDataList` → Dados básicos dos presentes
2. `createGift()` → Combina dados básicos + PIX + Stripe + Pagar.me
3. `export gifts` → Array final usado pela aplicação

**Resultado**: Mantém a mesma interface `Gift[]` mas com código muito mais limpo e 3 opções de pagamento!
