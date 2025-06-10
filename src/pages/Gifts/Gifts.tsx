import { useMemo } from 'react';
import { Home, MapPin, Gift } from 'lucide-react';
import { GiftCard } from '../../components/features/GiftCard/GiftCard';
import { gifts } from '../../data/gifts';
import styles from './Gifts.module.css';

export const Gifts = () => {
  const giftsByCategory = useMemo(() => {
    const casa = gifts.filter((gift) => gift.category === 'casa');
    const luaDeMel = gifts.filter((gift) => gift.category === 'lua-de-mel');
    const customizado = gifts.filter((gift) => gift.category === 'customizado');
    return { casa, luaDeMel, customizado };
  }, []);

  return (
    <div className={styles.container}>
      {/* About Us Section */}
      <section className={styles.aboutUs}>
        <div className={styles.aboutContent}>
          <h1 className={styles.pageTitle}>Nossa Lista de Presentes</h1>
          <p className={styles.pageSubtitle}>
            Obrigado por fazer parte da nossa jornada! Aqui estão os presentes que nos ajudarão a
            construir nossa nova vida juntos.
          </p>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutSection}>
              <div className={styles.aboutImageContainer}>
                <img
                  src="/assets/about/easy-botafogo.jpg"
                  alt="Nosso apartamento"
                  className={styles.aboutImage}
                />
              </div>
              <div className={styles.aboutText}>
                <h2 className={styles.aboutTitle}>
                  <Home className={styles.aboutIcon} />
                  Nossa Nova Casa
                </h2>
                <p className={styles.aboutDescription}>
                  Estamos montando nosso primeiro lar juntos em botafogo! Cada item da nossa lista
                  Casa foi pensado com carinho para criar um ambiente acolhedor e funcional onde
                  começaremos nossa vida a dois.
                </p>
              </div>
            </div>

            <div className={styles.aboutSection}>
              <div className={styles.aboutText}>
                <h2 className={styles.aboutTitle}>
                  <MapPin className={styles.aboutIcon} />
                  Lua de Mel na Itália
                </h2>
                <p className={styles.aboutDescription}>
                  Sonhamos em conhecer a Itália juntos! Cada presente da nossa lista Lua de Mel nos
                  ajudará a viver experiências inesquecíveis pela Costa Amalfitana, Puglia e Roma.
                </p>
              </div>
              <div className={styles.aboutImageContainer}>
                <img
                  src="/assets/about/roma.jpg"
                  alt="Lua de mel na Itália"
                  className={styles.aboutImage}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Casa Section */}
      <section className={styles.giftSection}>
        <div className={styles.sectionContent}>
          <div className={styles.categoryHeader}>
            <Home className={styles.categoryIcon} />
            <h2 className={styles.categoryTitle}>Para Nossa Casa</h2>
            <p className={styles.categoryDescription}>
              Itens especiais para tornar nossa casa um lar acolhedor
            </p>
          </div>

          <div className={styles.giftGrid}>
            {giftsByCategory.casa.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        </div>
      </section>

      {/* Lua de Mel Section */}
      <section className={styles.giftSection}>
        <div className={styles.sectionContent}>
          <div className={styles.categoryHeader}>
            <MapPin className={styles.categoryIcon} />
            <h2 className={styles.categoryTitle}>Para Nossa Lua de Mel</h2>
            <p className={styles.categoryDescription}>
              Experiências inesquecíveis na nossa viagem dos sonhos pela Itália
            </p>
          </div>

          <div className={styles.giftGrid}>
            {giftsByCategory.luaDeMel.map((gift) => (
              <GiftCard key={gift.id} gift={gift} />
            ))}
          </div>
        </div>
      </section>

      {/* Presente Customizado Section */}
      <section className={styles.customGiftSection}>
        <div className={styles.sectionContent}>
          <div className={styles.customGiftContent}>
            <Gift className={styles.customGiftIcon} />
            <h2 className={styles.customGiftTitle}>Presente Customizado</h2>
            <p className={styles.customGiftDescription}>
              Caso deseje dar um presente customizado, clique aqui.
            </p>

            <div className={styles.customGiftCard}>
              {giftsByCategory.customizado.map((gift) => (
                <GiftCard key={gift.id} gift={gift} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
