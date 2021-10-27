import Item from "./Item"

const ItemList = ({items}) => {
    
    const stlItemList = {display:"flex"}

    return(
            <div style={stlItemList}>
                {items.map(item => <Item key={item.id} item={item}/>)}
            </div>
    )
    
}

export default ItemList