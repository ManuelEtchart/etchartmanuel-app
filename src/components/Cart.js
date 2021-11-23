import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import firebase from 'firebase/app'
import 'firebase/firestore'
import { CartContext } from "../context/CartContext"
import { getFirebase } from "../services/getFirebase"
import "./componentsCSS/Cart.css"

const Cart = () => {
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
            .then(res => alert(`Compra exisitosa.Su id de compra es: ${res.id}`))
            .catch(err => console.log("Se produjo un error", err))
        
        }
    }

    if(cantAcumulada === 0){
        return(
            <>
                <p>CARRITO</p>
                <p>Carrito Vacio</p>
                <Link to="/"><button className="stlButton">INICIO</button></Link>
            </>
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
                        <p>Formulario de Compra</p>
                        <form className="stlFormulario">
                            <label>Nombre</label>
                            <input type='text' placeholder="Nombre" name="nombre" id="nombre"/>
                            <p style={stlValidacion1}>El campo nombre es obligatorio</p>
                            <label>Teléfono</label>
                            <input type='tel' placeholder="11-12345678" name="tel"  id="tel"/>
                            <p style={stlValidacion2}>El campo teléfono es obligatorio</p>
                            <label>E-mail</label>
                            <input type='email' placeholder="email@ejemplo.com" name="email" id="email"/>
                            <p style={stlValidacion3}>El campo E-mail es obligatorio</p>
                            <button className="stlButton" onClick={(e)=>comprar(e)}>Comprar</button>
                        </form>
                    </div> 
                </div>
            </>
    )
}

export default Cart