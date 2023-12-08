import { useSelector, useDispatch } from "react-redux"
import { ItemList } from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    const items = useSelector((store) => store.cart.items);
    const allItems = {
        itemCards: [...items]
    }
    const dispatch = useDispatch();
    // console.log(allItems);
    return (
        <div className="p-8 mt-0 ml-32 mr-32 mb-32 flex flex-col">
            <h1 className={"text-lg font-bold my-4 text-center mb-16"}>Cart</h1>
            <button className="border-solid border-2 border-gray-500 text-center w-24 m-auto rounded-lg" 
                onClick={() => dispatch(clearCart())}><h2>Clear Cart</h2></button>
            <ItemList data={allItems}></ItemList>
        </div>

    )
}

export default Cart;
