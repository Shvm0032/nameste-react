import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import { CDN_FOOD_LINK } from "../utils/links";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";


const ResturantMenu = (props) => {
  const { resId } = useParams();
  // const { resData } = props;
  const resInfo = useResturantMenu(resId);
  const[showIndex,setShowIndex] = useState(0);


  if (resInfo === null) return <Shimmer />;
  const dummy = "dummy"
  const { name, costForTwoMessage, cuisines, sla, cloudinaryImageId } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg my-4">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      <h2 className="font-bold text-lg my-4">{sla.slaString}</h2>

      {/* Use Accordian for this loop */}
      {categories?.map((category,index) => (
        <ResturantCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex = {() => setShowIndex (index)}
       
          />
      ))}
    </div>
  );
};


export default ResturantMenu;
