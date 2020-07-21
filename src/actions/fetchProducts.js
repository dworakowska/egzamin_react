import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "./actions";

function fetchProducts() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    fetch("https://d24huwa7xw9s1p.cloudfront.net")
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchProductsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchProductsError(error));
      });
  };
}

export default fetchProducts;
