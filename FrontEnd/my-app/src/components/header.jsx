
import '../assets/css/header.css'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-npc.png"

function Header() {

  return (
    <div className="header-container">
      <div className='header-title'>
        <h1>NPC Gallery</h1>
      </div>
      <div className='header-logo'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <div className='header-navigation'>
        <Link to='/createNPC'><h3>Creer son PNJ  </h3></Link>
        <Link to='/'><h3>Acceuil</h3></Link>
      </div>
    </div>
  )
}

export default Header