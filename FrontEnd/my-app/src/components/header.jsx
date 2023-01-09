
import '../assets/css/header.css'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-npc.png"

function Header() {

  return (
    <div className="header-container">
      <div className='header-navigation'>
        <Link to='/createNPC'><h3>Creer PNJ</h3></Link>
        <Link to='/Users'><h3>Utilisateurs</h3></Link>
      </div>
      <div className='header-logo'>
        <Link to='/'><img src={logo} alt="logo" /></Link>
      </div>
      <div className='header-navigation'>
        <Link to='/signup'><h3>S'inscrire</h3></Link>
        <Link to='/login'><h3>Se connecter</h3></Link>
      </div>
    </div>
  )
}

export default Header