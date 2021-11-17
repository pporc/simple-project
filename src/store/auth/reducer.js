import { initialState } from "./store";
import { SET_ACCOUNT } from "./types";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        account: action.payload,
      };
    }
    default:
      return state;
  }
};
