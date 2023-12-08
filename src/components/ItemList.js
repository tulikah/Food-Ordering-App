import { cdnURL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";


export const ItemList = (props) => {
  // console.log("ITEM", props);
  const dispatch = useDispatch();

  handleClick = (item) => {
    dispatch(addItems(item))
  }

  return (
    <div>
      {props.data.itemCards.map((item) => (
        <div data-testid="resItem" className="border-b-2" key={item.card.info?.id}>
          <div className="w-full flex flex-col text-left m-2">
            <div className="flex justify-between">
              <div className="w-9/12">
                <span className="p-2">{item.card.info?.name} </span>
                <span>
                  ₹{" "}
                  {item.card.info?.price
                    ? (item.card.info?.price / 100).toString()
                    : (item.card.info?.defaultPrice / 100).toString()}
                </span>
                <p className="my-3 whitespace-normal p-2">
                  {item.card.info?.description}
                </p>
              </div>
              <div className="w-3/12 relative">
                <button className="absolute bg-black text-white rounded-md w-10 bottom-0 left-0 text-sm shadow-lg" 
                onClick={() => handleClick(item)}>
                  ADD
                </button>
                <img
                  className="w-36 rounded-lg justify-items-end"
                  src={cdnURL + item.card?.info?.imageId}
                ></img>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
