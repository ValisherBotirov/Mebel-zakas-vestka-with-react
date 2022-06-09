import React from "react";
import "./_about.scss";
import carusel1 from "../../Assets/Carusel1.png";
import carusel2 from "../../Assets/Carusel2.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="container ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="about--title">- О нас</h2>
              <p className="about--boldtext">
                Furniture — молодой амбициозный бренд в европейском стиле,
                выпускающий мебель под собственной торговой маркой.
              </p>
              <p className="about--text">
                Наша команда много времени уделяет дизайну и качеству продукции,
                созданию стильного пространства в интерьере дома или офиса.
                Каждое изделие изготавливается на месте в Москве, с большим
                вниманием к деталям и особым вниманием к отдельным процессам.
                Долговечность и мастерство являются приоритетными благодаря
                выбору только материалов самого высокого качества.
              </p>
              <a href="#" className="about--link">
                Узнайте больше
              </a>
            </div>
            <div className="col-md-6">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={carusel1}
                      className="d-block w-100"
                      alt="Carusel img"
                    />
                  </div>
                  <div className="carousel-item">
                    <img src={carusel2} class="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={carusel1} class="d-block w-100" alt="..." />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
