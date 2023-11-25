import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import rideReducer from "./rideReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  form: formReducer,
  ride: rideReducer,
});
