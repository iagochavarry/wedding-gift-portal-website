# 💕 Wedding Website - Iago & Jas

Um website moderno e elegante para casamento, desenvolvido com React, TypeScript e design inspirado no Apple. O projeto inclui uma landing page emotiva e uma lista de presentes categorizada e interativa.

## ✨ Funcionalidades

### 🏠 Landing Page

- **Hero Section**: Foto do casal e save the date
- **Local do Casamento**: Informações sobre cerimônia e recepção
- **Call-to-Action**: Botão para acessar a lista de presentes
- **Design Responsivo**: Otimizado para todos os dispositivos

### 🎁 Lista de Presentes

- **Sobre Nós**: Seção emotiva com fotos do apartamento e lua de mel
- **Categorias**: Presentes divididos em "Casa" e "Lua de Mel"
- **Modal Interativo**: Detalhes do presente com QR Code Pix
- **WhatsApp Integration**: Botão para enviar mensagem

### 🎨 Design System

- **Inspiração Apple**: Design limpo, moderno e minimalista
- **Variáveis CSS**: Sistema de cores, espaçamentos e tipografia consistente
- **Animações Suaves**: Transições e hover effects elegantes
- **Responsivo**: Mobile-first com breakpoints otimizados

## 🛠️ Tecnologias

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS Modules + CSS Variables
- **Icons**: Lucide React
- **Linting**: ESLint + Prettier

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                     # Componentes base reutilizáveis
│   │   ├── Button/
│   │   └── Modal/
│   └── features/               # Componentes específicos
│       ├── GiftCard/
│       ├── GiftList/
│       ├── Header/
│       └── Footer/
├── pages/                      # Páginas da aplicação
│   ├── Home/                   # Landing page
│   └── Gifts/                  # Lista de presentes
├── types/                      # Definições TypeScript
├── data/                       # Dados dos presentes
├── styles/                     # Estilos globais
└── utils/                      # Utilidades

public/assets/
├── couple/                     # Fotos do casal
├── venue/                      # Fotos dos locais
├── about/                      # Fotos para seção "Sobre nós"
├── gifts/                      # Imagens dos presentes
└── qrcodes/                    # QR codes para pagamento
```

## 🚀 Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse: `http://localhost:5173`

### Build para Produção

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## 📷 Assets Necessários

Para que o website funcione completamente, adicione as seguintes imagens:

### Landing Page

- `public/assets/couple/hero-photo.jpg` - Foto principal do casal
- `public/assets/venue/ceremony-venue.jpg` - Local da cerimônia
- `public/assets/venue/reception-venue.jpg` - Local da festa

### Lista de Presentes

- `public/assets/about/apartment.jpg` - Foto do apartamento
- `public/assets/about/honeymoon.jpg` - Foto da lua de mel
- `public/assets/gifts/` - Imagens dos presentes
- `public/assets/qrcodes/` - QR codes para pagamento

## 🎁 Gerenciamento de Presentes

### Adicionar Novos Presentes

1. Adicione a imagem em `public/assets/gifts/`
2. Gere o QR Code Pix e salve em `public/assets/qrcodes/`
3. Edite `src/data/gifts.ts` para adicionar o presente:

```typescript
{
  id: 'unique-id',
  name: 'Nome do Presente',
  description: 'Descrição detalhada',
  price: 299.90,
  image: '/assets/gifts/produto.jpg',
  qrCode: '/assets/qrcodes/qr-code.png',
  category: 'casa' // ou 'lua-de-mel'
}
```

### Categorias Disponíveis

- `casa` - Para itens domésticos e decoração
- `lua-de-mel` - Para experiências e viagens

## 🎨 Personalização

### Cores

Edite as variáveis CSS em `src/styles/globals.css`:

```css
:root {
  --color-primary: #007aff;
  --color-secondary: #5856d6;
  /* ... outras cores */
}
```

### Informações do Casamento

- **Nomes**: Altere em `src/pages/Home/Home.tsx`
- **Data**: Modifique o "Save the Date"
- **Locais**: Atualize informações de cerimônia e recepção

## 📱 Responsividade

O design é otimizado para:

- **Desktop**: 1200px+ (layout completo)
- **Tablet**: 768px-1199px (grid adaptado)
- **Mobile**: <768px (layout vertical)

## 🚀 Deploy

O projeto pode ser deployado em qualquer serviço de hospedagem estática:

- **Vercel**: `vercel --prod`
- **Netlify**: Faça upload da pasta `dist/`
- **GitHub Pages**: Configure GitHub Actions

## 📄 Licença

Este projeto é de uso pessoal para o casamento de Iago & Jas.

---

Feito com 💕 para celebrar nosso amor!
