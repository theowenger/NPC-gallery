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
    const token = localStorage.getItem('JWT');
    const userId = localStorage.getItem('userId')

    useEffect(() => {
        const fetch = async () => {
            const response = await fetchData(id);
            if (response.status === 200) {
                setData(response.data);
            }
        };
        fetch();
    }, [id]);

    function likedPnj() {
        axios.post(`http://localhost:3000/api/npc/like/${id}`, {}, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        }).then(response => {
            setData(response.data);
        }).catch(error => {
            console.error(error);
        });
    }

    if (!data) {
        return <div>Loading...</div>;
    }
    return (
        <div className="caracteristique-container">
            <div className="caracteristique-title">
                <h2>Nombre de likes : {data.likes}</h2>
            </div>
            <h3>
                {data.likedBy.includes(userId) ? "Disliker" : "Liker ce PNJ?"}
            </h3>
            <button className="submit-button" onClick={likedPnj}>
                {data.likedBy.includes(userId) ? "Je dislike !" : "Je like !"}
                </button>
        </div>
    )

}

export default NPCLike