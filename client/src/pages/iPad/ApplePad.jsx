import "./iPad.scss";
import { Link } from "react-router-dom";
import ipadsImage from "../../assets/images/ipads.jpg";
import Card from "../../components/ProductCard/Card";
import { BiCamera } from "react-icons/bi";
import wonderAwaits from "../../assets/images/cardback2.jpg"
import { useEffect } from "react";
const ApplePad = ({ products }) => {
  const ipadProducts = products.filter(
    (item) => item.productCategory === "iPad"
  );
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section className="ipad-section">
      <div className="thefirst-section">
        <div className="content">
          <h1>
            iPad Pro <br />
            Supercharged by M2
          </h1>
          <p>
            from <span>$799</span>
          </p>
          <Link>Learn more</Link>
        </div>
      </div>

      <div className="thesecond-section">
        <div className="box">
          <div className="left-side">
            <img src={ipadsImage} alt="ipad image" />
          </div>
          <div className="right-side">
            <h1>iPad</h1>
            <p>
              Lovable. Drawable. <br /> Magical.
            </p>
            <span>from $449</span>
            <Link>Learn more</Link>
          </div>
        </div>
      </div>

      <div className="thethird-section">
        <h1>Which iPad is right for you?</h1>
        <div className="ipad-products">
          {ipadProducts.map((card) => (
            <div className="ipads" key={card._id}>
              <Card productItem={card} />
              <div className="ipad-products-bottom">
                <p>{card.cpu}</p>
                <p>{card.display}</p>
                <p className="camera">
                  <BiCamera />
                  {card.frontCamera}
                </p>
                <p className="camera">
                  <BiCamera />
                  {card.backCamera}
                </p>
                <p>{card.usb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="thefourth-section">
        <div className="wonder-box">
          <div className="image">
          <img src={wonderAwaits} alt="image" />
          </div>
          <div className="content">
            <h3>Wonder awaits.</h3>
            <p>Give the gifts they’ve been looking forward to all year.</p>
            <Link>Shop.</Link>
          </div>
        </div>
      </div>

      <div className="thefifth-section">
        <div className="box">
          <div className="left-box">
            <h3>Apple and Education</h3>
            <p>Empowering educators and students <br /> to move the world forward.</p>
            <Link>Learn more</Link>
          </div>

          <div className="right-box">
            <h3>Apple at Work</h3>
            <Link>Learn more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplePad;
