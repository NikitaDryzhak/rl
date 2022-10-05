import s from './MobileTable.module.css';
import players from '../players';
import PropTypes from 'prop-types';

export default function MobileTable({
  id,
  name,
  games,
  wins,
  loses,
  goalsPerGame,
  lastGames,
  photo
}) {
  return (
    <li
      key={id}
      className={name !== players[0].name ? s.listPlayerItem : s.firstItemName}
    > <img src={photo} alt="player" className={s.photo}/>
      <p className={name === players[0].name ? s.firstNameCrown : undefined}>
        {name}
      </p>
      <ul className={s.playerInfoList}>
        <li className={s.listPlayerInfoItem}>
          <span className={s.listSpan}>GAMES</span>
          <span>{games}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span className={s.listSpan}>WINS</span>
          <span>{wins}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span className={s.listSpan}>LOSES</span>
          <span>{loses}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span className={s.listSpan}>GPG</span>
          <span>{games === 0 ? 0 : goalsPerGame}</span>
        </li>
      </ul>

      <ul className={s.lastGamesList}>
        <li className={lastGames[0] === 1 ? s.win : s.lose}>{lastGames[0]}</li>
        <li className={lastGames[1] === 1 ? s.win : s.lose}>{lastGames[1]}</li>
        <li className={lastGames[2] === 1 ? s.win : s.lose}>{lastGames[2]}</li>
        <li className={lastGames[3] === 1 ? s.win : s.lose}>{lastGames[3]}</li>
        <li className={lastGames[4] === 1 ? s.win : s.lose}>{lastGames[4]}</li>
      </ul>
    </li>
  );
}

MobileTable.propTypes = {
  name: PropTypes.string.isRequired,
  games: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  loses: PropTypes.number.isRequired,
  goalsPerGame: PropTypes.string.isRequired,
};
