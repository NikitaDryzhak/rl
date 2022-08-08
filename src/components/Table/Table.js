import s from './Table.module.css';

export default function Table({
  id,
  name,
  games,
  wins,
  loses,
  goalsScored,
  goalsMissed,
}) {
  const goalsPerGame = (goalsScored / games).toFixed(2);

  return (
    <>
      <tr key={id}>
        <td className={s.table && s.name}>{name}</td>
        <td className={s.table && s.tableItem}>{games}</td>
        <td className={s.table && s.tableItem}>{wins}</td>
        <td className={s.table && s.tableItem}>{loses}</td>
        <td className={s.table && s.tableItem}>{goalsScored}</td>
        <td className={s.table && s.tableItem}>{goalsMissed}</td>
        <td className={s.table && s.tableItem}>
          {games == 0 ? 0 : goalsPerGame}
        </td>
      </tr>
    </>
  );
}
