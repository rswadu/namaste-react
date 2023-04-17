// const root=document.getElementById('root');
// const element=document.createElement('h1');

// element.innerHTML='Hello World';
// root.appendChild(element);
// const heading=React.createElement('h1',{id:'heading'},'hello world');
// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";
// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i'm an h1 tag"),
//     React.createElement("h1", {}, "i'm second h1 tag and i'm edited"),
//   ])
// );

// const jsxHeading=(<h1 className="heading">namaste react from jsx</h1>);

const Heading =()=>{
    return <h1 className="heading">namaste react from jsx</h1>;
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading/>);
