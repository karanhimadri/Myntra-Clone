import { useEffect } from "react";
import HomeItem from "./HomeItem";
import { useSelector } from "react-redux";

function Home() {
  const data = useSelector((store) => store.item_store);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      const user_token = Math.floor(100000 + Math.random() * 900000);
      localStorage.setItem("token", user_token);
    }
  }, []);

  return (
    <div className="flex-item">
      {data.map((item) => (
        <HomeItem key={item.id} item={item}></HomeItem>
      ))}
    </div>
  );
}

export default Home;
