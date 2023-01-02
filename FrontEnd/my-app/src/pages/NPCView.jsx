import '../assets/css/main-container.css'

import NPCImage from "../components/npc-image"
import NPCCollapse from "../components/npc-collapse"
import NPCCaracteristique from "../components/npc-caracteristique"
import NPCStatistique from '../components/npc-statistique'

function NPCView () {

    return (
        <div className="main-container">
        <NPCImage />
        <NPCCaracteristique />
        <NPCStatistique />
        <NPCCollapse />
        </div>
    )
}

export default NPCView