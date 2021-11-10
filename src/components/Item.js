import { Link } from "react-router-dom"
import "./componentsCSS/Item-ItemDetail.css"

const Item = ({item}) => {

    return(
        <div className="stlItemDiv">
            <p>{item.title}</p>
            <img src={item.pictureURL} className="stlImgItem" alt={item.title}/>
            <p>Stock Disponible: {item.stock}</p>
            <Link to={`/detalle/${item.id}`}><button className="stlButton">Ver Detalle</button></Link>
        </div>
    )
}

export default Item


