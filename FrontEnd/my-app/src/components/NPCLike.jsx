import { useParams } from "react-router-dom"
import '../assets/css/caracteristique.css'
import { useState, useEffect } from "react"
import axios from "axios"

async function fetchData(id) {
  const response = await axios.get(`http://localhost:3000/api/npc/${id}`);
  return response;
}

function NPCLike() {
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
        <h2>Nombre de likes : {data.likes}</h2>
      </div>
        <h3>Liker ce PNJ?</h3>
        <button className="submit-button">Je like !</button>
        </div>
    )
  
}

export default NPCLike