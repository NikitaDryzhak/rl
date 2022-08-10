import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footerContainer}>
        <img className={s.sticks} alt="sticks" />
        <p className={s.mainTextFooter}>
          Retards League is official webpage with scoreboard made by
          <br />
          Nikita Dryzhak and Mykhailo Budko as a project for portfolio.
          <br />
          All legal rights held by creators 2022.
        </p>
      </div>
    </div>
  );
}
