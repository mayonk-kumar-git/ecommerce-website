import { useState, useEffect } from "react";
import Header from "../components/pageProps/Header";
import Pagination from "../components/pageProps/shopPage/Pagination";
import ProductBanner from "../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  const itemsPerPageFromBanner = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Header title="Products" />
      {/* ================= Products Start here =================== */}
      <div className="w-full h-full flex pb-20 gap-10">
        <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
          <ShopSideNav />
        </div>
        <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
          <ProductBanner itemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
      {/* ================= Products End here ===================== */}
    </div>
  );
};

export default Shop;
