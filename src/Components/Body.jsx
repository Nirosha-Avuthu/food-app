import Search from "./Search";
import AllRestaurents from "./AllRestaurents";

const Body = () => {
  return (
    <div className="appBody">
      <Search />
      <div className="allRestaurents">
       <AllRestaurents/>
      </div>
    </div>
  );
};

export default Body;
