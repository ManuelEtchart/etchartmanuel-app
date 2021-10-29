import { useEffect, useState } from "react"
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

    useEffect(()=>{
        getItem
        .then( res => setItem(res[Math.round(Math.random())]))
        .catch(err => console.log("Error", err))
    },[])
    
    return(
        <div className="stlDetail">
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer