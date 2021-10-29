import ItemCount from "./ItemCount"
import "./componentsCSS/Item-ItemDetail.css"

const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Ha comprado ${cantidad} Item/s`)
    }

    return(
        <div className="stlDetailDiv">
            <p>{item.title}</p>
            <img src={item.pictureURL} className="stlImgDetail" alt={item.title}/>
            <p className="stlPrice">${item.price}</p>
            <p>{item.description}</p>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            <button className="stlButton">Volver</button>
        </div>
    )
}

export default ItemDetail