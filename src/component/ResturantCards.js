//Restro Cards//
import {CDN_FOOD_LINK} from "../utils/links";


const ResturantCards = (props) =>{
    const {resData} = props;
    const {name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
      cloudinaryImageId}
       = resData?.info;
       
      
    return(
      <div className="restro-card m-4 p-4 w-[300px] h-[400px] bg-slate-100 rounded-lg hover:bg-yellow-100" >
        <img className="food-logo rounded-lg"  
        src={CDN_FOOD_LINK + cloudinaryImageId }/>
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.slaString}</h4>
      
      </div>
    )
  };

  //Highere order component//
  export const withStarRating = (ResturantCards) =>{
    return(props) => {
      return(
        <div>
          <label className="absolute p-2  m-1 bg-orange-400 text-white rounded-lg">TOP RATED</label>
          <ResturantCards {...props}/>
        </div>
      )
    }
  };

  export default ResturantCards;