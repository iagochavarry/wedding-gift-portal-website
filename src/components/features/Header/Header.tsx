import { Link, useLocation } from 'react-router-dom';
import { Heart } from 'lucide-react';
import styles from './Header.module.css';

export const Header = () => {
  const location = useLocation();

  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <Link to="/" className={styles['logo']}>
          <div className={styles['logoIcon']}>
            <Heart className={styles['heartIcon']} />
            <span className={styles['initials']}>J+I</span>
          </div>
          <h1 className={styles['title']}>Jasmin e Iago</h1>
        </Link>
        <nav className={styles['nav']}>
          <Link
            to="/"
            className={`${styles['link']} ${location.pathname === '/' ? styles['active'] : ''}`}
          >
            Home
          </Link>
          <Link
            to="/presentes"
            className={`${styles['link']} ${
              location.pathname === '/presentes' ? styles['active'] : ''
            }`}
          >
            Lista de Presentes
          </Link>
        </nav>
      </div>
    </header>
  );
};
