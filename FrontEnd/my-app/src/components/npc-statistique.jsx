import NPC from "../assets/database//NPC.json"
import { useParams } from "react-router-dom"
import circleFull from "../assets/img/empty-circle.png"
import circleEmpty from "../assets/img/green-circle.png"
import { useState, useEffect } from "react"
import axios from "axios"
import "../assets/css/statistiques.css"

async function fetchData(id) {
    const response = await axios.get(`http://localhost:3000/api/npc/${id}`);
    return response;
  }

function NPCStatistique() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetch = async () => {
      const response = await fetchData(id);
      if (response.status === 200) {
        setData(response.data);
        console.log(response.data.likes)
      }
    };
    fetch();
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const keys = Object.keys(data.statistiques);
  return (
    <div className="statistique-container">
      <div className="statistique-title">
        <h2>Statistiques</h2>
      </div>
      {keys.map((stat) => (
        <span key={stat} className="stat-unite">
          <h3>{stat}:</h3>
          {[...Array(data.statistiques[stat])].map((e, i) => (
            <img src={circleEmpty} key={i} alt="circle" className="circle-unite" />
          ))}
          {[...Array(10 - data.statistiques[stat])].map((e, i) => (
            <img src={circleFull} key={i} alt="circle" className="circle-unite" />
          ))}
        </span>
      ))}
    </div>
  );
}

export default NPCStatistique;