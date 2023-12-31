import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProductBreadcrumbs from "../components/pageProps/ProductBreadcrumbs";
import ProductInfo from "../components/pageProps/productDetails/ProductInfo";
import ProductsOnSale from "../components/pageProps/productDetails/ProductsOnSale";
import ProductDataType from "../customDatatype/Product";

const defaultProductInfo: ProductDataType = {
  _id: 0,
  img: "",
  productName: "Product Name",
  price: "0",
  color: "red",
  badge: false,
  rating: 0.0,
  des: "Product description",
};

const ProductDetails = () => {
  const location = useLocation();
  const [productInfo, setProductInfo] =
    useState<ProductDataType>(defaultProductInfo);

  useEffect(() => {
    setProductInfo(location.state.item);
  }, [location, productInfo]);

  return (
    <div className="w-full mx-auto border-b-[1px] border-b-gray-300">
      <div className="max-w-container mx-auto px-4">
        <div className="xl:-mt-10 -mt-7">
          <ProductBreadcrumbs />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-4 h-full -mt-5 xl:-mt-8 pb-10 bg-gray-100 p-4">
          <div className="h-full">
            <ProductsOnSale />
          </div>
          <div className="h-full xl:col-span-2">
            <img
              className="w-full h-full object-cover"
              src={productInfo?.img}
              alt={productInfo?.img}
            />
          </div>
          <div className="h-full w-full md:col-span-2 xl:col-span-3 xl:p-14 flex flex-col gap-6 justify-center">
            <ProductInfo productInfo={productInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
