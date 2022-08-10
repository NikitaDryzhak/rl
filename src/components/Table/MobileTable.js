import s from './MobileTable.module.css';
import players from '../players';

export default function MobileTable({
  id,
  name,
  games,
  wins,
  loses,
  goalsPerGame,
}) {
  return (
    <li
      key={id}
      className={name !== players[0].name ? s.listPlayerItem : s.firstItemName}
    >
      <p className={name === players[0].name && s.firstNameCrown}>{name}</p>
      <ul className={s.playerInfoList}>
        <li className={s.listPlayerInfoItem}>
          <span>GAMES</span>
          <span>{games}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span>WINS</span>
          <span>{wins}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span>LOSES</span>
          <span>{loses}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span>GPG</span>
          <span>{games === 0 ? 0 : goalsPerGame}</span>
        </li>
      </ul>
    </li>
  );
}
