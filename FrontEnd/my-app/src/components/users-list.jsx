import {fetchUsers} from "../axios";
import { useState, useEffect } from "react";

function UsersList () {

    const [data, setData] = useState([])
  
    useEffect(() => {
      const fetch = async () => {
        const users = await fetchUsers();
        setData(users);

      };
      fetch();
    }, [])


    return (
        <div>
            <h2>Liste des utilisateurs:</h2>
            {data.map((e) => (
                <div key={e._id}>
                <h3 key={e._id}>Pseudo:{e.pseudo}</h3>
                    
                </div>
            ))}
        </div>
    )
}

export default UsersList