import { useParams } from "react-router-dom"
import '../assets/css/caracteristique.css'
import { useState, useEffect } from "react"
import axios from "axios"

async function fetchData(id) {
  const response = await axios.get(`http://localhost:3000/api/npc/${id}`);
  return response;
}

function NPCCaracteristique() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData(id);
      if (response.status === 200) {
        setData(response.data);
      }
    };
    fetch();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="caracteristique-container">
      <div className="caracteristique-title">
        <h2>Caracteristiques</h2>
      </div>
      <h3>Nom: {data.name}</h3>
      <h3>Univers: {data.univers}</h3>
      <h3>Race: {data.race}</h3>
      <h3>Sexe: {data.sexe}</h3>
      <h3>Age: {data.age} ans</h3>
      <h3>Poids: {data.poids} KG</h3>
      <h3>Taille: {data.taille}</h3>
    </div>
  );
}

export default NPCCaracteristique;