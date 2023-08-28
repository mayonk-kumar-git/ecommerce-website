import { Link } from "react-router-dom";
import Header from "../components/pageProps/Header";

const About = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <Header title="About" />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-[3rem]">
          <span className="text-primeColor font-semibold text-lg">M&M</span> is
          one of the world's leading ecommerce brands and is internationally
          recognized for celebrating the essence of classic Worldwide cool
          looking style.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
