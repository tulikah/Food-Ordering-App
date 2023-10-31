import { useEffect, useState } from "react";

export default function useRestaurantMenu() {

  const [restInfo, setRestInfo] = useState(null);
    
    useEffect(() => {
        fetchData();
    }, [])

    
  const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.2010502&lng=72.97853529999999&restaurantId=656125&catalog_qa=undefined');
        const res = await data.json();
        setRestInfo(res.data)
  };
  return restInfo;
}

