import API from "../utils/API";
import history from "../history";
import { FIND_RIDE, UPDATE_CURRENT_RIDE } from "./types";

export const findRide = (data) => async (dispatch) => {
  try {
    const response = await API.findRide(getAuthTokenHeader(), data);
    dispatch({
      type: FIND_RIDE,
      payload: response.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const orderRide = (data) => async (dispatch) => {
  try {
    const response = await API.orderRide(getAuthTokenHeader(), data);
    dispatch({
      type: UPDATE_CURRENT_RIDE,
      payload: response.data,
    });
    history.push({
      pathname: "/book-ride",
      state: {
        ride: response.data,
        user: {
          latitude: response.data.startLocationLatitude,
          longitude: response.data.startLocationLongitude,
        },
        destLatitude: response.data.endLocationLatitude,
        destLongitude: response.data.endLocationLongitude,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const completeRide = (id) => async (dispatch) => {
  try {
    const response = await API.completeRide(getAuthTokenHeader(), id);
    dispatch({
      type: UPDATE_CURRENT_RIDE,
      payload: response.data,
    });
    history.push("/raiting");
  } catch (err) {
    console.log(err);
  }
};

export const rateRide = (data) => async (dispatch) => {
  try {
    const response = await API.rateRide(getAuthTokenHeader(), data);
    history.push("/find-ride");
  } catch (err) {
    console.log(err);
  }
};

export const getAuthTokenHeader = (getState) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers;
};
