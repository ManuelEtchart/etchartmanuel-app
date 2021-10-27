/*import ItemCount from "./ItemCount"*/
/*import muzza from "../assets/pizzaNapo.jpg"*/

const Item = ({item}) => {

    /*const onAdd = (cantidad) => {
        alert(`Ha comprado ${cantidad} Item/s`)
    }*/
    
    const stlItemDiv = {padding: "0px 10px 5px 10px",
                    backgroundColor: "black",
                    margin: "0px 10px 5px 10px",
                    color: "#e71d36",
                    fontSize: "1.5rem"
                }

    const stlImg = {width: "250px", height: "250px"}

    return(
        <div style={stlItemDiv}>
            <p>{item.title}</p>
            <img src={item.pictureURL} style={stlImg} alt={item.title}/>
            <p>Stock Disponible: {item.stock}</p>
            <button>Ver Detalle</button>
            {/*<ItemCount stock={item.stock} initial={1} onAdd={onAdd} />*/}
        </div>
    )
}

export default Item