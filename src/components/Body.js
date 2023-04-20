import ResCard from "./ResCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurantList,setresList]=useState(resList);
  return (
    <div className="bodyContainer">
      <div className="search">
        <input className="searchBox" type="text" />
        <button className="searchButton">Search</button>
      </div>
      <div className="filterContainer">
        <button
          className="filterBtn"
          onClick={() => {
            const filteredList = restaurantList.filter((res) => res.data.avgRating > 4);
            setresList(filteredList);
          }}
        >
          top rated restaurants
        </button>
      </div>
      <div className="resContainer">
        {restaurantList.map((e) => (
          <ResCard key={e.data.id} resData={e} />
        ))}
        <ResCard resData={restaurantList[0]} />

        {/* <ResCard resCardTitle="Chai Tapri" cuisine="chai, coffee"/> */}
      </div>
    </div>
  );
};
export default Body;
