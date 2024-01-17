import Header from "./Header";
import Fotter from "./Fotter";
const Bag = () => {
  return (
    <>
      <Header />
      <main>
        <div class="bag-page">
          <div class="bag-items-container"></div>
          <div class="bag-summary"></div>
        </div>
      </main>
      <Fotter />
    </>
  );
};
export default Bag;
