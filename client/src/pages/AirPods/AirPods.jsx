import React, { useEffect, useRef, useState } from "react";
import "./airpods.scss";
import { Link } from "react-router-dom";
import { FaPauseCircle } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import Card from "../../components/ProductCard/Card";

const AirPods = ({products}) => {
  const airPodsProducts = products.filter((item) => item.productCategory === "AirPods");
  const airPodVideoRef = useRef(null);
  const [toggleIcon, setToggleIcon] = useState();

  const toggleVideo = () => {
    if (airPodVideoRef.current) {
      if (airPodVideoRef.current.paused) {
        airPodVideoRef.current.play();
      } else {
        airPodVideoRef.current.pause();
      }
      setToggleIcon(!toggleIcon);
    }
  };
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  return (
    <section className="airpods-section">
      <div className="thefirst-section">
        <div className="video">
          <video
            ref={airPodVideoRef}
            src="https://res.cloudinary.com/ddlca7oam/video/upload/v1699700093/airpods_efl5qi.mp4"
            autoPlay
            muted
            loop
          ></video>
          <div onClick={toggleVideo} className="video-button">
            {toggleIcon ? <FaCirclePlay /> : <FaPauseCircle />}
          </div>
        </div>
      </div>
      <div className="thesecond-section">
        <div className="content">
          <h1>AirPods</h1>
          <h3>3rd generation</h3>
          <p>from $169</p>

          <Link>Learn more</Link>
        </div>
      </div>

      <div className="thethird-section">
        <h1>
          Which AirPods are <br />
          right for you?
        </h1>
        <div className="section-in">
          {airPodsProducts.slice(0, 4).map((card) => (
            <div className="cards" key={card._id}>
              <div className="top-side">
                <Card productItem={card} />
              </div>
              <div className="bottom-side">
                <div className="usb">
                  <p>{card.usb}</p>
                </div>
                <div className="battery">
                  <p>{card.batteryLife}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirPods;
