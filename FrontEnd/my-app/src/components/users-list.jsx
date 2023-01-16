import {fetchUsers} from "../axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/user-list.css"


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
        <div className="user-container">
            <h2>Liste des utilisateurs:</h2>
            <div className="user-list-container">
            {data.map((e) => (
               <Link to={'/User/'+e._id} key={e._id}> <h3 key={e._id} className="user-list">{e.pseudo}</h3></Link>
                    
               ))}
               </div>
        </div>
    )
}

export default UsersList