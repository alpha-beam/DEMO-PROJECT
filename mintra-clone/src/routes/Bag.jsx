import Header from "../components/Header";
import Fotter from "../components/Fotter";
import BagSummary from "../components/BagSummary";
import BagItem from "../components/BagItem";
import { useSelector } from "react-redux";
const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const newit = items.filter((it) => {
    const ind = bag.indexOf(it.id);
    return ind >= 0;
  });
  return (
    <main>
      <div class="bag-page">
        <div class="bag-items-container">
          {newit.map((it) => (
            <BagItem item={it} key={it.id} />
          ))}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};
export default Bag;
