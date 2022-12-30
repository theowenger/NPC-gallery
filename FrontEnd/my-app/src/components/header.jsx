import '../assets/css/header.css'
import { Link } from 'react-router-dom'

function Header () {

    return (
        <div className="header-container">
          <Link to='/createNPC'>Creer son PNJ</Link> 
          <Link to='/'>Acceuil</Link>  
        </div>
    )
}

export default Header