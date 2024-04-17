import React, { useEffect, useState }  from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import ResturantMenu from "./component/ResturantMenu";
import Error from "./component/Error";
import { lazy,Suspense } from "react";
import { useContext } from "react";
import userContext from "./utils/userContext";
const Grocery = lazy(() => import("./component/Grocery"));

//import provider from react-redux for create store 2nd step//
import { Provider } from "react-redux";
import appStore from "./utils/Redux/appStore";
import Cart from "./component/Cart";


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
    <Provider store={appStore}>
   <userContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header/>
     <Outlet/>

    </div>
    </userContext.Provider> 
    </Provider>
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
      {
        path:"/cart",
        element:<Cart/>,
      }

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
