import { useEffect } from "react";
import Banner from "../components/Home/Banner/Banner";
import Sale from "../components/Home/Sale";
import NewArrivals from "../components/Home/NewArrivals";
import BannerBottom from "../components/Home/Banner/BannerBottom";
import BestSellers from "../components/Home/BestSellers";
import ProductOfTheYear from "../components/Home/ProductOfTheYear";
import SpecialOffers from "../components/Home/SpecialOffers";

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <ProductOfTheYear />
        <SpecialOffers />
      </div>
    </>
  );
};

export default Home;
