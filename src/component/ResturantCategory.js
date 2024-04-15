import { useState } from "react";
import ItemList from "./ItemList";

const ResturantCategory = ({ data,showItems,setShowIndex,dummy }) => {

  // console.log(data);
  const accordianheadclick = () => {
    setShowIndex();
  }
  return (
    <div>
      {/* Accordian Header */}
      <div className=" w-5/12 mx-auto my-4  bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between cursor-pointer" onClick={accordianheadclick}>
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span> 🔽</span>
        </div>
        {/* Accordian Body */}
       {showItems && <ItemList  items={data?.itemCards}
     
       />}
      </div>
    </div>
  );
};
export default ResturantCategory;
