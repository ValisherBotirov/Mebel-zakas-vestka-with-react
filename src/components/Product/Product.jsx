import React from "react";
import "./_product.scss";
import img1 from "../../Assets/product1.png";
import img2 from "../../Assets/product2.png";
import img3 from "../../Assets/product3.png";
import img4 from "../../Assets/product4.png";
import img5 from "../../Assets/product5.png";
import img6 from "../../Assets/product6.png";
import ProductComponent from "./ProductComponent";

function Product() {
  return (
    <>
      <div className="product container ">
        <h2 className="product--title">- Продукты</h2>
        <div className="row product--gallery gap-20">
          <div className="col-md-4">
            <ProductComponent img={img1} />
          </div>
          <div className="col-md-4">
            <ProductComponent img={img2} />
          </div>
          <div className="col-md-4">
            <ProductComponent img={img3} />
          </div>
        </div>
        <div className="row product--gallery gap-20">
          <div className="col-md-4">
            <ProductComponent img={img4} />
          </div>
          <div className="col-md-4">
            <ProductComponent img={img5} />
          </div>
          <div className="col-md-4">
            <ProductComponent img={img6} />
          </div>
        </div>
        <button className="product--galleryBtn ">Более</button>
      </div>
    </>
  );
}

export default Product;
