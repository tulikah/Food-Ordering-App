import { ItemList } from "./ItemList";

export const RestaurantCategory = (props) => {
  console.log(props);
  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-xl p-2 mx-auto my-4 ">
        <div className="flex justify-between">
        <span className="m-2 font-semibold ">{props?.data?.title} ({props?.data?.itemCards.length})</span>
        <span className="m-2">↓</span>
        </div>
         <ItemList data={props?.data}></ItemList>
      </div>
    </div>
  );
};
