import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { itemsArray } from "./ItemListContainer"
import "./componentsCSS/ItemList-ItemDetailContainer.css"

const getItem = new Promise((res,rej) =>{
        setTimeout(()=>{
            res(itemsArray)
            rej("Error")
        }, 2000)
    })

const ItemDetailContainer = () => {
    const [item, setItem] = useState({})
    const [cargando, setCargando] = useState(true)

    const { idDetalle } = useParams()

    useEffect(()=>{
        if(idDetalle === undefined){
            getItem
            .then( res => setItem(res))
            .catch(err => console.log("Error", err))
            .finally(()=>{
                setCargando(false)
            })
        }else{
            getItem
            .then( res => setItem(res.find(arr => arr.id === idDetalle)))
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