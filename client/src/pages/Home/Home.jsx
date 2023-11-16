import Button from "../../components/Button/Button";
import "./home.scss";
import { Link, useNavigate } from "react-router-dom";
import { BsApple } from "react-icons/bs";
import {MdPlayCircle} from "react-icons/md"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination} from "swiper/modules";
import back1 from "../../assets/images/back1.jpg"
import back2 from "../../assets/images/back2.jpg"
import back3 from "../../assets/images/back3.jpg"
import back4 from "../../assets/images/back4.jpg"
import back5 from "../../assets/images/back5.jpg"
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <section className="home">
      <div className="thefirst-section">
        <div className="content-box">
          <h1>iPhone 15 Pro</h1>
          <p>Titanium. So strong.So light.So pro</p>
          <Button buttonText={"Learn more"} buttonClick={() => navigate("/iPhone")}/>
        </div>
      </div>

      <div className="thesecond-section">
        <div className="content-box">
          <h1>iPhone 15</h1>
          <p>New camera. New design. Newphoria</p>
          <Button buttonText={"Learn more"} buttonClick={() => navigate("/iPhone")} />
        </div>
      </div>

      <div className="thethird-section">
        <div className="content-box">
          <h1>MacBook Pro</h1>
          <p>Mind-blowing. Head-turning.</p>
          <span>Available starting 11.7</span>
          <Button buttonText={"Learn more"} buttonClick={() => navigate("/mac")}/>
        </div>
      </div>

      <div className="thefourth-section">
        <div className="card thefirst">
          <div className="content">
            <h3>iMac</h3>
            <p>Packed with more juice.</p>
            <Link to={"/mac"}>Learn more</Link>
          </div>
        </div>

        <div className="card thesecond">
          <div className="content">
            <h3>Wonder awaits</h3>
            <p>
              Give the gifts they've been
              <br /> looking forward to all year.
            </p>
            <Link to={"/tv&home"}>Learn more</Link>
          </div>
        </div>
      </div>

      <div className="thefifth-section">
        <div className="card thefirst">
          <div className="content">
            <h3>
              <BsApple /> Watch
            </h3>
            <span>series 9</span>
            <p>Smarter. Brighter. Mightier</p>
            <Link to={"/watch"}>Learn more</Link>
          </div>
        </div>

        <div className="card thesecond">
          <div className="content">
            <h3>AirPods Pro</h3>
            <p>Adaptive audio. Now playing</p>
            <Link to={"/AirPods"}>Learn more</Link>
          </div>
        </div>
      </div>

      <div className="sliderside">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="first">
              <img src={back1} alt="" />
              <Button buttonText={"Stream now"} butonIcon={<MdPlayCircle/>} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="second">
              <img src={back2} alt="" />
              <Button buttonText={"Stream now"} butonIcon={<MdPlayCircle/>} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="third">
              <img src={back3} alt="" />
              <Button buttonText={"Stream now"} butonIcon={<MdPlayCircle/>} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="fourth">
              <img src={back4} alt="" />
              <Button buttonText={"Stream now"} butonIcon={<MdPlayCircle/>} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="fifth">
              <img src={back5} alt="" />
              <Button buttonText={"Stream now"} butonIcon={<MdPlayCircle/>} />
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </section>
  );
};

export default Home;
