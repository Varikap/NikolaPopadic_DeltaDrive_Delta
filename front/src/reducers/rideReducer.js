import {
  FIND_RIDE,
  UPDATE_COMPLETED_RIDES,
  UPDATE_CURRENT_RIDE,
  UPDATE_RATES,
} from "../actions/types";

const initialState = {
  rides: [],
  currentRide: null,
  rates: [],
  completedRides: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIND_RIDE:
      return {
        ...state,
        rides: action.payload,
      };
    case UPDATE_CURRENT_RIDE:
      return {
        ...state,
        currentRide: action.payload,
      };
    case UPDATE_RATES:
      return {
        ...state,
        rates: action.payload,
      };
    case UPDATE_COMPLETED_RIDES:
      return {
        ...state,
        completedRides: action.payload,
      };
    default:
      return state;
  }
};
