import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../context/CartContext"
import "./componentsCSS/Cart.css"

const Cart = () => {
    const {listaCarrito, precioTotal, vaciarCarrito, eliminarProducto, cantAcumulada} = useContext(CartContext)

    if(cantAcumulada === 0){
        return(
            <>
                <p>Carrito Vacio</p>
                <Link to="/"><button className="stlButton">INICIO</button></Link>
            </>
        )
    }

    return(
            <>
                {listaCarrito.map(prod => <div key={prod.id}>
                                                <p>{prod.title}</p>
                                                <p>Cant: {prod.cantidad}</p>
                                                <p>${prod.precio * prod.cantidad}</p>
                                                <button onClick={()=>eliminarProducto(prod)} className="stlButton">Eliminar Producto</button> 
                                          </div>     
                
                )}
                <button onClick={()=>vaciarCarrito()} className="stlButton">Vaciar Carrito</button>
                <p>Precio Total: ${precioTotal}</p>
            </>
    )
}

export default Cart