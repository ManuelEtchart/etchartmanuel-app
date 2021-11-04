import { Link } from "react-router-dom"
import "./componentsCSS/Item-ItemDetail.css"
import muzzarela from '../assets/pizzaMuzza.jpg'
import napolitana from '../assets/pizzaNapo.jpg'
import empCarne from '../assets/empanadaCarne.jpg'
import empJyq from '../assets/empanadaJyq.jpg'



const Item = ({item}) => {
    
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
        <div className="stlItemDiv">
            <p>{item.title}</p>
            <img src={decidirSrc()} className="stlImgItem" alt={item.title}/>
            <p>Stock Disponible: {item.stock}</p>
            <Link to={`/detalle/${item.id}`}><button className="stlButton">Ver Detalle</button></Link>
        </div>
    )
}

export default Item


