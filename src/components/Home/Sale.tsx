import { Link } from "react-router-dom";
import {
  saleImgOne,
  saleImgTwo,
  saleImgThree,
} from "../../assets/images/imageAssets";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-1/2 h-full">
        <Link to="/shop">
          <img
            className="h-full w-full object-cover"
            src={saleImgOne}
            alt="Sale Banner"
          />
        </Link>
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
        <div className="h-1/2 w-full bg-red-500">
          <Link to="/shop">
            <img
              className="h-full w-full object-fit"
              src={saleImgTwo}
              alt="Sale Banner"
            />
          </Link>
        </div>
        <div className="h-1/2 w-full">
          <Link to="/shop">
            <img
              className="h-full w-full object-fit"
              src={saleImgThree}
              alt="Sale Banner"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sale;
