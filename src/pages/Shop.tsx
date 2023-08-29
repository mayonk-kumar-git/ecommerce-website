import { useState } from "react";
import Header from "../components/pageProps/Header";
import Pagination from "../components/pageProps/shopPage/Pagination";
import ProductBanner from "../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../components/pageProps/shopPage/ShopSideNav";
import HeaderBottom from "../components/header/HeaderBottom";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState<number>(12);
  const [sortBy, setSortBy] = useState<string>("Relevance");

  const itemsPerPageFromBanner = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>
      <HeaderBottom />
      <div className="max-w-container mx-auto px-4">
        <Header title="Products" />
        {/* ================= Products Start here =================== */}
        <div className="w-full h-full flex pb-20 gap-10">
          <div className="w-[20%] lgl:w-[25%] hidden mdl:inline-flex h-full">
            <ShopSideNav />
          </div>
          <div className="w-full mdl:w-[80%] lgl:w-[75%] h-full flex flex-col gap-10">
            <ProductBanner
              itemsPerPageFromBanner={itemsPerPageFromBanner}
              setSortBy={setSortBy}
            />
            <Pagination itemsPerPage={itemsPerPage} sortBy={sortBy} />
          </div>
        </div>
        {/* ================= Products End here ===================== */}
      </div>
    </>
  );
};

export default Shop;
