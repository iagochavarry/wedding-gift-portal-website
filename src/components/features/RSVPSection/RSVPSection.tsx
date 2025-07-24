import { Mail } from 'lucide-react';
import styles from './RSVPSection.module.css';

export const RSVPSection = () => {
    const handleEmailClick = () => {
        window.location.href = 'mailto:rsvp@carineegilcerimonial.com.br?subject=Confirmação de Presença - Casamento Jasmin e Iago';
    };

    return (
        <section className={styles['rsvpSection']}>
            <div className={styles['rsvpContent']}>
                <h2 className={styles['rsvpTitle']}>RSVP</h2>
                <p className={styles['rsvpText']}>
                    Confirmar presença através do email
                </p>
                <button
                    onClick={handleEmailClick}
                    className={styles['emailButton']}
                    aria-label="Enviar email para confirmar presença"
                >
                    <Mail className={styles['emailIcon']} />
                    <span className={styles['emailText']}>rsvp@carineegilcerimonial.com.br</span>
                </button>
            </div>
        </section>
    );
}; 