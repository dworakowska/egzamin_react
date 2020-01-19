import React from "react";

const Product = props => {
  return (
    <div className="product">
      <img src={props.element.image} alt={props.element.name} />
      <p className="price">{props.element.amount}</p>
      <h3>{props.element.name} </h3>
    </div>
  );
};

export default Product;
