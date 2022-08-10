import s from './Header.module.css';

export default function Header() {
  return (
    <div className={s.header}>
      <div className={s.headerContent}>
        <img className={s.warsaw} alt="warsaw" />
        <h1 className={s.headerText}>Retards league</h1>
        <img className={s.sticks} alt="sticks" />
      </div>
    </div>
  );
}
