import '../assets/css/main-container.css'

import NPCImage from "../components/npc-image"
import NPCLike from '../components/NPCLike'
import NPCCollapse from "../components/npc-collapse"
import NPCCaracteristique from "../components/npc-caracteristique"
import NPCStatistique from '../components/npc-statistique'
import NPCControl from "../components/npc-control"

function NPCView () {

    return (
        <div className="main-container">
        <NPCImage />
        <NPCLike />
        <NPCCaracteristique />
        <NPCStatistique />
        <NPCCollapse />
        <NPCControl />
        </div>
    )
}

export default NPCView