import { Link } from "react-router-dom";
import "./card.scss";
import Button from "../Button/Button";
import { BiCart } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addProduct } from "../../toolkit/cartSlice";
import { message } from "antd";

const Card = ({ productItem }) => {
  const dispatch = useDispatch();
  const addClick = () => {
    dispatch(addProduct({...productItem,quantity:1}))
    message.success(`${productItem.productName} is added successfully`)
  }
  return (
    <div className="product-card">
      <div className="product-card-in">
        <div className="top-side">
          <div className="image">
            <img src={productItem.productImage} alt="product image" />
          </div>
          <div className="name">
            <p>{productItem.productName}</p>
            <span>{productItem.cpu}</span>
          </div>
        </div>
        <div className="bottom-side">
          <div className="prices">
            {productItem.oldPrice ? (
              <p className="oldprice">{productItem.oldPrice}$</p>
            ) : (
              ""
            )}
            <p>{productItem.newPrice}$</p>
          </div>
          <div className="more">
            <Link
              to={`/product-about/${encodeURIComponent(
                productItem.productCategory
              )}/${encodeURIComponent(productItem.productName)}`}
            >
              Learn more
            </Link>
            <Button buttonText={"Add to cart"} butonIcon={<BiCart />} buttonClick={addClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
