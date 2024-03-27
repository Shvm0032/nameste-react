import React from "react";
import ReactDOM from "react-dom/client";

//React Element//
const elem = <span>react element inside element . </span>
const heading = <h1>
    {elem}
    It is a react element  which is calling inside the react functional component.</h1>
//React Component//
const Title = () =>(<h1 className="head">Hello Shivam its another functional componets</h1>);

//REACT FUNCTIONAL COMPONENTS//

const name ="shivam" ;
const number =10000;
const HeadingComponent = () => (
  <div id="container">
    <Title/>
    {heading}
    <h2>{name}</h2>
    <h2>{number}</h2>
    <h2>{100+400}</h2>
    {console.log("osho Danu")}
    <h1 className="heading">Hello Shivam its functonal components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
