import { useState,useEffect } from "react";
import { LIST_MENU_API } from "./links";

const useResturantMenu = (resId) =>{
    const [resInfo,setResInfo] = useState(null);
    
useEffect(() => {
    fetchMenu();
},[]);

const fetchMenu = async() => {
const data = await fetch(LIST_MENU_API + resId +  "&catalog_qa=undefined&isMenuUx4=true");
const json = await data.json();
setResInfo(json.data);

}
    
    return resInfo;

}
export default useResturantMenu;