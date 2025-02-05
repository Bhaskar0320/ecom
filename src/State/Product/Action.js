import { api, API_BASE_URL } from "../../config/apiconfig";
import {
  FIND_PRODUCT_BY_ID_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_FAILURE,
  FIND_PRODUCT_REQUEST,
  FIND_PRODUCT_SUCCESS,
} from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_REQUEST });
  const {
    colors,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData;

  //http://localhost:5454/api/products?color=&size=S&minPrice=1999&maxPrice=2999&minDiscount=0&category=&stock=in_stock&sort=price_low&pageNumber=0&pageSize=10
  try {
    dispatch({ type: FIND_PRODUCT_SUCCESS });
    const { data } =
    //   await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}
    //                    &minDiscount=${minDiscount}&category=${category}
    //                            &stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    // console.log("product data", data)

    await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=0&maxPrice=10000
  &minDiscount=10&category=${category}&stock=${stock}&sort=${sort}&pageNumber=0&pageSize=12`);
    console.log("product data", data);

    dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
  }
};

export const findProductsById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log(productId)
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);

    console.log(data)
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FIND_PRODUCT_BY_ID_FAILURE, payload: error.message });
  }
};
