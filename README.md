# 💕 Wedding Website - Jas & Iago

A working, modern and elegant wedding website built with React and TypeScript. The project features an emotional landing page and an interactive categorized gift list with integrated payment solutions.

[Access the website here](https://casamento-jas-e-iago.com)

##

<div align="center">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  <img src="https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white" alt="Stripe" />
  <img src="https://img.shields.io/badge/Pagar.me-32a852?style=for-the-badge&logo=pagarme&logoColor=green" alt="Pagar.me" />
</div>

## ✨ Features

### 🏠 Landing Page

- Hero section with couple photos and save the date
- Wedding venue information
- Responsive design optimized for all devices

### 🎁 Gift List

- Interactive gift categories with detailed modals
- Multiple payment options integration
- WhatsApp communication integration

## 📸 Screenshots

### Landing Page

![Landing Page](docs/screenshots/landing-page.png)
_Modern and elegant landing page with hero section and wedding details_

### Gift List Page

![Gift List](docs/screenshots/gift-list.png)
_Interactive gift list with categorized items and smooth animations_

### Gift Components

| Gift Card                                               | Gift Details & Payment                                        |
| ------------------------------------------------------- | ------------------------------------------------------------- |
| ![Gift Card](docs/screenshots/gift-card.png)            | ![Gift Details](docs/screenshots/gift-details.png)            |
| _Individual gift card with image and basic information_ | _Expanded gift view with payment options and PIX integration_ |

## 🛠️ Tech Stack

### Core Technologies

- React 18.2.0 with TypeScript 5.2.2
- Vite 5.4.19 for build and development
- React Router DOM 6.20.1 for navigation
- CSS Modules with custom properties for theming

### Payment Integration

- Stripe integration for credit card processing
  - Buy Button implementation
  - Installment options support
- PIX (Brazilian instant payment) via QR Code
- Pagar.me gateway for Brazilian installment payment processing

### UI/UX

- Custom component library
- Lucide React for icons
- Compound Components pattern
- Apple-inspired design system
- Responsive design with mobile-first approach

### Development & Quality

- ESLint with TypeScript and React plugins
- Strict TypeScript configuration

- Path mapping for clean imports
- Hot Module Replacement (HMR)

### Communication

- EmailJS for email notifications
- WhatsApp Business API integration

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # Reusable base components
│   └── features/               # Feature-specific components
├── pages/                      # Application pages
├── types/                      # TypeScript definitions
├── data/                       # Gift data
└── styles/                     # Global styles

public/
├── assets/                     # General assets
└── gifts/                      # Gift-specific assets
```

## 🚀 Getting Started

```bash
# Installation
npm install

# Development
npm run dev

# Production Build
npm run build

# Linting
npm run lint
```

## 🎨 Customization

The project uses CSS custom properties for easy theming and customization. All payment integrations are configurable through environment variables.

## 🚀 Deployment

The project is optimized for static deployment and can be easily deployed to:

- Vercel

## 📄 License

Personal project for Iago & Jas wedding.

---

Made with 💕 to celebrate our love!
