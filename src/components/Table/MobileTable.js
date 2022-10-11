import s from './MobileTable.module.css';
import PropTypes from 'prop-types';

export default function MobileTable({
  _id,
  name,
  allPlayers,
  games,
  wins,
  goalsScored,
  goalsPerGame,
  lastGames,
  photo,
}) {
  return (
    <li
      key={_id}
      className={
        name !== allPlayers[0].name ? s.listPlayerItem : s.firstItemName
      }
    >
      {' '}
      <img src={photo} alt="player" className={s.photo} />
      <p className={name === allPlayers[0].name ? s.firstNameCrown : undefined}>
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
          <span className={s.listSpan}>GOALS</span>
          <span>{goalsScored}</span>
        </li>
        <li className={s.listPlayerInfoItem}>
          <span className={s.listSpan}>GPG</span>
          <span>{games === 0 ? 0 : goalsPerGame}</span>
        </li>
      </ul>
      <ul className={s.lastGamesList}>
        <li className={Number(lastGames[0]) === 1 ? s.win : s.lose}>
          {lastGames[0]}
        </li>
        <li className={Number(lastGames[1]) === 1 ? s.win : s.lose}>
          {lastGames[1]}
        </li>
        <li className={Number(lastGames[2]) === 1 ? s.win : s.lose}>
          {lastGames[2]}
        </li>
        <li className={Number(lastGames[3]) === 1 ? s.win : s.lose}>
          {lastGames[3]}
        </li>
        <li className={Number(lastGames[4]) === 1 ? s.win : s.lose}>
          {lastGames[4]}
        </li>
      </ul>
    </li>
  );
}

MobileTable.propTypes = {
  name: PropTypes.string.isRequired,
  games: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  goalsScored: PropTypes.number.isRequired,
  goalsPerGame: PropTypes.string.isRequired,
};
