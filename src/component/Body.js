//Body Component//
import ResturantCards, { withStarRating } from "./ResturantCards";
import resList from "../utils/resturantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";
import useListOfRestro from "../utils/useListOfRestro";

const Body = () => {
  //State Variable = super powerfull variable(react hook)//
  const [searchText, setSearchText] = useState("");
  const ResturantCardsPromted = withStarRating(ResturantCards);
  const { filteredRestro, listofRestro, filterRestro, getTopRatedRestro } =
    useListOfRestro();

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
  console.log(listofRestro);

  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex ">
        <div className="search-bar p-4 m-4">
          <input
            type="text"
            className="search-box border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search px-4 m-4  bg-green-400 border border-solid border-green-500 rounded"
            onClick={() => filterRestro(searchText)}
          >
            Search
          </button>
        </div>
        <div className="search-bar p-4 m-2 flex items-center ">
          <button
            className="filter-btn px-2 bg-orange-400 border border-solid border-orange-600 rounded"
            onClick={getTopRatedRestro}
          >
            Top Rated Restro{" "}
          </button>
        </div>
      </div>
      <div className="restro-conatainer flex flex-wrap ml-28">
        {/* ------------Now i will do this from map loop so that i can get all the data------------- */}

        {filteredRestro?.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id}>

            {/*------- //if the resturant is promoted then  add the promoted cards// --------*/}
            {resturant?.info?.avgRating > 4 ? (
              <ResturantCardsPromted resData={resturant}/>
            ) : (
              <ResturantCards resData={resturant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
