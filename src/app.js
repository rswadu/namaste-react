import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import ResCard from "./components/ResCard";
import Body from "./components/Body";

const Layout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Layout />);
