import NPC from "../assets/database//NPC.json"
import { useParams } from "react-router-dom"
import axios from "axios";
import { useEffect, useState } from "react";

async function fetchData(id) {
    const response = await axios.get(`http://localhost:3000/api/npc/${id}`);
    return response;
  }

function NPCImage() {

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
        <div className="card-container">
  <div key={data.id} className="card"  style={{ backgroundImage: `url(${data.picture})`}}></div>
        </div>
    )
}

export default NPCImage