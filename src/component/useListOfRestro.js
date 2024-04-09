import { useEffect, useState } from "react";
import { LIST_RESTRO_API } from "../utils/links";

const useListOfRestro = () => {
  const [listofRestro, setlistofRestro] = useState([]);
  const [filteredRestro, setFilteredRestro] = useState([]);

  useEffect(() => {
    fetchRestro();
  }, []);
  const fetchRestro = async () => {
    const data = await fetch(LIST_RESTRO_API);
    const json = await data.json();
    setlistofRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const filterRestro = (searchText) => {
    const filteredList = listofRestro.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestro(filteredList);
  };
  const getTopRatedRestro = () => {
    const topRatedRestro = listofRestro.filter((res) => res.info.avgRating > 4);
    setFilteredRestro(topRatedRestro);
  };

  return { listofRestro, filteredRestro, filterRestro, getTopRatedRestro };
};

export default useListOfRestro;
