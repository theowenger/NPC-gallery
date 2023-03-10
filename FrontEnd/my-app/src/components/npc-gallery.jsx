
import { Link } from "react-router-dom"
import "../assets/css/gallery.css"
import {fetchData} from "../axios";
import { useState } from "react";
import { useEffect } from "react";
import SortNPC from "../components/sort-npc";
import SearchNPC from "./search-npc";
  

function NPCGallery () {

    const [sortedData, setSortedData] = useState([]);
  
    useEffect(() => {
      const fetch = async () => {
        const data = await fetchData();
 
        setSortedData(data.sort((a, b) => b.creationDate - a.creationDate))
      };
      fetch();
    }, [])

    


    return (
        <>
        <SearchNPC items={sortedData} setSortedItems={setSortedData} />
        <SortNPC items={sortedData} setSortedItems={setSortedData} />
        <div className="gallery">
            <ul className="card-container">
                {sortedData.map((e) => (
            <Link to={'/NPC/' + e._id} key={e._id}>
                    <li key={e._id} className="card"  style={{ backgroundImage: `url(${e.picture})`}}>
                        <div className='card-txt'><h3 key={e.name}>{e.name}</h3></div>
                    </li>
                    </Link>
                ))}
            </ul>

        </div>
        </>
    )
}


export default NPCGallery