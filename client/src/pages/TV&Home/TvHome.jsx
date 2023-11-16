import "./tvhome.scss";
import scrollImages from "./tv.json";
import { useEffect, useRef } from "react";
import Card from "../../components/ProductCard/Card"
const TvHome = ({products}) => {
  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  const tvProducts = products.filter((item) => item.productCategory === "TV") 
  const scrollSectionRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollSection = scrollSectionRef.current;
      const scrollPosition = window.scrollY;

      const firstScroll = scrollSection.querySelector(".thefirst-scroll");
      const secondScroll = scrollSection.querySelector(".thesecond-scroll");
      const thirdScroll = scrollSection.querySelector(".thethird-scroll");

      const windowWidth = window.innerWidth;
      const maxScroll = firstScroll.scrollWidth - windowWidth;

      firstScroll.scrollLeft = scrollPosition;
      secondScroll.scrollLeft = Math.max(maxScroll - scrollPosition, 0);
      thirdScroll.scrollLeft = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="tv-section">
      <div className="thefirst-section">
        <div className="content">
          <h1>
            Channeling the best of TV. <br />
            And the best of Apple.
          </h1>
          <p>
            Discover award-winning Apple Originals series and films — with other
            favorites on Disney+, Prime Video, Netflix, Max, ESPN,3 and more.
            Experience world‑class workouts, superfun games, and exciting ways
            to enjoy hit music you’ll find only from Apple. And explore
            thousands of other top apps in the App Store. There’s more on Apple
            TV 4K than just TV.
          </p>
        </div>

        <div className="scroll-section" ref={scrollSectionRef}>
          <div className="thefirst-scroll">
            {scrollImages.row1.map((item) => (
              <div className="image-box" key={item.id}>
                <img src={item.image} alt="image" />
              </div>
            ))}
          </div>
          <div className="thesecond-scroll">
            {scrollImages.row2.map((item) => (
              <div className="image-box" key={item.id}>
                <img src={item.image} alt="image" />
              </div>
            ))}
          </div>
          <div className="thethird-scroll">
            {scrollImages.row3.map((item) => (
              <div className="image-box" key={item.id}>
                <img src={item.image} alt="image" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="thesecond-section">
        <h1>
          Which Apple TV 4K <br />
          is right for you?
        </h1>
        <div className="section-in">
          {tvProducts.slice(0, 2).map((card) => (
            <div className="cards" key={card._id}>
              <div className="top-side">
                <Card productItem={card} />
              </div>
              <div className="bottom-side">
                <p>{card.display}</p>
                <p>{card.storage}</p>
                <p>{card.cpu}</p>
                <div className="usb">
                  <p>{card.usb}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TvHome;
