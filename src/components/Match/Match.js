import s from './Match.module.css';
import players from '../players';
import Table from '../Table/Table';
import MobileTable from '../Table/MobileTable';
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

  players.sort((a, b) => b.goalsScored / b.games - a.goalsScored / a.games);

  const btnSubmit = event => {
    event.preventDefault();

    if (users.nameOne === users.nameTwo) {
      alert('Ти помилився з іменами, братішка');
    }
    players.map(player => {
      if (player.name === users.nameOne) {
        player.games += 1;
        player.goalsScored += Number(users.goalsOne);
        player.goalsMissed += Number(users.goalsTwo);
        if (users.goalsOne > users.goalsTwo) {
          player.wins += 1;
          player.lastGames.push(1);
          player.lastGames.shift();
        } else {
          player.loses += 1;
          player.lastGames.push(0);
          player.lastGames.shift();
        }
      }
      if (player.name === users.nameTwo) {
        player.games += 1;
        player.goalsScored += Number(users.goalsTwo);
        player.goalsMissed += Number(users.goalsOne);
        if (users.goalsTwo > users.goalsOne) {
          player.wins += 1;
          player.lastGames.push(1);
          player.lastGames.shift();
        } else {
          player.loses += 1;
          player.lastGames.push(0);
          player.lastGames.shift();
        }
      }
      return player;
    });

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
            CONFIRM GAME
          </button>
        </form>
        <div className={s.mainTextContainer}>
          <h1 className={s.overTableText}>FIRST CHAMPIONSHIP EVER</h1>
          <img className={s.afterTextImg} alt="sticks" />
        </div>
      </div>
      <div className={s.listContainer}>
        <table className={s.list}>
          <tbody className={s.tableBody}>
            <tr>
              <th className={s.topTableItem}>Name</th>
              <th className={s.topTableItem}>Last five</th>
              <th className={s.topTableItem}>Games</th>
              <th className={s.topTableItem}>Win</th>
              <th className={s.topTableItem}>Lose</th>
              <th className={s.topTableItem}>GF</th>
              <th className={s.topTableItem}>GA</th>
              <th className={s.topTableItem}>GPG</th>
            </tr>
            {players.map(
              ({
                id,
                name,
                games,
                wins,
                loses,
                goalsScored,
                goalsMissed,
                lastGames,
              }) => {
                const goalsPerGame = (goalsScored / games).toFixed(2);
                return (
                  <Table
                    key={id}
                    name={name}
                    games={games}
                    wins={wins}
                    loses={loses}
                    goalsScored={goalsScored}
                    goalsMissed={goalsMissed}
                    goalsPerGame={goalsPerGame}
                    lastGames={lastGames}
                  />
                );
              }
            )}
          </tbody>
        </table>{' '}
        <img className={s.warsaw} />
      </div>
      <div className={s.mobileTable}>
        <ul className={s.mobileList}>
          {players.map(
            ({ id, name, games, wins, loses, goalsScored, lastGames }) => {
              const goalsPerGame = (goalsScored / games).toFixed(2);
              return (
                <MobileTable
                  key={id}
                  name={name}
                  games={games}
                  wins={wins}
                  loses={loses}
                  goalsPerGame={goalsPerGame}
                  lastGames={lastGames}
                />
              );
            }
          )}
          <p className={s.warsawMobile}></p>
        </ul>
      </div>{' '}
    </div>
  );
}

export default Match;
