import { useSelector } from "react-redux";

function BagSummary() {
  const item = useSelector((store) => store.item_store);
  const bagItemsIds = useSelector((store) => store.bag_store);

  let finallBagitems = item.filter((item) => bagItemsIds.includes(item.id));
  const bag = useSelector((store) => store.bag_store);

  let totalMRP = 0;
  let totalDiscount = 0;

  finallBagitems.forEach((element) => {
    totalMRP += element.original_price;
    totalDiscount += element.current_price;
  });

  let finalPayment = totalMRP - totalDiscount + 99;

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bag.length} Items)</div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
}

export default BagSummary;
