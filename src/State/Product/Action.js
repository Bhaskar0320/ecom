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

  // const queryParams = new URLSearchParams();

  // if (colors) queryParams.append("color", colors);
  // if (sizes) queryParams.append("size", sizes);
  // if (minPrice !== null && minPrice !== undefined) queryParams.append("minPrice", minPrice);
  // if (maxPrice !== null && maxPrice !== undefined) queryParams.append("maxPrice", maxPrice);
  // if (minDiscount == null && minDiscount == undefined) queryParams.append("minDiscount", 10);
  // if (category) queryParams.append("category", category);
  // if (stock) queryParams.append("stock", stock);
  // if (sort) queryParams.append("sort", sort);
  // if (pageNumber !== null && pageNumber !== undefined) queryParams.append("pageNumber", pageNumber);
  // if (pageSize !== null && pageSize !== undefined) queryParams.append("pageSize", pageSize);  


  //adding new line just for testing 
  //again adding

  try {
    dispatch({ type: FIND_PRODUCT_SUCCESS });

   const {data} = await api.get(`/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=10000&minDiscount=10&category=&stock=in_stock${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`);
    console.log("product data", data)


    // const { data } = await api.get(`/api/products?${queryParams.toString()}`);
    
    if (data && data.content && data.content.length > 0) {
      console.log("Product data:", data);
      dispatch({ type: FIND_PRODUCT_SUCCESS, payload: data });
    } else {
      <div>Currently No Product Found</div>
      console.log("No products found.");
      dispatch({ type: FIND_PRODUCT_SUCCESS, payload: { content: [] } }); // Empty payload
    }
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({ type: FIND_PRODUCT_FAILURE, payload: error.message });
};

}

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


