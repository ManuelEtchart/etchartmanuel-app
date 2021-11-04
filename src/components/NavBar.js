import { Link } from 'react-router-dom'
import './componentsCSS/Header-NavBar.css'

function NavBar () {

    

    return(
        <ul>
			<li className="li"><Link className="a" to="/">Inicio</Link></li>
			<li className="li"><Link className="a" to="/categoria/pizza">Pizzas</Link></li>
			<li className="li"><Link className="a" to="/categoria/empanada">Empanadas</Link></li>		    
		</ul>
    )
}

export default NavBar