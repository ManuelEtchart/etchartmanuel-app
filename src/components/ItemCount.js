import { useState } from "react"
import { Link } from "react-router-dom"
import "./componentsCSS/ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    const [goCart, setGoCart] = useState("no")
    
    const sumaContador = () => {
        setCantidad(cantidad + 1)
    }

    const restaContador = () => {
        setCantidad(cantidad - 1)
    }

    let stlMsgStock;

    stock === 0 ? stlMsgStock = {display: "block", color: "#e71d36"} : stlMsgStock = {display: "none"};

    return(
        <div className="stlCount">
            <button className="stlButtonCount" onClick={restaContador} disabled={cantidad === initial || stock === 0}>-</button>
            <div>
                <div className="stlStock">{cantidad}</div>
                <div style={stlMsgStock}>Sin Stock</div>
                <div onClick={()=>{setGoCart("yes")}}>
                    {goCart === "no" ? <button className="stlButtonCount" onClick={() => {onAdd(cantidad)}} disabled={stock === 0}>Agregar al carrito</button> : <Link to="/cart"><button className="stlButtonCountGoCart">Ir al Carrito</button></Link>}
                </div>
            </div>
            <button className="stlButtonCount" onClick={sumaContador} disabled={cantidad === stock || stock === 0}>+</button>
        </div>
    )
}

export default ItemCount