import s from './Table.module.css';
import players from '../players';

export default function Table({
  id,
  name,
  games,
  wins,
  loses,
  goalsScored,
  goalsMissed,
  goalsPerGame,
}) {
  return (
    <>
      <tr key={id}>
        <td
          className={
            name !== players[0].name ? s.tableItemName : s.firstItemName
          }
        >
          {name}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {games}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {wins}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {loses}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {goalsScored}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {goalsMissed}
        </td>
        <td className={name !== players[0].name ? s.tableItem : s.firstItem}>
          {games === 0 ? 0 : goalsPerGame}
        </td>
      </tr>
    </>
  );
}
