import React from "react";
import "./_footer.scss";
import location from "../../Assets/Vectorlocation.png";
import phone from "../../Assets/Vectorphone.png";
import email from "../../Assets/Vectoremail.png";
import instagram from "../../Assets/Vectorinstagram.png";
import facebook from "../../Assets/Vectorfacebook.png";
import telegram from "../../Assets/Vectortelegram.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2 className="footer--title">LOGO</h2>
              <div className="footer--flexLink ">
                <img src={location} alt="icon" className="img-fluid" />
                <p className="footer--link">Ташкент, Чиланзар 99</p>
              </div>
              <div className="footer--flexLink">
                <img src={phone} alt="icon" className="img-fluid" />
                <p className="footer--link">+998 99 123-45-67</p>
              </div>
              <div className="footer--flexLink">
                <img src={email} alt="icon" className="img-fluid" />
                <p className="footer--link">mebelchi@gmail.com</p>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <form action="" className="footer--form">
                <input
                  type="text"
                  placeholder="Имя"
                  className="footer--form__input"
                />
                <input
                  type="number"
                  placeholder="Телефон номер"
                  className="footer--form__input"
                />
                <button className="footer--form__button">
                  Оставить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="footer--line" />
        <div className="footer--footer__bottom container">
          <div className="row">
            <div className="col-md-6 ">
              <img
                src={instagram}
                alt="icon"
                className="footer--footer__bottom--icon"
              />
              <img
                src={facebook}
                alt="icon"
                className="footer--footer__bottom--icon"
              />
              <img
                src={telegram}
                alt="icon"
                className="footer--footer__bottom--icon"
              />
            </div>
            <div className="col-md-6">
              <p className="footer--footer__bottom--text">
                Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
