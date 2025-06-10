import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/features/Header/Header';
import { Footer } from './components/features/Footer/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home/Home';
import { Gifts } from './pages/Gifts/Gifts';
import styles from './App.module.css';

export const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className={styles.app}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/presentes" element={<Gifts />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};
