import "./featuredProperties.css";
import { hotelData } from "../data";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      {hotelData.slice(6).map((data, i) => (
        <div key={i} className="fpItem">
          <img src={data.image} alt="" className="fpImg" />
          <span className="fpName">{data.name}</span>
          <span className="fpCity">{data.city}</span>
          <span className="fpPrice">Starting from ${data.price}</span>
          <div className="fpRating">
            <span>Rating ({data.rating})</span>
            <p>{data.feedback}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProperties;
