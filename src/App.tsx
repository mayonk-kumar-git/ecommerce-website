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
import Offer from "./pages/Offer";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import SignUp from "./pages/Auth/SignUp";
import SignIn from "./pages/Auth/SignIn";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      {/* <HeaderBottom /> */}
      <SidePanel />
      <Routes>
        {/* =================== Navlink Start here ================== */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        {/* =================== Navlink End here ==================== */}
        <Route path="/product/:_id" element={<ProductDetails />}></Route>
        <Route path="/offer" element={<Offer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/paymentgateway" element={<Payment />}></Route>
        {/* =================== Auth Pages Start ==================== */}
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        {/* =================== Auth Pages End ==================== */}
      </Routes>
      <Footer />
      <FooterBottom />
    </>
  );
}

export default App;
