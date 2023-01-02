import NPC from "../assets/database//NPC.json"
import { useParams } from "react-router-dom"


function NPCImage() {

    const { id } = useParams()
    let uniteNPC = NPC.find(i => i.id === id)

    return (
        <>
  <div key={uniteNPC.id} className="card"  style={{ backgroundImage: `url(${uniteNPC.picture})`}}></div>
        </>
    )
}

export default NPCImage