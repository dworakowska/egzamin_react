import React from "react";
import { connect } from "react-redux";
import { removeAction } from "../../actions/actions";

const mapStateToProps = (state) => ({
  cartProducts: state.cartProducts,
});

const mapDispatchToProps = {
  removeAction,
};

const onlyUnique = (value, index, self) => {
  return self.findIndex((element) => element.id === value.id) === index;
};

const totalPrice = (cartProducts, extra = 0) => {
  let total = cartProducts
    .map((element) => Number(element.amount))
    .reduce((a, b) => a + b, 0);

  // Obiekt Intl.NumberFormat jest konstruktorem dla obiektów, które umożliwiają formatowanie liczb
  // uwzględniające język.

  return new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
  }).format(total + extra);
};

function CartDetails(props) {
  const { cartProducts, removeAction } = props;

  return (
    <div className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Product</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Remove</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.filter(onlyUnique).map((value) => {
                    return (
                      <tr key={value.id}>
                        <th scope="row">
                          <div className="p-2">
                            <img
                              src={value.image}
                              alt=""
                              width="70"
                              className="img-fluid rounded shadow-sm"
                            />
                            <div className="ml-3 d-inline-block align-middle">
                              <h5 className="mb-0">{value.name}</h5>
                              <span className="text-muted font-weight-normal font-italic">
                                Category: {value.category}
                              </span>
                            </div>
                          </div>
                        </th>
                        <td className="align-middle">
                          <strong>{value.amount}</strong>
                        </td>
                        <td className="align-middle">
                          <strong>
                            {
                              cartProducts.filter(
                                (element) => element.id === value.id
                              ).length
                            }
                          </strong>
                        </td>
                        <td className="align-middle">
                          <i className="fa fa-trash">
                            <button
                              onClick={() => {
                                removeAction(value);
                              }}
                            >
                              Remove
                            </button>
                          </i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row py-5 p-4 bg-white rounded shadow-sm">
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Coupon code
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have a coupon code, please enter it in the box below
              </p>
              <div className="input-group mb-4 border rounded-pill p-2">
                <input
                  type="text"
                  placeholder="Apply coupon"
                  aria-describedby="button-addon3"
                  className="form-control border-0"
                />
                <div className="input-group-append border-0">
                  <button
                    id="button-addon3"
                    type="button"
                    className="btn btn-dark px-4 rounded-pill"
                  >
                    <i className="fa fa-gift mr-2"></i>Apply coupon
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Instructions for seller
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                If you have some information for the seller you can leave them
                in the box below
              </p>
              <textarea
                name=""
                cols="30"
                rows="2"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="bg-light rounded-pill px-4 py-3 text-uppercase font-weight-bold">
              Order summary
            </div>
            <div className="p-4">
              <p className="font-italic mb-4">
                Shipping and additional costs are calculated based on values you
                have entered.
              </p>
              <ul className="list-unstyled mb-4">
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Order Subtotal </strong>
                  <strong>{totalPrice(cartProducts)}</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Shipping and handling</strong>
                  <strong>10.00 zł</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Tax</strong>
                  <strong>0.00 zł</strong>
                </li>
                <li className="d-flex justify-content-between py-3 border-bottom">
                  <strong className="text-muted">Total</strong>
                  <h5 className="font-weight-bold">
                    {totalPrice(cartProducts, 10)}
                  </h5>
                </li>
              </ul>
              Procceed to checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
