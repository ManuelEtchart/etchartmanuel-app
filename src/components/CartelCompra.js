import "./componentsCSS/CartelCompra.css"

const CartelCompra = ({id,vista,cargando}) => {
    return(
        <div className={`cartelCompra ${vista}`}>
            <p>¡Compra exitosa!</p>
            <p>¡Muchas gracias por elegirnos!</p>
            <p>Su id de compra es: {cargando}{id}</p>
        </div>
    )
}

export default CartelCompra