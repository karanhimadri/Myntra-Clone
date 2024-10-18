import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

function Bag() {
  const item = useSelector((store) => store.item_store);
  const bagItemsIds = useSelector((store) => store.bag_store);

  let finallBagitems = item.filter((item) => bagItemsIds.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finallBagitems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}

export default Bag;
