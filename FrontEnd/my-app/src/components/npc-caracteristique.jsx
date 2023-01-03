import NPC from "../assets/database/NPC.json"
import { useParams } from "react-router-dom"
import '../assets/css/caracteristique.css'

function NPCCaracteristique() {

    const { id } = useParams()
    let uniteNPC = NPC.find(i => i.id === id)

    return (
        
            <div className="caracteristique-container">
                <div className="caracteristique-title"><h2>Caracteristiques</h2></div>
                <h3>Nom: {uniteNPC.name}</h3>
                <h3>Univers: {uniteNPC.univers}</h3>
                <h3>Race: {uniteNPC.race}</h3>
                <h3>Sexe: {uniteNPC.sexe}</h3>
                <h3>Age: {uniteNPC.age} ans</h3>
                <h3>Poids: {uniteNPC.poids} KG</h3>
                <h3>Taille: {uniteNPC.taille}</h3>
        </div>
    )
}

export default NPCCaracteristique