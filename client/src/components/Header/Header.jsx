import "./header.scss";
import { BsApple } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { navLinks } from "../../constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { IoPersonSharp, IoBag } from "react-icons/io5";
import { Badge, message } from "antd";
import { MdDarkMode } from "react-icons/md";
import { HiSun } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GiAirplaneDeparture } from "react-icons/gi";
import {
  decrease,
  deleteProduct,
  increase,
  reset,
} from "../../toolkit/cartSlice";
import {
  AiFillMinusCircle,
  AiFillPlusCircle,
  AiOutlineCloseSquare,
} from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Form from "../../pages/Login&Register/Form";

const Header = ({ products, toggleMode }) => {
  const currentLocation = useLocation();
  const navigate = useNavigate();

  // search -------------->start

  const searchBoxRef = useRef();
  const [openSearch, setOpenSearch] = useState(false);
  const toggleSearch = () => {
    setOpenSearch(!openSearch);
  };

  useEffect(() => {
    function clickOutside(event) {
      if (
        searchBoxRef.current &&
        !searchBoxRef.current.contains(event.target)
      ) {
        toggleSearch();
        setSearch("")
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [searchBoxRef, toggleSearch]);

  const [search, setSearch] = useState("");

  const [filteredProductsForSearch, setFilteredProductsForSearch] = useState();
  const filteredItems = [...(filteredProductsForSearch || [])];

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredProductsForSearch();
    } else {
      const keywords = search.toLowerCase().trim().split(/\s+/);
      setFilteredProductsForSearch(
        products.filter((item) =>
          keywords.every(
            (keyword) =>
              item.productName.toLowerCase().includes(keyword) ||
              item.productCategory.toLowerCase().includes(keyword)
          )
        )
      );
    }
  }, [search, products, setFilteredProductsForSearch]);

  // search -----------> end

  // basket -----------> start
  const [basket, setBasket] = useState(false);
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const isBasketEmpty = cart.cartItems.length === 0;

  const outsideRef = useRef();

  const openBasket = () => {
    setBasket(true);
    setLogin(false)
    setOverlay(false)
  };

  useEffect(() => {
    function clickOutside(event) {
      if (outsideRef.current && !outsideRef.current.contains(event.target)) {
        setBasket(false);
      }
    }
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [outsideRef]);

  useEffect(() => {
    if (basket) {
      document.body.classList.add("whole-back-open");
    } else {
      document.body.classList.remove("whole-back-open");
    }
  }, [basket]);

  // basket ---------> end

  const mode = useSelector((state) => state.cart.mode);
  const modeIcon =
    mode === "dark" ? (
      <HiSun className="sun-icon" />
    ) : (
      <MdDarkMode className="icon" />
    );

  // login and register box -----> start
  const [login, setLogin] = useState(false);
  const openLoginBox = () => {
    setLogin(true)
    setOverlay(false)
    setBasket(false)
  };
  const outsideLoginRef = useRef();

  useEffect(() => {
    if (login) {
      document.body.classList.add("whole-back-open");
    } else {
      document.body.classList.remove("whole-back-open");
    }

    function clickOutsideOfLoginBox(event) {
      if (
        outsideLoginRef.current &&
        !outsideLoginRef.current.contains(event.target)
      ) {
        setLogin(false);
      }
    }
    document.addEventListener("mousedown", clickOutsideOfLoginBox);
    return () => {
      document.removeEventListener("mousedown", clickOutsideOfLoginBox);
    };
  }, [login, outsideLoginRef]);

  // login and register box -----> end

  const user = useSelector((state) => state.cart.user);
  const [isOrderCreated, setIsOrderCreated] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsOrderCreated(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [isOrderCreated]);

  const forBuyProducts = () => {
    if (user) {
      setBasket(false);
      setIsOrderCreated(true);
    } else {
      setBasket(false);
      setLogin(true);
    }
  };

  // overlay ---------> start
  const overlayRef = useRef(null);
  const [overlay, setOverlay] = useState(false);
  const openOverlay = () => {
    setOverlay(true);
    setLogin(false)
    setBasket(false)
  };
  useEffect(() => {
    if (overlay) {
      document.body.classList.add("whole-back-open");
    } else {
      document.body.classList.remove("whole-back-open");
    }

    function clickOutsideOfOverlay(event) {
      if (overlayRef.current && !overlayRef.current.contains(event.target)) {
        setOverlay(false);
      }
    }
    document.addEventListener("mousedown", clickOutsideOfOverlay);
    return () => {
      document.removeEventListener("mousedown", clickOutsideOfOverlay);
    };
  }, [overlay, overlayRef]);
  // overlay ---------> end

  return (
    <header>
      <nav>
        <div className="nav-in">
          <div className="logo" onClick={() => navigate("/")}>
            <BsApple />
          </div>

          <div className="nav-links">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.href}
                className={`${
                  currentLocation.pathname === link.href ? "active-link" : ""
                }`}
              >
                {link.linkname}
              </Link>
            ))}
          </div>

          <div className="tools">
            <div className="search">
              <LuSearch className="icon" onClick={toggleSearch} />

              {openSearch && (
                <div className="search-form-box" ref={searchBoxRef}>
                  <form className="search-form">
                    <input
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </form>
                  <div className="search-items-box">
                    {search && (
                      <div className="search-items">
                        {filteredItems?.length > 0 ? (
                          filteredItems.slice(0, 6).map((item) => (
                            <p
                              className="search-item"
                              key={item._id}
                              onClick={() => {
                                navigate(
                                  `/product-about/${encodeURIComponent(
                                    item.productCategory
                                  )}/${encodeURIComponent(item.productName)}`
                                );
                                setSearch("");
                                setOpenSearch(false);
                              }}
                            >
                              {item.productName || item.productCategory}
                            </p>
                          ))
                        ) : (
                          <p className="no-products-find">No Products Found</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mode" onClick={toggleMode}>
              {modeIcon}
            </div>

            <div className="login" onClick={openLoginBox}>
              <IoPersonSharp className="icon" />
            </div>

            {login && (
              <Form outsideLoginRef={outsideLoginRef} isBoxOpen={setLogin} />
            )}

            <div className="basket">
              <Badge
                count={cart.cartItems.length}
                offset={[0, 0]}
                onClick={openBasket}
                style={{ cursor: "pointer" }}
              >
                <IoBag className="icon" />
              </Badge>

              {basket && (
                <div className="basket-back">
                  <div className="basket-in" ref={outsideRef}>
                    <div
                      className="close-icon"
                      onClick={() => setBasket(false)}
                    >
                      <AiOutlineCloseSquare />
                    </div>

                    {isBasketEmpty ? (
                      <div className="video">
                        <video
                          src="https://res.cloudinary.com/ddlca7oam/video/upload/v1699969025/empty_xxh5iq.mp4"
                          autoPlay
                          muted
                          loop
                        ></video>
                      </div>
                    ) : (
                      <div className="basket-items">
                        {cart.cartItems.map((item) => (
                          <li key={item._id}>
                            <div className="basket-item">
                              <div className="image-side">
                                <img src={item.productImage} alt="" />
                              </div>
                              <div className="name-mark-price">
                                <div className="name-mark">
                                  <p className="product-name">
                                    {item.productName}
                                  </p>
                                  <p>{item.productCategory}</p>
                                </div>
                                <div className="price">
                                  <p>
                                    <span>{item.newPrice}$ </span>X{" "}
                                    {item.quantity}
                                  </p>
                                </div>
                              </div>
                              <div className="right-side">
                                <div className="incrs-decrs">
                                  <AiFillPlusCircle
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatch(increase(item))}
                                  />
                                  <p>{item.quantity}</p>
                                  <AiFillMinusCircle
                                    style={{ cursor: "pointer" }}
                                    onClick={() => dispatch(decrease(item))}
                                  />
                                </div>

                                <RiDeleteBin5Fill
                                  className="del-icon"
                                  onClick={() => {
                                    dispatch(deleteProduct(item));
                                    message.success(
                                      `${item.productName} is removed`
                                    );
                                  }}
                                />
                              </div>
                            </div>
                          </li>
                        ))}
                      </div>
                    )}

                    {isBasketEmpty ? (
                      <div className="total-price">
                        <p className="total">Total: {cart.total}$</p>
                        <div
                          style={{ opacity: ".5", cursor: "not-allowed" }}
                          className="clean not-allowed"
                        >
                          <p>Clean</p>
                        </div>
                      </div>
                    ) : (
                      <div className="total-price">
                        <p className="total">Total: {cart.total}$</p>
                        <div className="buy-products" onClick={forBuyProducts}>
                          <p>Buy</p>
                        </div>
                        <div
                          onClick={() => {
                            dispatch(reset());
                            message.success("The basket successfully cleared");
                          }}
                          className="clean"
                        >
                          <p>Clean</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {isOrderCreated && (
                <div className="order-is-coming">
                  <div className="content">
                    <div className="nameofuser">
                      <p>dear,</p> <h4>{user?.username}</h4>
                    </div>
                    <GiAirplaneDeparture className="icon" />
                    <p>Your order has been confirmed and is on its way.</p>
                  </div>
                </div>
              )}
            </div>

            <div className="bars icon" onClick={openOverlay}>
              <FaBars />
            </div>
          </div>
        </div>
      </nav>
      {overlay && (
        <div className="overlay-back">
          <div className="overlay" ref={overlayRef}>
            <div className="close-icon" onClick={() => setOverlay(false)}>
              <AiOutlineCloseSquare />
            </div>

            <div className="overlay-tools">
              <div className="mode" onClick={toggleMode}>
                {modeIcon}
              </div>

              <div className="login" onClick={openLoginBox}>
                {
                  user ? (
                    <div className="user">
                      <IoPersonSharp className="icon" />
                      <p>{user.username}</p>
                    </div>
                  ) : (
                    <p>Login</p>
                  )
                }
              </div>
            </div>

            <div className="overlay-in">
              <div className="nav-links">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.href}
                    className={`${
                      location.pathname === link.href ? "active-link" : ""
                    }`}
                    onClick={() => setOverlay(false)}
                  >
                    {link.linkname}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
