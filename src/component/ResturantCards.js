//Restro Cards//
import {CDN_FOOD_LINK} from "../utils/links";

const ResturantCards = (props) =>{
    const {resData} = props;
    const {name,
      cuisines,
      avgRating,
      costForTwo,
      cloudinaryImageId}
       = resData?.info;
       
    return(
      <div className="restro-card " >
        <img className="food-logo"  
        src={CDN_FOOD_LINK + cloudinaryImageId }/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }
  export default ResturantCards;