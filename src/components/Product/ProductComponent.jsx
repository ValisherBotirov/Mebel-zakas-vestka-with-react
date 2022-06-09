import React from "react";
import "./_product.scss";

function ProductComponent(props) {
  return (
    <>
      <div className="productComponent  border p-10">
        <div className="productComponent--items">
          <img
            src={props.img}
            alt="Product images"
            className="product--images img-fluid"
          />
          <div className="productComponent--textGroup text-center">
            <p className="productComponent--text ">Название мебели</p>
            <p className="productComponent--cost">120.000 cум</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductComponent;
