import { FIND_RIDE, UPDATE_CURRENT_RIDE } from "../actions/types";

const initialState = {
  rides: [],
  currentRide: null,
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
    default:
      return state;
  }
};
