import { restaurants } from "../mockData/restaurentData";
import RestroCard from "./RestroCard";
import { SWIGGY_IMAGE_URL } from "../constants";

const AllRestaurents = () => {
  return (
    <div className="restro-list">{
        restaurants.map((restaurant) => {
            const { id, name, avgRating, cloudinaryImageId } = restaurant.info;
            const imageUrl = SWIGGY_IMAGE_URL + cloudinaryImageId;
            return <div>
            <RestroCard
              altText={name}
              imageUrl={imageUrl}
              restId={id}
              restName={name}
              restRating={avgRating}
              />
              </div>
          })
        
        }</div>
  );
};
export default AllRestaurents;
