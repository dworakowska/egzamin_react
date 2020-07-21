import React, { Component } from "react";
import { connect } from "react-redux";
import Product from "../Product";
import Filter from "../Filter";
import { bindActionCreators } from "redux";
import {
  filterSelection,
  textInputChanged,
  onClearAction,
} from "../../actions/actions";
import fetchProductsAction from "../../actions/fetchProducts";

import {
  getProducts,
  getProductsError,
  getProductsPending,
  getFilteredProducts,
} from "../../reducers/reducer";

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  filteredProducts: getFilteredProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
      filterSelectionChanged: filterSelection,
      textInputChanged: textInputChanged,
      onClear: onClearAction,
    },
    dispatch
  );

class CatalogPage extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentWillMount() {
    const { fetchProducts } = this.props;
    fetchProducts();
  }

  shouldComponentRender() {
    const { pending } = this.props;
    if (pending === false) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const {
      products,
      filteredProducts,
      pending,
      filterSelectionChanged,
      textInputChanged,
      onClear,
    } = this.props;

    if (pending) return <b>Loading</b>;

    return (
      <div className="container">
        <h1 className="header-big">Catalog</h1>

        <div className="catalog">
          <div className="column-left">
            {
              <Filter
                onChange={textInputChanged}
                onClear={onClear}
                products={products}
                onSelectionChange={filterSelectionChanged}
              />
            }
          </div>

          <div className="column-right">
            <div className="products">
              {filteredProducts.map((element) => {
                return <Product element={element} key={element.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatalogPage);
