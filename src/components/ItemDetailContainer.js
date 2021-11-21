import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import "./componentsCSS/ItemList-ItemDetailContainer.css"
import { getFirebase } from "../services/getFirebase"

const db = getFirebase()

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [cargando, setCargando] = useState(true)

    const { idDetalle } = useParams()

    useEffect(()=>{
        if(idDetalle === undefined){
            db.collection('productos').get()
            .then(res => setItem(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log("Error", err))
            .finally(()=>{
                setCargando(false)
            })
        }else{
            db.collection('productos').doc(idDetalle).get()
            .then( res => setItem({id: res.id, ...res.data()}))
            .catch(err => console.log("Error", err))
            .finally(()=>{
                setCargando(false)
            })
        }
        
    },[idDetalle])

    let stlCargando 

    cargando ? stlCargando = {display:"block"} : stlCargando = {display:"none"}
    
    return(
        <>
            <h2 style={stlCargando}>Cargando...</h2>
            <ItemDetail item={item} />
        </>
    )
}

export default ItemDetailContainer