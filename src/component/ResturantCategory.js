import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  // console.log(data);
  return (
    <div>
      {/* Accordian Header */}
      <div className=" w-5/12 mx-auto my-4  bg-gray-100 shadow-lg p-4 ">
        <div className="flex justify-between">
          <span className="font-bold">
            {data?.title} ({data?.itemCards.length})
          </span>
          <span> 🔽</span>
        </div>
        {/* Accordian Body */}
        <ItemList  items={data?.itemCards}/>
      </div>
    </div>
  );
};
export default ResturantCategory;
