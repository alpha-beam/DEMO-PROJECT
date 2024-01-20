import { useSelector } from "react-redux";

const BagSummary = () => {
  const bag = useSelector((store) => store.bag);
  let totalMRP = 0;
  let totalDiscount = 0;
  const items = useSelector((store) => store.items);
  const newit = items.filter((it) => {
    const ind = bag.indexOf(it.id);
    return ind >= 0;
  });
  const giveme = (mrp, dis) => {
    totalMRP += mrp;
    totalDiscount += (dis * mrp) / 100;
  };
  newit.map((it) => {
    giveme(it.current_price, it.discount_percentage);
  });
  // bagItemObjects.forEach((bagItem) => {
  //   totalMRP += bagItem.original_price;
  //   totalDiscount += bagItem.original_price - bagItem.current_price;
  // });

  let finalPayment = totalMRP - totalDiscount + 99;

  return (
    <div class="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({bag.length} Items) </div>
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
};
export default BagSummary;
