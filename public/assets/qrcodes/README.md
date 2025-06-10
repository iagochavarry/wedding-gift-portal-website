# QR Codes Pix

Esta pasta deve conter os QR codes para pagamento via Pix de cada presente.

## Formato recomendado:

- Formato: PNG
- Resolução: 512x512px (quadrado)
- Fundo branco
- QR code centralizado

## Nomes dos arquivos esperados:

- panela.png
- mixer.png
- toalha.png
- cama.png
- copo.png
- prato.png

## Como gerar QR codes Pix:

1. Use o app do seu banco para gerar um QR code Pix
2. Defina o valor correspondente ao presente
3. Salve a imagem do QR code
4. Renomeie o arquivo conforme a lista acima

Para adicionar novos presentes, gere os QR codes correspondentes e atualize o arquivo `src/data/gifts.ts`.
