import NPC from "../assets/database//NPC.json"
import { useParams } from "react-router-dom"
import circleFull from "../assets/img/empty-circle.png"
import circleEmpty from "../assets/img/green-circle.png"

import "../assets/css/statistiques.css"


function NPCStatistique() {
    const { id } = useParams()
    let uniteNPC = NPC.find(i => i.id === id)
    const keys = Object.keys(uniteNPC.statistiques);
    const values = Object.values(uniteNPC.statistiques);

    return (
        <div className='statistique-container'>
            <div className="statistique-title"><h2>Statistiques</h2></div>
            {keys.map((stat, index) => (
                <span key={stat} className="stat-unite">
                    <h3>{stat}:</h3>
                    {[...Array(values[index])].map((e, i) => (
                        <img src={circleEmpty} key={i} alt='circle' className="circle-unite" />
                    ))}
                    {[...Array(10 - values[index])].map((e, i) => (
                        <img src={circleFull} key={i} alt='circle' className="circle-unite" />
                    ))}
                </span>
            ))}
        </div>
    )
}
export default NPCStatistique
