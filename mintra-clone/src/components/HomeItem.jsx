import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../store/BagSlice";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdDelete } from "react-icons/md";
const HomeItem = ({ item }) => {
  const bag = useSelector((store) => store.bag);
  const Dispatch = useDispatch();
  const elefound = bag.indexOf(item.id) >= 0;
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {!elefound ? (
        <button
          type="button"
          class="btn btn-success btn-add-bag"
          onClick={() => {
            Dispatch(BagActions.addToBag(item.id));
          }}
        >
          <IoIosAddCircleOutline /> Add To Bag
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-danger btn-add-bag"
          onClick={() => Dispatch(BagActions.removeFromBag(item.id))}
        >
          <MdDelete /> Remove
        </button>
      )}
    </div>
  );
};
export default HomeItem;
