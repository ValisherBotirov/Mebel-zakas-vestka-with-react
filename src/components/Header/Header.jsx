import React from "react";
import "./_header.scss";
import iconPhone from "../../Assets/telegram.svg";
import iconTelegram from "../../Assets/phone.svg";

function Header() {
  return (
    <>
      <div className="header container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <ul className="header--items d-flex">
              <li className="header--logo ">Logo</li>
              <li className="header--item">Домой</li>
              <li className="header--item">Продукты</li>
              <li className="header--item">О нас</li>
              <li className="header--item">Связь</li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="header--items d-flex">
              <div className="header--item__btn btnAriza">Ariza qoldirish</div>
              <div className="header--item__btn icon--telegram">
                <img src={iconTelegram} alt="Telegram icon" />
              </div>
              <div className="header--item__btn icon--phone">
                <img src={iconPhone} alt="Phone" />
              </div>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Header;
