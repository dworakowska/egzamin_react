import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { addAction, removeAction } from "../../actions/actions";

const mapStateToProps = (state) => ({
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = {
  addAction,
  removeAction,
};

function Cart(props) {
  const { cartProducts } = props;

  const history = useHistory();

  const routeChange = () => {
    let path = `CartDetails`;
    history.push(path);
  };

  return (
    <div className="cartButton">
      <b>{cartProducts.length}</b>

      <button onClick={routeChange} className="btn">
        <img
          src="https://fotoomnia.com/zdjecia/thumb/9ede52b4a661ac39d6014c746bf9ef98.jpg"
          alt="Cart"
          width="40"
          height="40"
        />
      </button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
