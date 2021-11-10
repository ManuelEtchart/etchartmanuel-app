import { Link } from "react-router-dom"
import { useState } from "react"
import ItemCount from "./ItemCount"
import "./componentsCSS/Item-ItemDetail.css"

const ItemDetail = ({item}) => {
    const [cantSeleccionada, setCantSeleccionada] = useState(0)
    const [goCart, setGoCart] = useState("no")

    const onAdd = (cantSelec) => {
        setCantSeleccionada(cantSelec)
        alert(`Ha comprado ${cantSelec} ${item.categoria}/s`)
        setGoCart("yes")
    }

    return(
        <div className="stlDetailDiv">
            <div>
                <p>{item.title}</p>
                <img src={item.pictureURL} className="stlImgDetail" alt={item.title}/>
            </div>
            <div className="stlDetailDescp">
                <p className="stlPrice">${item.price}</p>
                <p>{item.description}</p>
                {goCart === "no" ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to="/cart"><button className="stlButtonCountGoCart">Ir al Carrito</button></Link>}
                <Link to="/"><button className="stlButton">Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail