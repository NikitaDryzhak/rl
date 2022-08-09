import s from './Footer.module.css';

export default function Footer() {
  return (
    <div className={s.footer}>
      <p className={s.sticks}></p>

      <p className={s.mainTextFooter}>
        Retards League is official webpage with scoreboard
        <br />
        made by Nikita Dryzhak and Mykhailo Budko as a project for portfolio.
      </p>
      <p className={s.secondTextFooter}>
        All legal rights held by crators 2022
      </p>
    </div>
  );
}
