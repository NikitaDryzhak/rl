import s from './Table.module.css';
import PropTypes from 'prop-types';

export default function Table({
  _id,
  name,
  allPlayers,
  games,
  wins,
  loses,
  goalsScored,
  goalsMissed,
  goalsPerGame,
  lastGames,
  photo,
}) {
  return (
    <>
      <tr key={_id}>
        <td className={s.namePlayerTd}>
          <span
            className={
              name !== allPlayers[0].name ? s.tableItemName : s.firstItemName
            }
          >
            {name}
          </span>
          <img src={photo} alt="player" className={s.photo} />
        </td>
        <td className={s.lastGamesListBorder}>
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
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {games}
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {wins}
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {loses}
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {goalsScored}
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {goalsMissed}
        </td>
        <td className={name !== allPlayers[0].name ? s.tableItem : s.firstItem}>
          {goalsPerGame}
        </td>
      </tr>
    </>
  );
}

Table.propTypes = {
  name: PropTypes.string.isRequired,
  games: PropTypes.number.isRequired,
  wins: PropTypes.number.isRequired,
  loses: PropTypes.number.isRequired,
  goalsScored: PropTypes.number.isRequired,
  goalsMissed: PropTypes.number.isRequired,
  goalsPerGame: PropTypes.string.isRequired,
};
