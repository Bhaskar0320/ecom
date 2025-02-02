import {applyMiddleware, combineReducers, legacy_createStore} from "redux"
import {thunk} from "redux-thunk";
import authReducer from "./Auth/Reducer"
// import customerProductReducer from "./Product/Reducer";
// import {cartReducer} from "./Cart/Reducer";
// import { orderReducer } from "./Order/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import {cartReducer} from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
// import customerProductReducer from "./Customers/Product/Reducer";
// import productReducer from "./Admin/Product/Reducer";
// import cartReducer from "./Customers/Cart/Reducer";
// import { orderReducer } from "./Customers/Order/Reducer";
// import adminOrderReducer from "./Admin/Orders/Reducer";
// import ReviewReducer from "./Customers/Review/Reducer";

const rootreducers = combineReducers({
    auth:authReducer,
    product:customerProductReducer,
   cart:cartReducer,
   order:orderReducer
})

export const store = legacy_createStore(rootreducers, applyMiddleware(thunk))