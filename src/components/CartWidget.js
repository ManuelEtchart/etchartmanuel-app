import cartIcon from '../assets/cartIcon.png';

const imgCart = {height: "60px", width: "60px"}

const CartWidget = () => {
    return(
        <img src={cartIcon} alt="CartIcon" style={imgCart}/>
    )
}

export default CartWidget
