import { Link } from 'react-router-dom';
import { Calendar, MapPin, Heart, Gift } from 'lucide-react';
import { Button } from '../../components/ui/Button/Button';
import { MultiPhotoCarousel } from '../../components/ui/MultiPhotoCarousel/MultiPhotoCarousel';
import styles from './Home.module.css';

export const Home = () => {
  // Array extenso de fotos do casal para o carrossel (mais de 20 fotos)
  const couplePhotos = [
    '/assets/couple/photo-1.jpeg',
    '/assets/couple/photo-2.jpeg',
    '/assets/couple/photo-3.jpeg',
    '/assets/couple/photo-4.jpeg',
    '/assets/couple/photo-5.jpeg',
    '/assets/couple/photo-6.jpeg',
    '/assets/couple/photo-7.jpeg',
    '/assets/couple/photo-8.jpeg',
    '/assets/couple/photo-9.jpeg',
    '/assets/couple/photo-10.jpeg',
    '/assets/couple/photo-11.jpeg',
    '/assets/couple/photo-12.jpeg',
    '/assets/couple/photo-13.jpeg',
    '/assets/couple/photo-14.jpeg',
    '/assets/couple/photo-15.jpeg',
    '/assets/couple/photo-16.jpeg',
    '/assets/couple/photo-17.jpeg',
    '/assets/couple/photo-18.jpeg',
    '/assets/couple/photo-19.jpeg',
  ];

  // Calcular dias até o casamento (4 de outubro de 2025)
  const weddingDate = new Date('2025-10-04');
  const today = new Date();
  const daysUntilWedding = Math.ceil(
    (weddingDate.getTime() - today.getTime()) / (1000 * 3600 * 24)
  );

  return (
    <div className={styles['container']}>
      {/* Hero Section */}
      <section className={styles['hero']}>
        <div className={styles['heroContent']}>
          {/* Layout de 2 colunas */}
          <div className={styles['headerSaveTheDateSection']}>
            {/* Coluna da esquerda: Header + Galeria */}
            <div className={styles['leftColumn']}>
              {/* Título principal separado */}
              <div className={styles['titleSection']}>
                <h1 className={styles['coupleNames']}>Jasmin e Iago</h1>
                <p className={styles['subtitle']}>Estamos nos casando!</p>
                <div className={styles['countdown']}>
                  <Heart className={styles['countdownIcon']} />
                  <span className={styles['countdownText']}>
                    Faltam {daysUntilWedding} dias para o nosso grande dia
                  </span>
                </div>
              </div>

              {/* Galeria com título */}
              <div className={styles['gallerySection']}>
                <h2 className={styles['galleryTitle']}>
                  <span className={styles['galleryEmoji']}>💛</span>
                  Nossos Momentos
                </h2>
                <div className={styles['carouselContainer']}>
                  <MultiPhotoCarousel
                    images={couplePhotos}
                    alt="Fotos do casal Jasmin e Iago"
                    autoPlay={true}
                    autoPlayInterval={3000}
                    visiblePhotos={3}
                  />
                </div>
              </div>
            </div>

            {/* Coluna da direita: Save the Date */}
            <div className={styles['saveTheDateContainer']}>
              <div className={styles['saveTheDateContent']}>
                <img
                  src="/assets/save-the-date.png"
                  alt="Save the Date - 4 de Outubro de 2025"
                  className={styles['saveTheDateImage']}
                />
                <p className={styles['saveTheDateMessage']}>
                  Mal podemos esperar para celebrar com você! 💕
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className={styles['venue']}>
        <div className={styles['sectionContent']}>
          <h2 className={styles['sectionTitle']}>Onde Será</h2>
          <div className={styles['venueGrid']}>
            <div className={styles['venueImage']}>
              <img
                src="/assets/venue/outeiro.png"
                alt="Local do casamento"
                className={styles['venuePhoto']}
              />
            </div>
            <div className={styles['venueInfo']}>
              <h3>Outeiro da Glória</h3>
              <p className={styles['venueAddress']}>
                <MapPin className={styles['icon']} />
                Rua Praça Nossa Sra. da Glória, 26 - Igreja de Nossa Senhora da Glória do Outeiro -
                Glória, Rio de Janeiro
              </p>
              <p className={styles['venueDescription']}>
                Um local especial e histórico onde celebraremos nossa união cercados de família e
                amigos queridos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reception Section */}
      <section className={styles['reception']}>
        <div className={styles['sectionContent']}>
          <h2 className={styles['sectionTitle']}>A Festa</h2>
          <div className={styles['receptionGrid']}>
            <div className={styles['receptionInfo']}>
              <h3>Mansão Alvite</h3>
              <p className={styles['venueAddress']}>
                <MapPin className={styles['icon']} />
                R. Dr. Júlio Otoni, 444 - Santa Teresa, Rio de Janeiro
              </p>
              <p className={styles['receptionDescription']}>
                Após a cerimônia, vamos celebrar com uma festa inesquecível em um local privilegiado
                do Rio de Janeiro! Música, dança, comida deliciosa e muita alegria nos esperam.
              </p>
              <div className={styles['receptionDetails']}>
                <div className={styles['detail']}>
                  <Calendar className={styles['icon']} />
                  <span>15h - Cerimônia</span>
                </div>
                <div className={styles['detail']}>
                  <Heart className={styles['icon']} />
                  <span>17h00 - Festa</span>
                </div>
              </div>
            </div>
            <div className={styles['receptionImage']}>
              <img
                src="/assets/venue/alvite.jpg"
                alt="Local da festa"
                className={styles['receptionPhoto']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gift List CTA */}
      <section className={styles['giftCta']}>
        <div className={styles['ctaContent']}>
          <Heart className={styles['ctaIcon']} />
          <h2>Quer nos presentear?</h2>
          <p>
            Preparamos uma lista especial com presentes para nossa nova casa e lua de mel dos sonhos
            na Itália!
          </p>
          <Link to="/presentes">
            <Button size="lg" className={styles['ctaButton']}>
              <Gift className={styles['buttonIcon']} />
              Ver Lista de Presentes
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
