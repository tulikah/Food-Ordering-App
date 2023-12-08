import { useState } from "react";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";

const RestaurantMenu = () => {
  const restInfo = useRestaurantMenu(); //custom hook
  const [showIndex, setShowIndex] = useState(null);

  if (restInfo === null) return <h1>Loading..</h1>;
  const categories =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log("Categories", categories);
  return (
    <div className="text-center m-8">
      <h1 className="font-bold m-4">
        {restInfo?.cards[0]?.card?.card?.info.name}
      </h1>
      <h2>
        {restInfo?.cards[0]?.card?.card?.info.areaName},{" "}
        {restInfo?.cards[0]?.card?.card?.info.costForTwoMessage}{" "}
      </h2>
      <h2 className="m-8">
        {categories?.map((cat, index) => (
          <RestaurantCategory
            key={restInfo?.cards[0]?.card?.card?.info.imageId}
            showInfo={index === showIndex && true}
            data={cat.card?.card}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </h2>
    </div>
  );
};

export default RestaurantMenu;