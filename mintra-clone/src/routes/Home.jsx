import { useSelector } from "react-redux";
import HomeItem from "../components/HomeItem";
const Home = () => {
  const itmes = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {itmes.map((it) => (
          <HomeItem key={it.id} item={it} />
        ))}
      </div>
    </main>
  );
};
export default Home;
