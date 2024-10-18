import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((store) => store.item_store);


  return (
    <div className="flex-item">
      {data.map((item) => (
        <HomeItem key={item.id} item={item}></HomeItem>
      ))}
    </div>
  );
}

export default Home;
