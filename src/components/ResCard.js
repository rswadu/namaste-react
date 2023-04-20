import { CDNLink } from "../utils/constants";
const ResCard = (props) => {
  // console.log(props);
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
  } = resData?.data;
  return (
    <div className="resCardContainer">
      <div className="resCard">
        <img src={CDNLink + cloudinaryImageId} alt="" />
        <h2 className="resCardTitle">{name}</h2>
        <h3 className="cuisine">{cuisines.join(", ")}</h3>
        <div className="desc">
          <div className="star">{avgRating} stars</div>
          <div className="deliveryTime">{deliveryTime} mins</div>
          <div className="price">{costForTwo / 100} for two</div>
        </div>
      </div>
    </div>
  );
};
export default ResCard;
