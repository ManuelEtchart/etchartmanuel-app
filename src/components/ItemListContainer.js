import { useState, useEffect } from "react"
import ItemList from "./ItemList"

const itemsArray = [
                    {id: 1, title: "Pizza Muzzarela", stock: 5, pictureURL: "src/assets/pizzaMuzza.jpg"},
                    {id: 2, title: "Pizza Napolitana", stock: 0, pictureURL: "src/assets/pizzaNapo.jpg"}
                ]

const getItemsArray = new Promise((res,rej) => {
        setTimeout(()=>{
            res(itemsArray)
            rej("Error")
        }, 2000)
    })

const ItemListContainer = ({greeting}) => {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        getItemsArray
        .then(res => setItems(res))
        .catch(err => console.log("Se produjo un error", err))
        .finally(()=>{
            setCargando(false)
        })
    },[])

    let stlCargando 

    cargando ? stlCargando = {display:"block"} : stlCargando = {display:"none"}

    return(
            <div>
                <h1>{greeting}</h1>
                <h1 style={stlCargando}>Cargando...</h1>
                <ItemList items={items}/>
            </div>
    )
}

export default ItemListContainer