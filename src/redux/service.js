import axios from 'axios'

 async function getPlayers() {
    const response = await axios.get('https://rocket-league-retards.herokuapp.com/');
    return response;
  }

  export default getPlayers;