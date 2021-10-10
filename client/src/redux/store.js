import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/ProductReducer";
import {CartReducer} from './reducers/CartReducer'


const reducer = combineReducers({
    getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
    Cart:CartReducer
});
const middleware = [thunk];

const store = createStore(
  reducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
//   other store enhancers if any
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;
