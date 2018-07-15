import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducers";
import portfolioReducer from "./portfolioReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  portfolio: portfolioReducer
});
