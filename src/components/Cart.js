import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/firestore'
import { CartContext } from "../context/CartContext"
import { getFirebase } from "../services/getFirebase"
import CartelCompra from './CartelCompra'
import "./componentsCSS/Cart.css"
import Form from "./Form"

const Cart = () => {
    const [idCompra, setIdCompra] = useState()
    const [vista, setVista] = useState('noVista')
    const [cargando, setCargando] = useState('Cargando...')
    const [stlValidacion1, setStlValidacion1] = useState({display: 'none'})
    const [stlValidacion2, setStlValidacion2] = useState({display: 'none'})
    const [stlValidacion3, setStlValidacion3] = useState({display: 'none'})

    const {listaCarrito, precioTotal, vaciarCarrito, eliminarProducto, cantAcumulada} = useContext(CartContext)
    
    const comprar = (e) =>{
        e.preventDefault()

        const nombreComprador = document.getElementById("nombre").value
        const telComprador = document.getElementById("tel").value
        const emailComprador = document.getElementById("email").value

        if(nombreComprador || telComprador || emailComprador === ''){
            switch (nombreComprador) {
                case '': setStlValidacion1({display: "block", color: "red"})
                    break;
                default: setStlValidacion1({display: 'none'})
                    break;
            }
            switch (telComprador) {
                case '': setStlValidacion2({display: "block", color: "red"})
                    break;
                default: setStlValidacion2({display: 'none'})
                    break;
            }
            switch (emailComprador) {
                case '': setStlValidacion3({display: "block", color: "red"})                    
                    break;
                default: setStlValidacion3({display: 'none'})
                    break;
            }
        } 

        if(nombreComprador && telComprador && emailComprador !== ''){
            const orden = {comprador: {nombre: nombreComprador, telefono: telComprador, email: emailComprador},
                            productos: listaCarrito,
                            fecha: firebase.firestore.Timestamp.fromDate(new Date()),
                            precioTotal: precioTotal}

            const db = getFirebase()
            db.collection('ordenes').add(orden)
            .then(res => setIdCompra(res.id))
            .catch(err => console.log("Se produjo un error", err))
            .finally(()=>{
                setCargando()
            })

            vaciarCarrito()

            setVista()

            const productosVendidos = db.collection('productos').where(firebase.firestore.FieldPath.documentId(), 'in' , listaCarrito.map(i => i.id))

            const batch = db.batch();

            productosVendidos.get()
            .then(prods => {prods.docs.forEach(prodVend => {batch.update(prodVend.ref, {stock: prodVend.data().stock - listaCarrito.find(prod => prod.id === prodVend.id).cantidad })})
        
            batch.commit().then(res => res);
            }) 
        }
    }

    if(cantAcumulada === 0){
        return(
            <div className='stlCarritoVacio'>
                <p>CARRITO</p>
                <p>Carrito Vacio</p>
                <Link to="/"><button className="stlButton">INICIO</button></Link>
                <CartelCompra id={idCompra} vista={vista} cargando={cargando}/>
            </div>
        )
    }

    return(
        <>
            <p>CARRITO</p>
            <div className="stlCarrito">
                <div className="stlListaCarrito">
                    {listaCarrito.map(prod => <div key={prod.id}>
                                                <p>{prod.titulo}</p>
                                                <p>Cant: {prod.cantidad}</p>
                                                <p>${prod.precio * prod.cantidad}</p>
                                                <button onClick={()=>eliminarProducto(prod)} className="stlButton">Eliminar Producto</button> 
                                            </div>     
                
                    )}
                </div>
                <div>
                    <button onClick={()=>vaciarCarrito()} className="stlButton">Vaciar Carrito</button>
                    <p>Precio Total: ${precioTotal}</p>
                    <Form comprar={comprar} stlValidacion1={stlValidacion1} stlValidacion2={stlValidacion2} stlValidacion3={stlValidacion3}/>
                </div> 
            </div>
        </>
    )
}

export default Cart