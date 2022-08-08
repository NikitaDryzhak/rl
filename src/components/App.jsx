import Match from './Match/Match';
import Footer from './Footer/Footer';
import s from './App.module.css';

export function App() {
  return (
    <div>
      <div className={s.mainContainer}>
        <h1 className={s.mainText}>Retards league</h1>
        <div className={s.playersContainer}>WELCOME TO THE RETARDS LEAGUE</div>
        <Match />
        <Footer />
      </div>
    </div>
  );
}
