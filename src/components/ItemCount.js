import { useState } from "react"
import "./componentsCSS/ItemCount.css"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    
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
                <div>
                    <div style={stlMsgStock}>Sin Stock</div>
                    <button className="stlButtonCount" onClick={() => onAdd(cantidad)} disabled={stock === 0}>Agregar al carrito</button>
                </div>
            </div>
            <button className="stlButtonCount" onClick={sumaContador} disabled={cantidad === stock || stock === 0}>+</button>
        </div>
    )
}

export default ItemCount