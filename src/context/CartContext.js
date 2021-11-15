import { createContext, useState } from "react"

export const CartContext = createContext()


const CartContextProvider = ({children}) => {
    const [listaCarrito, setListaCarrito] = useState([])
    const [cantAcumulada, setCantAcumulada] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const agregarAlCarrito = (item, cantidad) => {
        setCantAcumulada(cantAcumulada + cantidad)
        setPrecioTotal(precioTotal + (item.precio*item.cantidad))

        if(listaCarrito.some(obj => obj.title === item.title)){
            const itemExistente = listaCarrito.find(obj => obj.title === item.title)

            const nuevoItem = {...item, cantidad: itemExistente.cantidad + item.cantidad}

            const listaActualizada = listaCarrito.filter(obj => obj !== itemExistente)
            
            setListaCarrito([...listaActualizada, nuevoItem])
        }else{
           setListaCarrito([...listaCarrito, item]) 
        }
    }

    const eliminarProducto = (item) => {
        setListaCarrito(listaCarrito.filter(obj => obj.title !== item.title))
        setCantAcumulada(cantAcumulada - item.cantidad)
        setPrecioTotal(precioTotal - (item.precio * item.cantidad))
    }

    const vaciarCarrito = () => {
        setListaCarrito([])
        setCantAcumulada(0)
        setPrecioTotal(0)
    }


    return(
        <>
            <CartContext.Provider value={{
                listaCarrito,
                cantAcumulada,
                precioTotal,
                agregarAlCarrito,
                eliminarProducto,
                vaciarCarrito
            }}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContextProvider