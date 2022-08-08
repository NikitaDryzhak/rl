import Match from './Match/Match';
import Footer from './Footer/Footer';
import s from './App.module.css';
import Header from './Header/Header';

export function App() {
  return (
    <div className={s.mainContainer}>
      <Header />
      <Match />
      <Footer />
    </div>
  );
}
