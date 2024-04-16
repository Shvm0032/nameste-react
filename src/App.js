import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";
import Error from "./component/Error";
// import Grocery from "./component/Grocery";
import { lazy,Suspense } from "react";
import { useContext } from "react";
import userContext from "./utils/userContext";

// import Shimmer from "./component/Shimmer";


const Grocery = lazy(() => import("./component/Grocery"));

//AppLayout//
const AppLayout = () =>{

 const [userName,setUserName] = useState();
 useEffect(() => {
const userData ={
  name:"Shivam Butola",
};
setUserName(userData.name);
 },[])
  return(
   <userContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header/>
     <Outlet/>

    </div>
    </userContext.Provider> 
  )
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading.......</h1>}><Grocery/></Suspense>,
      },
      {
        path:"/resturants/:resId",
        element:<ResturantMenu/>,
      },

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
