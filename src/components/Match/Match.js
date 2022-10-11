import s from './Match.module.css';
import Table from '../Table/Table';
import MobileTable from '../Table/MobileTable';
import { useEffect, useState } from 'react';
import getPlayers from '../../redux/service';

import { usePatchPlayerMutation } from '../../redux/sliceAPI';

function Match() {
  const [changePlayerStat] = usePatchPlayerMutation();

  const [users, setUsers] = useState({
    nameOne: '',
    goalsOne: '',
    nameTwo: '',
    goalsTwo: '',
  });

  const [allPlayers, setAllPlayers] = useState([]);
  allPlayers.sort(
    (a, b) =>
      b.goalsScored / `${b.games !== 0 ? b.games : 1}` -
      a.goalsScored / `${a.games !== 0 ? a.games : 1}`
  );

  const [changesFirstPlayer, setChangesFirstPlayer] = useState({
    _id: '',
    games: 0,
    wins: 0,
    loses: 0,
    goalsScored: 0,
    goalsMissed: 0,
    lastGames: [],
  });

  const [changesSecondPlayer, setChangesSecondPlayer] = useState({
    _id: '',
    games: 0,
    wins: 0,
    loses: 0,
    goalsScored: 0,
    goalsMissed: 0,
    lastGames: [],
  });

  useEffect(() => {
    getPlayers()
      .then(({ data }) => {
        setAllPlayers([...data]);
      })
      .catch(error => {
        console.log(error);
      });
    if (changesFirstPlayer._id !== '') {
      getPlayers()
        .then(({ data }) => {
          setAllPlayers([...data]);
        })
        .catch(error => {
          console.log(error);
        });
      changePlayerStat({ id: changesFirstPlayer._id, ...changesFirstPlayer });
      changePlayerStat({ id: changesSecondPlayer._id, ...changesSecondPlayer });
      setChangesFirstPlayer({
        _id: '',
        games: 0,
        wins: 0,
        loses: 0,
        goalsScored: 0,
        goalsMissed: 0,
        lastGames: [],
      });
      setChangesSecondPlayer({
        _id: '',
        games: 0,
        wins: 0,
        loses: 0,
        goalsScored: 0,
        goalsMissed: 0,
        lastGames: [],
      });
    }
  }, [changesFirstPlayer, changesSecondPlayer]);

  const handleChangeOne = e => {
    setUsers({ ...users, [e.currentTarget.name]: e.currentTarget.value });
  };

  const btnSubmit = event => {
    event.preventDefault();

    allPlayers.map(player => {
      if (player.name === users.nameOne && users.goalsOne > users.goalsTwo) {
        const newCountGames = player.games + 1;
        const newCountGoalsScoared =
          player.goalsScored + Number(users.goalsOne);
        const newCountGoalsMissed = player.goalsMissed + Number(users.goalsTwo);
        const newCountWins = player.wins + 1;
        const newCountWinsArray = [
          player.lastGames[1],
          player.lastGames[2],
          player.lastGames[3],
          player.lastGames[4],
          String(1),
        ];

        setChangesFirstPlayer({
          ...changesFirstPlayer,
          _id: player._id,
          games: newCountGames,
          goalsScored: newCountGoalsScoared,
          goalsMissed: newCountGoalsMissed,
          wins: newCountWins,
          lastGames: newCountWinsArray,
        });
      } else if (
        player.name === users.nameOne &&
        users.goalsOne < users.goalsTwo
      ) {
        const newCountGames = player.games + 1;
        const newCountGoalsScoared =
          player.goalsScored + Number(users.goalsOne);
        const newCountGoalsMissed = player.goalsMissed + Number(users.goalsTwo);
        const newCountLoses = player.loses + 1;
        const newCountWinsArray = [
          player.lastGames[1],
          player.lastGames[2],
          player.lastGames[3],
          player.lastGames[4],
          String(0),
        ];
        setChangesFirstPlayer({
          ...changesFirstPlayer,
          _id: player._id,
          games: newCountGames,
          goalsScored: newCountGoalsScoared,
          goalsMissed: newCountGoalsMissed,
          loses: newCountLoses,
          lastGames: newCountWinsArray,
        });
      }
      if (player.name === users.nameTwo && users.goalsOne < users.goalsTwo) {
        const newCountGames = player.games + 1;
        const newCountGoalsScoared =
          player.goalsScored + Number(users.goalsTwo);
        const newCountGoalsMissed = player.goalsMissed + Number(users.goalsOne);
        const newCountWins = player.wins + 1;
        const newCountWinsArray = [
          player.lastGames[1],
          player.lastGames[2],
          player.lastGames[3],
          player.lastGames[4],
          String(1),
        ];
        setChangesSecondPlayer({
          ...changesSecondPlayer,
          _id: player._id,
          games: newCountGames,
          goalsScored: newCountGoalsScoared,
          goalsMissed: newCountGoalsMissed,
          wins: newCountWins,
          lastGames: newCountWinsArray,
        });
      } else if (
        player.name === users.nameTwo &&
        users.goalsOne > users.goalsTwo
      ) {
        const newCountGames = player.games + 1;
        const newCountGoalsScoared =
          player.goalsScored + Number(users.goalsTwo);
        const newCountGoalsMissed = player.goalsMissed + Number(users.goalsOne);
        const newCountLoses = player.loses + 1;
        const newCountWinsArray = [
          player.lastGames[1],
          player.lastGames[2],
          player.lastGames[3],
          player.lastGames[4],
          String(0),
        ];
        setChangesSecondPlayer({
          ...changesSecondPlayer,
          _id: player._id,
          games: newCountGames,
          goalsScored: newCountGoalsScoared,
          goalsMissed: newCountGoalsMissed,
          loses: newCountLoses,
          lastGames: newCountWinsArray,
        });
      }

      setUsers({
        nameOne: '',
        goalsOne: '',
        nameTwo: '',
        goalsTwo: '',
      });

      return [changesFirstPlayer, changesSecondPlayer];
    });
  };

  return (
    <div>
      <div className={s.mainPage}>
        <h1 className={s.welcomeText}>OFFICIAL GAME SCORE PAGE</h1>
        <h2 className={s.infoText}>INSERT LAST MATCH INFO</h2>

        <form className={s.form} autoComplete="off" onSubmit={btnSubmit}>
          <label className={s.label}>
            {' '}
            <div className={s.result}>
              {' '}
              <p className={s.optionText}>PLAYER 1</p>
              <select
                className={s.inputSelect}
                onChange={handleChangeOne}
                name="nameOne"
                value={users.nameOne}
              >
                {' '}
                <option value="" disabled>
                  NAME
                </option>
                <option value="BODYAO">BODYAO</option>
                <option value="IVANYAO">IVANYAO</option>
                <option value="EUGENYAO">EUGENYAO</option>
                <option value="MIKHYAO">MIKHYAO</option>
                <option value="TARASYAO">TARASYAO</option>
                <option value="NIKITYAO">NIKITYAO</option>
              </select>{' '}
              <p className={s.optionText}>ADD GOALS NUMBER</p>{' '}
              <input
                onChange={handleChangeOne}
                className={s.input}
                type="number"
                name="goalsOne"
                required
                placeholder="0"
                min="0"
                value={users.goalsOne}
              />
            </div>
            <div className={s.result}>
              {' '}
              <p className={s.optionText}>PLAYER 2</p>
              <select
                className={s.inputSelect}
                onChange={handleChangeOne}
                name="nameTwo"
                value={users.nameTwo}
              >
                <option value="" disabled>
                  NAME
                </option>
                <option value="MIKHYAO">MIKHYAO</option>
                <option value="IVANYAO">IVANYAO</option>
                <option value="BODYAO">BODYAO</option>
                <option value="EUGENYAO">EUGENYAO</option>
                <option value="TARASYAO">TARASYAO</option>
                <option value="NIKITYAO">NIKITYAO</option>
              </select>{' '}
              <p className={s.optionText}>ADD GOALS NUMBER</p>{' '}
              <input
                onChange={handleChangeOne}
                className={s.input}
                type="number"
                name="goalsTwo"
                required
                placeholder="0"
                min="0"
                value={users.goalsTwo}
              />
            </div>
          </label>
          <button
            className={s.btnSubmit}
            disabled={users.nameOne === users.nameTwo}
            type="submit"
          >
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
            {allPlayers.map(
              ({
                _id,
                name,
                games,
                wins,
                loses,
                goalsScored,
                goalsMissed,
                lastGames,
                photo,
              }) => {
                const goalsPerGame = (
                  Number(goalsScored) / Number(`${games !== 0 ? games : 1}`)
                ).toFixed(2);

                return (
                  <Table
                    key={_id}
                    allPlayers={allPlayers}
                    name={name}
                    games={games}
                    wins={wins}
                    loses={loses}
                    goalsScored={goalsScored}
                    goalsMissed={goalsMissed}
                    goalsPerGame={goalsPerGame}
                    lastGames={lastGames}
                    photo={photo}
                  />
                );
              }
            )}
          </tbody>
        </table>{' '}
        <img className={s.warsaw} alt="warsaw" />
      </div>
      <div className={s.mobileTable}>
        <ul className={s.mobileList}>
          {allPlayers.map(
            ({
              _id,
              name,
              games,
              wins,
              loses,
              goalsScored,
              lastGames,
              photo,
            }) => {
              const goalsPerGame = (goalsScored / games).toFixed(2);
              return (
                <MobileTable
                  key={_id}
                  allPlayers={allPlayers}
                  name={name}
                  games={games}
                  wins={wins}
                  loses={loses}
                  goalsPerGame={goalsPerGame}
                  lastGames={lastGames}
                  photo={photo}
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
