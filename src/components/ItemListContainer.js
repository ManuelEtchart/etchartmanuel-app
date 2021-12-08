import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirebase } from "../services/getFirebase"
import ItemList from "./ItemList"

const db = getFirebase()

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)

    const {idCategoria} = useParams()

    useEffect(()=>{
        if(idCategoria === undefined){
            db.collection('productos').get()
            .then(res => setItems(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log("Se produjo un error", err))
            .finally(()=>{
                setCargando(false)
            })
        }else{
            db.collection('productos').where('categoria', '==', idCategoria).get()
            .then(res => setItems(res.docs.map(prod => ({id: prod.id, ...prod.data()}))))
            .catch(err => console.log("Se produjo un error", err))
            .finally(()=>{
                setCargando(false)
            })
        }
    },[idCategoria])

    let stlCargando 

    cargando ? stlCargando = {display:"block", marginBottom: "418px"} : stlCargando = {display:"none"}

    return(
        <div>
            <h1 style={{fontSize: '1.5rem'}}>Pizzería "El Artesano"</h1>
            <h2 style={stlCargando}>Cargando...</h2>
            <ItemList items={items}/>
        </div>
    )
}

export default ItemListContainer