import { Gift } from '../../../types/gift';
import { GiftCard } from '../GiftCard/GiftCard';
import styles from './GiftList.module.css';

interface GiftListProps {
  gifts: Gift[];
}

export const GiftList = ({ gifts }: GiftListProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {gifts.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
};
