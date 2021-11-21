import cartIcon from '../assets/cartIcon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const imgCart = {height: "60px", width: "60px", marginTop: "20px"}

const CartWidget = () => {

    const {cantAcumulada} = useContext(CartContext)

    let stlCartWidget;

    cantAcumulada === 0 ? stlCartWidget = {display: "none"} : stlCartWidget = {display: "inline-block"}
    
    return(
        <div style={stlCartWidget}>
            <Link to="/carrito"><img src={cartIcon} alt="CartIcon" style={imgCart}/></Link>
            <p style={{color: "#e71d36", display: 'inline'}}>{cantAcumulada}</p>
        </div>
       
    )
}

export default CartWidget
