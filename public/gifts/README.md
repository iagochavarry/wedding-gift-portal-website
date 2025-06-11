# 🎁 Nova Estrutura de Presentes - Organização Modular

## 📁 Estrutura

Cada presente agora tem sua própria pasta com todos os assets organizados:

```
public/gifts/
├── lava-e-seca/
│   ├── image.png          # Imagem do produto
│   └── qrcode.jpeg        # QR Code PIX específico
├── buffet-abracasa/
│   ├── image.png
│   └── qrcode.jpeg
├── jogo-panelas/
│   ├── image.png
│   └── qrcode.jpeg
└── [outros presentes]/
    ├── image.png
    └── qrcode.jpeg
```

## 🔧 Como Adicionar um Novo Presente

### 1. Criar a estrutura de diretório

```bash
mkdir public/gifts/novo-presente
```

### 2. Adicionar os assets

```bash
# Imagem do produto (sempre chamada image.png)
cp caminho/para/produto.jpg public/gifts/novo-presente/image.png

# QR Code PIX (sempre chamado qrcode.jpeg)
cp caminho/para/qrcode.jpeg public/gifts/novo-presente/qrcode.jpeg
```

### 3. Configurar no arquivo gifts.ts

```typescript
{
  id: '25',
  slug: 'novo-presente',          // ← Nome da pasta
  name: 'Nome do Presente',
  description: 'Descrição...',
  price: 299.00,
  category: 'casa',
  payment: {
    pixCode: 'CÓDIGO_PIX_COMPLETO...',
    creditCard: {                 // ← OPCIONAL
      stripeButtonId: 'buy_btn_...',
      pagarMeUrl: 'https://payment-link...'
    }
  }
}
```

## 🎯 Vantagens da Nova Estrutura

### ✅ **Organização**

- Cada presente tem sua própria pasta
- Assets ficam juntos com suas configurações
- Fácil localização e manutenção

### ✅ **Escalabilidade**

- QR Code único por presente (não por valor)
- Suporte a 3 métodos de pagamento
- Configuração limpa e modular

### ✅ **Paths Automáticos**

```typescript
// Geração automática baseada no slug
image: `/gifts/${slug}/image.png`;
qrCode: `/gifts/${slug}/qrcode.jpeg`;
```

### ✅ **Type Safety**

```typescript
interface PaymentMethods {
  pix: { qrCode: string; code: string };
  creditCard?: {
    stripe: { buttonId: string; publishableKey: string };
    pagarMe: { url: string };
  };
}
```

## 💳 Métodos de Pagamento Suportados

| Método               | Sempre Disponível | Configuração                        |
| -------------------- | ----------------- | ----------------------------------- |
| **PIX**              | ✅ Sim            | `payment.pixCode`                   |
| **Cartão à Vista**   | Opcional          | `payment.creditCard.stripeButtonId` |
| **Cartão Parcelado** | Opcional          | `payment.creditCard.pagarMeUrl`     |

## 🚀 Migração Completa

- ✅ **Nova estrutura de tipos** com PaymentMethods
- ✅ **Organização modular** por presente
- ✅ **Compatibilidade backward** mantida
- ✅ **Build funcionando** perfeitamente
- ✅ **UX de 3 métodos** de pagamento

## 📊 Status da Migração

### ✅ Presentes Migrados

- `lava-e-seca/` - R$ 3.300 (PIX + Stripe + Pagar.me)
- `buffet-abracasa/` - R$ 2.499,88 (PIX + Stripe + Pagar.me)
- `jogo-panelas/` - R$ 650 (PIX + Stripe + Pagar.me)
- `lava-loucas/` - R$ 2.899 (PIX + Stripe + Pagar.me)
- `presente-customizado/` - R$ 0 (PIX)

### 📋 Pendentes de Migração

Os demais presentes podem ser migrados conforme necessário usando o mesmo padrão.

## 🔄 Processo de Deploy

1. **Assets**: Já organizados em `/public/gifts/`
2. **Código**: Nova estrutura em `/src/data/gifts.ts`
3. **Build**: ✅ Funcionando
4. **Deploy**: Pronto para produção

---

**🎊 Parabéns! A refatoração foi concluída com sucesso!**
