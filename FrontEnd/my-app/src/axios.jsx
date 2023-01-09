import axios from 'axios'

export const fetchData = async () => {
  const response = await axios.get('http://localhost:3000/api/npc');
  const data = response.data;
  return data
};

export const fetchUsers = async () => {
  const response = await axios.get('http://localhost:3000/api/auth');
  const data = response.data;
  return data
};
