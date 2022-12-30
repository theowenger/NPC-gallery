import NPC from "../assets/database/NPC.json"
import { Link } from "react-router-dom"
import "../assets/css/gallery.css"


console.log(NPC)

function NPCGallery () {

    return (
        <div className="gallery">
            <ul className="card-container">
                {NPC.map((e) => (
                    <Link to={'NPC/'+e.id} key={e.id} >
                    <li key={e.id} className="card"  style={{ backgroundImage: `url(${e.picture})`}}>
                        <div className='card-txt'><h3 key={e.name}>{e.name}</h3></div>
                    </li>
                    </Link>
                ))}
            </ul>

        </div>
    )
}

export default NPCGallery