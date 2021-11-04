import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
import "./componentsCSS/Item-ItemDetail.css"
import muzzarela from '../assets/pizzaMuzza.jpg'
import napolitana from '../assets/pizzaNapo.jpg'
import empCarne from '../assets/empanadaCarne.jpg'
import empJyq from '../assets/empanadaJyq.jpg'


const ItemDetail = ({item}) => {

    const onAdd = (cantidad) => {
        alert(`Ha comprado ${cantidad} ${item.categoria}/s`)
    }

    const decidirSrc = () => {
        if(item.pictureURL === "muzzarela"){
            return muzzarela
        }else if(item.pictureURL === "napolitana"){
            return napolitana
        }else if(item.pictureURL === "empCarne"){
            return empCarne
        }else if(item.pictureURL === "empJyq"){
            return empJyq
        }
    }

    return(
        <div className="stlDetailDiv">
            <div>
                <p>{item.title}</p>
                <img src={decidirSrc()} className="stlImgDetail" alt={item.title}/>
            </div>
            <div className="stlDetailDescp">
                <p className="stlPrice">${item.price}</p>
                <p>{item.description}</p>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                <Link to="/"><button className="stlButton">Volver</button></Link>
            </div>
        </div>
    )
}

export default ItemDetail