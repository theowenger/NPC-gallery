import axios from 'axios'

async function fetchData() {
  const response = await axios.get('http://localhost:3000/api/npc');
  const data = response.data;
  console.log(data)
}

export default fetchData