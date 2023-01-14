import { useState, useEffect } from 'react';
import { fetchUsers } from '../axios';
import { fetchData } from '../axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function UserView(props) {
    let { id } = useParams();
  const [user, setUser] = useState({});
  const [NPCs, setNPCs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      const allUsers = await fetchUsers();
      const currentUser = allUsers.find(user => user._id === id);
      setUser(currentUser);
      const allNPC = await fetchData()
      const filteredNPCs = allNPC.filter(npc => npc.author === id)
      setNPCs(filteredNPCs);
      setIsLoading(false);
    }
    fetch();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='user-container'>
      <h2> Voici les créations de {user.pseudo}:</h2>
      <ul className="card-container">
      {NPCs.map(e => 
         <Link to={'/NPC/'+e._id} key={e._id} >
         <li key={e._id} className="card"  style={{ backgroundImage: `url(${e.picture})`}}>
             <div className='card-txt'><h3 key={e.name}>{e.name}</h3></div>
         </li>
         </Link>
        )}
        </ul>
    </div>
  )
}

export default UserView