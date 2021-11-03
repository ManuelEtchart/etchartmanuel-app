import './componentsCSS/Header-NavBar.css'
import CartWidget from "./CartWidget"

function NavBar () {

    

    return(
        <ul>
			<li className="li"><a className="a" href="index.html">Inicio</a></li>
			<li className="li"><a className="a" href="productos.html">Productos</a></li>
			<li className="li"><a className="a" href="promociones.html">Promos</a></li>
			<li className="li"><a className="a" href="nosotros.html">Nosotros</a></li>
			<li className="li"><a className="a" href="contacto.html">Contacto</a></li>
			<CartWidget />			    
		</ul>
    )
}

export default NavBar