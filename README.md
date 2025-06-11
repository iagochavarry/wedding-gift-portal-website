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

- **Vite 5.4.19** - Build tool moderna e rápida com Hot Module Replacement (HMR)
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
└── styles/                     # Estilos globais

public/
├── assets/                     # Assets gerais (imagens do casal, locais)
│   ├── couple/                 # Fotos do casal
│   ├── venue/                  # Fotos dos locais
│   └── about/                  # Fotos para seção "Sobre nós"
└── gifts/                      # Presentes organizados por slug
    ├── [slug]/                 # Pasta individual de cada presente
    │   ├── image.png           # Imagem do presente
    │   └── qrcode.jpeg         # QR code do PIX
    └── README.md               # Documentação dos presentes

docs/                           # Documentação técnica
├── HOST.md                     # Guia de hospedagem
└── EMAIL_SETUP.md              # Configuração de email
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

## 🎁 Gerenciamento de Presentes

### Estrutura Atual

O projeto já possui todos os presentes configurados e organizados. Cada presente tem sua própria pasta em `public/gifts/[slug]/` contendo:

- `image.png` - Imagem do presente
- `qrcode.jpeg` - QR code para pagamento PIX

### Presentes Incluídos

**Casa** (12 itens): Jogo de panelas, buffet, carrinho bar, taças, mesinha de cabeceira, quadro, puff, lava-louças, lava e seca, soundbar, mesa de centro, jogo de cama.

**Lua de Mel** (8 itens): Diárias em Positano e Puglia, jantares temáticos, passeio de barco, tours e aluguel de carro.

**Customizado** (1 item): Valor livre escolhido pelo convidado.

### Adicionar Novos Presentes

1. Crie uma pasta em `public/gifts/[novo-slug]/`
2. Adicione `image.png` e `qrcode.jpeg` na pasta
3. Edite `src/data/gifts.ts` para adicionar o presente:

```typescript
{
  id: 'unique-id',
  slug: 'novo-slug',
  name: 'Nome do Presente',
  description: 'Descrição detalhada',
  price: 299.90,
  category: 'casa', // ou 'lua-de-mel' ou 'customizado'
  payment: {
    pixCode: 'código-pix-gerado',
    creditCard: {
      stripeUrl: 'link-do-stripe',
      pagarMeUrl: 'link-do-pagarme' // opcional
    }
  }
}
```

### Categorias Disponíveis

- `casa` - Para itens domésticos e decoração
- `lua-de-mel` - Para experiências e viagens
- `customizado` - Para valores personalizados

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

### Vercel (Recomendado)

1. **Método Automático**: Conecte seu repositório GitHub ao Vercel

   - Faça login em [vercel.com](https://vercel.com)
   - Importe o repositório do GitHub
   - Deploy automático a cada push

2. **Método Manual**: Via CLI
   ```bash
   npm run build
   npx vercel --prod
   ```

### Outras Opções

- **Netlify**: Faça upload da pasta `dist/` após `npm run build`
- **GitHub Pages**: Configure GitHub Actions para build automático
- **Qualquer CDN**: O projeto gera arquivos estáticos na pasta `dist/`

### Configuração Incluída

- `vercel.json` - Configuração para roteamento SPA
- Build otimizado com Vite
- Assets organizados e otimizados

## 📄 Licença

Este projeto é de uso pessoal para o casamento de Iago & Jas.

---

Feito com 💕 para celebrar nosso amor!
