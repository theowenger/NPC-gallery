import '../assets/css/footer.css'
import { Link } from 'react-router-dom'

function Footer() {

    return (
        <>
            <div className='footer-container'>Footer
                <Link to="/about"><h3>A Propos</h3></Link>
            </div>
        </>
    )
}

export default Footer