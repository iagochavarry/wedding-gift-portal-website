import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Gift } from '../../../types/gift';
import { Modal } from '../../ui/Modal/Modal';
import { Button } from '../../ui/Button/Button';
import { Copy, Check, Send, Smartphone, CreditCard, Banknote } from 'lucide-react';
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
  const [paymentMethod, setPaymentMethod] = useState<'pix' | 'credit' | 'installment' | null>(null);

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
    setPaymentMethod(null);
  };

  const handleCopyQRCode = async () => {
    try {
      const codeToeCopy = gift.code || gift.paymentMethods?.pix?.code || '';
      await navigator.clipboard.writeText(codeToeCopy);
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

          {/* Payment Method Selection */}
          {!paymentMethod && (
            <div className={styles['paymentOptions']}>
              <h3 className={styles['paymentTitle']}>Escolha a forma de pagamento</h3>
              <div className={styles['paymentButtons']}>
                {(gift.paymentMethods?.pix || gift.code) && (
                  <div className={styles['paymentButton']} onClick={() => setPaymentMethod('pix')}>
                    <Smartphone className={styles['paymentButtonIcon']} />
                    <h4 className={styles['paymentButtonTitle']}>PIX</h4>
                    <p className={styles['paymentButtonDescription']}>Pagamento instantâneo</p>
                  </div>
                )}
                <div className={styles['paymentButton']} onClick={() => setPaymentMethod('credit')}>
                  <CreditCard className={styles['paymentButtonIcon']} />
                  <h4 className={styles['paymentButtonTitle']}>Cartão à Vista</h4>
                  <p className={styles['paymentButtonDescription']}>Visa, Mastercard, etc.</p>
                </div>
                {gift.pagarMeEnabled && (
                  <div
                    className={styles['paymentButton']}
                    onClick={() => setPaymentMethod('installment')}
                  >
                    <Banknote className={styles['paymentButtonIcon']} />
                    <h4 className={styles['paymentButtonTitle']}>Cartão Parcelado</h4>
                    <p className={styles['paymentButtonDescription']}>Até 12x com juros*</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* PIX Payment */}
          {paymentMethod === 'pix' && (gift.paymentMethods?.pix || gift.code) && (
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
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPaymentMethod(null)}
                style={{ marginTop: '8px' }}
              >
                Voltar para métodos de pagamento
              </Button>
            </div>
          )}

          {/* Credit Card Payment */}
          {paymentMethod === 'credit' && gift.stripeButtonId && (
            <div className={styles['paymentContent']}>
              <div className={styles['pagarMeContainer']}>
                <p className={styles['pagarMeDescription']}>
                  Você será redirecionado para o Stripe para finalizar sua compra com cartão à
                  vista.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(gift.stripeButtonId, '_blank')}
                  style={{ width: '100%', marginTop: '16px' }}
                >
                  <CreditCard size={16} />ㅤ Pagar com Cartão à Vista
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPaymentMethod(null)}
                style={{ marginTop: '12px', width: '100%' }}
              >
                Voltar para métodos de pagamento
              </Button>
            </div>
          )}

          {/* Installment Payment (Pagar.me) */}
          {paymentMethod === 'installment' && gift.pagarMeUrl && (
            <div className={styles['paymentContent']}>
              <div className={styles['pagarMeContainer']}>
                <p className={styles['pagarMeDescription']}>
                  Você será redirecionado para o Pagar.me para finalizar sua compra com cartão
                  parcelado (até 12x com juros*).
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open(gift.pagarMeUrl, '_blank')}
                  style={{ width: '100%', marginTop: '16px' }}
                >
                  <Banknote size={16} />
                  ㅤPagar com Cartão Parcelado
                </Button>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPaymentMethod(null)}
                style={{ marginTop: '12px', width: '100%' }}
              >
                Voltar para métodos de pagamento
              </Button>
            </div>
          )}

          {/* Message Form - only show after payment method is selected */}
          {paymentMethod && (
            <>
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
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
