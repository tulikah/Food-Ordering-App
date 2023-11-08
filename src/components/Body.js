import { useEffect, useState, useContext } from "react";
import data from "../utils/data.js";
import RestCard, { promotedRestCard } from "./RestaurantCard.js";
import { Link } from "react-router-dom";
import useOnlineStatus from '../hooks/useOnlineStatus';
import { UserContext } from "../utils/UserContext.js";
import { ThemeContext } from "../utils/ThemeContext";

const BodyComponent = () => {
  const [restList, setRestList] = useState([]);
  const [filteredList, setfilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterBoolean, setFilterBoolean] = useState(false);
  const { theme } = useContext(ThemeContext);

  const PromotedCard = promotedRestCard(RestCard);

  const {loggedInUser, setUserName} = useContext(UserContext);

  const darkThemeBg = theme === 'dark' ?  'bg-slate-400' : 'bg-white';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setRestList(data);
    setfilteredList(data);
  };

  const status = useOnlineStatus();
  if(status === false) return <h1>Oops! You are offline right now, please check your internet connection.</h1>

  if (restList.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className={`body ${darkThemeBg}`}>
      <div className="grid grid-cols-8 gap-2 p-4">
        <input
          className="focus:ring-offset-2 ring-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="focus:ring w-4"
          onClick={() => {
            const searchData = restList.filter((search) =>
              search.info.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase())
            );
            setfilteredList(searchData);
            setFilterBoolean(false);
          }}
        >
          Search
        </button>
        <div>
          <label >Enter</label>
          <input className="border border-black" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>

      </div>
      {/* <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const topRatedList = restList.filter(
              (rest) => rest.info.avgRating > 4.1
            );
            setRestList(topRatedList);
            setFilterBoolean(true);

          }}
        >
          Top Rated Restaurants
        </button>
      </div> */}
      <div className="grid grid-cols-4 gap-4 m-4">
        {filteredList.map((res) => (
          <Link key={res.info.id} to={'/restaurants/' + res.info.id}>
            {res.info.promoted ? <PromotedCard resData={res}/> :   <RestCard  resData={res} />}
            </Link>
        ))} 
      </div>
    </div>
  );
};

export default BodyComponent;
