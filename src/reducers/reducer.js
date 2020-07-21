import { ACTION_TYPES } from "../actions/actions";

const initialState = {
  pending: false,
  products: [],
  cartProducts: [],
  filteredProducts: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  let products = state.products;

  let cartProducts = state.cartProducts;

  switch (action.type) {
    case ACTION_TYPES.ADD:
      cartProducts = cartProducts.concat([action.product]);
      console.log(products.length);
      return {
        ...state,
        cartProducts,
      };

    case ACTION_TYPES.REMOVE:
      let index = cartProducts.findIndex(
        (element) => element.id === action.product.id
      );
      if (index > -1) {
        cartProducts.splice(index, 1);
      }
      console.log(cartProducts.length);
      return { ...state, cartProducts: [...cartProducts] };

    case ACTION_TYPES.FETCH_PRODUCTS_PENDING:
      return {
        ...state,
        pending: true,
      };

    case ACTION_TYPES.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.products,
      };

    case ACTION_TYPES.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error,
      };

    case ACTION_TYPES.TEXT_INPUT_CHANGED:
      const filtered = state.products.filter((element) => {
        return element.name.toLowerCase().includes(action.text.toLowerCase());
      });
      return {
        ...state,
        filteredProducts: filtered,
      };

    case ACTION_TYPES.FILTER_SELECTION_CHANGED:
      const filteredProducts = state.products.filter((element) => {
        return element.manufacture.includes(action.manufacture);
      });
      return {
        ...state,
        filteredProducts,
      };

    case ACTION_TYPES.CLEAR_ACTION:
      return {
        ...state,
        filteredProducts: state.products,
      };
    default:
      return state;
  }
};

export const getProducts = (state) => state.products;
export const getProductsPending = (state) => state.pending;
export const getProductsError = (state) => state.error;
export const getFilteredProducts = (state) => {
  return state.filteredProducts.length === 0
    ? state.products
    : state.filteredProducts;
};

export default rootReducer;
