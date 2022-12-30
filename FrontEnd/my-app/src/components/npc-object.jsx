import NPC from "../assets/database//NPC.json"
import { useParams } from "react-router-dom"


function NPCObject() {

    const { id } = useParams()
    let uniteNPC = NPC.find(i => i.id === id)

    console.log(uniteNPC)
    return (
        <>
            <div>
                <h3>{uniteNPC.name}</h3>
                <h3>{uniteNPC.sexe}</h3>
                <h3>{uniteNPC.age}</h3>
                <h3>{uniteNPC.poids} KG</h3>
                <h3>{uniteNPC.taille}</h3>
            </div>

            <div>
            <h3>{uniteNPC.background}</h3>
            <h3>{uniteNPC.description}</h3>
            </div>
        </>
    )
}

export default NPCObject