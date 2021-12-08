import cartIcon from '../assets/cartIcon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './componentsCSS/Header-NavBar.css'

const CartWidget = () => {

    const {cantAcumulada} = useContext(CartContext)

    let stlCartWidget;

    cantAcumulada === 0 ? stlCartWidget = {display: "none"} : stlCartWidget = {display: "inline-block"}
    
    return(
        <div style={stlCartWidget}>
            <Link to="/carrito"><img src={cartIcon} alt="CartIcon" className='imgCart'/></Link>
            <p style={{color: "#e71d36", display: 'inline'}}>{cantAcumulada}</p>
        </div>
    )
}

export default CartWidget