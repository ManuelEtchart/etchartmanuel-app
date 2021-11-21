import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirebase } from "../services/getFirebase"
import ItemList from "./ItemList"

export const itemsArray = [
                    {id: "P1", titulo: "Pizza Muzzarela", precio: 480, stock: 5, imagenURL: "/assets/images/pizzaMuzza.jpg", categoria: "pizza", descripcion:"Pizza con salsa de tomate, queso Muzzarela, orégano y aceitunas."},
                    {id: "P2", titulo: "Pizza Napolitana", precio: 580, stock: 0, imagenURL: "/assets/images/pizzaNapo.jpg", categoria: "pizza", descripcion:"Pizza con salsa de tomate, queso Muzzarela, rodajas de tomate, ajo, orégano y aceitunas."},
                    {id: "E1", titulo: "Empanada Carne", precio: 60, stock: 6, imagenURL: "/assets/images/empanadaCarne.jpg", categoria: "empanada", descripcion: "Empanadas con relleno de carne picada."},
                    {id: "E2", titulo: "Empanada Jamón y Queso", precio: 60, stock: 12, imagenURL: "/assets/images/empanadaJyq.jpg", categoria: "empanada", descriction: "Empanadas con relleno de queso Muzzarela y jamón cocido."}
                ]

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