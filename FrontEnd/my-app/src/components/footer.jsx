import '../assets/css/footer.css'
import { Link } from 'react-router-dom'
import logo from "../assets/img/logo-npc.png"
import react from "../assets/img/react.png"


function Footer() {

    return (
        <>
            <div className="footer-container">
                <div className='footer-logo'>
                    <Link to='/'><img src={logo} alt="logo" /></Link>
                </div>
                <div className='footer-navigation'>
                    <Link to='/'><h3>Acceuil</h3></Link>
                    <Link to='/createNPC'><h3>Creer son PNJ  </h3></Link>
                    <Link to="/about"><h3>A Propos</h3></Link>
                </div>
                <div className='footer-title'>
                    <h1>fait avec:</h1>
                    <img src={react} alt="react" />
                </div>
            </div>
        </>
    )
}

export default Footer