import { useDispatch } from "react-redux";
import { CDN_FOOD_LINK } from "../utils/links";
import { addItem } from "../utils/Redux/cardSlice";

const ItemList = ({ items }) => {
  const Dispatch = useDispatch();
  const handleAddItem = (item) => {
   
    //Dispatch a action//
    Dispatch(addItem(item));
  };

  return (
    <div>
      {items?.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-1 my-1">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice}
              </span>
              <p className="text-xs">{item?.card?.info?.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-2">
            <div className="absolute ">
              <button
                className="py-1 px-2 my-14 mx-10   bg-black text-white shadow-lg rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add
              </button>
            </div>
            {item?.card?.info?.imageId && (
              <img
                
                src={CDN_FOOD_LINK + item?.card?.info?.imageId}
              />
            )}
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default ItemList;
