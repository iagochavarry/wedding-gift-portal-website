# Configuração do EmailJS

Este arquivo explica como configurar o EmailJS para habilitar o envio real de emails quando os convidados deixarem mensagens.

## 1. Criar Conta no EmailJS

1. Acesse [EmailJS](https://www.emailjs.com/)
2. Crie uma conta gratuita
3. Acesse o painel de controle

## 2. Configurar Serviço de Email

1. No painel, vá para **Email Services**
2. Clique em **Add New Service**
3. Escolha **Gmail** (recomendado)
4. Configure com a conta `casamentoiagoejas@gmail.com`
5. Anote o **Service ID** gerado

## 3. Criar Template de Email

1. Vá para **Email Templates**
2. Clique em **Create New Template**
3. Configure o template com estas variáveis:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Novo Presente de Casamento</title>
  </head>
  <body>
    <h2>🎁 Novo Presente Recebido!</h2>

    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Detalhes do Presente:</h3>
      <p><strong>Presente:</strong> {{gift_name}}</p>
      <p><strong>Valor:</strong> {{gift_price}}</p>
      <p><strong>Descrição:</strong> {{gift_description}}</p>
    </div>

    <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3>Mensagem do Convidado:</h3>
      <p><strong>De:</strong> {{from_name}}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="font-style: italic; padding: 10px; background: white; border-radius: 4px;">
        {{user_message}}
      </p>
    </div>

    <p style="color: #666; font-size: 12px;">
      Este email foi enviado automaticamente pelo site de casamento.
    </p>
  </body>
</html>
```

4. Configure:

   - **To Email:** `TG`
   - **From Name:** `Casamento Iago & Jas`
   - **Subject:** `🎁 Presente: {{gift_name}} - de {{from_name}}`
   - **Reply To:** `{{reply_to}}`

5. Anote o **Template ID** gerado

## 4. Obter User ID

1. Vá para **Account** > **General**
2. Copie o **User ID**

## 5. Atualizar o Código

No arquivo `src/components/features/GiftCard/GiftCard.tsx`, substitua:

```typescript
const serviceId = 'service_wedding'; // Substitua pelo seu Service ID
const templateId = 'template_gift'; // Substitua pelo seu Template ID
const userId = 'your_user_id'; // Substitua pelo seu User ID
```

E descomente a linha:

```typescript
await emailjs.send(serviceId, templateId, templateParams, userId);
```

## 6. Teste

1. Faça um teste escolhendo um presente
2. Preencha o formulário de mensagem
3. Verifique se o email chegou em `casamentoiagoejas@gmail.com`

## 7. Variáveis Disponíveis no Template

- `{{to_email}}` - Email de destino (casamentoiagoejas@gmail.com)
- `{{from_name}}` - Nome do convidado
- `{{gift_name}}` - Nome do presente
- `{{gift_price}}` - Valor formatado do presente
- `{{gift_description}}` - Descrição do presente
- `{{user_message}}` - Mensagem do convidado
- `{{reply_to}}` - Email para resposta

## Limitações da Conta Gratuita

- 200 emails por mês
- Básico para um casamento
- Para mais emails, considere upgrade

## Segurança

- As credenciais ficam no painel do EmailJS
- Não há exposição de senhas no código
- Service/Template IDs são seguros para exposição pública
