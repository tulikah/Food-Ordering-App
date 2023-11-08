import { useSelector } from "react-redux"
import { ItemList } from "./ItemList";

export const Cart = () => {

    const items = useSelector((store) => store.cart.items);
    const allItems = {
        itemCards: [...items]
    }
    console.log(allItems);
    return (
        <div className="p-8 mt-0 ml-32 mr-32 mb-32">
            <h1 className={"text-lg font-bold my-4 text-center mb-16"}>Cart</h1>
            <ItemList data={allItems}></ItemList>
        </div>

    )
}

