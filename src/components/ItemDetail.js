import { Link } from "react-router-dom"
import { useState,useContext } from "react"
import ItemCount from "./ItemCount"
import "./componentsCSS/Item-ItemDetail.css"
import {CartContext} from "../context/CartContext"

const ItemDetail = ({item}) => {
    const [cantSeleccionada, setCantSeleccionada] = useState(0)
    const [goCart, setGoCart] = useState("no")

    const {agregarAlCarrito} = useContext(CartContext)

    const onAdd = (cantSelec) => {
        setCantSeleccionada(cantSelec)
        agregarAlCarrito({id: item.id, titulo: item.titulo, cantidad: cantSelec, precio: item.precio}, cantSelec)
        setGoCart("yes")
    }

    return(
        <div className="stlDetailDiv">
            <div>
                <p>{item.titulo}</p>
                <img src={item.imagenURL} className="stlImgDetail" alt={item.titulo}/>
            </div>
            <div className="stlDetailDescp">
                <p className="stlPrice">${item.precio}</p>
                <p>{item.descripcion}</p>
                {goCart === "no" ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> : <Link to="/carrito"><button className="stlButtonCountGoCart">Terminar mi compra</button></Link>}
                <Link to="/"><button className="stlButton">Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail