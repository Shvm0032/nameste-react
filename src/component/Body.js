//Body Component//
import ResturantCards from "./ResturantCards";
import resList from "../utils/resturantData";


const Body = () =>{

    return(
      <div className="body">
     <div className="search">Search</div>
     <div className="restro-conatainer">
  
      {/* ------------this is for limited data if we have multiples of data than we use map loop----------------- */}
      {/* <ResturantCards  resData={resList[0]}/>
      <ResturantCards  resData={resList[1]}/>
      <ResturantCards  resData={resList[2]}/>
      <ResturantCards  resData={resList[3]}/>
      <ResturantCards  resData={resList[4]}/>
      <ResturantCards  resData={resList[5]}/>
      <ResturantCards  resData={resList[6]}/>
      <ResturantCards  resData={resList[7]}/> */}
  
      {/* ------------Now i will do this from map loop so that i can get all the data------------- */}
      {
        resList.map((resturant) => (<ResturantCards key={resturant.info.id} resData={resturant}/>))
      }
     </div>
      </div>
    )
  }
  export default Body;