import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";
import "./AllBag.css";
import { useNavigate } from "react-router-dom";

function Bag() {
  const item = useSelector((store) => store.item_store);
  const bagItemsIds = useSelector((store) => store.bag_store);

  let finallBagitems = item.filter((item) => bagItemsIds.includes(item.id));
  const navigate = useNavigate();

  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finallBagitems.length === 0 ? (
            <div className="empty-bag">
              <h2>Your Bag is Empty</h2>
              <button onClick={() => navigate("/")}>Contunue Shopping</button>
            </div>
          ) : (
            finallBagitems.map((item) => <BagItem key={item.id} item={item} />)
          )}
        </div>
        <BagSummary />
      </div>
    </main>
  );
}

export default Bag;
