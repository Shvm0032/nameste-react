
import { useState,useEffect } from "react"
import {GITHUB_USER_DATA} from "../utils/links";

const useUserhook = () => {
    const [gitData,setGitData] = useState(0);

useEffect (() => {
    fetchGitdata();
},[])

const fetchGitdata = async () => {
    const data = await  fetch(GITHUB_USER_DATA);
    const json = await data.json();

    setGitData(json);
};

    return gitData;
}

export default useUserhook;