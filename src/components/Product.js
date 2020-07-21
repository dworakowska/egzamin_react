import React from "react";
import { connect } from "react-redux";
import { addAction, removeAction } from "./../actions/actions";
import Button from "react-bootstrap/Button";

const mapDispatchToProps = {
  addAction,
  removeAction,
};

const Product = (props) => {
  const { addAction } = props;
  return (
    <div className="product">
      <img src={props.element.image} alt={props.element.name} />
      <p className="price">{props.element.amount}</p>
      <h3>{props.element.name} </h3>
      <div className="mb-2">
        <Button
          variant="primary"
          onClick={() => {
            addAction(props.element);
          }}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Product);
