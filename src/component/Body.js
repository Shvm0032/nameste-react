//Body Component//
import ResturantCards from "./ResturantCards";
import resList from "../utils/resturantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import useListOfRestro from "./useListOfRestro";

const Body = () => {
  //State Variable = super powerfull variable(react hook)//
  const [searchText, setSearchText] = useState("");

  const {filteredRestro,listofRestro,filterRestro, getTopRatedRestro} = useListOfRestro();
   

  //Checking logic for online status and internet connection//
  const OnlineStatus = useOnlineStatus();

  if (OnlineStatus === false)
    return (
      <div>
        <center>
          <OfflinePage />
        </center>
      </div>
    );

  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-bar">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => filterRestro(searchText)}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={getTopRatedRestro}
        >
          Top Rated Restro{" "}
        </button>
      </div>
      <div className="restro-conatainer">
        {/* ------------Now i will do this from map loop so that i can get all the data------------- */}

        {filteredRestro?.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>
            <ResturantCards resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
