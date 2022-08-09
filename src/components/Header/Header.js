import s from './Header.module.css';

export default function Header() {
  return (
    <div className={s.header}>
      <p className={s.warsaw}></p>
      <h1 className={s.headerText}>Retards league</h1>
      <p className={s.sticks}></p>
    </div>
  );
}
