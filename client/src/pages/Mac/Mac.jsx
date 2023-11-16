import { useEffect, useState, useRef } from "react";
import "./mac.scss";
import { FaCirclePlay } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import Card from "../../components/ProductCard/Card";
import { RiCloseCircleFill } from "react-icons/ri";
import cardJson from "./mac.json";
import macIphone from "../../assets/images/maciphone.png";
import macwatch from "../../assets/images/macwatch.png";
import macipad from "../../assets/images/macipad.png";
import { BiSolidDownArrow } from "react-icons/bi";

const Mac = ({ products }) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  const laptops = products.filter(
    (card) => card.categoryscategory === "laptop"
  );
  const desktops = products.filter(
    (card) => card.categoryscategory === "desktop"
  );
  const displays = products.filter(
    (card) => card.categoryscategory === "display"
  );

  useEffect(() => {
    const handleScroll = () => {
      const video = document.querySelector(".video");

      if (video) {
        if (window.scrollY > 100) {
          video.classList.add("smaller");
        } else {
          video.classList.remove("smaller");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videoRef = useRef(null);
  const [toggleIcon, setToggleIcon] = useState();
  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setToggleIcon(!toggleIcon);
    }
  };

  const [filter, setFilter] = useState("laptops");
  const filteredPage = (nameOfFilter) => {
    setFilter(nameOfFilter);
  };

  // Why we boxes  ---- start
  const [openedWhyWe, setOpenedWhyWe] = useState(
    new Array(cardJson.whywe.length).fill(false)
  );

  const toggleWhyWe = (index) => {
    const updatedOpenedWhyWe = [...openedWhyWe];
    updatedOpenedWhyWe[index] = !updatedOpenedWhyWe[index];
    setOpenedWhyWe(updatedOpenedWhyWe);
    if (updatedOpenedWhyWe[index]) {
      document.body.classList.add("whole-back-open");
    } else {
      document.body.classList.remove("whole-back-open");
    }
  };

  const openedContentRef = useRef();
  useEffect(() => {
    function clickOutsideFromContent(event) {
      if (
        openedContentRef.current &&
        !openedContentRef.current.contains(event.target)
      ) {
        const index = openedWhyWe.findIndex((item) => item === true);
        if (index !== -1) {
          toggleWhyWe(index);
        }
      }
    }
    document.addEventListener("mousedown", clickOutsideFromContent);
    return () => {
      document.removeEventListener("mousedown", clickOutsideFromContent);
    };
  }, [openedContentRef, openedWhyWe, toggleWhyWe]);
  // why we boxes ---- end

  // significant others --- start
  const [significantBox, setSignificantBox] = useState(
    Array.from({ length: cardJson.significantothers.length }, (_, i) => i === 0)
  );

  const toggleBox = (index) => {
    const updatedBox = new Array(significantBox.length).fill(false);
    updatedBox[index] = true;
    setSignificantBox(updatedBox);

    const arrowIcon = document.querySelector(`.arrow-icon-${index}`);

    if (updatedBox[index]) {
      arrowIcon.classList.add("rotate");
    } else {
      arrowIcon.classList.remove("rotate");
    }
  };

  // significant others --- end

  return (
    <section className="mac-section">
      <div className="thefirst-section">
        <div className="content">
          <h1>Mac</h1>
          <p>
            If you can dream it, <br /> Mac can do it.
          </p>
        </div>
        <div className="video">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/ddlca7oam/video/upload/v1699350196/Recording_2023-11-07_133910_a5jmc3.mp4"
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
          <h1>Explore the lineup</h1>

          <div className="filteration">
            <p
              onClick={() => filteredPage("laptops")}
              className={`${
                filter === "laptops" ? "filter active-filter" : "filter"
              }`}
            >
              Laptops
            </p>
            <p
              onClick={() => filteredPage("desktops")}
              className={`${
                filter === "desktops" ? "filter active-filter" : "filter"
              }`}
            >
              Desktops
            </p>
            <p
              onClick={() => filteredPage("displays")}
              className={`${
                filter === "displays" ? "filter active-filter" : "filter"
              }`}
            >
              Displays
            </p>
          </div>
        </div>
        <div className="filter-products">
          {filter === "laptops" && (
            <div className={`filterr ${laptops.length !== 3 ? "less" : ""}`}>
              {laptops.slice(0, 3).map((item) => (
                <Card productItem={item} key={item._id} />
              ))}
            </div>
          )}
          {filter === "desktops" && (
            <div className={`filterr ${desktops.length !== 3 ? "less" : ""}`}>
              {desktops.slice(0, 3).map((item) => (
                <Card productItem={item} key={item._id} />
              ))}
            </div>
          )}
          {filter === "displays" && (
            <div className={`filterr ${displays.length !== 3 ? "less" : ""}`}>
              {displays.slice(0, 3).map((item) => (
                <Card productItem={item} key={item._id} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="thethird-section">
        <h1>
          Why Apple is the best <br />
          place to buy Mac.
        </h1>

        <div className="cards">
          {cardJson.whywe.map((item, index) => (
            <div key={item.id}>
              <div className="card" onClick={() => toggleWhyWe(index)}>
                <div className="card-in">
                  <p className="card-head">{item.cardContent}</p>
                  <p className="card-body">{item.cardContent2}</p>
                </div>
              </div>
              {openedWhyWe[index] && (
                <div className="whole-back">
                  <div className="content" ref={openedContentRef}>
                    <div className="content-in">
                      <p className="head-content">{item.openedContent}</p>
                      <p className="body-content">{item.openedText}</p>
                    </div>
                    <RiCloseCircleFill
                      className="content-close-icon"
                      onClick={() => toggleWhyWe(index)}
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="thefourth-section">
        <h1>Significant others.</h1>

        <div className="box">
          <div className="box-in">
            <div className="left-side">
              {cardJson.significantothers.map((item, index) => (
                <div
                  className="content-box"
                  key={item.id}
                  onClick={() => toggleBox(index)}
                >
                  <div className="top-side">
                    <h5>{item.content}</h5>
                    <BiSolidDownArrow
                      className={`arrow-icon-${index} ${
                        significantBox[index] ? "rotate" : ""
                      }`}
                    />
                  </div>
                  <div className="bottom-side">
                    {significantBox[index] && <p>{item.text}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="right-side">
              {cardJson.significantothers.map((item, index) => (
                <div className="image-box" key={item.id}>
                  {significantBox[index] && (
                    <img
                      src={
                        item.id === 1
                          ? macIphone
                          : item.id === 2
                          ? macipad
                          : item.id === 3
                          ? macwatch
                          : ""
                      }
                      alt="item image"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mac;
