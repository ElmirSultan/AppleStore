import "./iPhone.scss";
import { Link } from "react-router-dom";
import iphoneback from "../../assets/images/iphoneback.jpg";
import iphoneback2 from "../../assets/images/iphoneback2.jpg";
import iphonebackse from "../../assets/images/iphonese.jpg";
import Card from "../../components/ProductCard/Card";
import { BiCamera } from "react-icons/bi";
import {BsBatteryFull,BsUsbC} from "react-icons/bs"
import magSafe from "../../assets/images/magsafe.jpg"
import { useEffect } from "react";


const ApplePhone = ({ products }) => {
  const iphoneProducts = products.filter(
    (item) => item.productCategory === "iPhone"
  );
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section className="iphone-section">
      <div className="thefirst-section">
        <div className="content">
          <h1>iPhone 15 Pro</h1>
          <h3>Titanium</h3>
          <p>From $999 or $41/mo</p>
          <Link>Learn more</Link>
        </div>
        <div className="image">
          <img src={iphoneback} alt="image" />
        </div>
      </div>
      <div className="thesecond-section">
        <div className="content">
          <h1>iPhone 15</h1>
          <h3>Newphoria</h3>
          <p>From $799 or $33/mo</p>
          <Link>Learn more</Link>
        </div>
        <div className="image">
          <img src={iphoneback2} alt="image" />
        </div>
      </div>
      <div className="thethird-section">
        <div className="section-in">
          <div className="content">
            <h1>iPhone SE</h1>
            <h3>
              Love the power. <br />
              Love the price.
            </h3>
            <p>From $429 or $17/mo</p>
            <Link>Learn more</Link>
          </div>
          <div className="image">
            <img src={iphonebackse} alt="image" />
          </div>
        </div>
      </div>

      <div className="thefourth-section">
        <h1>Which iPhone is right for you?</h1>
        <div className="section-in">
        {iphoneProducts.slice(0, 4).map((card) => (
          <div className="cards" key={card._id}>
            <div className="top-side">
              <Card productItem={card} />
            </div>
            <div className="bottom-side">
              <p>{card.display}</p>
              <p>{card.cpu}</p>
              <div className="camera">
                <BiCamera className="iconn"/>
                <p>{card.backCamera}</p>
              </div>
              <div className="battery">
                <BsBatteryFull className="iconn"/>
                <p>{card.batteryLife}</p>
              </div>
              <div className="usb">
                  <BsUsbC className="iconn" />
                  <p>{card.usb}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="thefifth-section">
        <h1>Featured accessories</h1>

        <div className="box">
          <div className="left-side">
            <h4>MagSafe</h4>
            <p>Snap on a magnetic case, wallet, or both. And get fast, efficient wireless charging.</p>
          </div>
          <div className="right-side">
            <img src={magSafe} alt="magsafe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplePhone;
