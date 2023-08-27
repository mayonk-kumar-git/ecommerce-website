import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import HeaderBottom from "./components/header/HeaderBottom";
import SidePanel from "./components/designLayouts/SidePanel";
import Footer from "./components/Footer/Footer";
import FooterBottom from "./components/Footer/FooterBottom";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <>
      <Header />
      <HeaderBottom />
      <SidePanel />
      <Routes>
        {/* =================== Navlink Start here ================== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* =================== Navlink End here ==================== */}
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
