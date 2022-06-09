import React from "react";
import "./_banner.scss";
import bannerImg from "../../Assets/bannerimg.png";
function Banner() {
  return (
    <>
      <div className="banner container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="banner--title">Будущее мебели</h2>
            <p className="banner--text">
              Найдите элегантный и роскошный интерьер, разработанный
              профессиональным дизайнером интерьеров.
            </p>
            <button className="banner--btn"> В каталог</button>
          </div>
          <div className="col-md-6">
            <img src={bannerImg} alt="BannerImages" className="img-fluid" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
