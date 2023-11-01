import { useState } from "react";
import { ItemList } from "./ItemList";

export const RestaurantCategory = (props) => {
//   const [showInfo, setShowInfo] = useState(false);

  const handleClick = () => {
    props.setShowIndex();
  };

  return (
    <div>
      <div className="w-6/12 bg-gray-50 shadow-xl p-2 mx-auto my-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="m-2 font-semibold ">
            {props?.data?.title} ({props?.data?.itemCards.length})
          </span>
          <span className="m-2">↓</span>
        </div>
        {props.showInfo && <ItemList data={props?.data}></ItemList>}
      </div>
    </div>
  );
};
