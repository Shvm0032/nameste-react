# nameste-react

# Parcel
- HMR-Hot Module Replacement(when we save the file it automatically refresh the page )

# Two Types of export/import

# 1-Default export /import:-
export default -component name-;
import -component_name- from "./path name";

# 2-name export/import:-
export const component ;
import {component} from "./path";

# React hooks
(Normal JS Utility function)
-useState()
-useEffect()

# Turnuri operator
 return listofRestro.length === 0 ? (<Shimmer/>):
 
# Important Note:-
- Whenever the state variable update , react triggered the reconcilation cycle(re-rendered the component). 
- If we dont use dependancy array on the useEffect than the component is rendered every time when the header rendered.
- And if we use dependancy array is use than the useEffect is rendered once in the intial and not render everytime when the header rendered.

# Comapre Between Class Based Component and Function Based Component :-
# Class Based Component :-
import React from "react";

class UserClass extends React.Component{

    render(){
        return(
            <div className="user-card">
            <h2>Name : Shivam</h2>
            <h2>Location : Dehradun</h2>
            <h3>Email : shvmbutola@gmail.com</h3>
          </div>
        )
    }
}
export default UserClass;

# Function Based Component:-
const User = () => {
  return (
    <div className="user-card">
      <h2>Name : Shivam</h2>
      <h2>Location : Dehradun</h2>
      <h3>Email : shvmbutola@gmail.com</h3>
    </div>
  );
};

export default User;

# Lazy Loading:-(These are the names  of the lazy loading)
1- chunking
2-code spliting
3-dynamic import
4-on demand loading
5-lazy loading
6-dynamic bundling

# High order component :-
  🔷//Highere order component in (Resturant cards)//
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
  And anothere in (body)
   {filteredRestro?.map((resturant) => (
          <Link key={resturant.info.id} to={"/resturants/" + resturant.info.id }>

            //------- //if the resturant is promoted then  add the promoted cards// --------//
            {resturant?.info?.avgRating > 4 ? (
              <ResturantCardsPromted resData={resturant}/>
            ) : (
              <ResturantCards resData={resturant} />
            )}
          </Link>
        ))};

# Accordian (Lifting the state):-
 ❗// Use Accordian for this loop (ResturantMenu)//
      {categories?.map((category,index) => (
        <ResturantCategory 
        key={category?.card?.card?.title} 
        data={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex = {() => setShowIndex (index)}
          />
      ))};
  ❗//use in the (ResturantCategory)//
  const ResturantCategory = ({ data,showItems,setShowIndex }) => {
  const accordianheadclick = () => {
    setShowIndex();

# Redux toolkit :-
# Boilerplate : 
 🔷It is a complete component with responsive we dont need to write the code for the any form or any component we get the whole component from somewhere else that piece of code is boilerplate. It is basically a copy paste of older code to the new project and than modify it.

# Using Redux in cart when add the item the cart show number of items in it --

  🔶 Add(when click on the add button)➡️➡️Action (Dispatch the action)➡️➡️Call the function(Reducer)➡️➡️modify the Card(modify the Redux store ).➡️➡️Selector.

  🔷Selector (from the redux store card seletor will give you data in the cart that how many item is selcted).
  # Selector is Subscribing To The Store.(selector is a redux hooks name useSlector).

# Types of callback function:-
 🔶 onClick={() => handleAddItem(item)} 🟰 Passing a Callback function.
 🔶 onClick={handleAddItem(item)}🟰 Calling the function right away.
 🔶 onclick={handleAddItem}🟰