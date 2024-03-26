
//NOTE: now u see this its very complicated that nested tag for multiple type of tags iam using  it is very confusing right thats why we use JSX for the react ..

//Nested tag//

// <div id="parent">
//     <div id="child">
//         <h1>i am h1 tag</h1>
//         <h2>i am h1 tag</h2>
//     </div>
//     <div id="child2">
//         <h1>i am h1 tag</h1>
//         <h2>i am h1 tag</h2>
//     </div>
// </div>

//Example of this//
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
    React.createElement(
        "div",
        { id: "child" },
        [React.createElement(
            "h1",
            {}, "iam h1 tag"),
        React.createElement(
            "h2",
            {}, "iam h2 tag")]
    ),
    //2//
    React.createElement(
        "div",
        { id: "child2" },
        [React.createElement(
            "h1",
            {}, "iam h1 tag"),
        React.createElement(
            "h2",
            {}, "iam h2 tag")]
    )
    ]
);
console.log(parent);

//simle tag//
// const heading = React.createElement("h1", {}, "Hello React How are you!!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);