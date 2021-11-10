import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

export const itemsArray = [
                    {id: "P1", title: "Pizza Muzzarela", price: 480, stock: 5, pictureURL: "assets/images/pizzaMuzza.jpg", categoria: "pizza", description:"Pizza con salsa de tomate, queso Muzzarela, orégano y aceitunas."},
                    {id: "P2", title: "Pizza Napolitana", price: 580, stock: 0, pictureURL: "assets/images/pizzaNapo.jpg", categoria: "pizza", description:"Pizza con salsa de tomate, queso Muzzarela, rodajas de tomate, ajo, orégano y aceitunas."},
                    {id: "E1", title: "Empanada Carne", price: 60, stock: 6, pictureURL: "assets/images/empanadaCarne.jpg", categoria: "empanada", description: "Empanadas con relleno de carne picada."},
                    {id: "E2", title: "Empanada Jamón y Queso", price: 60, stock: 12, pictureURL: "assets/images/empanadaJyq.jpg", categoria: "empanada", description: "Empanadas con relleno de queso Muzzarela y jamón cocido."}
                ]

const getItemsArray = new Promise((res,rej) => {
        setTimeout(()=>{
            res(itemsArray)
            rej("Error")
        }, 2000)
    })

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const [cargando, setCargando] = useState(true)

    const {idCategoria} = useParams()

    useEffect(()=>{
        if(idCategoria === undefined){
            getItemsArray
            .then(res => setItems(res))
            .catch(err => console.log("Se produjo un error", err))
            .finally(()=>{
                setCargando(false)
            })
        }else{
            getItemsArray
            .then(res => setItems(res.filter(arr => arr.categoria === idCategoria)))
            .catch(err => console.log("Se produjo un error", err))
            .finally(()=>{
                setCargando(false)
            })
        }
        
    },[idCategoria])

    let stlCargando 

    cargando ? stlCargando = {display:"block"} : stlCargando = {display:"none"}

    return(
            <div>
                <h1 style={{fontSize: '1.5rem'}}>Pizzería "El Artesano"</h1>
                <h2 style={stlCargando}>Cargando...</h2>
                <ItemList items={items}/>
            </div>
    )
}

export default ItemListContainer