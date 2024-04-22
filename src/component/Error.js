
import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    // console.log(err);
    return(
        <div>
            <center><h1>Oops!!!!</h1></center>
            <center><h2>Somethings Went Wrong</h2></center>
            <center><h2>{err.status}:{err.statusText}</h2></center>
            <center><h2>{err.data}</h2></center>
            
        </div>
    )
}

export default Error;