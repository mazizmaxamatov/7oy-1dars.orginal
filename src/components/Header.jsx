import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <header>
            <div className="container">
              <div className="header_main">
                <h1>Xiaomi 12 Mi Lite</h1>
                <p>Orginallik va qulay narxni o'zida jamlagan Xiaomi 12 Mi Lite siz uchun eng yaxshi taklif!</p>
                <button>Batafsil</button>
              </div>
            </div>
          </header>
        </div>
        <div>
          <header>
            <div className="container">
              <div className="header_main">
                <h1>Samsung Galaxy S23</h1>
                <p>Eng so‘nggi texnologiyalar bilan jihozlangan Samsung Galaxy S23 siz uchun!</p>
                <button>Batafsil</button>
              </div>
            </div>
          </header>
        </div>
        <div>
          <header>
            <div className="container">
              <div className="header_main">
                <h1>iPhone 14 Pro Max</h1>
                <p>Apple-ning eng yangi flagmani iPhone 14 Pro Max – innovatsion va zamonaviy!</p>
                <button>Batafsil</button>
              </div>
            </div>
          </header>
        </div>
        <div>
          <header>
            <div className="container">
              <div className="header_main">
                <h1>Google Pixel 7</h1>
                <p>Google AI bilan kuchaytirilgan ajoyib kamera va silliq ishlash tajribasi!</p>
                <button>Batafsil</button>
              </div>
            </div>
          </header>
        </div>
        <div>
          <header>
            <div className="container">
              <div className="header_main">
                <h1>OnePlus 11</h1>
                <p>Yangi avlod tezkor OnePlus 11 - kuchli performans va dizayn uyg‘unligi!</p>
                <button>Batafsil</button>
              </div>
            </div>
          </header>
        </div>
      </Slider>
    </div>
  );
}

export default Header;
