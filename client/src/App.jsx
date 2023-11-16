import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.scss";
import Home from "./pages/Home/Home";
import Mac from "./pages/Mac/Mac";
import Watch from "./pages/Watch/Watch";
import AirPods from "./pages/AirPods/AirPods";
import ApplePad from "./pages/iPad/ApplePad";
import ApplePhone from "./pages/iPhone/ApplePhone";
import TvHome from "./pages/TV&Home/TvHome";
import Accessories from "./pages/Accessories/Accessories";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Contact from "./pages/Contact/Contact";
import ProductPage from "./pages/ProductPage/ProductPage";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "./toolkit/cartSlice";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const showProducts = async () => {
      try {
        const response = await fetch(
          process.env.REACT_APP_SERVER_URL + "/products/show-products"
        );
        if (!response.ok) {
          throw new Error("there is a some problem");
        }
        const newData = await response.json();
        setProducts(newData);
      } catch (error) {
        console.log(error);
      }
    };
    showProducts();
  }, []);

  const mode = useSelector((state) => state.cart.mode);
  const dispatch = useDispatch();
  const toggleMode = () => {
    dispatch(setMode());
  };

  const modeClass = mode === "dark" ? "dark-mode" : "light-mode";

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  useEffect(() => {
    const storedMode = localStorage.getItem("mode");
    if (storedMode && mode !== storedMode) {
      dispatch(setMode(storedMode));
    }
  }, [dispatch, mode]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div className={modeClass}>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <BrowserRouter>
          <Header products={products} toggleMode={toggleMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mac" element={<Mac products={products} />} />
            <Route path="/iPad" element={<ApplePad products={products} />} />
            <Route
              path="/iPhone"
              element={<ApplePhone products={products} />}
            />
            <Route path="/watch" element={<Watch products={products} />} />
            <Route path="/AirPods" element={<AirPods products={products} />} />
            <Route path="/tv&home" element={<TvHome products={products} />} />
            <Route
              path="/accessories"
              element={<Accessories products={products} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product-about/:productCategory/:productName"
              element={<ProductPage products={products} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
