
import '../assets/css/header.css'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-npc-factory.png"
import { useState, useEffect } from 'react'
import axios from 'axios'

function Header() {
  const [currentUser, setCurrentUser] = useState(null);


  function disconected() {
    console.log("disconected")
    localStorage.clear();
    window.location.reload()
  }
  useEffect( () => {

    async function start() {

      const token = localStorage.getItem('JWT')
      const userId = localStorage.getItem('userId')
      const response = await axios.get(`http://localhost:3000/api/auth/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });
      setCurrentUser(response.data);
    }
    start()
  }, [])

  const token = localStorage.getItem('JWT');

  // Si aucun jeton n'est présent, cela signifie que l'utilisateur n'est pas connecté
  if (!token) {
    return (
      <div className="header-container">
        <div className='header-navigation'>
          <Link to='/createNPC'><h3>Creer PNJ</h3></Link>
          <Link to='/Users'><h3>Utilisateurs</h3></Link>
        </div>
        <div className='header-logo'>
          <Link to='/index'><img src={logo} alt="logo" /></Link>
        </div>
        <div className='header-navigation'>
          <Link to='/signup'><h3>S'inscrire</h3></Link>
          <Link to='/login'><h3>Se connecter</h3></Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="header-container">
        <div className='header-navigation'>
          <Link to='/createNPC'><h3>Creer PNJ</h3></Link>
          <Link to='/Users'><h3>Utilisateurs</h3></Link>
        </div>
        <div className='header-logo'>
          <Link to='/index'><img src={logo} alt="logo" /></Link>
        </div>
        <div className='header-navigation'>
          {currentUser && <Link to={`/User/${currentUser._id}`}>
            <h3>Bonjour {currentUser.pseudo}</h3></Link>}
            <Link to='/index'><h3 onClick={disconected}>Se deconnecter</h3></Link>
        </div>
      </div>

    )
  }
}

export default Header