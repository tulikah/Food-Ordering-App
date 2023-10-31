import food1 from "../../images/food1.jpeg";
import { cdnURL } from "../utils/constants";
// import data from "../utils/data.js"

const RestCard = ({ resData }) => {
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRatingString } =
    resData?.info;

  return (
    <div className=" bg-gray-200 shadow-lg-200/50 rounded-md p-2">
      <img className="rounded-lg" src={cdnURL + cloudinaryImageId} />
      <div className="text-left m-2">
        <h3 className="font-sans font-bold">{name}</h3>
        <h4 className="font-light">{cuisines.join(", ")}</h4>
        <h4 className="font-light">{costForTwo}</h4>
        <h4 className="font-light">{avgRatingString}</h4>
      </div>
    </div>
  );
};


//Higher Order Component -
export const promotedRestCard = (RestCard) => {
  return (props) => {
    return (
      <div>
      <label className="absolute bg-black text-slate-50 m-2 p-1 rounded-md">Promoted</label>
      <RestCard {...props} />
      </div>

    )
  }
}



export default RestCard;
