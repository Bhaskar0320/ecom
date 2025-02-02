import { api, API_BASE_URL } from "../../config/apiconfig";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType";

import axios from "axios";

export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  console.log("create payment reqData ", orderId);

  try {
    const { data } = await api.post(`/api/payments/${orderId}`, {});
    console.log("data", data);
    if (data.payment_link_url) {
      window.location.href = data.payment_link_url;
    }
    dispatch({
      type: CREATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};

export const updatePayment = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  console.log("update payment reqData:", reqData);

  // Check if paymentId is defined
  if (!reqData.paymentId) {
    console.error("Payment ID is undefined");
    dispatch({
      type: UPDATE_PAYMENT_FAILURE,
      payload: "Payment ID is missing",
    });
    return; // Stop further execution
  }

  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
    );
    console.log("updated payment", data);

    dispatch({
      type: UPDATE_PAYMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.error("Error updating payment:", error.response || error.message);

    dispatch({
      type: UPDATE_PAYMENT_FAILURE,
      payload: error.message,
    });
  }
};

// export const updatePayment = (reqData) => async (dispatch) => {
//   dispatch({ type: UPDATE_PAYMENT_REQUEST });
//   console.log("update payment reqData ", reqData);

//   try {
//     const { data } = await api.get(`/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`);
//     console.log("updated payment", data);
//     // Dispatch success action if needed
//   } catch (error) {
//     dispatch({
//       type: UPDATE_PAYMENT_FAILURE,
//       payload: error.message
//     });
//   }
// };

// export const updatePayment = (reqData) => async (dispatch) => {
//   dispatch(updatePaymentRequest());
//   console.log("update payment reqData ", reqData);
//   console.log("Payment ID:", reqData.paymentId);
//   console.log("Order ID:", reqData.orderId);

//   try {
//     // Log the paymentId and orderId

//     // const { data } = await api.get(
//     //   `/api/payments?payment_id=${reqData.paymentId}&order_id=${reqData.orderId}`
//     // );

//     const {data} = await api.get(`/api/payments?payment_id=pay_PqmNYNr3M3PIWg&order_id=${reqData.orderId}`)

//     console.log("updated payment", data);

//     dispatch({
//       type: UPDATE_PAYMENT_SUCCESS,
//       payload: data,
//     });
//   } catch (error) {
//     dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
//   }
// };

// export const updatePaymentRequest = () => {
//   return {
//     type: UPDATE_PAYMENT_REQUEST,
//   };
// };

// export const updatePaymentSuccess = (payment) => {
//   return {
//     type: UPDATE_PAYMENT_SUCCESS,
//     payload: payment,
//   };
// };

// export const updatePaymentFailure = (error) => {
//   return {
//     type: UPDATE_PAYMENT_FAILURE,
//     payload: error,
//   };
// };
