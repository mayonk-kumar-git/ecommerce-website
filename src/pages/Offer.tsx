import SpecialOffers from "../components/Home/SpecialOffers";
import Header from "../components/pageProps/Header";

const Offer = () => {
  return (
    <div className="max-w-container mx-auto">
      <Header title="Offer" />
      <div className="pb-10">
        <SpecialOffers />
      </div>
    </div>
  );
};

export default Offer;
