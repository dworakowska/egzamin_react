export const ACTION_TYPES = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  FETCH_PRODUCTS_PENDING: "FETCH_PRODUCTS_PENDING",
  FETCH_PRODUCTS_SUCCESS: "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR: "FETCH_PRODUCTS_ERROR",
  FILTER_SELECTION_CHANGED: "FILTER_SELECTION_CHANGED",
  TEXT_INPUT_CHANGED: "TEXT_INPUT_CHANGED",
  CLEAR_ACTION: "CLEAR_ACTION",
};

export const addAction = (product) => ({
  type: ACTION_TYPES.ADD,
  product,
});

export const removeAction = (product) => ({
  type: ACTION_TYPES.REMOVE,
  product,
});

export const fetchProductsPending = (products) => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_PENDING,
  products,
});

export const fetchProductsSuccess = (products) => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_SUCCESS,
  products,
});

export const fetchProductsError = (products) => ({
  type: ACTION_TYPES.FETCH_PRODUCTS_ERROR,
  products,
});

export const filterSelection = (manufacture) => ({
  type: ACTION_TYPES.FILTER_SELECTION_CHANGED,
  manufacture,
});

export const textInputChanged = (text) => ({
  type: ACTION_TYPES.TEXT_INPUT_CHANGED,
  text,
});

export const onClearAction = () => ({
  type: ACTION_TYPES.CLEAR_ACTION,
});
