
import Shimmer from "./Shimmer";
import {useParams }  from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import { CDN_FOOD_LINK } from "../utils/links";

const ResturantMenu = (props) => {
const {resId} = useParams();
const {resData} = props;
const resInfo = useResturantMenu(resId);


  if(resInfo === null)  return <Shimmer/>;
  const {name,costForTwoMessage,cuisines,sla,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(resInfo);
  return  (
    <div className="menu px-[400px] m-4">
      <div className="card1 w-[300px] border border-solid border-black p-4 rounded-lg">
      <img className="rounded-md my-1 border border-solid border-orange-400" src={CDN_FOOD_LINK + cloudinaryImageId} alt="foor image"/>
      <h1 className="font-bold">{name}</h1>
      <h2 className="py-1 my-1 text-green-500 font-bold w-24">{cuisines.join(",")}</h2>
      <h2 className="text-orange-500 font-bold w-28">{costForTwoMessage}</h2>
      <h2>{sla.slugString}</h2>
      </div>
      <div className="card1  border border-solid border-black p-4 rounded-lg">
      <h2 className="font-bold py-2 text-xl">Menu :-  </h2>

      <ul className="p-1 text-lg">
      {itemCards?.map((item) =>(
            <li className="" key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.price/100  || item?.card?.info?.defaultPrice/100} </li>
        ))}
       
      </ul>
      </div>
     
    </div>
  );
};

export default ResturantMenu;
