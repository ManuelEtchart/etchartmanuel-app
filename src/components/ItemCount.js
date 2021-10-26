import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)
    
    const sumaContador = () => {
        setCantidad(cantidad + 1)
    }

    const restaContador = () => {
        setCantidad(cantidad - 1)
    }

    const stlCount = {display: "flex",
                        backgroundColor: "black",
                        justifyContent: "center"
                    }

    const stlButtonCount = {backgroundColor: "#e71d36",
                        borderRadius: "100px",
                        fontSize: "18px",
                        border: "solid black 1px",
                        cursor: "pointer",
                        padding: "0px 10px"
                        }
    
    const stlStock = {backgroundColor: "white",
                        borderRadius: "100px",
                        margin: "10px"
                    }

    let stlMsgStock;

    stock === 0 ? stlMsgStock = {display: "block", color: "#e71d36"} : stlMsgStock = {display: "none"};

    return(
        <div style={stlCount}>
            <button style={stlButtonCount} onClick={restaContador} disabled={cantidad === initial || stock === 0}>-</button>
            <div>
                <div style={stlStock}>{cantidad}</div>
                <div>
                    <div style={stlMsgStock}>Sin Stock</div>
                    <button style={stlButtonCount} onClick={() => onAdd(cantidad)} disabled={stock === 0}>Agregar al carrito</button>
                </div>
            </div>
            <button style={stlButtonCount} onClick={sumaContador} disabled={cantidad === stock || stock === 0}>+</button>           
            
        </div>
    )
}

export default ItemCount