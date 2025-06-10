# 🚀 Hospedagem do Site de Casamento

Este guia apresenta as melhores opções para colocar o site de casamento no ar, com passo a passo detalhado para cada plataforma.

## 📋 Resumo das Opções

| Plataforma       | Preço  | Facilidade | SSL | Domínio Personalizado | Recomendação       |
| ---------------- | ------ | ---------- | --- | --------------------- | ------------------ |
| **Vercel**       | Grátis | ⭐⭐⭐⭐⭐ | ✅  | ✅ (grátis)           | 🥇 **MELHOR**      |
| **Netlify**      | Grátis | ⭐⭐⭐⭐⭐ | ✅  | ✅ (grátis)           | 🥈 **ÓTIMA**       |
| **GitHub Pages** | Grátis | ⭐⭐⭐     | ✅  | ✅ (grátis)           | 🥉 **BOA**         |
| **Railway**      | $5/mês | ⭐⭐⭐⭐   | ✅  | ✅ (pago)             | 💰 **PAGA**        |
| **Render**       | Grátis | ⭐⭐⭐⭐   | ✅  | ✅ (pago)             | 🔄 **ALTERNATIVA** |

---

## 🥇 OPÇÃO 1: VERCEL (RECOMENDADA)

### Por que escolher?

- ✅ **Grátis** para projetos pessoais
- ✅ **Deploy automático** a cada push no GitHub
- ✅ **SSL certificado** automático
- ✅ **Domínio personalizado** gratuito
- ✅ **Otimizada para React/Vite**
- ✅ **CDN global** (site rápido no mundo todo)

### Passo a Passo:

#### 1. Preparar o Código

```bash
# No terminal do projeto
npm run build
```

#### 2. Subir para GitHub

```bash
# Se ainda não tem repositório
git init
git add .
git commit -m "Site de casamento completo"

# Criar repositório no GitHub.com
# Depois conectar:
git remote add origin https://github.com/seu-usuario/wedding-website.git
git push -u origin main
```

#### 3. Deploy na Vercel

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"Sign up"** → **"Continue with GitHub"**
3. Autorize a Vercel no GitHub
4. Clique em **"New Project"**
5. Selecione o repositório `wedding-website`
6. Configure:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
7. Clique em **"Deploy"**

#### 4. Configurar Domínio Personalizado (Opcional)

1. No painel da Vercel → **Settings** → **Domains**
2. Adicione seu domínio: `casamentoiagoejas.com.br`
3. Siga as instruções para configurar DNS

### URLs Resultantes:

- **Automática:** `https://wedding-website-usuario.vercel.app`
- **Personalizada:** `https://casamentoiagoejas.com.br`

---

## 🥈 OPÇÃO 2: NETLIFY

### Por que escolher?

- ✅ **Grátis** para projetos pessoais
- ✅ **Formulários** nativos (útil se quiser formulário de contato)
- ✅ **Deploy por drag & drop** ou GitHub
- ✅ **SSL automático**

### Passo a Passo:

#### Método 1: Deploy Rápido (Drag & Drop)

```bash
# Fazer build
npm run build
```

1. Acesse [netlify.com](https://netlify.com)
2. Crie conta gratuita
3. Arraste a pasta `dist` para a área de deploy
4. Site no ar instantaneamente!

#### Método 2: GitHub (Recomendado)

1. Suba código para GitHub (igual Vercel)
2. No Netlify → **"New site from Git"**
3. Conecte GitHub e selecione repositório
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy automático!

---

## 🥉 OPÇÃO 3: GITHUB PAGES

### Por que escolher?

- ✅ **Totalmente grátis**
- ✅ **Integrado ao GitHub**
- ✅ **Domínio personalizado** gratuito

### Passo a Passo:

#### 1. Instalar gh-pages

```bash
npm install --save-dev gh-pages
```

#### 2. Configurar package.json

```json
{
  "homepage": "https://seu-usuario.github.io/wedding-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Deploy

```bash
npm run deploy
```

#### 4. Configurar GitHub

1. GitHub → Repositório → **Settings** → **Pages**
2. Source: **"Deploy from a branch"**
3. Branch: **"gh-pages"**
4. Site disponível em: `https://seu-usuario.github.io/wedding-website`

---

## 💰 OPÇÃO 4: RAILWAY

### Por que escolher?

- ✅ **Muito estável**
- ✅ **Suporte a backends** (se precisar)
- ✅ **Deploy simples**
- ❌ **$5/mês** por projeto

### Passo a Passo:

1. Acesse [railway.app](https://railway.app)
2. **"Login with GitHub"**
3. **"New Project"** → **"Deploy from GitHub repo"**
4. Selecione repositório
5. Railway detecta automaticamente que é Vite
6. Deploy automático!

---

## 🔄 OPÇÃO 5: RENDER

### Por que escolher?

- ✅ **Plano gratuito** generoso
- ✅ **Fácil configuração**
- ❌ **Slow cold starts** no plano grátis

### Passo a Passo:

1. Acesse [render.com](https://render.com)
2. **"Get Started for Free"**
3. Conecte GitHub
4. **"New Static Site"**
5. Configure:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Deploy!

---

## 🌐 CONFIGURAÇÃO DE DOMÍNIO PERSONALIZADO

### Onde Comprar Domínio:

- **Registro.br** (domínios .com.br) - ~R$ 40/ano
- **GoDaddy** (domínios .com) - ~R$ 60/ano
- **Namecheap** (domínios .com) - ~R$ 50/ano

### Configuração DNS:

```
Tipo: CNAME
Nome: @
Valor: [URL_DA_PLATAFORMA]

Tipo: CNAME
Nome: www
Valor: [URL_DA_PLATAFORMA]
```

---

## 🚀 RECOMENDAÇÃO FINAL

### Para o Casamento:

**🏆 ESCOLHA A VERCEL**

**Por quê?**

1. ✅ **Totalmente gratuita**
2. ✅ **Deploy em 2 minutos**
3. ✅ **Atualização automática** (push no GitHub = site atualizado)
4. ✅ **Perfeita para React/Vite**
5. ✅ **Domínio personalizado grátis**
6. ✅ **SSL/HTTPS automático**
7. ✅ **Site rápido globalmente**

### Cronograma Sugerido:

1. **Hoje:** Deploy na Vercel (15 minutos)
2. **Esta semana:** Comprar domínio personalizado
3. **Próxima semana:** Configurar domínio
4. **Antes do casamento:** Tudo funcionando perfeitamente!

---

## 🆘 TROUBLESHOOTING

### Erro de Build:

```bash
# Verificar se build funciona localmente
npm run build

# Se der erro, verificar:
npm install
npm run dev
```

### Erro de Rota:

Adicionar arquivo `public/_redirects` (Netlify) ou `vercel.json` (Vercel):

**Netlify (\_redirects):**

```
/*    /index.html   200
```

**Vercel (vercel.json):**

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Site não atualiza:

- Limpar cache do navegador (Ctrl+F5)
- Verificar se build gerou arquivos novos
- Aguardar alguns minutos para propagação

---

## 📞 SUPORTE

Se tiver problemas:

1. **Documentação oficial** da plataforma escolhida
2. **GitHub Issues** do projeto
3. **Discord/Slack** das plataformas
4. **Stack Overflow**

**Lembre-se:** O site é estático (só HTML/CSS/JS), então é muito simples de hospedar! 🎉
