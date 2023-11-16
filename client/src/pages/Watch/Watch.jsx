import { Link } from "react-router-dom";
import "./watch.scss";
import { BsApple, BsBatteryFull } from "react-icons/bs";
import watchBack from "../../assets/images/watchback.jpg"
import watchBack2 from "../../assets/images/watchbac2.png"
import Card from "../../components/ProductCard/Card";
import watchesImage from "../../assets/images/watches.jpg"
import { useEffect } from "react";

const Watch = ({products}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const watchproducts = products.filter((item) => item.productCategory === "iWatch");
  return (
    <section className='iwatch-section'>
      <div className="thefirst-section">
        <div className="content">
            <div className="name-content">
              <BsApple className="apple-icon"/>
              <p className="watch-p">WATCH</p>
            </div>
            <h1>Smarter. Brighter. Mightier.</h1>
            <p>From $399</p>
            <Link>Learn more</Link>
        </div>
        <div className="image">
          <img src={watchBack} alt="watch image" />
        </div>
      </div>

      <div className="thesecond-section">
        <div className="content">
            <div className="name-content">
              <BsApple className="apple-icon"/>
              <p className="watch-p">WATCH</p>
            </div>
            <h1>Next level adventure.</h1>
            <p>From $799</p>
            <Link>Learn more</Link>
        </div>
        <div className="image">
          <img src={watchBack2} alt="watch image" />
        </div>
      </div>

      <div className="thethird-section">
      <h1>Which iPhone is right for you?</h1>
        <div className="section-in">
        {watchproducts.slice(0, 3).map((card) => (
          <div className="cards" key={card._id}>
            <div className="top-side">
              <Card productItem={card} />
            </div>
            <div className="bottom-side">
              <p>{card.display}</p>
              <p>{card.cpu}</p>
              <div className="battery">
                <BsBatteryFull className="iconn"/>
                <p>{card.batteryLife}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>

      <div className="thefourth-section">
        <div className="box">
            <div className="left-side">
              <p>Family Setup</p>
              <h4>Your family joined at the wrist.</h4>
              <span>Now family members who don’t have an iPhone can stay in touch with Apple Watch.</span>
              <Link>Learn more</Link>
            </div>

            <div className="right-side">
              <img src={watchesImage} alt="watches image" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Watch