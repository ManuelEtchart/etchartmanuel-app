import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {
    console.log(greeting)

    const onAdd = (cantidad) => {
        alert(`Ha comprado ${cantidad} Item/s`)
    }

    return(
            <div>
                <h1>{greeting}</h1>
                <ItemCount stock={0} initial={1} onAdd={onAdd} />
            </div>
    )
}

export default ItemListContainer