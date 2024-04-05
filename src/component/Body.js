//Body Component//
import ResturantCards from "./ResturantCards";
import resList from "../utils/resturantData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //State Variable = super powerfull variable(react hook)//
  const [listofRestro,setlistofRestro] = useState([]);
  const [filteredRestro,setFilteredRestro] = useState([]);
  const [searchText,setSearchText] = useState("");

  console.log("body rendered")
  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      //---optional chaining (?)------//

      setlistofRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestro(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //------Conditional Rendering-------//
  // if(listofRestro.length === 0){
  //  return <Shimmer/>
  // }

  return listofRestro.length === 0 ? (<Shimmer/>):(
    <div className="body">
      <div className="filter">

        <div className="search-bar">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>
             {setSearchText(e.target.value)}
             }/>
          <button onClick={() => {
           const filterlistofRestro = listofRestro.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestro(filterlistofRestro);

            console.log(filterlistofRestro);
          }}
          >Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const listofFilterRestro = listofRestro?.filter((res) => res.info.avgRating > 4);
            setlistofRestro(listofFilterRestro)
          }}
        >
          Top Rated Restro{" "}
        </button>
      </div>
      <div className="restro-conatainer">
        {/* ------------Now i will do this from map loop so that i can get all the data------------- */}

        {filteredRestro?.map((resturant) => (

          <ResturantCards key={resturant.info.id} resData={resturant} />
        ))} 
      </div>
    </div>
  );
};
export default Body;
