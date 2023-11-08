import food1 from "../../images/food1.jpeg";
import { cdnURL } from "../utils/constants";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";
import { ThemeContext } from "../utils/ThemeContext";


const RestCard = ({ resData }) => {
  const { loggedInUser } = useContext(UserContext);
  const { theme } = useContext(ThemeContext);
  const { name, cuisines, cloudinaryImageId, costForTwo, avgRatingString } =
    resData?.info;
  const darkThemeBg = theme === 'dark' ?  'bg-slate-600 text-slate-50' : 'bg-gray-200 text-black';

  return (
    <div className={`${darkThemeBg} shadow-lg-200/50 rounded-md p-4 m-4`}>
      <img className="p-4 rounded-lg" src={cdnURL + cloudinaryImageId} />
      <div className="text-left m-2">
        <h3 className="font-sans font-bold">{name}</h3>
        <h4 className="font-light">{cuisines.join(", ")}</h4>
        <h4 className="font-light">{costForTwo}</h4>
        <h4 className="font-light">{avgRatingString}</h4>
        <h4>{loggedInUser}</h4>
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
