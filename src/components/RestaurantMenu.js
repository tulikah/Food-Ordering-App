import  useRestaurantMenu  from "../hooks/useRestaurantMenu";
import { RestaurantCategory } from "./RestaurantCategory";



export const RestaurantMenu = () => {
    const restInfo = useRestaurantMenu(); //custom hook

    if(restInfo === null) return <h1>Loading..</h1>
     const { itemCards } =  restInfo?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[3].card.card;
    console.log('restInfo',restInfo);
    const categories = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(cat => cat?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log("Categories", categories);
    return (
        
        <div className="text-center m-8">          
            <h1 className="font-bold m-4">{restInfo?.cards[0]?.card?.card?.info.name}</h1>
            <h2>{restInfo?.cards[0]?.card?.card?.info.areaName}, { restInfo?.cards[0]?.card?.card?.info.costForTwoMessage } </h2>
            <h2 className="m-8">{categories?.map(cat => <RestaurantCategory data={cat.card?.card}/>)}</h2>
        </div>
    )


}