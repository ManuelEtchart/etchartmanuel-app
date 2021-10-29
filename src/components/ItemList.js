import Item from "./Item"
import "./componentsCSS/ItemList-ItemDetailContainer.css"

const ItemList = ({items}) => {

    return(
            <div className="stlItemList">
                {items.map(item => <Item key={item.id} item={item}/>)}
            </div>
    )
    
}

export default ItemList