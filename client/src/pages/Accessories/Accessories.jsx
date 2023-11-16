import "./accessories.scss";
import Card from "../../components/ProductCard/Card";
import { useEffect } from "react";

const Accessories = ({ products }) => {
  const macAccessories = products.filter(
    (item) => item.categoryscategory === "mac accessories"
  );
  const soundAccessories = products.filter(
    (item) => item.categoryscategory === "sound accessories"
  );
  const iPadAccessories = products.filter(
    (item) => item.categoryscategory === "iPad accessories"
  );
  const iWatchAccessories = products.filter(
    (item) => item.categoryscategory === "iWatch accessories"
  );
  const iPhoneAccessories = products.filter(
    (item) => item.categoryscategory === "iPhone accessories"
  );
  const holidayAccessories = products.filter(
    (item) => item.categoryscategory === "holiday accessories"
  );

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section className="accessories-section">
      <div className="thefirst-section">
        <h1>Featured Mac Accessories</h1>
        <div className="cards">
          {macAccessories.slice(0, 4).map((card) => (
            <Card productItem={card} key={card._id} />
          ))}
        </div>
      </div>

      <div className="thesecond-section">
        <h1>Sound Essentials</h1>
        <div className="cards">
          {soundAccessories.slice(0, 4).map((card) => (
            <Card key={card._id} productItem={card} />
          ))}
        </div>
      </div>

      <div className="thethird-section">
        <h1>Featured iPad Accessories</h1>
        <div className="cards">
          {iPadAccessories.slice(0, 4).map((card) => (
            <Card key={card._id} productItem={card} />
          ))}
        </div>
      </div>

      <div className="thefourth-section">
        <h1>Apple Watch Bands</h1>
        <div className="cards">
          {iWatchAccessories.slice(0, 4).map((card) => (
            <Card key={card._id} productItem={card} />
          ))}
        </div>
      </div>

      <div className="thefifth-section">
        <h1>Featured iPhone Accessories</h1>
        <div className="cards">
          {iPhoneAccessories.slice(0, 4).map((card) => (
            <Card key={card._id} productItem={card} />
          ))}
        </div>
      </div>

      <div className="thesixth-section">
        <h1>Holiday Accessories</h1>
        <div className="cards">
          {holidayAccessories.slice(0, 4).map((card) => (
            <Card key={card._id} productItem={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;
