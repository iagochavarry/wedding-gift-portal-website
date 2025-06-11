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

## 🛠️ Stack Tecnológico

### Frontend Framework & Language

- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript 5.2.2** - Superset tipado do JavaScript com configurações strict habilitadas
- **JSX/TSX** - Sintaxe de extensão para escrever elementos React

### Build Tool & Development

- **Vite 5.1.4** - Build tool moderna e rápida com Hot Module Replacement (HMR)
- **@vitejs/plugin-react** - Plugin oficial do React para Vite com suporte a Fast Refresh
- **ES2020** - Target de compilação para JavaScript moderno
- **ESNext Modules** - Sistema de módulos moderno do JavaScript

### Routing & Navigation

- **React Router DOM 6.20.1** - Roteamento declarativo para React
- **BrowserRouter** - Implementação de roteador para navegadores web
- **Routes & Route** - Componentes para definição de rotas

### Styling & Design System

- **CSS Modules** - Estilos CSS com escopo local automático
- **CSS Custom Properties (Variables)** - Sistema de design tokens para cores, espaçamentos e tipografia
- **Mobile-First Responsive Design** - Abordagem responsiva começando pelo mobile
- **Apple-inspired Design System** - Design limpo e minimalista inspirado no ecossistema Apple

### UI Components & Icons

- **Lucide React 0.344.0** - Biblioteca de ícones SVG otimizados para React
- **Component Library Custom** - Sistema de componentes próprio com Button, Modal, etc.
- **Compound Components Pattern** - Padrões avançados de composição de componentes

### Payment Integration

- **Stripe** - Processamento de pagamentos com cartão de crédito
  - `@stripe/stripe-js` - SDK JavaScript oficial do Stripe
  - Buy Button integration para checkout rápido
- **Pagar.me** - Gateway brasileiro para pagamentos parcelados
- **PIX Integration** - Sistema de pagamentos instantâneos brasileiro via QR Code

### Email & Communication

- **EmailJS 4.4.1** - Serviço para envio de emails diretamente do frontend
- **WhatsApp Business API** - Integração para comunicação via WhatsApp

### Development Tools & Quality

- **ESLint 8.56.0** - Linter para identificação de problemas no código
  - `@typescript-eslint/eslint-plugin` - Regras específicas para TypeScript
  - `@typescript-eslint/parser` - Parser do TypeScript para ESLint
  - `eslint-plugin-react` - Regras específicas para React
  - `eslint-plugin-react-hooks` - Regras para React Hooks
  - `eslint-plugin-react-refresh` - Suporte ao React Fast Refresh
- **TypeScript Strict Mode** - Configurações rigorosas de tipagem
- **Path Mapping** - Aliases de importação (`@/*` para `src/*`)

### Build & Deployment

- **Static Site Generation** - Build estático para deploy em CDNs
- **Tree Shaking** - Eliminação de código não utilizado
- **Code Splitting** - Divisão automática do código para carregamento otimizado
- **Asset Optimization** - Otimização automática de imagens e assets

### Browser Support & Standards

- **ES2020+ Features** - Suporte a funcionalidades modernas do JavaScript
- **DOM & DOM.Iterable** - APIs modernas do navegador
- **Modern Bundle Target** - Bundles otimizados para navegadores modernos

### Performance & Optimization

- **React.StrictMode** - Modo estrito do React para desenvolvimento
- **Vite HMR** - Hot Module Replacement para desenvolvimento rápido
- **Lazy Loading** - Carregamento sob demanda de componentes
- **Image Optimization** - Otimização de imagens para web

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
