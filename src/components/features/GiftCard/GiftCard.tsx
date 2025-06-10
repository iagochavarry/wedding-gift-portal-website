import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Gift } from '../../../types/gift';
import { Modal } from '../../ui/Modal/Modal';
import { Button } from '../../ui/Button/Button';
import { Copy, Check, Send } from 'lucide-react';
import styles from './GiftCard.module.css';

interface GiftCardProps {
  gift: Gift;
}

export const GiftCard = ({ gift }: GiftCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Inicializar EmailJS com User ID (funcionando!)
  useEffect(() => {
    emailjs.init('Nysy5Z8-WG9X2iGHY');
  }, []);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setName('');
    setMessage('');
    setSent(false);
  };

  const handleCopyQRCode = async () => {
    try {
      await navigator.clipboard.writeText(gift.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar código QR:', err);
    }
  };

  const handleSendMessage = async () => {
    if (!name.trim() || !message.trim()) {
      alert('Por favor, preencha seu nome e mensagem.');
      return;
    }

    setSending(true);

    try {
      // Configurações do EmailJS
      const serviceId = 'service_d94lenl';
      const templateId = 'template_iguao0u';

      const templateParams = {
        to_name: 'Iago & Jas',
        to_email: 'casamentoiagoejas@gmail.com',
        from_name: name,
        gift_name: gift.name,
        gift_price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(gift.price),
        gift_description: gift.description,
        user_message: message,
        reply_to: name.toLowerCase().replace(/\s+/g, '') + '@email.com',
      };

      // Envio via EmailJS
      await emailjs.send(serviceId, templateId, templateParams);

      setSent(true);
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Erro detalhado ao enviar mensagem:', error);

      // Melhor tratamento de erro com informações específicas
      let errorMessage = 'Erro ao enviar mensagem. ';

      if (error instanceof Error) {
        if (error.message.includes('EmailJS')) {
          errorMessage += 'Problema com o serviço de email.';
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage += 'Problema de conexão. Verifique sua internet.';
        } else {
          errorMessage += `Detalhes: ${error.message}`;
        }
      } else {
        errorMessage += 'Erro desconhecido.';
      }

      alert(errorMessage + ' Por favor, tente novamente.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className={styles['card']} onClick={handleOpenModal}>
        <div className={styles['imageContainer']}>
          <img src={gift.image} alt={gift.name} className={styles['image']} />
        </div>
        <div className={styles['content']}>
          <h3 className={styles['name']}>{gift.name}</h3>
          <p className={styles['price']}>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(gift.price)}
          </p>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={gift.name}
        className={styles['modal'] || ''}
      >
        <div className={styles['modalContent']}>
          <img src={gift.image} alt={gift.name} className={styles['modalImage']} />
          <p className={styles['description']}>{gift.description}</p>
          <div className={styles['qrCodeContainer']}>
            <img src={gift.qrCode} alt="QR Code Pix" className={styles['qrCode']} />
            <p className={styles['qrCodeText']}>Escaneie o QR Code para pagar via Pix</p>
            <Button
              variant="secondary"
              size="sm"
              onClick={handleCopyQRCode}
              style={{ marginTop: '12px' }}
            >
              {copied ? (
                <>
                  <Check size={16} />ㅤ Código Copiado!
                </>
              ) : (
                <>
                  <Copy size={16} /> ㅤCopie o QR-code
                </>
              )}
            </Button>
          </div>

          {sent ? (
            <div className={styles['messageSuccess']}>
              <Check size={24} />
              <p>Mensagem enviada com sucesso! Obrigado pelo presente! 💕</p>
            </div>
          ) : (
            <div className={styles['messageForm']}>
              <h3>Em seguida, deixe sua mensagem para o casal</h3>

              <div className={styles['formGroup']}>
                <label htmlFor="name">Nome:</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome"
                  className={styles['formInput']}
                />
              </div>

              <div className={styles['formGroup']}>
                <label htmlFor="message">Mensagem:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Sua mensagem para o casal..."
                  rows={4}
                  className={styles['formTextarea']}
                />
              </div>

              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleSendMessage}
                disabled={sending}
              >
                {sending ? (
                  <>Enviando...</>
                ) : (
                  <>
                    <Send size={16} />
                    ㅤEnviar Mensagem
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
