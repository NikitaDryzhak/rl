import s from './Match.module.css';
import players from '../players';
import Table from '../Table/Table';
import { useState } from 'react';
function Match() {
  const [users, setUsers] = useState({
    nameOne: '',
    goalsOne: '',
    nameTwo: '',
    goalsTwo: '',
  });
  const handleChangeOne = e => {
    setUsers({ ...users, [e.currentTarget.name]: e.currentTarget.value });
  };

  const btnSubmit = event => {
    event.preventDefault();

    if (users.nameOne === users.nameTwo) {
      alert('Ти помилився з іменами, братішка');
    }
    const a = players.map(player => {
      if (player.name === users.nameOne) {
        player.games += 1;
        player.goalsScored += Number(users.goalsOne);
        player.goalsMissed += Number(users.goalsTwo);
        if (users.goalsOne > users.goalsTwo) {
          player.wins += 1;
        } else player.loses += 1;
      }
      if (player.name === users.nameTwo) {
        player.games += 1;
        player.goalsScored += Number(users.goalsTwo);
        player.goalsMissed += Number(users.goalsOne);
        if (users.goalsTwo > users.goalsOne) {
          player.wins += 1;
        } else player.loses += 1;
      }
      return player;
    });
    console.log(a);

    setUsers({ nameOne: '', goalsOne: '', nameTwo: '', goalsTwo: '' });
  };

  return (
    <div>
      <div className={s.mainPage}>
        <h1 className={s.welcomeText}>WELCOME TO THE RETARDS LEAGUE</h1>
        <h2 className={s.infoText}>PLEASE INSERT LAST GAME SCORE</h2>
        <form className={s.form} autoComplete="off" onSubmit={btnSubmit}>
          <label className={s.label}>
            {' '}
            <div className={s.result}>
              {' '}
              <select
                className={s.inputSelect}
                onChange={handleChangeOne}
                name="nameOne"
                value={users.nameOne}
              >
                <option value="" disabled>
                  ADD PLAYER 1
                </option>
                <option value="BODYAO">BODYAO</option>
                <option value="IVANYAO">IVANYAO</option>
                <option value="EUGENYAO">EUGENYAO</option>
                <option value="MIKHYAO">MIKHYAO</option>
                <option value="TARASYAO">TARASYAO</option>
                <option value="NIKITYAO">NIKITYAO</option>
              </select>
              <input
                onChange={handleChangeOne}
                className={s.input}
                type="number"
                name="goalsOne"
                required
                placeholder="ADD GOALS NUMBER"
                min="0"
                value={users.goalsOne}
              />
            </div>
            <div className={s.result}>
              {' '}
              <select
                className={s.inputSelect}
                onChange={handleChangeOne}
                name="nameTwo"
                value={users.nameTwo}
              >
                {' '}
                <option value="" disabled>
                  ADD PLAYER 2
                </option>
                <option value="MIKHYAO">MIKHYAO</option>
                <option value="IVANYAO">IVANYAO</option>
                <option value="BODYAO">BODYAO</option>
                <option value="EUGENYAO">EUGENYAO</option>
                <option value="TARASYAO">TARASYAO</option>
                <option value="NIKITYAO">NIKITYAO</option>
              </select>
              <input
                onChange={handleChangeOne}
                className={s.input}
                type="number"
                name="goalsTwo"
                required
                placeholder="ADD GOALS NUMBER"
                min="0"
                value={users.goalsTwo}
              />
            </div>
          </label>
          <button className={s.btnSubmit} type="submit">
            Add to table
          </button>
        </form>

        <h1 className={s.overTableText}>FIRST CHAMPIONSHIP EVER</h1>
      </div>

      <table className={s.list}>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Games</th>
            <th>Win</th>
            <th>Lose</th>
            <th>GF</th>
            <th>GA</th>
            <th>GPG</th>
          </tr>
          {players.map(
            ({ id, name, games, wins, loses, goalsScored, goalsMissed }) => (
              <Table
                key={id}
                name={name}
                games={games}
                wins={wins}
                loses={loses}
                goalsScored={goalsScored}
                goalsMissed={goalsMissed}
              />
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Match;
